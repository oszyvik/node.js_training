//Function definitions.
function adder(first, second){
    return first+second;
}

var multiplier = function (base, m){
    return base*m;
}

var nums = [1,2,3];
var filtered = nums.filter(function(el){
    return el % 2 == 0;
});
console.log(filtered);
