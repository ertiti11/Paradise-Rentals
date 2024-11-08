<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mailtrap\Helper\ResponseHelper;
use Mailtrap\MailtrapClient;
use Mailtrap\Mime\MailtrapEmail;
use Symfony\Component\Mime\Address;

// require '../../../vendor/autoload.php';

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $apiKey = env('MAIL_API_KEY');
        $mailtrap = MailtrapClient::initSendingEmails(
            apiKey: $apiKey,
        );

        $email = (new MailtrapEmail())
            ->from(new Address('yatch@demomailtrap.com', 'Mailtrap Test'))
            ->to(new Address("vatitiprieto11@gmail.com"))
            ->subject('You are awesome!')
            ->text('Congrats for sending test email with Mailtrap!')
            ->category('Integration Test');

        $response = $mailtrap->send($email);

        return response()->json(ResponseHelper::toArray($response));
    }
}
