var fruits = ['Apple', 'Banana'];

console.log(fruits.length);

var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

fruits.forEach(function(item, index,array) {
    console.log(item, index);
  });

  fruits.forEach(function(item, index) {
    console.log(item, index);
  });

  fruits.forEach(element=>{
      console.log(element)
  });


  var newLength = fruits.push('Orange');

  var last = fruits.pop(); // remove Orange (from the end)
  console.log(fruits)

  var first = fruits.shift(); // remove Apple from the front

  console.log("shift element is",first)

  var newLength = fruits.unshift('Strawberry')
  
  console.log("after adding new element to fruit array is using unshift",fruits)
  console.log("new length of the fruit array is ",newLength)

  var pos = fruits.indexOf('Banana');

  var removedItem = fruits.splice(pos, 1); // this is how to remove an item


//   The JavaScript method toString() converts an array to a string of (comma separated)
//    array values.

console.log(delete fruits[0])



var fruits = ['Apple', 'Banana'];
console.log(fruits.toString())


console.log(fruits.join("*"))

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

fruits.splice(0,1,"Orange",'Strawberry')
console.log(fruits)

//The concat() method creates a new array by merging (concatenating) existing arrays

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);  

console.log(myChildren)


//The slice() method slices out a piece of an array into a new array.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
console.log(citrus)


count=0

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    console.log(a,b)
return a-b
});
 
console.log(points)






