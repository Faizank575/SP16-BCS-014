function Student(Name,Age,Semester){
    this.age=Age;
    this.name=Name;
    this.Semester=Semester;
}
Student.prototype.program='BCS'

obj1=new Student('Faizan',21,8);
obj2=new Student('Adnan',23,8);
obj3=new Student('Zeeshan',23,8);
console.log(obj3)
