<!DOCTYPE html>
<!--
Daksh Patel
Student Id :991547214
Instructor : Sukhbir tatla
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <center><h1>ThankYou For Buying Our Coffee</h1></center>
        <?php
        //This is where i have connected every variable with the name of html element
            $small = $_REQUEST["Small"];
            $medium = $_REQUEST["Medium"];
            $large = $_REQUEST["Large"];
            $extra_large = $_REQUEST["Extra-Large"];   
            $coffee = $_REQUEST["coffee"];
            $size = $_REQUEST["size"];
            $cream = $_REQUEST["cream"];
            $sugar = $_REQUEST["sugar"];
            $order = $_REQUEST["order"];
            $tax = ( $size * $coffee   ) * 0.13 ; 
            $cost = "$ " . number_format($coffee  * $size + $tax ,2);
        ?>
        <div>
        <?php
        
         if (isset ($order))
                { if($coffee==0){
                    exit();
                    //This  is the Loop which decides the cup size and number of cups
     
                } else{
                        for($a=1 ; $a<=$coffee ; $a++)
                        {
                            switch ($_POST['size']){
                                case '1' :
                                    echo "<img src = 'cup.jpg' alt='cup' height='120' width='100'>";
                                    break;
                                case '2' :
                                    echo "<img src = 'cup.jpg' alt='cup' height='150' width='120'>";
                                    break;
                                case '3' :
                                    echo "<img src = 'cup.jpg' alt='cup' height='180' width='140'>";
                                    break;
                                case '4' :
                                    echo "<img src = 'cup.jpg' alt='cup' height='210' width='160'>";
                                    break;
                            }
                           
                            if($cream>0){
                                //In this Loop number of creams are decided
                                echo "<img src = 'plus.jpg' alt='plus'>";
                                for($b=1 ; $b<=$cream ; $b++)
                                {
                                    echo "<img src = 'cream.jpg' alt='cream'>";
                                }
                            }
                            
                                if($sugar>0)
                                {
                                    echo "<img src = 'plus.jpg' alt='plus'>";
                                    // In this Loop number of sugars are decided
                                for($c=1 ; $c<=$sugar ; $c++)
                                {
                                    echo "<img src = 'sugar.jpg' alt='sugar'>";
                                }
                                }
                                echo nl2br("\n"); 
                                continue;
                        }
                
                }
            }
                
        ?>
    </div>
        <br><br>
        
        <div>
           <center> <h1>Here is Your Bill :</h1> </center>
            <center><h1 id="cost">Cost : <?php echo "$cost"; ?></h1> </center>
            <center><h1 id="good">Have A good Day!!</h1> </center>
        </div>
    </body>
    <style>
        body {
            background-image: url(curvedbg.jpg);
            font-family: Comic Sans MS;
            
        }
        #cost{
            font-family: sans-serif;
            color:red;
        }
        #good{
             background-color: darkseagreen;
                border: none;
               color: white;
                padding: 15px 32px;
             text-align: center;
             text-decoration: none;
             display: inline-block;
             font-size: 36px;
               margin: 4px 2px;
               
        }
    </style>
</html>

