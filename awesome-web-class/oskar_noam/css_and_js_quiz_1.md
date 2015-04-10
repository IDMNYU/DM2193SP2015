# CSS & Javascript Quiz

# CSS Quiz

## What is the specificity number for the following selectors

### 1. 
```CSS
.apples {
    /* 10 */
}
```

### 2. 
```CSS
#honeycrisp {
    /* 100 */
}
```

### 3. 
```CSS
h1 span {
    /* 2 */   
}
```

### 4. 
```CSS
.apples .apple.fuji {
    /* 30 */ 
}
```

### 5. 
```CSS
.apples + .oranges {
    /* 20 */
}
```

### 6.
```
* {
    /* 0 */    
}
```

## Create your own selector equations for the following criteria:

### 1. 
```css
    /*
        - Select the direct child of a paragraph tag with the class "kittens"
        /*
        .kittens > p
            <p class="kittens">

}
     */
```

### 2. 
```css
    /*
        - Select a child div from a parent div with class "container"

        - The child has an id of "cid-123"
        - The child has a class name of "item"
        - The selector specificity number is 20
                .contrainer > .item

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
        .posts > li:last-child
     */
```

### 5. 
```css
    /*
        - Select the Heading 1 with the class of "logo" and an id of "logo"
        - Specificity is 10
        .logo
     */
```

## What are selectors *selecting*? from where?
/*elements from DOM*/
## Why is it so important to use `.classes` instead of `elements` or `#ids`?
/*IDS become locked in. classes are bettery for longevity*/

## List all of the parts of the box model.
/*
content
heading
border
outline
margin
*/
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
/*

:hover :link :active :focus

::before ::after
*/
## Why are class names on the `<HTML>` tag useful?
/**/

## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    /*alert('yo');
    */
```

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
    document.getElementById(;mac-n-cheese');
    document.queryselector(;mac-n-cheese');
    $('#mac-n-cheese');
```

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
```

### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console

    console.log(document.body.stlye.backgroundColor);

    body
```

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element

        var cookie = document.querySelector(;chocolate-chi[-cookie');
        cookie.addEventListener('click', function(e){
                alert(cookie.id);
        }
```

## What is the difference between document.getElementByID and document.querySelectorAll
/*.getElementByID returns a single element and document.querySelector returns an array*/
## Describe how variable scope works in Javascript
/*When you define a variable with var in front, it establishes a new scope. Javascript uses scope chains to establish the scope for a given function. There is typically one global scope, and each function defined has its own nested scope. Any function defined within another function has a local scope which is linked to the outer function. It's always the position in the source that defines the scope.*/
## What is the difference between Javascript and jQuery?
/*JavaScript is a scripting language and JQuery is a library of functions. JQuery gives you more consise methods of what Javascript already does. It also provides cross platform*/
