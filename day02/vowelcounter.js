function countVowels(str){
    const vowel="aeiou";
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
console.log("vowels are:",countVowels("Hello World")); 
console.log("vowels are:",countVowels("OpenAI")); 
console.log("vowels are:",countVowels("javascript")); 
console.log("vowels are:",countVowels("programming")); 
console.log("vowels are:",countVowels(" aeiouAEIOU")); 
console.log("vowels are:",countVowels("12345"));