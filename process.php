<?php
$conn = mysql_connect('localhost','root','') or die(mysql_error());
$database = mysql_select_db('mywriting',$conn) or die( mysql_error() );
$table = 'users';
if ( isset($_POST['submit']) ) {
	if( !$_POST['username'] | !$_POST['password'] ) {
		die('All Field Are Required To Fill');
	}
	
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$query = "SELECT * FROM $table WHERE username ='$username' and password = '$password'";
	$result = mysql_query($query);
	$count = mysql_num_rows($result);
	
	if( $count == 1 ) {
		session_start();
		$_SESSION['username'] = $username;
		header("LOCATION: welcome.php");
	} else {
		echo 'In Correct Creds';
	}
}



?>