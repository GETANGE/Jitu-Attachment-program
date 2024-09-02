// check if a sentence has all Aphabets
const pangrams = function(sentence) {
    return new Set(sentence.toLowerCase()).size === 26
}

console.log(pangrams("The quick brown fox jumps over the lazy dog"));

const checkIfPangram = function(sentence) {
    // Convert the sentence to lowercase
    sentence = sentence.toLowerCase();
    
    // Create a set to store unique alphabetic characters
    const uniqueChars = new Set();
    
    // Iterate over each character in the sentence using a for loop with index
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            uniqueChars.add(char);
        }
    }
    
    // Check if the set contains all 26 letters of the alphabet
    return uniqueChars.size === 26;
}

// Example usage
console.log(checkIfPangram("Emmanuel")); // Output: false
console.log(checkIfPangram("The quick brown fox jumps over the lazy dog")); // Output: true
