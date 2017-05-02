function getMiddle(inputString) {
    var middleString, stringLength = (inputString.length),
        midlechar = (stringLength / 2);

    if (stringLength % 2 == 0) {
        middleString = inputString.charAt(midlechar - 1) + inputString.charAt(midlechar)
    } else {
        middleString = inputString.charAt(Math.floor(midlechar))
    }

    return middleString;
}
