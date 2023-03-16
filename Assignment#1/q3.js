var myName = 'Shahzaib ul hasan';
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
var words = myName.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}
var titleCaseName = words.join(" ");
console.log(titleCaseName);
