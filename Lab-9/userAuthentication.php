<!DOCTYPE html>
	<html lang="en-US">
	<head>	
		<meta charset="utf-8" />
		<title>User Authentication</title>
	</head>
	<body>
		<h2>Login</h2>
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
			<label>Username:</label>
			<input type="text" id="uname" name="uname" required/> <br> 
			<label>Password: </label>
			<input type="password" id="pass" name="pass" required/> <br>
			<input type="submit" value="Login"/>		
		</form>
		
		<?php 
			if ($_SERVER['REQUEST_METHOD'] === 'POST') {
				$username = $_POST['uname'];
				$password = $_POST['pass'];
				
				$file = 'login.txt';
				$users = file($file, FILE_IGNORE_NEW_LINES);
				$loginSuccessful = false;
				
				foreach ($users as $user) {
					list($storedUsername, $storedPassword) = explode(',', $user);
					
					if ($username === $storedUsername && $password === $storedPassword)	 {
						$loginSuccessful = true;
						break;					
					}		
				}	
				
				if ($loginSuccessful) {
					echo "<h2>Login Successful</h2>";
					echo "<p>Welcome, $username !</p>";			
				} else {
					echo "<h2>Login Failed!</h2>";
					echo "<p>Invalid username or password</p>";
				}
			}		
		?>
	</body>
</html>
