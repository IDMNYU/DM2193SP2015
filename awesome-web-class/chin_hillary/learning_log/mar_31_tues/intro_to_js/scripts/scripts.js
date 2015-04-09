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

// // Events
// console.log('before');

// // window.onload = function(){
// //     console.log('after');
// // }

// document.addEventListener('DOMContentLoaded', function(event) {
//     console.log('in between');
// });

// document.addEventListener('DOMContentLoaded', function(event) {
//     console.log('again');
// });

// document.addEventListener('DOMContentLoaded', function(event) {
//     console.log('and again');
// });

// // window.onload = function(){
// //     console.log('oops');
// // }

// window.addEventListener('load', function(){
//     console.log('after');
// });

// window.addEventListener('load', function(){
//     console.log('after 2');
// });


// Mar 31 

// 	Var & Scope
var mything = 1;
function stuff(){
	var mything = 2;
	console.log('inside stuff', mything);
}

console.log('after stuff', mything);
stuff();

// HTML
// class name toggling
// dom manipulation

// grab existing elements
// var element document.getElementById("div1");
var myHeading = document.getElementByID("my-heading");
myHeading.style.backgroundColor = "#ccc"; //this is added as inline style to DOM
myHeading.style.padding = "10px 10px 20px 10px";
myHeading.style.position = relative;

//manipulating DOM is not good performance
setInterval(function()){

}

// create element
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// var element = document.createElement(tagName);

// modify attributes

    // className
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
    // element.className

    // classList
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    // element.classList

    // ... More (see console)
    // element.id
    // element.style

// insert elements
// INSIDE 
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// document.body.appendChild(p);
// BEFORE
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// AFTER
// There is no insertAfter method. It can be emulated by combining the insertBefore method with nextSibling.

