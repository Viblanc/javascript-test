// check if an array contains valid and unique numbers
function validArray(array) {
    const numbersSet = new Set(array.filter(n => Number.isInteger(n) && n >= 1 && n <= 9));
    return numbersSet.size === array.length;
}