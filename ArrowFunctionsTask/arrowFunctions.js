function SimpleFunction(){
    console.log("Simple Function")
    console.log(this)
}

const arrowFunction=()=>{
    console.log("Arrow Function")
    console.log(this)
}


SimpleFunction()

arrowFunction()


// BY Calling function, both prints the Window objects which means that both refers to
// Window Object


// In classic function expressions, the this keyword is bound to different values 
// based on the context in which it is called. With arrow functions 
// however, this is lexically bound. It means that it uses this from the code 
// that contains the arrow function.

// For example, if we use the SimpleFunction() against a button click listener it 
// will be referring to the Button So the context of the simpleFunction depends
// on the way it is called

var button1=document.getElementById('#button1')
var button2=document.getElementById('#button2')
button1.addEventListener('click',SimpleFunction)
button2.addEventListener('click',arrowFunction)
//By seeing th console in the web browser, you will see that this in Simple function refers
// to the button to which it is bind
//But the arrow functions still refers to the Window object in which it is defined


var addToArrowFunction=passed=>{
    anotherNumber=3
    var addArrowFunction=number=>{
        return passed +number+this.anotherNumber;
    }

    return addArrowFunction;
}

function addTo(passed){
    anotherNumber=3
    function add(number){
        return passed +number+this.anotherNumber;
    }

    return add;
}

value=addToArrowFunction(3);
console.log(value(2)) // Now this variable will be referring to the outerFunction.
                     // So, this,anotherNumber will refer to 3 and will result in 8

value=addTo(3)
console.log(value(2)) //Now this variable will be referring to the outerFunction.
                      // So, this,anotherNumber will refer to 3 and will result in 8



// Regular Vs Arrow Functions in Objects

var foo={
    name:'khan',
    func:function(){
        console.log(this)
        console.log(this.name);
    }
}

var anotherfoo={
    name:'khan',
    func:()=>{
        console.log(this)
        console.log(this.name)
    }
}

 foo.func() //Print the object through which we are calling the function
            //console.log(this.name) will print khan



 var func1=foo.func // this will save a reference to function 
 func1()  // this will print the window Object and this.name will results in undefined


 name='Faizan' //this variable will be added to the Window Object
anotherfoo.func() // But in case of arrow function, it will point to the window Object
                 // and as we have added a name variable to Window Object,
                 //it will also print Faizan 


 const person = {
                points: 23,
                score() {
                      return this.points++; // this keyword refers to person object
                }
                };
                  
 console.log(person.score());


 const person1 = {
    points: 23,
    score: () => {    // using arrow function to define score method
      return this.points++; // this keyword refers to window object
    }
  };
  
  console.log(person1.score());


// Regular vs Arrow Functions in Classes

  class Dog {
    constructor(name, bread) {
      this.name = name;
      this.bread = bread;
      // functions
      }
      bark = () => {
        return `Bark Bark! My name is ${this.name}`;

    }
  }
  const mini = new Dog('Mini', 'Spitz');
  DogFunc=mini.bark
  console.log(mini.bark());//Bark Bark! My name is Mini

  console.log(DogFunc()) //Bark Bark! My name is Mini



  class Dog1 {
    constructor(name, bread) {
      this.name = name;
      this.bread = bread;
      
    }
    // functions
    bark(){
        return `Bark Bark! My name is ${this.name}`;
      }
  }
  const mini1 = new Dog1('Mini', 'Spitz');
  Dog1Func=mini1.bark
  console.log(mini1.bark()); //Bark Bark! My name is Mini

  console.log(Dog1Func()) //This gives Error Cannot read property 'name' of undefined




