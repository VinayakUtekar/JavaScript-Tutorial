//Regular Expression

const prompt = require("prompt-sync")();

function mysort(str)
{
	return str.toLowerCase().split("").sort().join("");
}

let str1 = prompt("Enter first String : ");
let str2 = prompt("zenter second string : ");

if(mysort(str1)==mysort(str2))
	console.log("yes they are anagrams");
else
	console.log("nopes they are not anagrams");