<?php
    
ob_start();
require_once 'config.php';

$book = $_REQUEST['book'];
$author = $_REQUEST['author'];

$query = "Select book from tblBooks where book = '$book';";
if(mysqli_num_rows($result) == 1){
    
    header('location:register.php?result=bookexists');
}
else{
    $query = "Insert into tblBooks(book,author) Values ('$book','$author');";
    $result = mysqli_query($conn,$query);
    if($result ==1){
        header('location:register.php?result=success');
        
    }
    else{
        header('location:register.php?result=fail');
        
    }
}
?>