<!DOCTYPE html>
<html lang='en-US'>
	<head>
		<title>Date and Day</title>
	</head>
	<body>
		<h1 style='text-align: center;'>PHP SCRIPT</h1>
		<?php
			echo "This message is from server side";
			echo "Date: " . date('d-m-Y') . "<br>";
			echo "Day: " . date('l') . "<br>";
			echo "Time: " . date("h:i:sa");
		?>
	</body>
</html>
