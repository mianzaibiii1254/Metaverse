let friends:string[] = ['Faiq','ALi','Hammad']
for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log('I would like to invite '+ element +' for dinner.')   
}

console.log(friends[2]+' cannot make it.')

friends[2]='Moazzam';

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log('I would like to invite '+ element +' for dinner.')   
}