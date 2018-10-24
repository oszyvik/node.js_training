//Function definitions.
function adder(first, second){
    return first+second;
}

var multiplier = function (base, m){
    return base*m;
}

var nums = [1,2,3];
var filterFunction = function(el){
    return el % 2 == 0;
}
var filtered = nums.filter(filterFunction);
console.log(filtered);

var mapped = nums.map(function(el) {
    return Math.pow(el, 3);
});
console.log(mapped);
var getAge = function(){
    return this.age;
}
//Method.
var user = {
    __proto__ : Array.prototype,
    name : 'Jolan',
    age: 33,
    greet: function(){
        return 'Szia, ' + this.name + ' vagyok!'
    },
    ga : getAge,
    0: true,
    1: 'tr360',
    length: 2
}
console.log(user.length);
for (let index = 0; index < user.length; index++) {
    console.log(user[index]);    
}
console.log(user.greet());
console.log(user.ga());

var createUser = function(name, age, skills){
    name = name || 'Bela';
    age = age || 40;
    skills[0] = 'C#';
    return {name: name, age : age, skills : skills}
}
//primitives -> copied, collections -> references
var skills = ['Java', 'Frontend', 'Lua'];
var user1 = createUser('CSICSKA', 999, skills);
console.log(user1);
console.log(skills);
