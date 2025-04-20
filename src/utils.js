// Your code here
export function isPalindrome(text){
    if(text.split('').reverse().join('') === text){
        return true;
    }
    return false;
}
export function hasUpperLower(text){
    if(/[A-Za-z]/.test(text)){
        return true;
    }
    return false;
};
export function isEmpty(text){
    if(text.length === 0){
        return true
    }
    return false;
};
export function isNotAlphabetic(text){
    if(!/^[A-Za-z]+$/.test(text)){
        throw new Error('Does not have any alphabetic letters');
    }
    return text
};
export function isNotAString(text){
    if(!/^[A-Za-z]+$/.test(text)){
        throw new Error('Is not a string');
    }
    return text
};