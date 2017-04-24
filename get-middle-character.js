
function getMiddle(inputstring) {
    if((inputstring.length)%2==0)
    {
    return inputstring.charAt((inputstring.length / 2)-1)+inputstring.charAt((inputstring.length / 2))
    }
    else
    {
     return inputstring.charAt(Math.floor(inputstring.length / 2))
    }
    
   
}
