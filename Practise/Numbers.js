a="2"
b="6"
console.log(a*b) //12


a=2
b="6"

console.log(a*b) //12


a="a"
b="6"
console.log(a*b) //NaN

console.log(typeof(NaN)) //Number

a=NaN
b=6
console.log(a*b)  //NaN

console.log(typeof(Infinity)) //  Number

console.log(2/"a") //NaN


//Number Conversion to String type 
a=10
console.log(a.toString())

var x = "100";
var y = "10";
var z = x / y; //10

//isNaN will return whether a variable have Nan Value
var x = 100 / "Apple";
isNaN(x) //True


a=10
console.log(a.toString(16))


a=-10.50
console.log(a.toString(2))


var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000


// toPrecision() returns a string, with a number written with a specified length
//toFixed() returns a string, with the number written with a specified number of decimals



// Number()	Returns a number, converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns an integer

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN


// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

// NUMBER Properties
// MAX_VALUE	Returns the largest number possible in JavaScript
// MIN_VALUE	Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	Represents a "Not-a-Number" value




// Any number literal contained in a string is also converted correctly, 
// so the string "0xA" is properly converted into the number 10. 
// However, the string "22.5" will be converted to 22 , 
// because the decimal point is an invalid character for an integer. 
// Some examples:
var iNum1 = parseInt("1234blue"); //returns 1234

var iNum2 = parseInt("0xA"); //returns 10

var iNum3 = parseInt("22.5"); //returns 22

var iNum4 = parseInt("blue"); //returns NaN

// The parseInt() method also has a radix mode, allowing you to 
// convert strings in binary, octal, hexadecimal,
//  or any other base into an integer. The radix is specified 
//  as a second argument to parseInt() , 
// so a call to parse a hexadecimal value looks like this:

var iNum1 = parseInt("AF", 16); //returns 175

var iNum1 = parseInt("10", 2); //returns 2

var iNum2 = parseInt("10", 8); //returns 8

var iNum2 = parseInt("10", 10); //returns 10

// If decimal numbers contain a leading zero, 
// it’s always best to specify the radix as 10 
// so that you won’t accidentally end up with an octal value (deprecated) Now it returns decimal
// always. 
// For example:


var iNum1 = parseInt("010"); //returns 8 (deprated) Now it returns decimal

var iNum2 = parseInt("010", 8); //returns 8

var iNum3 = parseInt("010", 10); //returns 10

// Another difference when using parseFloat() is that the string must represent a 
// floating-point number in decimal form, not octal or hexadecimal. 
// This method ignores leading zeros, so the octal number 0908 will be parsed into 908 , 
// and the hexadecimal number 0xA will return 0 . 
// There is also no radix mode for parseFloat() .

var fNum1 = parseFloat("1234blue"); //returns 1234

var fNum2 = parseFloat("0xA"); //returns 0

var fNum3 = parseFloat("22.5"); //returns 22.5

var fNum4 = parseFloat("22.34.5"); //returns 22.34

var fNum5 = parseFloat("0908"); //returns 908

var fNum6 = parseFloat("blue"); //returns NaN


// The toString() method returns a number as a string

var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

// toExponential() returns a string, with a number rounded and written using exponential notation


var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0



Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN


Number(new Date("2017-09-30"));    // returns 1506729600000


// parseInt() parses a string and returns a whole number. 
// Spaces are allowed. Only the first number is returned

parseInt("10");         // returns 10
parseInt("10.33"); //returns 10
parseInt("10,33")     // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


// parseFloat() parses a string and returns a number. Spaces are allowed. 
// Only the first number is returned:


parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10.33,33")   // return 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN


var x = Number.MAX_VALUE;

var x = Number.MIN_VALUE;

// Number properties belongs to the JavaScript's number object wrapper called Number.

// These properties can only be accessed as Number.MAX_VALUE.

// Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined







