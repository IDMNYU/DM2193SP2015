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
//var myHeading = document.getElementById("my-heading");

var mything = 1;

function stuff() {
	var mything = 2;
	console.log('inside stuff: ', mything);
}
console.log('outside stuff: ', mything);

stuff();
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

// Var & Scope
// var mything = 1;

// function stuff() {
//     var mything = 2;
//     console.log('inside stuff', mything);
// }

// console.log('after stuff', mything);

// stuff();

/////////////////////////////////////

// Grabbing Existing Elements
var myHeading = document.getElementById("my-heading");
// var myHeading2 = document.getElementsByClassName("my-heading")[0];
// console.log(myHeading === myHeading2);

// myHeading.style.backgroundColor = "#ccc";
// myHeading.style.padding = "10px 10px 20px 10px";
// myHeading.style.position = "relative";

// var myTimeBasedFunction = function(){
//     var currentTop = myHeading.style.top || '0px';
//     console.log('timeout', currentTop, (parseInt(currentTop.split('px')[0], 10) + 10));
//     myHeading.style.top = (parseInt(currentTop.split('px')[0], 10) + 10) + 'px';
// };

// setTimeout(myTimeBasedFunction, 2000);
// setInterval(myTimeBasedFunction, 4000);

////////////////////////////////////////////////

// className
// https://developer.mozilla.org/en-US/docs/Web/API/Element/className
// element.className

// myHeading.className = "my-alternate-heading"; // Completely change the class
// myHeading.className = myHeading.className + " my-alternate-heading"; // Append a class

// classList
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// element.classList

myHeading.classList.add('my-alternate-heading');
// myHeading.classList.remove('my-heading');

///////////////////////////////////////
// create element
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
var myBox = document.createElement('div');

myBox.classList.add('my-box');
myBox.innerHTML = 'My Box';

// INSIDE
document.body.appendChild(myBox);
console.log(myBox);

// Remove an element from the DOM
// myBox.remove();

// BEFORE
// Get a reference to the element, before we want to insert the element
var myButton = document.getElementById("my-button");
console.log(myButton);
// Get a reference to the parent element
var parentDiv = myButton.parentNode;
// Insert the new element into the DOM before sp2
parentDiv.insertBefore(myBox, myButton);

// AFTER
parentDiv.insertBefore(myBox, myButton.nextSibling);

// insert elements
// INSIDE 
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// document.body.appendChild(p);
// BEFORE
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// AFTER
// There is no insertAfter method. It can be emulated by combining the insertBefore method with nextSibling.

////////////////////////////
// Combing EVENTS with Manipulation

myButton.addEventListener('click', function(e){
    // e is a MouseEvent object
    // console.log(myButton === e.currentTarget);
    // console.log(e.target);
    
    // I want to change the blue box class name when i click the button
    // 

    myBox.classList.toggle('inactive');
});

















