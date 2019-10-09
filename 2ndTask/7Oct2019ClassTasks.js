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

    set MmgtStudentIndustry(industryName){
        this.industryName=industryName;
    }

    get MgmtStudentDetails(){
        return [this.name,this.age,this.fatherName,this.industryName];
    }
}

class CsStudent extends Student{
    constructor(name,fatherName,age,fypTitle){
    super(name,fatherName,age);
    this.fypTitle=fypTitle;
    }

    //Using ECMAScript 6 suntaxt for getter and setter
    set CsStudentfypTitle(fypTitle){
        this.fypTitle=fypTitle;
    }

    get CsStudentDetails(){
        return [this.name,this.age,this.fatherName,this.fypTitle];
    }

}

faizan=new CsStudent('XYZ','ZXY',21,'Machine learning model')
faizan.CsStudentfypTitle='Machine learning model for wheat yield estimation';

console.log(faizan.CsStudentDetails)



Tahir=new MgmtStudent('Tahir','XYZ',24,'HR');
Tahir.MmgtStudentIndustry='Finance';

console.log(Tahir.MgmtStudentDetails);



