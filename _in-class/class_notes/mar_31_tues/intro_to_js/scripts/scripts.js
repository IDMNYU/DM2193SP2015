// Global Objects
//  - window
//  - document
//  - console

//  - Object
//  - Array
//  - Number
//  - Date ------> moment.js

// Global Methods
// alert
// prompt

// Objects
//      Constructor 
//      instance

// "everything in javascript is an object"
// "everything in javascript is an function"
// 



// This is where the javascript happens
// console.log('hahahahahahahah');

// console.log("doing it this way's great");
// window.console.log('this also work\'s! hahahahah        :)');
// 
// 

// var stuff = prompt('what say u?');
// console.log(stuff);
// 
// 

// We want to be able to grab elements from the page
// We want to make a carousel
//      clicking elements makes other elements move
//      


// Listen for events
// Grab elements
// Functions
// Closures
// Scope
// Manipulating the DOM
// jQuery -- makes your life easier, it's a library, helps you write more concise code, it's just about everywhere.
// 
// 

// Events
console.log('before');

// window.onload = function(){
//     console.log('after');
// }

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('in between');
});

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('again');
});

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('and again');
});

// window.onload = function(){
//     console.log('oops');
// }

window.addEventListener('load', function(){
    console.log('after');
});

window.addEventListener('load', function(){
    console.log('after 2');
});

