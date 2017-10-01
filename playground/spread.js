// function add (a, b) {
//     return a + b;
// }
// 
// console.log(add(3,1));
// 
// var toAdd = [9,5];
// console.log(add(...toAdd)); 

// ... spread operator

// var groupA = ['Mladen', 'Dado'];
// var groupB = ['Lili'];
// var final = [...groupA, 3, ...groupB];
// 
// console.log(final);

var person = ['Đuđi', 29];
var personTwo = ['Mladen', 36];

function greet(name, age) {
    console.log('Hi ' + name + ' you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Draica', 'Eli'];
var final = ['Đuđi', ...names];

final.forEach(function(name) {
    console.log('Hi '+ name);
});
