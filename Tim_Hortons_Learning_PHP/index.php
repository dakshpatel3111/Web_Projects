<!DOCTYPE html>
<!--
Daksh Patel
Student ID : 991547214
Instructor : Sukhbir Tatla
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>     
        <form action="order.php" method="post" id="form1">        
            <div class="C"><h1 id="h1" >Welcome to Tim Hortons </h1>
            </div><fieldset>
                <legend>Get Varieties</legend>
            <div id="div">
                
                
                <center> <!--Coffee Selection Form-->
                    Select number Of Coffes: <input value="1" type="number" min="1" name="coffee" /></center>
              <br>   
                    <center> 
                        <p>Select Size: <select id="size" name="size">
                        <option name="Small" value="1">Small</option>
                        <option name="Medium" value="2">Medium</option>
                        <option name="Large" value="3">Large</option>
                        <option name="Extra-Large" value="4">Extra-Large</option>
                            </select></p>
                    </center>
                            <br>
                            <center>    Number Of Creams : <input  type="number" min="0" name="cream" />
                            </center><br>
    <center> Number Of Sugar: <input  id="sugar" type="number" min="0" name="sugar" />
                            </center>
                <br><center><input type="submit" value="Add to Order" id="button" name="order"></center>
        </div>
            </fieldset>
        </form>
    </body>
    <style>
        #form1{
            color:darkslategray;
            font-size: 40px;
            
        }
        .no{
            color: antiquewhite;
            font-size: 40px;
        }
        #button {
               background-color: red;
                border: none;
               color: white;
                padding: 15px 32px;
             text-align: center;
             text-decoration: none;
             display: inline-block;
             font-size: 16px;
               margin: 4px 2px;
               cursor: pointer;
             }
        .C {
     
            color: white;
            height: 400px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        #h1 {
            z-index: 1;
        }
        h1{
            color: white;
        }
        h1:hover{
            color: grey;
        }
        h1::first-letter{
           font-size: 60px;
            color:Red;
            
         }
        body { 
            background-image: url(back2.jpg);
             background-repeat: round;
            font-family: Comic Sans MS;    
             }
         p{
            margin-left:10px;
            margin-bottom: 10px;
          
             }
         legend{
            color: black;
            font-size: 40px;
        }
             
    </style>
</html>
