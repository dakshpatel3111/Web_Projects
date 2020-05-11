<?php
    
    session_start();
    
    
    $result = "";
    $img ="<img src = 'close-briefcase.jpg' alt='close' >";
    


    
    
    if ($_SERVER['REQUEST_METHOD'] == "GET")
    {
        
       $r1=  $_SESSION['randomNum1'] = rand(0, 9);
        $r2= $_SESSION['randomNum2'] = rand(0, 9);
       $r3=  $_SESSION['randomNum3'] = rand(0, 9);
        
        
        echo "$r1";
        echo "$r2";
        echo "$r3";
    
    }
     else { 
       
        
         
        $userInput1 = $_REQUEST['num1'];
        $userInput2 = $_REQUEST['num2'];
        $userInput3 = $_REQUEST['num3'];
        
        
       
        
        if ($userInput1 == $_SESSION['randomNum1'] && $userInput2 == $_SESSION['randomNum2'] && $userInput3 == $_SESSION['randomNum3'])
        {
            $result = "You found the number";
            
            $img = "<img src = 'open-briefcase.jpg' alt='open' >";
            
        }
        else if ($userInput1 == $_SESSION['randomNum1'])
        {
            $result = "One Number is correct";
            $img="";
        
         if($userInput1 == $_SESSION['randomNum1'] && $userInput2 == $_SESSION['randomNum2'])
           {
            $result = "Two number is correct";
             $img="";
           }
            else {
            $result = "No Number is correct";
                $img="";
            }
        }
        
    
    }
        
    
    
    
    if (isset($_REQUEST['btnPlayAgain']))
    {
      
        
        session_unset();
        
       $r1=  $_SESSION['randomNum1'] = rand(0, 9);
        $r2= $_SESSION['randomNum2'] = rand(0, 9);
       $r3=  $_SESSION['randomNum3'] = rand(0, 9);
        
        $result = "";
         
        $img="<img src = 'close-briefcase.jpg' alt='close' >";
       
        
        
        
        echo "$r1";
        echo "$r2";
        echo "$r3";
       
        
		
        
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Guess Game using Session</title>
    </head>
    <body>
        <h1>Number Guessing Game</h1>
        
        <form action="" method="post">
           BreifCase is Locked Write the code To unlock:
            <input type="number" min="0" max="9" name="num1" id="num1" value="<?php echo $userInput1; ?>" autofocus>
            <input type="number" min="0" max="9" name="num2" id="num2" value="<?php echo $userInput2; ?>" autofocus>
            <input type="number" min="0" max="9" name="num3" id="num3" value="<?php echo $userInput3; ?>" autofocus>
            
            <br><br>
            <input type="submit" name="btnGuess" value="Guess">
            <input type="submit" name="btnPlayAgain" value="Play Again">
            
        </form>
        
        <h3><?php 
            
            echo $result; 
                  echo $img;
                   
                    ?></h3>
		
    </body>
</html>
