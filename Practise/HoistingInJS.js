//Important!
// While Using different Case just make sure to comment all other cases to 
//understand the concept completely


//Case 1


// undeclared variables do not exist until code 
// assigning them is executed. Therefore, assigning a value 
// to an undeclared variable implicitly creates it as 
// a global variable when the assignment is executed. 

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
  
  console.log(b); 

   /*
    Since it was declared, it is confined to the hoist() function scope.
    We can't print it out outside the confines of the hoist() function.
    Output: ReferenceError: b is not defined
    */



    //Case 2

    //Var Keyword
   //The scope of a variable declared with the keyword var 
   //is its current execution context. This is either the enclosing 
   //function or for variables declared outside any function, global. 

   console.log(hoist); // Output: undefined

   var hoist = 'The variable has been hoisted.';


  // JavaScript has hoisted the variable declaration. 
  //This is what the code above looks like to the interpreter:

    var hoist;

    console.log(hoist); // Output: undefined
    hoist = 'The variable has been hoisted.';





    //Case 3

    //Function scoped variables
    //As we've seen above, variables within a global scope are 
    //hoisted to the top of the scope. let's look at how 
    //function scoped variables are hoisted.

    function hoist() {
        console.log(message); 
        var message='Hoisting is all the rage!'
      }
      
      hoist();

      //Output would be undefined

      //This is what the code above looks like to the interpreter:
      function hoist() {
        var message;
        console.log(message);
        message='Hoisting is all the rage!'
      }
      
      hoist();


      //Case 4


      //BY using the strict mode of JS

        'use strict';

        console.log(hoist); // Output: ReferenceError: hoist is not defined
        hoist = 'Hoisted'; 


    //Case 5 ES6

    //let Keyword

    //variables declared with the keyword let are block scoped and not function scoped. 

    console.log(hoist); // Output: ReferenceError: hoist is not defined ...
    let hoist = 'The variable has been hoisted.';

    //However, we still have to be careful here. 
    // An implementation like the following will result in an ouput of 
    // undefined instead of a Reference error.

    let hoist;

    console.log(hoist); // Output: undefined
    hoist = 'Hoisted'



    //Case 7 Function Declaration

    //
    hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};




