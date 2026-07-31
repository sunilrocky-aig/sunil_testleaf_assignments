let str = "Hello World";
let arr = str.split(" ");
let lastWordLength = arr[arr.length-1].length;
console.log(`Last Word length ${lastWordLength}`);


let str1 = "fly me   to   the   moon";
str1 = str1.trim();
let arr1 = str1.split(" ");
let lastWordLength1 = arr1[arr1.length-1].length;
console.log(`Last Word length ${lastWordLength1}`);


let s1 = "listen";
let s2 = "silent";

s1 = s1.toLowerCase().trim();
s2 = s2.toLowerCase().trim();

s1 = s1.split("").sort().join("");
s2 = s2.split("").sort().join("");

if(s1 === s2)
{
    console.log(`${s1} and ${s2} both are anagram`);
}
else
{
    console.log(`${s1} and ${s2} they are not anagram`)
}