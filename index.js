//-----------chapter 5------------------------//
//---------Question 1------------------------//

var num1 = 3;
var num2 = 5;
var totalNum = (num1+num2);
document.write(" Sum of " + num1 + " and " + num2 + " is " + totalNum) 



//-------------Question 2-----------------//
//-------------for Substraction-----------//

var num1 = 3;
var num2 = 5;
var totalNum = (num1-num2);
document.write(" Substract of " + num1 + " and " + num2 + " is " + totalNum) 



//-------------------For Multiplication-----------//

var num1 = 3;
var num2 = 5;
var totalNum = (num1*num2);
document.write(" Multiplication of " + num1 + " and " + num2 + " is " + totalNum) 

//-----------------for Division------------------//

var num1 = 3;
var num2 = 5;
var totalNum = (num1/num2);
document.write(" Division of " + num1 + " and " + num2 + " is " + totalNum) 

//-----------------for Modulous--------------//

var num1 = 3;
var num2 = 5;
var totalNum = (num1%num2);
document.write(" Modulous of " + num1 + " and " + num2 + " is " + totalNum) 

//----------------Question 3--------------------//
var myVariable;
document.write("Value of variable declearation is " + myVariable )

var myNumber = 5
document.write("initial value" + myNumber )

var myNumber = 5;
myNumber++;
document.write("Value of increament is : " + myNumber)

var myNumber = 6;
myNumber = myNumber + 7 ;
document.write("Value after Addition is : " + myNumber)

var myNumber = 13;
myNumber--;
document.write("Value of decreament is : " + myNumber)

var myNumber = 12;
var remainder = myNumber % 3 ;
document.write("The remainder is :" + remainder)

//------------------Question 4 -----------------//

var ticketPrice = 600;
var numberOfTickets = 5 ;
var totalCost = ticketPrice * numberOfTickets ;
document.write("The cost to buy 5 tickets to a movie is :" + totalCost + "PKR")

//--------------Question 5 ----------------------//

var number = 7 ;
document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<table>");

for (var i = 1; i <= 10; i++) {
    var table = number * i ;
    document.write("<tr><td>" + number + " * " + i + " = " + "</td><td>" + table + "</td></tr>"

    );

}
document.write("</table>");

//-------------Question 6------------------//
// Step a: Store a Celsius temperature into a variable
let celsiusTemperature = 25;

// Step b: Convert Celsius to Fahrenheit
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// Step c: Store a Fahrenheit temperature into a variable
let fahrenheitTemperature2 = 90;

// Step d: Convert Fahrenheit to Celsius
let celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


//------------Question 7-----------------//

// Store the prices and quantities of the items
var item1Price = 10;
var item2Price = 20;
var item1Quantity = 2;
var item2Quantity = 3;
var shippingCharges = 5;

// Compute the total cost
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// Show the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Item 1 Price: $" + item1Price + "</p>");
document.write("<p>Item 1 Quantity: " + item1Quantity + "</p>");
document.write("<p>Item 2 Price: $" + item2Price + "</p>");
document.write("<p>Item 2 Quantity: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<p>Total Cost: $" + totalCost + "</p>");

//-------------Question 8--------------//

// Store the total marks and marks obtained by the student
var totalMarks = 100;
var marksObtained = 85;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Show the result in the browser
document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");

//-------------------Question 9------------------//

// Store the amount in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Define the exchange rates
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

// Convert the total currency to Pakistani Rupees
var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the result
document.write("<h2>Currency Conversion</h2>");
document.write("<p>Total US Dollars: $" + usDollars + "</p>");
document.write("<p>Total Saudi Riyals: " + saudiRiyals + "</p>");
document.write("<p>Total Pakistani Rupees: " + totalPkr + "</p>");

//-------------------Question 10---------------//

// Initialize the variable with a number
var number = 10;

// Perform arithmetic operations in a single expression
var result = (((number + 5) * 10) / 2);

// Display the result
document.write("<h2>Arithmetic Operations</h2>");
document.write("<p>Initial Number: " + number + "</p>");
document.write("<p>Result: " + result + "</p>");

//-------------------Question 11----------------//

// Store the current year in a variable
var currentYear = 2024;

// Store their birth year in a variable
var birthYear = 1990;

// Calculate their possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Display the result
document.write("<h2>Age Calculator</h2>");
document.write("<p>Current Year: " + currentYear + "</p>");
document.write("<p>Birth Year: " + birthYear + "</p>");
document.write("<p>They are either " + age1 + " or " + age2 + " years old.</p>");


//----------------Question 12----------------//

// Store the radius into a variable
var radius = 5;

// Calculate the circumference
var circumference = 2 * 3.142 * radius;

// Calculate the area
var area = 3.142 * radius * radius;

// Display the results
document.write("<h2>Geometrizer</h2>");
document.write("<p>Radius: " + radius + "</p>");
document.write("<p>The circumference is " + circumference + "</p>");
document.write("<p>The area is " + area + "</p>");



//------------------Question 13------------------//

// Store your favorite snack into a variable
var favoriteSnack = "chocolate bars";

// Store your current age into a variable
var currentAge = 25;

// Store a maximum age into a variable
var maximumAge = 80;

// Store an estimated amount per day
var amountPerDay = 2;

// Calculate the total number of snacks needed
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * amountPerDay;

// Display the result
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("<p>Favorite Snack: " + favoriteSnack + "</p>");
document.write("<p>Your Current Age: " + currentAge + "</p>");
document.write("<p>Maximum Age: " + maximumAge + "</p>");
document.write("<p>Amount Per Day: " + amountPerDay + "</p>");
document.write("<p>You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".</p>");

//----------------------Chapter 6 to 9-----------------------------//
//---------------------Question 1-----------------------------//



//--------------------------------Question 2---------------//
document.write("<h1>Result of variable</h2>")

var a = 2;
var b = 1;
var myResult = --a - --b + ++b + b--;

document.write("a: " + a);
document.write("b: "+ b )
document.write("result: " + myResult)







//--------------------------------Question 3---------------//

// Prompt the user to enter their name
var userNmae = prompt("Please enter your name:");

// Greet the user
alert("Hello, " + userNmae + "! Welcome!");

// Print the greeting to the console as well
console.log("Hello, " + userNmae + "! Welcome!");




//--------------------------------Question 4---------------//

// Prompt the user to enter a number
var number = prompt("Please enter a number:");

// Check if the user entered a number
if (number === null || number === "") {
  number = 5; // Set the default number to 5
}

// Create a variable to store the multiplication table
var table = "";

// Generate the multiplication table
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  table += number + " x " + i + " = " + result + "<br>";
}

// Display the multiplication table on the web page
document.write(table);



//--------------------------------Question 5---------------//


// Prompt the user to enter the names of three subjects
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

// Set the total marks for each subject
var totalMarks = 100;

// Prompt the user to enter the obtained marks for each subject
var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

// Calculate the total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table format on the web page
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + (totalMarks * 3) + "</b></td><td><b>" + totalObtainedMarks + "</b></td></tr>");
document.write("<tr><td><b>Percentage</b></td><td></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");





    
    




 


