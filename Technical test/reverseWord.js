const yodaSpeak= function(sentence) {
    // split the sentence into an array of words
    const words =sentence.split(' ');

    words.reverse();

    const yodaSentence = words.join(' ');

    return yodaSentence;
}

console.log(yodaSpeak('Emmanuel sentences'))