// string method that takes in two parameters (separator and limit)
const splitMethod = function (){
    let string = 'Geek for geeks';
    let array = string.split("for"); // "for" is our separator
    let array2 = string.split(""); // without the separator
    let array3 = string.split(" ", 2); // with the space character and limit separator

    console.log(array);
    console.log(array2);
    console.log(array3);
}
splitMethod();