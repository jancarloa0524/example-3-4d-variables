# VARIABLES
## Examples 3-4d

3: The following declares a variable (when run this comes out as **undefined**):

``` javascript
var ex3;
```

4 You can assign a value to a variable with the assignment operator, =, or an equal sign:

``` javascript
var ex4 = ("value here");
```

4aa: Calculating with an undefined value will result in **NaN**:

``` javascript
var ex4aa = 1 + ex4aa;
```

4a: Characters put in between quotations marks are strings. The following is called a "string-literal":

``` javascript
var ex4a = "text here";
```

4b: When you need a literal-quote inside a string, you need to use back-slashes like this:

``` javascript
var ex4b = "text \"example\"."
```

4ba: You can use a " and ' in the same line, as shown by `ex4aSameString`. However, this becomes an issue when you are using the same character within the same line. The following shows an example of this, with a `ex4aGoodString` and `ex4aBadString`. Simply fix this with a backslash before the character:

``` javascript
var ex4aSameString = ("John's car won't start")
var ex4baGoodString = ('John\'s car won\'t start');
var ex4baBadString = ('John's car wont' start);
```

4c: You can do calculations within the decleration (+ , - , *, /):

``` javascript
var ex4cAddition = 5 + 10;
var ex4cSubtraction = 10 - 5;
var ex4cMultiplication = 5 * 10;
var ex4cDivision = 10 / 5;
```

4d: You can find the remainder using the % operator. For example, 5 divided by 2 would be equal to 2 with a remainder of 1 (2*2=4, 4+1=5):

``` javascript
var ex4d = 5 % 2;
```