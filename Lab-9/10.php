<!DOCTYPE html>
<html lang="US-en">
	<head>
		<meta charset="utf-8" />
		<title>Message Display</title>
	</head>
	
	<body>
		<form action = "<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
			<label>Message: </label> <br>
			<textarea rows="10" cols="50" name="message" required></textarea>	<br>
			<input type="submit" value="Submit"/>
			<input type="reset" value="Reset"/>		
		</form>
		
		<?php
			if($_SERVER['REQUEST_METHOD'] === 'POST') {
				$message = $_POST['message'];
				//$file = fopen("messageDisplay.txt", "w");
				//($file, $message);
				echo "<h2>Form Data: </h2>";
				echo "<p>Message: $message</p>";	
			}
		?>
	</body>
</html>
