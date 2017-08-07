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
//checker use to check what to do 
$checker = $_REQUEST['checker'];
if ($checker == "2")
{
  $CM_h = $_GET['cm'];
  $username_h = $_GET['username'];
  //SELECT * FROM `spend_data` WHERE MONTH(`date_of_spend`) = 8 And `type`='Expense'
   $getChart  = "SELECT * FROM spend_data WHERE MONTH((date_of_spend))=('".$CM_h."')"."AND (type)='Expense'";

   $result=mysqli_query($conn,$getChart);
    $array = array(); 
   
   if (mysqli_num_rows($result) > 0) 
   {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) 
      {
        
        $array [] = $row;

      }
       echo json_encode($array);
  } 
  else 
  {
     
  }


}
//Insert user Transaction intot table---------------------------------------------------
if ($checker == "1")
{
  $username_h = $_POST['username'];
  $type_h =$_POST['type'];
  $amount_h= $_POST['amount'];
  $category_h= $_POST['category'];
  $date_h= $_POST['date_of_spend'];

  $usernames ="John";
  $transaction = "INSERT INTO spend_data(username,type,category,amount,date_of_spend)VALUES('".$usernames."','".$type_h."','".$category_h."','".$amount_h."','".$date_h."')"; 
   $result=mysqli_query($conn,$transaction);
   echo ($result);
   
}
//Return Table content for display purpose--------------------------------------------------
if ($checker == "0")
{
    $username_h = $_GET['username'];
    $getTable  = "SELECT * FROM spend_data WHERE (username)=('".$username_h."')";
    $result=mysqli_query($conn,$getTable);
    $array = array(); 
   
   if (mysqli_num_rows($result) > 0) 
   {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) 
      {
        
        $array [] = $row;
        
         
      }
       echo json_encode($array);
  } 
  else 
  {
     
  }
 
}
  


$conn->close();



?>