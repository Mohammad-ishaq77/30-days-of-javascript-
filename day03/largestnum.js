function largestNumber(num){
    if(num.length===0){
        return "array must not be empty";
    }
    return Math.max(...num);
}
console.log(largestNumber([1, 2, 3, 4, 5])); // Output: 5
console.log(largestNumber([])); // Output: "array must not be empty"