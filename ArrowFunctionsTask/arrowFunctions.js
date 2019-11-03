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




