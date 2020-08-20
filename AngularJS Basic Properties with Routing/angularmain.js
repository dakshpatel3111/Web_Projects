// Name : Daksh Patel and Student Number : 991547214
var app=angular.module("myApp",["ngRoute"])
// Using ng route provider
        .config(function($routeProvider)
		{
			// I have used same repeat.html file to show data by just changing Scope Variables
			$routeProvider  
			.when('/repeat',
			{
			 templateUrl:'/pages/repeat.html', 
			 controller:"repeatController"
            })
			.when('/filter',
			{
			 templateUrl:'/pages/repeat.html',
             controller:"filterController" 			 
			})
			.when('/show',
			{
			 templateUrl:'/pages/repeat.html',
			 controller:"showController"
			})
			.when('/route',
			{
			 templateUrl:'/pages/repeat.html',
			 controller:"routeController"
			})
		   })//closing of config
			.controller("repeatController",function($scope)
			{
				// Variables to show data on the Html 
                $scope.title="Angular Repeat";
                $scope.program = "Programs/repeathtml.jpg";
                $scope.program2 = "Programs/repeatjs.jpg";
				$scope.output = "Programs/repeatoutput.jpg";
				$scope.heading = "Applications";
                var exp = ["Angular Repeat is one of most used Directive , as is used as Loop in html itself."," The Syntax for the Repeat is 'ng-Repeat'.","  This syntax must be written as a attribute in the HTML tag , mostly it is used in div tag like in this Example , we can use the Loop statement for variables to display the content defined in the scope by the controller ","In this Specific Example we have used list with certain variables of task , which we want to be displayed in the broswer , so for that we created a list and then we added that to the scope "," then we used the ng-repeat into the div declaring it to be name in names which means creating a variable of name and iterating through the list variable"]
			    $scope.exp = exp;
				var apps = ["ng-repeat can be used to iterate through an array which requires less lines of code than the usual javascript method .","Filters can be used with ng-repeat to create an easy to implement search bar."];
				// Scope variable to Make it visible when user clicks new topic
				$scope.apps = apps;
				$scope.IsVisible = true;
				$scope.showoutput = true;
				$scope.showe = true;
				$scope.showad = true;

				
					$scope.Showprog = function(){
						$scope.IsVisible = true;
						$scope.showoutput = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showout = function(){
						$scope.showoutput = true;
						$scope.IsVisible = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showexp = function(){
						$scope.showe = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showad = false;
					}
					$scope.Showapps = function(){
						$scope.showad = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showe = false;
						
					}
			})
		
			.controller("filterController",function($scope)
			{
				$scope.title="Angular Filter";
                $scope.program = "Programs/filterhtml.jpg";
                $scope.program2 = "Programs/filterjs.jpg";
				$scope.output = "Programs/filteroutput.jpg";
				$scope.heading = "Applications";
				var exp =[ "Angular Filter is one of most used Directive when it comes to display the Output in certain Format ", "It has great different applications , it is mostly used for filtering the certain user wanted data from whole big chunk of data , for example , user can search for name in the big list of contacts ","In this particular program we have just used the upper case syntax which means that all the data will be converted in the output section","Here the list of names is declared in the controller and added to scope and then it is displayed with the help  of ng repeat by iterating through the List and Converting them to uppercase by '|' this symbol is know as pipe and it is used to show the flter style in anuglar js"];
				$scope.exp = exp;
                var apps = ["filter filters the array to a subset of it based on provided criteria.","It is also used in converting currency or displaying data in different format","Other Main usage of Filter is found to arrange the data according to need like in alphabetical order "];
				$scope.apps = apps;
				$scope.IsVisible = true;
				$scope.showoutput = true;
				$scope.showe = true;
				$scope.showad = true;


					$scope.Showprog = function(){
						$scope.IsVisible = true;
						$scope.showoutput = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showout = function(){
						$scope.showoutput = true;
						$scope.IsVisible = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showexp = function(){
						$scope.showe = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showad = false;
					}
					$scope.Showapps = function(){
						$scope.showad = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showe = false;
						
					}
            })
			.controller("showController",function($scope)
			{
				
				$scope.title="Angular Show";
                $scope.program = "Programs/showhtml.jpg";
                $scope.program2 = "Programs/showjs.jpg";
				$scope.output = "Programs/showoutput.jpg";
				$scope.heading = "Advantages and Disadvantages";
				var exp =[ "Angular Show is used to display the div in the Html with the help of controller and It can be accessbed by the function by creating a  boolean property which decides whether to display the content or not.","The syntax of the Code is 'ng-show' and is declared with the variable which is intialized in the scope by the Controller","If the Scope has this variable as false, then the following content would not be displayed as shown in Example Program ","the content or div can be showed by changing the scope variable (in this case it is : showoutput) , we can create the Function which changes its value from false to true as shown in figure when the event is triggered"];
				$scope.exp = exp;
                var apps = ["ng-show is mostly compared with ng-if , they both can work same depending on criteria but ng-show has only one expression which is boolean based and result is either true or false ","ng-Show is initialized once and it can be either true or false","Now a days mostly ng-if is used as it can be manipulated according to usage criteria "];
				$scope.apps = apps;
				$scope.IsVisible = true;
				$scope.showoutput = true;
				$scope.showe = true;
				$scope.showad = true;
				
					$scope.Showprog = function(){
						$scope.IsVisible = true;
						$scope.showoutput = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showout = function(){
						$scope.showoutput = true;
						$scope.IsVisible = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showexp = function(){
						$scope.showe = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showad = false;
					}
					$scope.Showapps = function(){
						$scope.showad = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showe = false;
						
					}
			})
			.controller("routeController",function($scope)
			{
				$scope.title="Angular Routing";
                $scope.program = "Programs/routehtml1.jpg";
                $scope.program2 = "Programs/routejs.jpg";
				$scope.output = "Programs/routeoutput.jpg";
				$scope.heading = "Applications";
				var exp =[ "Angular route is one of fast navigator to manipulate data from one html page into another html page in ng-view linked div","For using routing we need to import the Routing file or we can use the online avaialable link for ng-routing , here in this example i have imported the angular-route.min.js file locally", "As shown in the figure  here we have declared a links with # and ! as prefix , which is a unique syntax for routing between pages.","We have then declared the controller named as page1 controller which has added variable named msg into the scope ","This declared scope variable named msg is then accessed in the page1.html where it is displayed with the help of double curly breaces '{{msg}} and this is how it's content is displayed '"];
				$scope.exp = exp;
                var apps = ["In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. ","The Navigation is widley used to display the content which user wants in the same page that user is in without changing the page which increases the speed of browsing and makes it fast "];
				$scope.apps = apps;
				$scope.IsVisible = true;
				$scope.showoutput = true;
				$scope.showe = true;
				$scope.showad = true;


					$scope.Showprog = function(){
						$scope.IsVisible = true;
						$scope.showoutput = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showout = function(){
						$scope.showoutput = true;
						$scope.IsVisible = false;
						$scope.showe = false;
						$scope.showad = false;
					}
					$scope.Showexp = function(){
						$scope.showe = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showad = false;
					}
					$scope.Showapps = function(){
						$scope.showad = true;
						$scope.IsVisible = false;
						$scope.showoutput = false;
						$scope.showe = false;
						
					}
            })
			;
			
		
    