# CSS & Javascript Quiz

# CSS Quiz

## What is the specificity number for the following selectors

### 1. 
```CSS
.apples {
     // one class specificity

     10
    
}
```

### 2. 
```CSS
#honeycrisp {

// one id

    100
    
}
```

### 3. 
```CSS
h1 span {

    // two elements

    2
    
}
```

### 4. 
```CSS
.apples .apple.fuji {

// 2 class
    30
    
}
```

### 5. 
```CSS
.apples + .oranges {

    // one class
    20
    
}
```

### 6.
```
* {
    
    0
}
```

## Create your own selector equations for the following criteria:

### 1. 
```css
    /*
        - Select the direct child of a paragraph tag with the class "kittens"
        .kittens > p{}
     */
```

### 2. 
```css
    /*
        - Select a child div from a parent div with class "container"


        - The child has an id of "cid-123"
        .container > #cid-123{}
        - The child has a class name of "item"

        .container > .item
        - The selector specificity number is 20

        container > .item{}


     */
```

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"

        .stuff:not(.blah)
     */
```

### 4. 
```css
    /*
        - Select the last list-item element from the unordered list with the class name "posts"
        .posts li:last-child
     */
```

### 5. 
```css
    /*
        - Select the Heading 1 with the class of "logo" and an id of "logo"
        - Specificity is 10

        .logo()
     */
```

## What are selectors *selecting*? from where?  
- elements, html document

## Why is it so important to use `.classes` instead of `elements` or `#ids`?

- ids to specific. The classes make it more convenient to modify code

## List all of the parts of the box model

content > padding > border > outline > margin

## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html

:hover :link :active :focus
:before :after
pseudo elements- generate extra markup

## Why are class names on the `<HTML>` tag useful?
cascade all the elements


## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    alert("Yo");
```

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
    document.getElementById("mac-n-cheese");
```

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
    document.getElementsByClassName("turtles");
```

### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console

    console.log(document.getElementsbyTagName("body")[0].style.background);

    // also
    document.body.style.background

```
    

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element

    var cookie = document.getElementById("chocolate-chip-cookies");
    cookies.addEventListener("click", function()
    {
        alert("The id is" + cookie);

    }
    );


```

## What is the difference between document.getElementByID and document.querySelectorAll
// getElementById gets the element by ID
// query selector - get back 0 or many. Could search by any thing (class, id)
## Describe how variable scope works in Javascript

global scope- can use this inside functions and outside functions
local scope- exist only within the functions

## What is the difference between Javascript and jQuery?

Javascript - the whole scripting language. 

jQuery- wraps the methods, library and used for cross browser compatalibilty 
