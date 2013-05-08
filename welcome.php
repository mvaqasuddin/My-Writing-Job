<?php
	session_start();
	if(!isset( $_SESSION['username']) ) {
		header("LOCATION: login.php");
	}
	
	$username = $_SESSION['username'];
	$conn = mysql_connect('localhost','root','') or die(mysql_error());
	$database = mysql_select_db('mywriting',$conn) or die( mysql_error() );
	$table = 'information';
	$sql = "SELECT * FROM $table";
	$result = mysql_query($sql);?>
	
		
<!DOCTYPE html>
<html lang="en">
<html>
<head>
	<title>Admin</title>
	<!-- Bootstrap -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
</head>
<body>
	<h1>Welcome To My Writing <?php echo $username; ?></h1>
	<table class="table table-striped">
		<th>First Name</th>
		<th>Last Name</th>
		<th>Email</th>
		<th>Address</th>
		<th>City</th>
		<th>State</th>
		<th>ZipCode</th>
		<th>Country</th>
		<th>Credit Card Number</th>
		<th>Expiry</th>
		<th>Expiry Month</th>
		<th>Security Code</th>
			<tr>
				<?php while( $row = mysql_fetch_array($result) ) :?>
					<td><?php echo $row['firstname']; ?></td>
					<td><?php echo $row['lastname']; ?></td>
					<td><?php echo $row['email']; ?></td>
					<td><?php echo $row['address']; ?></td>
					<td><?php echo $row['city']; ?></td>
					<td><?php echo $row['state']; ?></td>
					<td><?php echo $row['zipcode']; ?></td>
					<td><?php echo $row['country']; ?></td>
					<td><?php echo $row['cardnumber']; ?></td>
					<td><?php echo $row['expiry']; ?></td>
					<td><?php echo $row['expirymonth']; ?></td>
					<td><?php echo $row['securitycode']; ?></td>
			</tr>
				<?php endwhile; ?>
	</table>
<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>		


