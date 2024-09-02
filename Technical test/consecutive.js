const consecutive = function (number){
    let result = false;

    for(let i = 0; i < number.length-1; i++){
        if(number[i]=== 3 && number[i+1]=== 3){
            result = true;
        }
    }
    return result;
}

console.log(consecutive([1,3,4,3,3]));

// let x = 20;
// x=10;
// console.log(x);

// const y = 10;
// y=20;
// console.log(y);

// if(true) {
//     let x = 30;
//     console.log(x);
// }
// console.log(x);

if(true) {
    const y = 30;
    console.log(y);
}
console.log(y);