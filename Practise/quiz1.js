var arr=["String","NAME",548,456.00]

function printType(arr){
    for(var i=0;i<arr.length;i++){
        if(typeof(arr[i]) =='number'){
            console.log(arr[i]/10)
        }
        else{
            console.log(arr[i].toUpperCase())
        }
    }
}

printType(arr)


