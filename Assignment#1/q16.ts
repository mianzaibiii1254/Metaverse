let friends:string[] = ['Faiq','ALi','Hammad']
for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log('I would like to invite '+ element +' for dinner.')   
}

friends.unshift('Usama')
friends.splice(Math.floor(friends.length/2),0,'Farhan')
friends.push('Zeeshan')

console.log('New list for dinner.')
for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element)   
}