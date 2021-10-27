/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
let number1, number2;

number1 = window.prompt("Enter the First number");
number2 = window.prompt("Enter the Second number");

if (number1 > number2) {
  console.log(`The larger number of ${number1} and ${number2} is ${number1}`);
} else if (number2 > number1) {
  console.log(`The larger number of ${number1} and ${number2} is ${number2}`);
} else
 {
  console.log(`the values of ${number1} and ${number2} are Equal!`);
}

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let A = 3;
let B= -7;
let C = 2;

if (A > 0 && B > 0 && C > 0) {
alert(`The Sign is +`);
} else if (A < 0 && B < 0 && C < 0) {
alert("The Sign is -");
} else if (A > 0 && B < 0 && C < 0) {
alert("The Sign is +");
} else if (A < 0 && B > 0 && C < 0) {
alert("The Sign is +");
} else {
alert("The Sign is -");
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function sortNumber(A, B, C) {
    if (A > B && A > C) {
      if (B > C) {
        console.log(`${A} ${B} ${C}`);
      } else {
        console.log(`${A} ${C} ${B}`);
      }
    } else if (B > A && B > C) {
      if (A > C) {
        console.log(`${B} ${A} ${C}`);
      } else {
        console.log(`${B} ${C} ${A}`);
      }
    } else if (C > A && C > B) {
      if (A > B) {
        console.log(`${C} ${A} ${B}`);
      } else {
        console.log(`${C} ${B} ${A}`);
      }
    }
  }
  sortNumber(0, -1, 4);

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function largestNumber(number1, number2, number3, number4, number5) {
    let largest;
    if (number1 >= number2 && number1 >= number3 && number1 >= number4 && number1 >= number5) {
      largest = number1;
    } else if (number2 >= number1 && number2 >= number3 && number2 >= number4 && number2 >= number5) {
      largest = number2;
    } else if (number3 >= number1 && number3 >= number2 && number3 >= number4 && number3 >= number5) {
      largest = number3;
    } else if (number4 >= number1 && number4 >= number2 && number4 >= number3 && number4 >= number5) {
      largest = number4;
    } else {
      largest = number5;
    }
  
    console.log(`the largest number is ${largest}`);
  }
  largestNumber(-5, -2, -6, 0, -1 );
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
function HelloWorld(x, y) {
    if (x >= y){
        console.log(`Hello World!`);
    } 
    else{
        console.log(`Good Bye!`);
    } 
  }
  HelloWorld(4, 5);
  
 /******* End Your Code ********* */



