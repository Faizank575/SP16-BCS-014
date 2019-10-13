//closure is a concept in which body of the fuction can be kept in a variable or 
//memory even after the function execution

function outer(){

    console.log("outer function is called")

    function inner(){
        console.log("Inner function is called")
    
    }
    return inner;
}

b=outer();
b();
console.log(outer())



