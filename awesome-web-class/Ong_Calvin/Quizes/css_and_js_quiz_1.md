# CSS & Javascript Quiz

# CSS Quiz

## What is the specificity number for the following selectors

### 1. 
```CSS
.apples {
    
}

#Specificity: 10
```

### 2. 
```CSS
#honeycrisp {
    
}

#Specificity: 100
```

### 3. 
```CSS
h1 span {
    
}

#Specificity: 2
```

### 4. 
```CSS
.apples .apple.fuji {
    
}

#Specificity: 30
```

### 5. 
```CSS
.apples + .oranges {
    
}

#Specificity: 20
```

### 6.
```
* {
    
}

#Specificity: 0
```

## Create your own selector equations for the following criteria:

### 1. 
```css
    /*
        - Select the direct child of a paragraph tag with the class "kittens"
        
        .kittens > p 
        
     */
```

### 2. 
```css
    /*
        - Select a child div from a parent div with class "container"
        - The child has an id of "cid-123"
        - The child has a class name of "item"
        - The selector specificity number is 20
        
        .container .item
        
     */
```

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"
        
        .stuff:not(blah) 
        
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
        
        .logo
        
     */
```

## What are selectors *selecting*? from where?

//Selectors are selecting a target element, from css sheet

## Why is it so important to use `.classes` instead of `elements` or `#ids`?

//IDs are too specific, cannot override

## List all of the parts of the box model.

//Margin, outline, border, padding, content
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html

//Pseudo class: :ohover :link :active :focus
//Pseudo element: :before :after :first-letter 
## Why are class names on the `<HTML>` tag useful?

//With bigger files, you can immediately target certain elements in CSS easier. Without classes, the browser would have to parse through the entire page, using the specific CSS elements given. 
## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    
    //alert("Hello! I am an alert box!!");
```

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
    
    //document.getElementById('mac-n-cheese');
```

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
    
    //document.querySelectorAll('.turtles');
```

### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console
    
    //console.log(document.body.style.backgroundColor);
```

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element
    
    /*var cookie = document.querySelector('chocolate-chip-cookie');
    cookie.addEventListener('click', function(e){
        alert(cookie.id);
    };*/
```

## What is the difference between document.getElementByID and document.querySelectorAll

//Document.querySelector() returns an array. Document.getElementById() returns a single element.
## Describe how variable scope works in Javascript

//Variables declared within a JavaScript function, become LOCAL to the function. Local variables have local scope: They can only be accessed within the function.

//A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it. 

//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable. This code example will declare carName as a global variable, even if it is executed inside a function.
## What is the difference between Javascript and jQuery?

//JQuery is essentially an ehanced version of Javascript. It's like a library with many more functions and features for Javascript. Jquery wraps native functionality- gives you more concise methods. 