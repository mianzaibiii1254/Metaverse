var friends = ['Faiq', 'ALi', 'Hammad'];
for (var index = 0; index < friends.length; index++) {
    var element = friends[index];
    console.log('I would like to invite ' + element + ' for dinner.');
}
console.log(friends[2] + 'cannot make it.');
friends[2] = 'Moazzam';
for (var index = 0; index < friends.length; index++) {
    var element = friends[index];
    console.log('I would like to invite ' + element + ' for dinner.');
}
