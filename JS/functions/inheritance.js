//const: can not change the collection, but can change the elements of it
const EventEmitter = require('events');

//Base function.
var User = function (props) {
    var options = {};
    this.construct = function () {
        options.name = props.name || '';
        options.age = props.age || 0;
        options.email = props.email || '';
        options.active = props.active || false;
    };

    var toJson = function () {
        return JSON.stringify({
            name: options.name,
            age: options.age,
            email: options.email,
            active: options.active
        });
    };

    this.getProp = function (key) {
        if (!options[key]) {
            throw new Error('Property is not found');
        } else {
            return options[key] || '';
        }
    };

    this.json = function () {
        return toJson();
    };

    this.setName = function (name) {
        options.name = name;
    };

    this.setAge = function (age) {
        options.age = age;
    };

    this.setEmail = function (email) {
        options.email = email;
    };

    this.setActive = function (active) {
        options.active = active;
    };

    this.construct();
};

var satya = new User({ name: 'Satya Nadella' });
satya.setAge(50);
satya.setEmail('satya.nadella@outlook.com');
console.log(satya.json());
try {
    console.log(satya.getProp('pet'));
} catch (e) {
    console.log(e.toString());
}

(function (prop) {
    console.log(prop);
})({ name: 'Zoli' });

//Create event.
const myEvent = new EventEmitter();
myEvent.on('whenImTired', function(user){
    console.log('whenImTired event is fired', user);
});
setTimeout(function(){
    let user2 = new User({name: 'Zoli'});
    myEvent.emit('whenImTired', {user: user2});
}, 3000);