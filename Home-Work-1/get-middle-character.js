function getMiddle(inputstring) {
    var middleString, stringLength = (inputstring.length),
        midlechar = (stringLength / 2);

    if (stringLength % 2 == 0) {
        middleString = inputstring.charAt(midlechar - 1) + inputstring.charAt(midlechar)
    } else {
        middleString = inputstring.charAt(Math.floor(midlechar))
    }

    return middleString;
}
