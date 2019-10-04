// Two ways of creating arrays

arr1=new Array("Hello",'World')

arr2=[1,2,3,4,5]


// Array Methods

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())

// By default , comma is seperator


console.log(fruits.join("*")) 



var fruits = ["Banana", "Orange", "Apple", "Mango"];




fruits.push('kiwi') //add the element at the end of the array

console.log(fruits)


fruits.pop()  //removes the element from the last of the array

console.log(fruits)


// The shift() method removes the first array element 
// and "shifts" all other elements to a lower index.


var fruits = ["Banana", "Orange", "Apple", "Mango"];
shifted_value=fruits.shift();            // Removes the first element "Banana" from fruits

console.log(shifted_value)


// The unshift() method adds a new element to an array (at the beginning), 
// and "unshifts" older elements

var fruits = ["Orange", "Apple", "Mango"];
fruits.unshift("Banana");

console.log(fruits)

// Using delete may leave undefined holes in the array. Use pop() or shift() instead.


var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined\



// The splice() method can be used to add new items to an array


// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 2, "Lemon", "Kiwi");
console.log("Answer is" + fruits)


// With clever parameter setting, you can use splice() to remove elements 
// without leaving "holes" in the array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); 

console.log("After removing from the first index  "+fruits)

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

console.log(citrus)


// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, 
// and up to (but not including) the end argument.


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(citrus)

//sorting arrays

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits

console.log(fruits)




arr=["30",4,1,"50"]
arr.sort()
console.log(arr)
//To solve the problem, 
var points = [40, "100", 1, "5", 25, "10"];
points.sort(function(a, b){return a - b}); // this will sort this in ascending order


console.log(points)


var points = [40, "100", 1, "5", "25", 10,3,5,6];
var i=0;
points.sort(function(a, b){
    console.log(i++)
    return b - a});
console.log(points)



//A higher order function is a function that 
// takes a function as an argument, or returns a function .








