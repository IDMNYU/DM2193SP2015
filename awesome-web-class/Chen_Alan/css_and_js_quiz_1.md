# CSS & Javascript Quiz

# CSS Quiz

# Alan Chen

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
     p > .kittens {
	     
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
     .container > div {
	     
     }
```

### 3. 
```css
    /*
        - Select all of the elements with the class name "stuff" but not with the class name "blah"
     */
    .stuff:not(.blah) {
	 
	 }
```

### 4. 
```css
    /*
        - Select the last list-item element from the unordered list with the class name "posts"
     */
    .posts > li:last-child {
	
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
Selectors select elements from the DOM
## Why is it so important to use `.classes` instead of `elements` or `#ids`?
Classes allows for flexibility, longevity and versatility. ID's has the highest css specificity will override other types of selectors and will lock your stylesheet.
## List all of the parts of the box model.
margin, outline, border padding, content
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
pseudo classes - active, link, checked, first, visited
pseudo elements - first-line, first-letter, after, before
## Why are class names on the `<HTML>` tag useful?
Top level classes allows you to cascade your css to every element in the html tag.

## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
    <script>
    	alert("hello");
    </script>
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
    console.log(document.body.style.backgrounfColor);
    or
    document.getElementsByTagName('body')[0].style.backgroundColor;
```

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element
    var cookie = document.getElementbyId('chocolate-chip-cookies');
    cookie.click(function(){
		alert(cookie.id);
		
		//or
		
		var x = e. currentTarget;
        alert(x.id);
	}
    );
    
```

## What is the difference between document.getElementByID and document.querySelectorAll
document.getElementByID returns one element
document.querySelectorAll returns an array of elements
## Describe how variable scope works in Javascript
Global variable will exist throughout the javascript file.

Local scope differs from global scope because scope changes inside function and the variable be local to the function only.

var - declares a new scope

## What is the difference between Javascript and jQuery?
Javascript is client side scripting programming language while jQuery is a javascript library.
Jquery wraps native javascript. More concise methods. Cross browsers compatibility
