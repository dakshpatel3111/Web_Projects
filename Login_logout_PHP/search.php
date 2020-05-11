<?php
  
$con=mysql_connect('localhost', 'pate1742_admin', 'pate1742@dax');
$db=mysql_select_db('pate1742_localhost');


if(isset($_POST['btn'])){    //trigger button click

  $search=$_POST['search'];

     $query = "SELECT * FROM tblBooks WHERE book LIKE '$search' ";
}

if (mysql_num_rows($query) > 0) {
  while ($row = mysql_fetch_array($query)) {
    echo "<tr><td>".$row['book']."</td><td></td><td>".$row['author']."</td></tr>";
  }
}

else{
    echo "No Books Found<br><br>";
  }

mysql_close();
?>
  
  
