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

        $emailAddress = $request->input('email');
        $name = $request->input('name');
        $phoneNumber = $request->input('phone');
        $msg = $request->input('message');
        $email = (new MailtrapEmail())
            ->from(new Address('info@demomailtrap.com', 'luxury yatchs'))
            ->to(new Address("vatitiprieto11@gmail.com"))
            ->subject('Peticion de informacion')
            ->text("Un usuario ha pedido información!!\n\nName: $name\nPhone: $phoneNumber\nEmail: $emailAddress\nMessage: $msg")
            ->category('Integration Test');

        $response = $mailtrap->send($email);

        return response()->json(ResponseHelper::toArray($response));
    }
}
