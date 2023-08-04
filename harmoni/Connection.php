<?php
$servername = "localhost";
$username = "forfapeda";
$database = "forfapeda.web.id";

//create connection
$conn = new mysqli($servername, $username, $password, $database);

//check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>