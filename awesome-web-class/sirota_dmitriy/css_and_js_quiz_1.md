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
     */
     
     .kittens > * {
     
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
     
     .container .item {
     
     }
```

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"
     */
     
     .stuff:not(.blah)) {
     
     }
```

### 4. 
```css
    /*
        - Select the last list-item element from the unordered list with the class name "posts"
     */
     
     .posts li:last-child {
     
     }
```

### 5. 
```css
    /*
        - Select the Heading 1 with the class of "logo" and an id of "logo"
        - Specificity is 10
     */
     
     .logo {
     
     }
```

## What are selectors *selecting*? from where?
    ## They select elements from the html document (DOM elements) that links to them.
## Why is it so important to use `.classes` instead of `elements` or `#ids`?
    ## Any element can be assigned a class, so we select them because if the <h1> tage changes to an <h2> tag, styling them by class name allows the style to remain the same, regardless of the element. We DON'T use ID's because they are waaaay too specific, and overriding them is almost impossible. And also, there can only be one element with that ID on the page, so it's almost the same thing as styling an element. And we DON'T style elements because they can change, as referenced above.
## List all of the parts of the box model.
    ## Margin -> Outline -> Border -> Padding -> Content <- Padding <- Border <- Outline <- Margin
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
    ## Pseudo classes: :hover, :link, :active, :focus.
    ## Pseudo elements: :first-child, :last-child, :nth-child, :first-letter, etc.
## Why are class names on the `<HTML>` tag useful?
    ## Multiple .html files can use the same .css file, so using a class on the html is useful for cases where (for example) you want the background of one page to be different than the other, and you can do that by applying the background to the class, as opposed to hte html element. Basically, you can differentiate between the html element on different pages.


## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    <script> alert('I am an alert'); </script>
```

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
    var x = Document.getElementById('mac-n-cheese');
```

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
    var y = Document.getElementsByClassName('turtles');
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
    
    var cookie = Document.getElementById('chocolate-chip-cookies');
    cookie.addEventListener('click', function(e){
        alert(cookie.id);
    });
```

## What is the difference between document.getElementByID and document.querySelectorAll
    ## QuerySelectorAll gets you back 0+ (in an array), while getElementById returns a single element.
## Describe how variable scope works in Javascript
    ## If you declare a variable outside of any functions, it is a global variable, and can be accessed anywhere, and will be changed/mutated when you perform operations with it. If you declare a variable outside a function, but then delcare the same one inside a function with the var keyword, it creates another variable, which can only be changed inside of the function. Outside the function, that variable no longer exists.
## What is the difference between Javascript and jQuery?
    ## jQuery is a Javascript library that has been optimized to write the most common functions and operations with fewer lines of code and cleaner syntax.
