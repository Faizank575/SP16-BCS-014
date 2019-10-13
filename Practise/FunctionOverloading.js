//Function overloading is not possible in JS because of
//does not type the check of arguments
//does not check the number of arguments

class Student{
    constructor(name,fatherName,age){
        this.name=name;
        this.age=age;
        this.fatherName=fatherName
    }
    getDetails(){
        console.log(this.name)
    }
}

class MgmtStudent extends Student{


    constructor(name,fatherName,age,industryName){
        super(name,fatherName,age);
        this.industryName=industryName;
    }

    set MmgtStudentIndustry(industryName){
        this.industryName=industryName;
    }

    get MgmtStudentDetails(){
        return [this.name,this.age,this.fatherName,this.industryName];
    }

    getDetails(name){
        console.log(name)
    }
}

Tahir=new MgmtStudent('Tahir','XYZ',24,'HR');
Tahir.MmgtStudentIndustry='Finance';
Tahir.getDetails("Tahir") // the child class is being checked for function first if
//not exist then look in parent
Tahir.getDetails()// overloading is not allowed

