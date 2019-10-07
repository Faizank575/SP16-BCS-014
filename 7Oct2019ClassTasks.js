class Student{


    constructor(name,fatherName,age){
        this.name=name;
        this.age=age;
        this.fatherName=fatherName
    }
}

class MgmtStudent extends Student{


    constructor(name,fatherName,age,industryName){
        super(name,fatherName,age);
        this.industryName=industryName;
    }

    set_MmgtStudentIndustry(industryName){
        this.industryName=industryName;
    }

    get_MgmtStudentDetails(){
        return [this.name,this.age,this.fatherName,this.industryName];
    }
}

class CsStudent extends Student{
    constructor(name,fatherName,age,fypTitle){
    super(name,fatherName,age);
    this.fypTitle=fypTitle;
    }

    set_CsStudentfypTitle(fypTitle){
        this.fypTitle=fypTitle;
    }

    get_CsStudentDetails(){
        return [this.name,this.age,this.fatherName,this.fypTitle];
    }

}

faizan=new CsStudent('faizan khan','Niaz ur Rehman',21,'Machine learning model')
faizan.set_CsStudentfypTitle('Machine learning model for wheat yield estimation');

console.log(faizan.get_CsStudentDetails())


Tahir=new MgmtStudent('Tahir','XYZ',24,'HR');
Tahir.set_MmgtStudentIndustry('Finance');

console.log(Tahir.get_MgmtStudentDetails());
