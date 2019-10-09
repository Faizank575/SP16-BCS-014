class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

}

class Employee extends Person{

    constructor(name,age,EmployeeId,salary){
        super(name,age)
        this.id=EmployeeId;
        this.salary=salary;
    }
}

class Manager extends Employee{

    constructor(name,age,EmployeeId,salary,managerId,designation){
        super(name,age,EmployeeId,salary);
        this.managerId=managerId;
        this.designation=designation;

    }

    getManagerDetails(){
        console.log(`${this.name} has a salary of ${this.salary} and designation is ${this.designation}`);
    }

}

manager1=new Manager('Faizan Khan',21,'SP16BCS','9000$','Mang1','MD');
manager1.getManagerDetails()