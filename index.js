function reverseStr(str){
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;

    // return str.split('').reverse().join('');
}

// console.log(reverseStr("hello"));

