<?php
//Step1

$servername = "localhost";
$username = "admin";
$password = "admin";
$dbname = "money_book_db";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
}

//$query = "SELECT * FROM user_info";

//$username = $_POST['username'];
//$password = $_POST['password'];

$usernames ="John";

$queryresult =  $conn->query("SELECT username FROM user_info WHERE username='John'");
$result =array();
	while ($row = $queryresult->fetch_assoc())
  {
		$result[] = $row;
  }
  
  echo json_encode($result);
exit();
/*
if ($stmt = $conn->prepare("SELECT username FROM user_info WHERE username=?")) 
{


    $stmt->bind_param("s", $usernames);

    
    $stmt->execute();

    
    $stmt->bind_result($results);

    $stmt->fetch();


   	echo 'sdfdsf';
   	

    $stmt->close();
}*/




$conn->close();



?>