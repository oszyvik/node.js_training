//If condition.
if (0 == false) {
    console.log('0 == false');
}
if (0 === false) { //strict equality, value & type are checked together
    console.log('0 === false');
} else {
    console.log('0 !== false');
}

if ([]) {
    console.log('[]');
}
if (!'') {
    console.log('');
}

//Switch.
var n = 'hi';
switch (n) {
    case 1:
        console.log('n is 1');
        break;
    case 4:
        console.log('n is 4');
        break;
    case 'hi':
        console.log('bye');
        break;
    default:
        console.log('n isn\'t 4');
}

//Tenary operator.
var b = 33;
console.log(b > 22 ? '>22' : '<=22');