function getMiddle(inputstring) {
    var middleChar, stringLength;
    stringLength = (inputstring.length);
    if (stringLength % 2 == 0) {
        middleChar = inputstring.charAt((stringLength / 2) - 1) + inputstring.charAt((stringLength / 2))
    } else {
        middleChar = inputstring.charAt(Math.floor(stringLength / 2))
    }

    return middleChar;
}
