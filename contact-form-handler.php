<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_from = 'biuro@euceko.eu';

$email_subject = "New form submission";

$email_body = "User name: $name./n".
                "User email: $visitor_email./n".
                "User message: $message./n";




    $to = "info@euceko.eu";

    $headers = "From: $email_from /r/n";

    $headers .= "Reply-To: $visitor_email /r/n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html"); 






?>