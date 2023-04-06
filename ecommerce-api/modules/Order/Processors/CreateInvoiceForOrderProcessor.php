<?php

namespace Modules\Order\Processors;

use Carbon\Carbon;
use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;

use FattureInCloud\Model\Currency;
use FattureInCloud\Model\DocumentTemplate;
use FattureInCloud\Model\Entity;
use FattureInCloud\Model\IssuedDocument;
use FattureInCloud\Model\IssuedDocumentItemsListItem;
use FattureInCloud\Model\IssuedDocumentPaymentsListItem;
use FattureInCloud\Model\IssuedDocumentStatus;
use FattureInCloud\Model\IssuedDocumentType;
use FattureInCloud\Model\CreateIssuedDocumentRequest;
use FattureInCloud\Model\IssuedDocumentEiData;
use FattureInCloud\Model\Language;
use FattureInCloud\Model\PaymentAccount;
use FattureInCloud\Model\VatType;
use Illuminate\Support\Facades\Log;

class CreateInvoiceForOrderProcessor {

    const COMPANY_ID = 1092128;
    const PAYMENT_ACCOUNT_ID = 1064192;
    const VAT_TYPE_ID = 66;

    const EN_COUNTRY_TO_IT = [
        'italy' => 'Italia',
        'austria' => 'Austria',
        'belgium' => 'Belgio',
        'bulgaria' => 'Bulgaria',
        'denmark' => 'Danimarca',
        'france' => 'Francia',
        'germany' => 'Germania',
        'liechtenstein' => 'Liechtenstein',
        'luxembourg' => 'Lussemburgo',
        'the netherlands' => 'Olanda',
        'poland' => 'Polonia',
        'czech republic' => 'Repubblica Ceca',
        'slovenia' => 'Slovenia',
        'spain' => 'Spagna',
        'switzerland' => 'Svizzera',
        'hungary' => 'Ungheria'
    ];

    protected $config;

    public function __construct()
    {
        $this->config = \FattureInCloud\Configuration::getDefaultConfiguration()->setAccessToken(config('app.fatture_in_cloud_key'));
    }

    public function getVatListType() {
        $apiInstance = new \FattureInCloud\Api\InfoApi(
            // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
            // This is optional, `GuzzleHttp\Client` will be used as default.
            new \GuzzleHttp\Client(),
            $this->config
        );

        try {
            $result = $apiInstance->listTemplates('all', false);
            // $result = $apiInstance->listVatTypes(self::COMPANY_ID)->getData();
            var_dump($result);
        } catch (\Exception $e) {
            echo 'Exception when calling InfoApi->listVatTypes: ', $e->getMessage(), PHP_EOL;
        }
    }

    public function testGetCompany() {
        $userApi = new \FattureInCloud\Api\UserApi(
            new \GuzzleHttp\Client(),
            $this->config
        );

        try {
            // Retrieve the first company id
            $companies = $userApi->listUserCompanies();
            $firstCompanyId = $companies->getData()->getCompanies()[0]->getId();
            var_dump($firstCompanyId);
        
        } catch (\Exception $e) {
            echo 'Exception when calling the API: ', $e->getMessage(), PHP_EOL;
        }
    }


    public function getPaymentAccount() {
        $apiInstance = new \FattureInCloud\Api\InfoApi(
            new \GuzzleHttp\Client(),
            $this->config
        );
        
        try {
            $result = $apiInstance->listPaymentAccounts(self::COMPANY_ID);
            print_r($result);
        } catch (\Exception $e) {
            echo 'Exception when calling InfoApi->listPaymentAccounts: ', $e->getMessage(), PHP_EOL;
        }
        
    }

