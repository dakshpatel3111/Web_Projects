// Student Name : Daksh Patel and Student Number : 991547214
$(document).ready(function () {
   // Ajax Call to call the JSON file
    $.ajax({
     // Here Daksh.Json is a file where the Data is Stored 
        url: "../Data/daksh.json",
        data: "data",
        dataType: "json",
        success: getData  
        
      });
      // Disabling some buttons so that they can only be opened , when user clicks the categories
      $("#ad").prop('disabled', true);
      $("#program").prop('disabled', true);
      $("#output").prop('disabled', true);
      $("#exp").prop('disabled', true);
      // Clearing the div to input new data 
      $(".programdisplay").html("");
      // First Instructions when the Page is loaded
      $(".programdisplay").html(`<br><br>
      <center><h3>Welcome to Website to Learn <br>Basic Concepts of Web Programming</h3></center>
      <center><p class="lead">Click on Above  Menu to View Different Topics </p></center>
      `);

});
// Function to be executed when the Ajax Call is Successfull
function getData(data){
  
    $("#ls").click(function () { 
      // When the Local Storage Button  is Clicked
      // Enabling the Buttons
      $("#ad").prop('disabled', false);
      $("#program").prop('disabled', false);
      $("#output").prop('disabled', false);
      $("#exp").prop('disabled', false);
        $(".programdisplay").html("");
        $(".programdisplay").html(`
        <br>
        <center>
        <b><h3>${data.LocalStorage.name}</h3></b>
        <p class="lead">${data.LocalStorage.info}</p>
        </center>
        `);
        
        // When the Advantages and Disadvantages Button is Clicked
        $("#ad").click(function(){
            $(".programdisplay").html("");
             $(".programdisplay").html(`
             <center>
             <b><h3>Advantages</h3></b>
             <p class="lead">${data.LocalStorage.Advantages}</p>
             <b><h3>Disadvantages</h3></b>
             <p class="lead">${data.LocalStorage.Disadvantages}</p> 
             </center>                   
             `);
        });
        // When User Clicks on Explaination of Code
        $("#exp").click(function(){
          $(".programdisplay").html("");
           $(".programdisplay").html(`
           <center>
           <b><h3>Explaination</h3></b>
           <p class="lead">${data.LocalStorage.Explain1}</p>
           <br>
           <p class="lead">${data.LocalStorage.Explain2}</p> 
           <br>
           <p class="lead">${data.LocalStorage.Explain3}</p> 
           </center>                   
           `);
      });
      // When the USer clicks the Program Button
        $("#program").click(function () { 
            $(".programdisplay").html("");
            $(".programdisplay").html(`
            <center><b><h3>Index</h3></b>
             <img src="${data.LocalStorage.Program1}" width="500" height="200">
             <p class="lead">Fig 1.1 : Html Snippet of Form elements</p>
             <br>
             <center><b><h3>Saving Values</h3></b><br>
             <img src="${data.LocalStorage.Program2}" width="500" height="160">
             <p class="lead">Fig 1.2 : Javascript block to save to Local Storage </p>
             </center>
            <br>
             <center><b><h3>Getting Values</h3></b><br>
             <img src="${data.LocalStorage.Program3}" width="500" height="160">
             <p class="lead">Fig 1.3 : Javascript block to get Values from LocalStorage</p>
             </center>
             <br>
             
            `);
            
        });

        // When the User clicks Output button The output images are shown
        $("#output").click(function () { 
            $(".programdisplay").html("");
            $(".programdisplay").html(`
             <center><b><h3>Input values and Click on Save</h3></b><br>
             <img src="${data.LocalStorage.Output1}" width="500" height="160">
             <br>
             <center><b><h3>After Saving , Click on Get button to obtain Values</h3> </b><br>
             <img src="${data.LocalStorage.Output2}" width="500" height="160">
           
             </center>
             <br>
            `);
            
        });
        
    });
    // When the Jquery Concept Button is CLicked
    $("#jq").click(function () { 
        // Enabling the Buttons when the Category is Selected
        $("#ad").prop('disabled', false);
        $("#program").prop('disabled', false);
        $("#output").prop('disabled', false);
        $("#exp").prop('disabled', false);
          $(".programdisplay").html("");
          $(".programdisplay").html(`
        <br>
        <center>
        <b><h3>${data.Jquery.name}</h3></b>
        <p class="lead">${data.Jquery.info}</p>
        <br>
        </center>
        `);
         //When the Explaination  button is clicked in Jquery Section
         $("#exp").click(function(){
          $(".programdisplay").html("");
           $(".programdisplay").html(`
           <center>
           <b><h3>Explaination</h3></b>
           <p class="lead">${data.Jquery.Explain1}</p>
           <br>
           <p class="lead">${data.Jquery.Explain2}</p> 
           </center>                   
           `);
      });
          // When the Advantages and Disadvantages Button is Clicked
          $("#ad").click(function(){
  
               $(".programdisplay").html(`
               <center>
               <b><h3>Advantages</h3></b>
               <p class="lead">${data.Jquery.Advantages}</p>
               <b><h3>Disadvantages</h3></b>
               <p class="lead">${data.Jquery.Disadvantages}</p> 
               </center>                   
               `);
          });
          // When  the Program button is clicked in Jquery Category
          $("#program").click(function () { 
            $(".programdisplay").html("");
            $(".programdisplay").html(`
             <center><b><h3>Jquery Click Function</h3></b><br>
             <br>
             <img src="${data.Jquery.Program}">
             <p class="lead">Fig 2.1 : Js Snippet of Jquery Click</p>
             <br>
             
            `);
            
        });
        // When the Output Button is Clicked In the Jquery Section 
        $("#output").click(function () { 
          $(".programdisplay").html("");
          $(".programdisplay").html(`
           <center><b><h3>Output after the Button is Clicked</h3></b><br>
           <img src="${data.Jquery.Output}" >
           <br>
           <p class="lead">${data.Jquery.Explain3}</p>
           </center>
           <br>
          `);
          
      });
       
          
      });
      // For AjAX and JSON Category
      $("#ajax").click(function () { 
        // Enabling the Button in the Ajax and JSon call
        $("#ad").prop('disabled', false);
        $("#program").prop('disabled', false);
        $("#output").prop('disabled', false);
        $("#exp").prop('disabled', false);
    
          $(".programdisplay").html("");
          $(".programdisplay").html(`
        <br>
        <center>
        <b><h3>${data.AJAXJSON.name}</h3></b>
        <p class="lead">${data.AJAXJSON.info}</p>
        </center>
        `);
        // When the Explaination  Button is Clicked in Ajax Section 
        $("#exp").click(function(){
          $(".programdisplay").html("");
           $(".programdisplay").html(`
           <center>
           <b><h3>Explaination</h3></b><br>
           <b><h4><i>Ajax Call</i></h4></b><br>
           <p class="lead">${data.AJAXJSON.Explain1}</p>
           <br>
           <b><h4><i>Json Call</i></h4></b><br>
           <p class="lead">${data.AJAXJSON.Explain2}</p> 
           </center>                   
           `);
      });
          // When the Advantages and Disadvantages  button is clicked
          $("#ad").click(function(){
  
               $(".programdisplay").html(`
               <center>
               <b><h3>Advantages</h3></b>
               <p class="lead">${data.AJAXJSON.Advantages}</p>
               <b><h3>Disadvantages</h3></b>
               <p class="lead">${data.AJAXJSON.Disadvantages}</p> 
               </center>                   
               `);
          });
          // When the user selects the program button in Ajax category
          $("#program").click(function () { 
            $(".programdisplay").html("");
            $(".programdisplay").html(`
             <center><b><h3>AJAX call</h3></b><br>
             <br>
             <img src="${data.AJAXJSON.Program}"  height="200" >
             <p class="lead">Fig 3.1 : Js Snippet of Ajax Call</p>
             <br>
             <center><b><h3>Get JSON call</h3></b>
             <img src="${data.AJAXJSON.Program2}"  height="200">
             <p class="lead">Fig 3.1 : Js Snippet of JSON Call</p>
             <br>
             
            `);
            
        });
        // When the output  buton is clicked in the Ajax Category
        $("#output").click(function () { 
          $(".programdisplay").html("");
          $(".programdisplay").html(`
           <center><b><h3>Output after the Button is Clicked</h3></b><br>
           <img src="${data.AJAXJSON.Output}" >
           <br>
           <p class="lead">${data.AJAXJSON.Explain3}</p>
           </center>
           <br>
          `);
          
      });
       
          
      });
     // When the Angular Button is Clicked
      $("#angular").click(function () { 
        // Enabling button when the angular category is clicked
        $("#ad").prop('disabled', false);
        $("#program").prop('disabled', false);
        $("#output").prop('disabled', false);
        $("#exp").prop('disabled', false);
        
          $(".programdisplay").html("");
          $(".programdisplay").html(`
        <br>
        <center>
        <b><h3>${data.Angular.name}</h3></b>
        <p class="lead">${data.Angular.info}</p>
        </center>
        `);
        // When the Explain button is clicked in Angular Section 
        $("#exp").click(function(){
          $(".programdisplay").html("");
           $(".programdisplay").html(`
           <center>
           <b><h3>Explaination</h3></b>
           <p class="lead">${data.Angular.Explain1}</p>
           <br>
           <p class="lead">${data.Angular.Explain2}</p> 
           </center>                   
           `);
      });
          // When the Advantages  and disadvantages button is clicked
          $("#ad").click(function(){
               $(".programdisplay").html(`
               <center>
               <b><h3>Advantages</h3></b>
               <p class="lead">${data.Angular.Advantages}</p>
               <b><h3>Disadvantages</h3></b>
               <p class="lead">${data.Angular.Disadvantages}</p> 
               </center>                   
               `);
          });
          // When the Program button is Clicked in angular Section 
          $("#program").click(function () { 
            $(".programdisplay").html("");
            $(".programdisplay").html(`
             <center><b><h3>Snippet to Use basic Angular Js </h3></b><br>
             <br>
             <img src="${data.Angular.Program}"  height="200" >
             <br>
             <p class="lead">Figure 4.1 : Html Snippet</p>
            `);
            
        });
        // When the Output Button is Clicked in the Angular Section 
        $("#output").click(function () { 
          $(".programdisplay").html("");
          $(".programdisplay").html(`
           <center><b><h3>Output after the Button is Clicked</h3></b><br>
           <img src="${data.Angular.Output}" >
           <p class="lead">Figure 4.2 : Output Image</p>
           <br>
           <p class="lead">${data.Angular.Explain2}</p>
           </center>
           <br>
          `);
          
      });    
      });

}