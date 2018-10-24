// Arrays.
var names = ['Joe', 'Jack', 'Amy', 'Anna', true, 33];
names[3] =  'Mary';

// Methods.
var last = names.pop();
console.log(last);

var first = names.shift();
console.log(first);
console.log(names);

names.push('Szalacsi Arpad');
console.log(names);

names.unshift('KR');
console.log(names);

console.log(names.slice(1,2));
console.log(names);

console.log(names.splice(1,2));
console.log(names);

console.log(names.splice(1,0, 'Joe Filpo'));
console.log(names);

//Table.
var users = [
    [1, 'Piri', 'piri@gmail.com', true],
    [2, 'Sanyi', 'sanyi@gmail.com', false],
    [3, 'Bela', 'bela@gmail.com', true],
];
console.log(users[2][1]);

//Objects.
var customer = {
    'name' : 'Kiss Adam',
    'email' : 'ka@gmail.com',
    'active' : true
}
console.log(customer.email);
var key = 'email';
console.log(customer[key]);

console.log(JSON.stringify(customer));