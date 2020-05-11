
<body>
    <style>
    body{
        font-family: verdana;
        
    }

</style>
<h1>Welcome to library </h1>
    <form action="search.php" method="GET">
    <input type="text" name="search" />
    <input type="submit" value="Search" name="btn"/>
</form>
<?php
             require_once 'header.php';
			
		?>
    
<?php
require_once 'config.php';

$query = "select * from tblBooks;";
// execute the query
$result = mysqli_query ($conn, $query);
// check if some rows were fetched
if (mysqli_num_rows ($result) > 0)
{
$i = 1; 
    while ($row =mysqli_fetch_assoc ($result))
    { 
        
    echo "<br>";
    echo "id: " . $i. " - Name: " . $row["book"]. " - Author: " . $row["author"];
        $i++;
    }
    
}
else {
echo "No Rows Fetched";}
    
?>
</table>
</body>