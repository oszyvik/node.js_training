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

//Method.
var user = {
    name : 'Jolan',
    age: 33,
    greet: function(){
        return 'Szia, ' + this.name + ' vagyok!'
    }
}

console.log(user.greet());