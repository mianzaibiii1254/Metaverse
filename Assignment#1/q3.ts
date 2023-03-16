let myName:string = 'Shahzaib ul hasan';
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let words:string[] = myName.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}
let titleCaseName = words.join(" ");
console.log(titleCaseName);