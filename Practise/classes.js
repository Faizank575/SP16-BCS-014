class Student{

    constructor(name,age,semester){
        this.name=name;
        this.age=age;
        this.semester=semester;
    }

    printDetails(){
        console.log("Name is "+this.name+ " and age is " + this.age)
    }

}
class BCS8 extends Student{


    constructor(name,age,semester){
        super(name,age)
        this.semester=semester

    }

    printDetails(){
        console.log("Name is "+this.name+ " and age is " + this.age +" semester is " + this.semester)
    }

    static getSemester(){
        console.log("Strength of this class is "+ this.classWidth + " and regular student are " + this.prototype.regular)
    }
}

BCS8.classWidth = 32;
BCS8.prototype.regular = 30;
// Rectangle.prototype.prototypeWidth = 25;

student1=new BCS8('Faizan',21,'8th')

console.log(student1)


student1.printDetails()

BCS8.getSemester()



class Rectangle {
    #height;
    #width;
    constructor(height, width) {    
      this.#height = height;
      this.#width = width;
      this.color="Blue";
    }
  }

rectangle=new Rectangle(20,30)
console.log(rectangle.height) //Ouput Undefined 
console.log(rectangle.color)



//Hoisting does not apply in case of the Classes

(function hello(){
	console.log("hello")
})();

(function(){
	console.log("hello");
})();




