function getMiddle(inputstring) {
    Var middleChar;
    if ((inputstring.length) % 2 == 0) {
        middleChar = inputstring.charAt((inputstring.length / 2) - 1) + inputstring.charAt((inputstring.length / 2))
    } else {
        middleChar = inputstring.charAt(Math.floor(inputstring.length / 2))
    }

    return middleChar;
}
