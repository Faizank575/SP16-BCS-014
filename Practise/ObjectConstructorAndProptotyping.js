class Person{


    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Student extends Person{

    constructor(name,age,grade) {
        super(name,age);
        this.grade=grade;
    }
}




firstObj =new Student("Faizan",21,"A+");
console.log(firstObj.grade)


