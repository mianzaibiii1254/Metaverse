var friends = ['Faiq', 'ALi', 'Hammad'];
for (var index = 0; index < friends.length; index++) {
    var element = friends[index];
    console.log('I would like to invite ' + element + ' for dinner.');
}
friends.unshift('Usama');
friends.splice(Math.floor(friends.length / 2), 0, 'Farhan');
friends.push('Zeeshan');
console.log('New list for dinner.');
for (var index = 0; index < friends.length; index++) {
    var element = friends[index];
    console.log(element);
}
console.log("You can invite two people for dinner.");
for (var i = friends.length; i > 2; i--) {
    var element = friends.pop();
    console.log(element + " sorry you are not invited");
}
for (var index = 0; index < friends.length; index++) {
    var element = friends[index];
    console.log(element + " you are still invited");
}
for (var index = 0; index <= friends.length; index++) {
    var element = friends.pop();
}
for (var index = 0; index < friends.length; index++) {
    var element = friends[index];
    console.log(element);
}
