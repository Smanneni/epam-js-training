function countWords(inputstring) {
    var wordCount;
    wordCount=inputstring.match(/\S+/g);
    return wordCount ? wordCount.length : 0;
}
