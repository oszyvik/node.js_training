//For loop.
var numbers = [1,2,3,4,5];
for(i=0; i< numbers.length; i++){
    console.log(numbers[i]);
}

var user = {
    'name' : 'Feri',
    'age' : 35
};
var keys = Object.keys(user);
console.log(keys);
for(i=0; i< keys.length; i++){
    console.log(user[keys[i]]);
}


