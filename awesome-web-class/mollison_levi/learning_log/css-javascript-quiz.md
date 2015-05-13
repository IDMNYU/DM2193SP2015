# CSS & Javascript Quiz

# CSS Quiz
## Courtest of John Ward
## What is the specificity number for the following selectors

### 1. 
```CSS
.apples {
    
}
```
10

### 2. 
```CSS
#honeycrisp {
    
}
```
100

### 3. 
```CSS
h1 span {
    
}
```
2

### 4. 
```CSS
.apples .apple.fuji {
    
}
```
30

### 5. 
```CSS
.apples + .oranges {
    
}
```
20

### 6.
```
* {
    
}
```
0

## Create your own selector equations for the following criteria:

### 1. 
```css
    /*
        - Select the direct child of a paragraph tag with the class "kittens"
     */
```
.kittens > p

### 2. 
```css
    /*
        - Select a child div from a parent div with class "container"
        - The child has an id of "cid-123"
        - The child has a class name of "item"
        - The selector specificity number is 20
     */
```
.container .item

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"
     */
```
.stuff:not(.blah)

### 4. 
```css
    /*
        - Select the last list-item element from the unordered list with the class name "posts"
     */
```
.posts li:last-child
.posts > li:last-child
.posts > :last-child

### 5. 
```css
    /*
        - Select the Heading 1 with the class of "logo" and an id of "logo"
        - Specificity is 10
     */
```
.logo

## What are selectors *selecting*? from where?
DOM Elements

## Why is it so important to use `.classes` instead of `elements` or `#ids`?
IDs make larger stylesheets unmanageable

## List all of the parts of the box model.
Content > Padding > Border > Outline > Margin

## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
:hover, :link, :active, :focus
::berfore ::after

## Why are class names on the `<HTML>` tag useful?
Statefulness for the whole page


## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
```
window.alert("Hello world!");

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
```
document.getElementById('mac-n-cheese');
document.querySelector('#mac-n-cheese');
$('mac-n-cheese');

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
```
document.getElementsByClassName("turtles");
document.querySelectorAll('.turtles');
$('.turtles');

### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console
```
console.log(document.body.style.backgroundColor);
document.getElementsByTagName('body')[0].style.backgroundColor;

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element
```
var cookie = document.getElementById('chocolate-chip-cookies');
cookie.addEventListener("click", function( event ) {
    window.alert(cookie.id);
  }, false);
  cookie.addEventListener("click", function(e) {
    var el = e.currentTarget;
    alert(el.id);
  }, false);

## What is the difference between document.getElementByID and document.querySelectorAll
getElementById returns a single element. querySelectorAll returns an array.

## Describe how variable scope works in Javascript
When you define a variable with var, it establishes a new scope. Redeclaration will throw a warning, unless you're in a new scope (in a function)

## What is the difference between Javascript and jQuery?
jQuery is a library of Javascript stuff. Javascript is an actual language. jQuery wraps native functionality and expands on it. More concise methods to do the same things that Javascript does. Used for cross-browser compatability - that kind of stuff.