//User will enter name and a welcome message will be displayed
var Fname = window.prompt("Enter name");
//User will enter favorite number
var myFavNum = window.prompt("Enter your favorite number");
const piValue = 3.1415926;
// area = 3.1415926 * the users favorite number squared
var area = piValue * (myFavNum * myFavNum);
// This will save the output of the expression
var myArea = ""
document.write("Welcome " + Fname + " <br>hello " + Fname + " you said your favorite number is " + myFavNum + ". If that was the radius of a circle, the circle's area would be " + area);





