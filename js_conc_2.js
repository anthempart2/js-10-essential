/*we discuss about functions in js*/

//declaration
function greet(name){
    console.log('Hello, ${name}!');
}

//expression
let greet = function(name) {
    console.log('Hello, ${name}!');
}

//arrow functions
let greet = (name) =>  {
    console.log('Hello, ${name}!');
};

//parameters
function add(a,b) {
    return a+b;
}
let result = add(3,4);

//scope
function exampleScope() {
    let local_var = 'this is a local func buddy!';
    console.log(local_var);
}
exampleScope();

//functions without a name are called anonymous functions
let sum = function(a,b) {
    return a+b;
};
//IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('Immediately invoked!');
})();
