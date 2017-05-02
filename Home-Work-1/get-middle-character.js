function getMiddle(inputString) {
    var middleString, stringLength, midleChar;
    stringLength = (inputString.length);
    midleChar = (stringLength / 2);
    if (stringLength % 2 == 0) {
        middleString = inputString.charAt(midleChar - 1) + inputString.charAt(midleChar)
    } else {
        middleString = inputString.charAt(Math.floor(midleChar))
    }

    return middleString;
}
