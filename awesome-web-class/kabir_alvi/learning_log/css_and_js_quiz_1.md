# CSS & Javascript Quiz

# CSS Quiz

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
     p>.kittens{

     }
```

### 2. 
```css
    /*
        - Select a child div from a parent div with class "container"
        - The child has an id of "cid-123"
        - The child has a class name of "item"
        - The selector specificity number is 20
     */
     .container>.item{

     }
```

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"
     */
     stuff:not(.blah){

     }
```
### 4. 
```css
    /*
        - Select the last list-item element from the unordered list with the class name "posts"
     */
     .posts li:last-child{

     }
```

### 5. 
```css
    /*
        - Select the Heading 1 with the class of "logo" and an id of "logo"
        - Specificity is 10
     */
     .logo{

     }
```

## What are selectors *selecting*? from where? Selectors are selecting the HTML elements, from the HTML document
## Why is it so important to use `.classes` instead of `elements` or `#ids`? Reusability of styles
## List all of the parts of the box model. Content,Padding,Border,Outline,Margin
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
Pseudo element: p::first-line{}
Pseudo class: p:hover{}
## Why are class names on the `<HTML>` tag useful?
They identify elements with common traits/styles, cascading the elements

## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    alert("hello");
```

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
    $m = $("#mac-n-cheese");
```

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
    var turtles = document.getElementsByClassName("turtles");
```

### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console
    console.log(document.body.style.backgroundColor);
```

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element
    var cookie = document.getElementById("chocolate-chip-cookies");
    cookie.addEventListener("click",function(){
        alert(cookie.id);
    });

```

## What is the difference between document.getElementByID and document.querySelectorAll
document.getElementByID returns one element, document.querySelectorAll returns a list of elements
## Describe how variable scope works in Javascript
two same variables cannot exist within the same scope, two variables with the same name can exist within different scopes
## What is the difference between Javascript and jQuery?
jQuery is a Javascript library, Javascript is the whole language