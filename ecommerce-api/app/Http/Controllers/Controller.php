<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function addNewContactToNewsletter(Request $request) {
       try {
            $newEmailAddress = $request->get('newEmailAddress');

            $credentials = \SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', config('app.sendinblue_api_key'));

            $apiInstance = new \SendinBlue\Client\Api\ContactsApi(
                new \GuzzleHttp\Client(),
                $credentials
            );

            //todo: check if contact already exists

            $createContact = new \SendinBlue\Client\Model\CreateContact([
                'email' => $newEmailAddress,
            ]);

            $result = $apiInstance->createContact($createContact);

            return response()->json('successful');
        } catch (\Exception $e) {
            return response()->json([
                'message' => [
                    'title' => 'general.api.error.title',
                    'text' => 'general.api.error.text',
                ],
            ], 400);
        }
    }
}
