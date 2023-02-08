<?php

namespace Modules\Order\Processors;

use Modules\Order\Entities\Order;

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
use FattureInCloud\Model\PaymentMethod;
use FattureInCloud\Model\VatType;
use FattureInCloud\OAuth2\OAuth2AuthorizationCodeManager;
use FattureInCloud\OAuth2\Scope;

class CreateInvoiceForOrderProcessor {
    public function create(Order $order) {
    //set your access token
    $config = \FattureInCloud\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

    $apiInstance = new \FattureInCloud\Api\IssuedDocumentsApi(
        new \GuzzleHttp\Client(),
        $config
    );

        $entity = $this->createUserData();
        $invoice = new IssuedDocument;
        $invoice->setType(IssuedDocumentType::INVOICE);
        $invoice->setEntity($entity);

        // Below you can find this section fields:
        $invoice->setDate(new \DateTime("2022-01-20"));
        $invoice->setNumber(1);
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
        // //$invoice->setEInvoice(false); //QUESTO LO FA SPEDIRE IN AUTOMATICO ALL AGENZIA DELLE ENTRATE ON USARE !!!
        // $invoice->setEiData(
        //     new IssuedDocumentEiData(
        //         array(
        //             "payment_method" => "MP05"
        //         )
        //     )
        // );

        //adds the products
        $invoice->setItemsList(
            array(
                new IssuedDocumentItemsListItem(
                    array(
                        "product_id" => 4,
                        "code" => "TV3",
                        "name" => "Tavolo in legno",
                        "net_price" => 100,
                        "category" => "cucina",
                        "discount" => 0,
                        "qty" => 1,
                        "vat" => new VatType(
                            array(
                                "id" => 0
                            )
                        )
                    )
                )
            )
        );

        // Here we set the payments list assuming our invoice has already been paid
        $invoice->setPaymentsList(
            array(
                new IssuedDocumentPaymentsListItem(
                    array(
                        "amount" => 122,
                        "due_date" => new \DateTime("2022-01-23"),
                        "paid_date" => new \DateTime("2022-01-22"),
                        "status" => IssuedDocumentStatus::PAID,
                        // List your payment accounts: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/InfoApi.md#listpaymentaccounts
                        "payment_account" => new PaymentAccount(
                            array(
                                "id" => 110
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
            $result = $apiInstance->createIssuedDocument($company_id, $create_issued_document_request);
            print_r($result);
        } catch (\Exception $e) {
            echo 'Exception when calling IssuedDocumentsApi->createIssuedDocument: ', $e->getMessage(), PHP_EOL;
        }
    }

    private function authenticate() {
        $oauth = new OAuth2AuthorizationCodeManager("CLIENT_ID", "CLIENT_SECRET", "http://localhost:8000/oauth.php");

        if(isset($_SESSION['token'])) die('You already have an access token');

        if(!isset($_GET['code'])) {
        $url = $oauth->getAuthorizationUrl([Scope::ENTITY_SUPPLIERS_READ], "EXAMPLE_STATE");
        header('location: '.$url);
        } else {
                $code = $_GET['code'];
                $obj = $oauth->fetchToken($code);
            if(!isset($obj['error'])) {
                $_SESSION['token'] = $obj->getAccessToken(); //saving the oAuth access token in a session variable
                $_SESSION['refresh'] = $obj->getRefreshToken();
            }

            echo 'Token saved correctly in the session variable';
        }
    }

    private function createUserData() {
        $entity = new Entity;
        $entity
            ->setId(1) // Only if the client already exists
            ->setName("Mario Rossi")
            ->setVatNumber("47803200154")
            ->setTaxCode("RSSMRA91M20B967Q")
            ->setAddressStreet("Via Italia, 66")
            ->setAddressPostalCode("20900")
            ->setAddressCity("Milano")
            ->setAddressProvince("MI")
            ->setCountry("Italia");
    }
}