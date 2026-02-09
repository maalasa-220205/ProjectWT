<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "php_db";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database Connection Failed ❌");
}
?>
