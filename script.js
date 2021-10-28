//Examples: 3-4d

// 3: The following declares a variable (notice, it is an undefined value)//
var ex3;
console.log ("3: The following declares a variable (notice, it is an undefined value)");
console.log (ex3);

//4 You can assign a value to a variable with the assignment operator, =//
var ex4 = ("value here");
console.log('4: You can assign a value to a variable with the assignment operator, =. The following defines a variable as the string "value here"');
console.log("ex4");
// 4aa: Calculating with this undefined value will result in NaN//

var ex4aa = 1 + ex4aa;
console.log ("4aa: Calculating with this undefined value will result in NaN");
console.log (ex4aa);

//4a: Characters put in between quotations marks are strings. The following is called a "string-literal"//
var ex4a = "text here";
console.log ('4a: Characters put in between quotations marks are strings. The above code (string-literal) creates the folowing line');
console.log (ex4a);

//4b: When you need a literal-quote inside a string, you need to use back-slashes like this: \"example\"//
var ex4b = "text \"example\"."
console.log ('4b: When you need a literal-quote inside a string, you need to use back-slashes like shown in the script.js file');
console.log (ex4b);

//4ba: You can use a " and ' in the same line. However, this becomes an issue when you are using the same character within the same line. The following shows an example of this, with a good and bad string (commented, but if you want to see what happens, uncomment it!). Simply fix this with a backslash before the character. //
var ex4baSameString = ("John's car won't start");
var ex4baGoodString = ('John\'s car won\'t start');
//var ex4baBadString = ('John's car wont' start);
console.log ("4ba:  You can use a \" and \' in the same line (the first line shown). However, this becomes an issue when you are using the same character within the same line. The following shows an example of this, with a good (2nd line) and bad string (commented, but if you want to see what happens, uncomment it!). Simply fix this with a backslash before the character. ");
console.log (ex4baSameString);
console.log (ex4baGoodString);
//console.log (ex4baBadString);

//4c: You can do calculations within the decleration (+ , - , *, /)//
var ex4c = 5 + 10;
console.log ("4c: You can do calculations within a decleration (+ , - , *, /), the following does 5 + 10 within the variable decleration");
console.log (ex4c);

//4d: You can find the remainder using the % operator//
var ex4d = 5 % 2;
console.log ("4d: You can find the remainder using the % operator. The following demonstrates the remainder of 5 % 2");
console.log (ex4d);