    public function create(Order $order) {
        $today = Carbon::now()->toDateString();

        $apiInstance = new \FattureInCloud\Api\IssuedDocumentsApi(
            new \GuzzleHttp\Client(),
            $this->config
        );

        $entity = $this->createUserData($order);
        $invoice = new IssuedDocument;
        $invoice->setType(IssuedDocumentType::INVOICE);
        $invoice->setEntity($entity);

        // Below you can find this section fields:
        $invoice->setDate(new \DateTime($today));
        $invoice->setNumber($order->order_number);
        $invoice->setNumeration("/fatt");
        $invoice->setSubject("internal subject");
        $invoice->setVisibleSubject("visible subject");
        
        // Retrieve the currencies: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/InfoApi.md#listcurrencies
        $invoice->setCurrency(
            new Currency(
                array(
                "id" => "EUR" 
                )
            )
        );
        // Retrieve the languages: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/InfoApi.md#listLanguages
        $invoice->setLanguage(
            new Language(
                array(
                    "code" => "it",
                    "name" => "italiano"
                )
            )
        );

        // Here we set e_invoice and ei_data
        $invoice->setEInvoice(true);
        $invoice->setEiData(
            new IssuedDocumentEiData(
                [
                    "payment_method" => "MP08",
                    'vat_kind' => 'I',
                    'ei_code' => $order->address_country === 'italy' ? '0000000' : 'XXXXXXX',
                ]
            )
        );

        $itemList = [];
        $order->products->each(
            function(OrderProduct $orderProduct) use(&$itemList) {
                $itemList[] = new IssuedDocumentItemsListItem(
                    [
                        "product_id" => 4,
                        "code" => $orderProduct->product->sku,
                        "name" => $orderProduct->product->title,
                        "net_price" => $orderProduct->product->price,
                        "category" => "vestiario",
                        "discount" => 0,
                        "qty" => $orderProduct->quantity,
                        "vat" => new VatType(
                            array(
                                "id" => self::VAT_TYPE_ID
                            )
                        )
                    ]
                );
            }
        );

        if($order->shipping_cost != null && $order->shipping_cost > 0) {
            $itemList[] = new IssuedDocumentItemsListItem(
                [
                    "code" => 'SHIPPING_COST',
                    "name" => 'Shipping cost',
                    "net_price" => $order->shipping_cost,
                    "category" => "shipping",
                    "discount" => 0,
                    "qty" => 1,
                    "vat" => new VatType(
                        array(
                            "id" => self::VAT_TYPE_ID
                        )
                    )
                ]
            );
        }

        //adds the products
        $invoice->setItemsList($itemList);

        // Here we set the payments list assuming our invoice has already been paid
        $invoice->setPaymentsList(
            array(
                new IssuedDocumentPaymentsListItem(
                    array(
                        "amount" => $order->amount_total,
                        "due_date" => new \DateTime($today),
                        "paid_date" => new \DateTime($today),
                        "status" => IssuedDocumentStatus::PAID,
                        // List your payment accounts: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/InfoApi.md#listpaymentaccounts
                        "payment_account" => new PaymentAccount(
                            array(
                                "id" => self::PAYMENT_ACCOUNT_ID,
                            )
                        )
                    )
                )
            )
        );

        $invoice->setTemplate(
            new DocumentTemplate(
                array(
                    "id" => 108
                )
            )
        );

        // Here we put our invoice in the request object
        $create_issued_document_request = new CreateIssuedDocumentRequest;
        $create_issued_document_request->setData($invoice);

        // Now we are all set for the final call
        // Create the invoice: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/IssuedDocumentsApi.md#createissueddocument
        try {
            $result = $apiInstance->createIssuedDocument(self::COMPANY_ID, $create_issued_document_request);
            return $result->getData()['id'];
        } catch (\Exception $e) {
            Log::error(json_encode($e->getMessage()));
            var_dump($e->getMessage());
        }


    }

    public function verifyInvoiceXML(string $document_id) {
        try {
            $apiEInvoiceInstance = new \FattureInCloud\Api\IssuedEInvoicesApi(
                // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
                // This is optional, `GuzzleHttp\Client` will be used as default.
                new \GuzzleHttp\Client(),
                $this->config
            );

            $result = $apiEInvoiceInstance->verifyEInvoiceXml(self::COMPANY_ID, $document_id);
            return $result->getData()['success'];
        } catch (\Exception $e) {
            echo 'Exception when calling IssuedEInvoicesApi->verifyEInvoiceXml: ', $e->getMessage(), PHP_EOL;
        }
    }

    public function sendEInvoice($document_id) {
        $apiInstance = new \FattureInCloud\Api\IssuedEInvoicesApi(
            // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
            // This is optional, `GuzzleHttp\Client` will be used as default.
            new \GuzzleHttp\Client(),
            $this->config
        );
        $send_e_invoice_request = new \FattureInCloud\Model\SendEInvoiceRequest; // \FattureInCloud\Model\SendEInvoiceRequest | 
        
        try {
            // $result = $apiInstance->sendEInvoice(self::COMPANY_ID, $document_id, $send_e_invoice_request);
            // print_r($result);
        } catch (\Exception $e) {
            echo 'Exception when calling IssuedEInvoicesApi->sendEInvoice: ', $e->getMessage(), PHP_EOL;
        }
    }

    private function createUserData(Order $order) {
        $entity = new Entity;
        $fullname = $order->customer_firstname . ' ' . $order->customer_lastname;

        return $entity
            ->setName($fullname)
            ->setAddressStreet($order->address_street)
            ->setAddressPostalCode($order->address_zipcode)
            ->setAddressCity($order->address_city)
            ->setCountry(self::EN_COUNTRY_TO_IT[$order->address_country]);
    }
}