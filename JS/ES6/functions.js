//Old way.
function foo(one, two) {
    return one + two;
}

//=>
let fooArrow = (one, two) => one + two;
console.log(foo(3, 4));
console.log(fooArrow(3,4));
let oneArg = e => e+4;
console.log(oneArg(3));
let noArg = () => console.log('no arguments');
noArg();

//Spread operator.
function test(){
    console.log(arguments);
}
test();
//=>
let testSpread = (name, email, ...args) =>{
    console.log(`User's name is ${name}.
    Email adress is: ${email}.
    User also has: ${args.join(', ')}`);
};
testSpread('Johnny', 'johnny@gmail.com', 'BMW', 'Driving licence');