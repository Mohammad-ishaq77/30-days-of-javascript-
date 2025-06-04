function reverse(str){
    if(typeof str != 'string'){
        return "Input must be a string";
    }
    return str.split('').reverse().join('');
}

//example scenario:
console.log(reverse("coders world!")); // Output: "!dlrow sredoc"
console.log(reverse(12345)); // Output: "Input must be a string"