function bike() {
    console.log(this.name);
  }
  
  var name = "Ninja";
  var obj1 = { name: "Pulsar", bike: bike };
  var obj2 = { name: "Gixxer", bike: bike };
  
  bike();           // "Ninja"
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"



//   Explicit and Fixed Binding of “this” keyword

// If we use call and apply method with calling function, 
// both of those methods take as their first parameter as execution context. 
// that is this binding.

function bike() {
    console.log(this.name);
  }
  
  var name = "Ninja";
  var obj = { name: "Pulsar" }
  
  bike();           // "Ninja"
  bike.call(obj);   // "Pulsar"


//   In Fixed binding or Hard binding, we can force the this object to be same 
//   always no matter from where and how it gets called.

function bike() {
   this.name = "Ninja";
    this.maker = "Kawasaki";
    console.log(this.name + " " + this.maker);  // undefined Bajaj
  }
  
  var name = "Pulsar";
  var maker = "Bajaj";
  
  obj = new bike();
  console.log(obj); 


//   Precedence of “this” keyword bindings
// First it checks whether the function is called with new keyword.
// Second it checks whether the function is called with call or apply method means explicit binding.
// Third it checks if the function called via context object (implicit binding).
// Default global object (undefined in case of strict mode).