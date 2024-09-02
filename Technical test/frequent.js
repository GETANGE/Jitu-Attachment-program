const mostFrequentCharacter = function(input){
    let frequencyDict = {};

    for(let i=0; i<input.length; i++){
        let char = input[i];
        if(frequencyDict[char]){
            frequencyDict[char]++;
        }else {
            frequencyDict[char] = 1;
        }
    }

    let maxFrequency =0
    let mostFrequentChar = null;

    for(let char in frequencyDict){
        if(frequencyDict[char] > maxFrequency){
            maxFrequency = frequencyDict[char];
            mostFrequentChar = char;
        }
    }

    return mostFrequentChar;
}

console.log(mostFrequentCharacter("hello world"));