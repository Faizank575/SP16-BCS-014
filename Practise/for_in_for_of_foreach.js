var arr=[{"name":"Faizan","Age":21},
        {"name":"Hanzla","Age":20},
        {"name":"XYZ","Age":25}
]



console.log(arr[0]["Age"])


arr.forEach(element => {
    if(element.Age>=21){
        console.log(element.Age)
    }
});

for (const key in arr) {
   console.log(arr[key])
}

for(const key of arr){
    console.log(key)
}
