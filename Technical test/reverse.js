let numbers_array = [1,2,3,4,5,6,7,8,9,10];

console.log("Original Array")
console.log(numbers_array)

console.log("Array after reversing")
console.log(numbers_array.reverse())

const reverse = function (number) {
    let result = 0;

    if(number < 0){
        result = parseInt(String(number).slice(1).split('').reverse().join('')) * -1;
    }else{
        result = parseInt(String(number).split('').reverse().join(''));
    }

    if(result > Math.pow(2, 31) -1 || result < -Math.pow(2, 31) ){
        return 0;
    }

    return result
}

console.log(reverse(620));
