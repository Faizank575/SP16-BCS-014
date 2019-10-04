student={
    "first name":"Faizan",
    "last name":"",
    "age":21,
    printName:function(){
        console.log(this.name)
    }
}

student.displayAge=function(){
    console.log(this.age)
}


// var inp=prompt("Please enter a number")
// student=new student()
// console.log(student.age); //returns 21

// console.log(student.last name) //gives error
console.log(student["last name"]); //returns undefined

// console.log(student.inp) //gives undefined when a property does not exit

// console.log(student[inp])



// console.log()


// Object.defineProperties(student,language :"Eng" );

// console.log(student)