student={
    "first name":"Faizan",
    "last name":undefined,
    "age":21,
    printName:function(){
        console.log(this["first name"])
    }
}

student.displayAge=function(){
    console.log(this.age)
}

student.printName()

console.log(Object.keys(student))
console.log(Object.getOwnPropertyNames(student))



for (var i in student) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    
    if(student.hasOwnProperty(i)){
        console.log(i)
    }
  }
var arr=[1,2,3,4,5]
console.log(Object.getOwnPropertyNames(arr))


// var inp=prompt("Please enter a number")
// student=new student()
// console.log(student.age); //returns 21

// console.log(student.last name) //gives error
// console.log(student["last name"]); //returns undefined

// console.log(student.inp) //gives undefined when a property does not exit

// console.log(student[inp])



// console.log()


// Object.defineProperties(student,language :"Eng" );

// console.log(student)