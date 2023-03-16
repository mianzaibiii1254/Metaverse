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
