<!DOCTYPE html>
<html lang="en">
<html>
<head>
	<title>Login Page</title>
	<!-- Bootstrap -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="bootstrap/css/custom.css" rel="stylesheet" media="screen">
</head>
<body>

<div class="container">
    <div class="content">
      <div class="row">
        <div class="login-form">
          <h2>Login</h2>
          <form action="process.php" method="POST">
            <fieldset>
              <div class="clearfix">
                <input type="text" placeholder="Username" name="username" required>
              </div>
              <div class="clearfix">
                <input type="password" name="password" placeholder="Password" required>
              </div>
              <button class="btn primary" type="submit" name="submit">Sign in</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div> <!-- /container -->


<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>