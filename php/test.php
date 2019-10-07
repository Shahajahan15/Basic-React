<?php 

	//  the script used to Cross-Origin Resource Sharing
	header('Access-Control-Allow-Origin: *');
	header('Content-type: application/json');
	$data = file_get_contents("php://input");
	echo $data . " from server";

?>

<!-- this file upload the main server/xampp server to receive jason response -->