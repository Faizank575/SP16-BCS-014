function arrowFunc(){
console.log(this);
}

const arrowfunction=()=>{
    console.log(this)

}

arrowFunc()
arrowfunction()
