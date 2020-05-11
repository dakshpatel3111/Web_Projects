<?php
	
$host = 'localhost';
$username = 'pate1742_admin';
$password = 'pate1742@dax';
$dbname = 'pate1742_localhost';

$conn = mysqli_connect($host,$username,$password,$dbname);

if(empty($conn)){
    die("Connection FAILED:". mysqli_connect_error());
}