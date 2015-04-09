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
//console.log('before');
//var myHeading  = document.getElementById('my-heading');
//
//var myHeading2  = document.getElementsByClassName('my-heading')[0];
//console.log(myHeading === myHeading2);
var myBox = document.createElement('div');
myBox.classList.add('my-box');
myBox.innerHTML='My Box';
document.body.appendChild(myBox);
myBox.remove();
console.log(myBox);
var myButton = document.getElementsByClassName('my-button')[0];
var parentDiv = myButton.parentNode;
parentDiv.insertBefore(myBox,myButton);
myButton.addEventListener('click',function(e){
    console.log(e.currentTarget);
    myBox.classList.toggle('inactive');
});
// window.onload = function(){
//     console.log('after');
// }
//
//document.addEventListener('DOMContentLoaded', function(event) {
//    console.log('in between');
//});
//
//document.addEventListener('DOMContentLoaded', function(event) {
//    console.log('again');
//});
//
//document.addEventListener('DOMContentLoaded', function(event) {
//    console.log('and again');
//});

// window.onload = function(){
//     console.log('oops');
// }

//window.addEventListener('load', function(){
//    console.log('after');
//});
//
//window.addEventListener('load', function(){
//    console.log('after 2');
//});
//
