/*WAJSP to read to strings and check
if they are anagrams
to word having same letters but diffenet meaning
listen		silent
eilnst		eilnst		*/

const prompt = require("prompt-sync")();

let str1 = prompt("Enter your string 1 : ");
let nstr1 = str1.sort();

let str2 = prompt("Enter your string 2 : ");
let nstr2 = str2.sort();

if(nstr1 == nstr2)
	console.log("Yes they are anagrams");
else
	console.log("Nopes they are not anagrams");