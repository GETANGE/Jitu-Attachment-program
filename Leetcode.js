// 1. Design a function that reverses the digits of an integer. For example, 50
//    should become 5 and -12 should become -21.
// solution
const reverse = function(x){
    let result = 0; 

    if(x < 0){
        result = parseInt(String(x).slice(1).split('').reverse().join('')) *-1;
    }else{
        result = parseInt(String(x).split('').reverse().join(''));
    }

    if(result > Math.pow(2, 31) -1  || result < -Math.pow(2, 31)){
        return 0;
    }

    return result;
}

console.log(reverse(50));
console.log(reverse(-12));

// 2. Write a recursive function to calculate the factorial of a number
// solution
const factorial = function(n){
    if(n === 0){
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(50));

// 3. Design a function that takes a string or sequence of characters as input and
//      returns the character that appears most frequently.
//      Eg 11189 => '1'
//      hello => l
//solution
function mostFrequentCharacter(inputStr) {
    // Initialize an object to store the frequency of each character
    const frequencyDict = {};
    
    // Iterate through each character in the input string
    for (let i = 0; i < inputStr.length; i++) {
        let char = inputStr[i];
        if (frequencyDict[char]) {
            frequencyDict[char]++;
        } else {
            frequencyDict[char] = 1;
        }
    }
    
    // Find the character with the maximum frequency
    let maxFrequency = 0;
    let mostFrequentChar = null;
    for (let char in frequencyDict) {
        if (frequencyDict[char] > maxFrequency) {
            maxFrequency = frequencyDict[char];
            mostFrequentChar = char;
        }
    }
    
    return mostFrequentChar;
}

// Example usage
const inputStr = "hello";
const inputNum = '111809';
console.log(mostFrequentCharacter(inputStr));
console.log(mostFrequentCharacter(inputNum));


//3. Design a function that determines whether a given string is a pangram. A
//   pangram is a sentence or phrase containing every letter of the alphabet at
//   least once. Punctuation and case are typically ignored. For example, the
//   string "The quick brown fox jumps over the lazy dog" is a pangram, while
//   "Hello, world!" is not
const checkIfPangram = function(sentence){
    return new Set(sentence).size === 26
}
console.log(checkIfPangram("Emmanuel")) // will say false.
console.log(checkIfPangram("The quick brown fox jumps over the lazy dog")) // will say true.



//4.Design a function that takes a list of integers as input. The function should
//  return True if the list contains two consecutive threes (3 next to a 3) anywhere
//  within the list. Otherwise, it should return False. For example, the function
//  should return True for [1, 3, 3] and False for [1, 3, 1, 3].

function hasConsecutiveThrees(nums) {
    // Iterate through the list, but stop at the second-last element
    // since we need to compare two elements at a time.
    for (let i = 0; i < nums.length - 1; i++) {
        // Check if the current element and the next element are both 3
        if (nums[i] === 3 && nums[i + 1] === 3) {
            return true;
        }
        }
        // If no consecutive threes are found, return false
        return false;
    }

console.log(hasConsecutiveThrees([1, 3, 3])); // true
console.log(hasConsecutiveThrees([1, 3, 1, 3])); // false


// 5. Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
//   for his unique way of speaking. He often reverses the order of words in his
//   sentences. For example, instead of saying "I am home" he might say "Home
//   am I" Design a function that takes a sentence as input and returns a new
//   sentence with the words reversed in the same order that Master Yoda would
//   use.

// solution
function yodaSpeak(sentence) {
        // Split the sentence into an array of words
        const words = sentence.split(' ');
    
        // Reverse the order of the words in the array
        words.reverse();
    
        // Join the reversed words back into a sentence
        const yodaSentence = words.join(' ');
    
        return yodaSentence;
    }

    const normalSentence = "Emmanuel Getange";
    const yodaSentence = yodaSpeak(normalSentence);
    
    console.log(yodaSentence); 
    