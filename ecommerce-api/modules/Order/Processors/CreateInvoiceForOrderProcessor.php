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
use FattureInCloud\Model\Language;
use FattureInCloud\Model\PaymentAccount;
use FattureInCloud\Model\VatType;

class CreateInvoiceForOrderProcessor {

    const COMPANY_ID = 1;

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
            $result = $apiInstance->listVatTypes(self::COMPANY_ID);
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
        $invoice->setNumber(6);
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
        $invoice->setEInvoice(false);
        // $invoice->setEiData(
        //     new IssuedDocumentEiData(
        //         [
        //             "payment_method" => "MP05",
        //             'vat_kind' => 'I',
        //             'ei_code' => '0000000' //XXXXXXX -> per l'estero
        //         ]
        //     )
        // );

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
                                "id" => 37
                            )
                        )
                    ]
                );
            }
        );

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
                                "id" => 1049939
                            )
                        )
                    )
                )
            )
        );

        $invoice->setTemplate(
            new DocumentTemplate(
                array(
                    "id" => 150
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
            print_r($result);
        } catch (\Exception $e) {
            echo 'Exception when calling IssuedDocumentsApi->createIssuedDocument: ', $e->getMessage(), PHP_EOL;
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
            print_r($result);
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
            ->setCountry($order->address_country);
    }
}