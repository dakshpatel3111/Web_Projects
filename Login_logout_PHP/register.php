<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        require_once 'header.php';
		?>
		
		<h2>Book Registration</h2>
		<form action="register1.php" method = "post">
		<table style="margin:0 auto; width:30%;">
			<tr>
				<td>Name of the Book:</td>
				<td><input type="text" name="book"></td>
			</tr>
			<tr>
				<td>Author:</td>
				<td><input type="text" name="author"></td>
			</tr>
			<tr><td colspan="2"><input type="submit" value="Register this Book"></td></tr>
		</table>
	</form>
<?php
		if(isset($_REQUEST['result'])){
            
            if($_REQUEST['result']=="bookexists"){
                echo "<p>THis  book is Alerady Registerd";
            }
            
            else if($_REQUEST['result']=="success")
                    {
                
                       echo "<p>New Book was registred</p>"; 
                    }
            
            else if($_REQUEST['result']=="fail")
            {
                echo "<p>New book was not registered</p>";
            }
        }
	?>
    </body>
</html>
