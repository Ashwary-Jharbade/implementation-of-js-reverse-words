const isValidString = (str) => {
    if (str && str.constructor.name === 'String') {
        return false;
    }
    return true;
}

const reverseString = (str) => {
    const emptyStr = "";
    if (isValidString(str)) {
        return emptyStr;
    }
    let result = str.split(emptyStr);
    result = result.reverse();
    result = result.join(emptyStr);
    return result;
}

const reverseWords = (str) => {
    if (isValidString(str)) {
        return "Invalid string!";
    }
    let reverseStr = "";
    let resultStr = "";
    const length = str.length;
    for(let i=0; i<=length; i++) {
        if ( (i === length) || Number(str[i])) {
            reverseStr = reverseString(reverseStr);
            reverseStr += str[i];
            resultStr += reverseStr;
            reverseStr = "";
        } else {
            reverseStr += str[i];
        }
    }
    return resultStr.slice(0,length);
};

console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f