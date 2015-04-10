# CSS & Javascript Quiz

# CSS Quiz

## What is the specificity number for the following selectors

### 1. 
```CSS
.apples {
    
}

10
```

### 2. 
```CSS
#honeycrisp {
    
}

100
```

### 3. 
```CSS
h1 span {
    
}

2
```

### 4. 
```CSS
.apples .apple.fuji {
    
}

30
```

### 5. 
```CSS
.apples + .oranges {
    
}

20
```

### 6.
```
* {
    
}

0
```

## Create your own selector equations for the following criteria:

### 1. 
```css
    /*
        - Select the direct child of a paragraph tag with the class "kittens"
     */

     <p><div class="kittens"></p>

    p > .kittens{

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

     <div class="container">
        <div id="cid-123" class="item">
        </div>
    </div>

     .container > .item{

     }
```

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"

        .stuff:not(.blah){

        }
     */
```

### 4. 
```css
    /*
        - Select the last list-item element from the unordered list with the class name "posts"

        .posts li:last-child{

        }

        .posts > li:last-child{

        }

        .posts > :last-child{

        }
     */
```

### 5. 
```css
    /*
        - Select the Heading 1 with the class of "logo" and an id of "logo"
        - Specificity is 10

        <h1 class="logo" id="logo"></h1>

        .logo{

        }
     */
```

## What are selectors *selecting*? from where?
They are selecting an element from DOM.
## Why is it so important to use `.classes` instead of `elements` or `#ids`?
Classes are flexible. IDs can only be used once on the page and elements are not specific enough. Classes are better for the longevity of the stylesheet as it grows.
## List all of the parts of the box model.
Margin, border, padding, content.
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
:hover, :link, :active, :focus, :last-child, :first-child, ::before, ::after, etc.
Pseudo elements aren't actually visible but you mark them up as if they are
## Why are class names on the `<HTML>` tag useful?
Having CSS that applies to all the code within the HTML tag. Parses whole document at once.

## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    alert('Hi I'm an alert');
```

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
    document.getElementById("mac-n-cheese");
    document.querySelector('#mac-n-cheese');
    $('#mac-n-cheese'); 
```

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
    document.getElementsByClassName("turtles");
    document.querySelectorAll('.turtles');
    $('.turtles');
```

### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console
    console.log(document.body.style.backgroundColor);
    document.getElementsByTagName('body')[0].style.backgroundColor;
```

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element
    var cookie = document.getElementById("chocolate-chip-cookies")
    cookie.addEventListener("click", function(e){
        alert(cookie.id);

        var el = e. currentTarget;
        alert(el.id);
    });

```

## What is the difference between document.getElementByID and document.querySelectorAll
The first you get back one element, and the second you get back 0 to many (an array)
## Describe how variable scope works in Javascript
var cats

function(){
    var cats //this will throw a warning "redeclaration"

    function() {
        var cats //third scope
    }
}
## What is the difference between Javascript and jQuery?
Javascript is a language. jQuery is a Javascript library. It wraps native functionality and gives more concise methods of doing things Javascript does.
