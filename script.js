function sumArray(array) {
    var result=0;
    for (const element in array) {
        result+=array[element];
    }
    return result;
}

console.log(sumArray([2,4]))






