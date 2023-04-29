<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use PhpParser\ErrorHandler\Throwing;
use Throwable;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function addNewContactToNewsletter(Request $request) {
       try {
            $newEmailAddress = $request->get('email');

            $credentials = \SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', config('app.sendinblue_api_key'));

            $apiInstance = new \SendinBlue\Client\Api\ContactsApi(
                new \GuzzleHttp\Client(),
                $credentials
            );

            // $result = $apiInstance->getLists(10, 0);

            // return $result;

            try{
                $result = $apiInstance->getContactInfo($newEmailAddress);
            } catch(Throwable $t) {
                $createContact = new \SendinBlue\Client\Model\CreateContact([
                    'email' => $newEmailAddress,
                    'listIds' => [5],
                ]);
    
                $result = $apiInstance->createContact($createContact);
            }

            return response()->json('successful');
        } catch (\Exception $e) {
            return response()->json([
                'debug' => [$e->getMessage(), $e->getFile(), $e->getLine()],
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }
}
