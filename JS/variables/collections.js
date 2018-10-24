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