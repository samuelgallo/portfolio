<?php

// Mysql connection data
$servername = "localhost";
$username   = "";
$password   = "";
$dbname     = "";

// create mysql connection
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

// check if have url params
if(isset($_GET['hash']))
{
  // get data by url hash
  $query="SELECT * FROM portfolio WHERE hash='".$_GET['hash']."'";
}else{
  // get all data
  $query="SELECT * FROM portfolio";
}
 
// query data
$result=$conn->query($query)
	or die ($conn->error);

// data array
$data = array();

while($row=$result->fetch_assoc()){ 
  // push data to array
  $data[] = $row; 
} 
// show data json
echo json_encode($data);
