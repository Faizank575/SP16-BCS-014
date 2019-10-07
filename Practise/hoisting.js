// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their scope before code execution.

function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a); 
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
  //console.log(b); 
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */


//  console.log(hoist); // Output: undefined

//  var hoist = 'The variable has been hoisted.';

//  JavaScript has hoisted the variable declaration. 
//  This is what the code above looks like to the interpreter:


// var hoist;

// console.log(hoist); // Output: undefined
// hoist = 'The variable has been hoisted.';

function hoist() {
    var message;
    console.log(message);
    message='Hoisting is all the rage!'
  }
  
  hoist(); // Ouput: undefined

