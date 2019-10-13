
//Multiple Inheritance is not supported in JS but you can achieve the same behavior using Mixins.

//An example has been done in which TA class  extends from the Student and Faculty is added using
//mixins
class Student{
    
    constructor(name,RegNo,Program){
        this.name=name;
        this.RegNo=RegNo;
        this.Program=Program;
    }
}

let Faculty = {
    setFacultyDetails(Name, Dept) {
      this.FacultyName = Name;
      this.FacultyDept = Dept;
    },
   
    getFacultyDetails(){
      console.log(`${this.name} is associated with ${this.FacultyName} from ${this.FacultyDept} Dept`);
    }
   }



class TA extends Student{

     constructor(TA_Dept,TA_Stipend,name,RegNo,Program){
        super(name,RegNo,Program);
        this.TA_Dept=TA_Dept;
        this.TA_Stipend=TA_Stipend;

     }

     getStudentName(){
        return this.name
     }
     getStudentDetails(){
         console.log(`${this.name} is associated with ${this.FacultyName} from ${this.FacultyDept} Dept as TA with stipend ${this.TA_Stipend}.`)
     }


}
Object.assign(TA.prototype,Faculty);

TA1=new TA('CS','1500$','Faizan Khan', 'SP16-BCS-014','MS');
TA1.setFacultyDetails("Allen Baker",'CS')
TA1.getStudentDetails()
console.log(TA1);





