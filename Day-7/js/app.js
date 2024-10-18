// Custom Function 
function myFunction(im,age){
    console.log('Hi ' + im + ' Ahmad', 'My Age ' + age);
}
myFunction('jubayer', 25);


// Target id or class 
function mySub(){
    console.log('Hello My Dear');
}
document.getElementById('btn').addEventListener('click' , mySub);

// automatic funtion

(function (massage) {
    console.log('Hello Borthers', massage);
})('hello');

// Function store variables
let math = function(x,y){
    return x+y;
    console.log('Hi is the work My Function');
}
console.log(math(10 , 60));

// array function

let add = (x,y) => (x+y);
console.log(add(5,6,));

// nasstet function

function sayHi (firstName){
    function sayHello (){
        console.log('Hello I"m '+ firstName);
    }
    return sayHello();
}
sayHi('Jubayer');