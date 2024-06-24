<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $name = $_POST['name'];
    $country = $_POST['country'];
    $phone = $_POST['phone'];

    $postData = array(
        'entry.506148844' => $email,
        'entry.201745671' => $password,
        'entry.1916018055' => $name,
        'entry.523381256' => $country,
        'entry.659179735' => $phone,
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://docs.google.com/forms/d/e/1FAIpQLSd_S6ieEDyylottc3t0JQiuZ4Ehz5q1QFS4OPHtr74NXeCECw/formResponse");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) {
        echo 'Success';
    } else {
        echo 'Failed';
    }
}
?>
