# CSS & Javascript Quiz

# CSS Quiz

## What is the specificity number for the following selectors
### 1. 
```CSS
.apples {
    
}
Specificity Number: 10
```

### 2. 
```CSS
#honeycrisp {

```
Specificity Number: 100

### 3. 
```CSS
h1 span {
    20
}
```
Specificity Number: 2
### 4. 
```CSS
.apples .apple.fuji {
 
}
Specificity Number: 30
```

### 5. 
```CSS
.apples + .oranges {
    
}
Specificity Number: 20
```

### 6.
```
* {
}
```
Specificity Number: 0


## Create your own selector equations for the following criteria:

### 1. 
```css
    /*
        - Select the direct child of a paragraph tag with the class "kittens"
                .kitten > *
        <p> 
            <ul class="kittens">
                <li></li>
            </ul>
        </p>


     */
```

### 2. 
```css
    /*
        //- Select a child div from a parent div with class "container"
        //- The child has an id of "cid-123"
        //- The child has a class name of "item"
        //- The selector specificity number is 20
        .container .item 
        <div class= "container">
            <div id= "cid-123" class="item"</div>
        </div>
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
DOM Elements.
## Why is it so important to use `.classes` instead of `elements` or `#ids`?
With classes, you're able to use it more than once. In other words, you can create a group of properties and attribute it to different elements an infinite number of times. With #ids and elements, it can only be used as a way to specifically alter one element. Ids are only special to that one element that you assign to it. Also better for the longevity of the box model
## List all of the parts of the box model.
You have the content, padding, border, outline 
## What are some examples of pseudo classes and pseudo elements? -- http://www.d.umn.edu/~lcarlson/csswork/selectors/pseudo_dif.html
:hover :link :active :focus :before :after
(Psuedo elements: )
## Why are class names on the `<HTML>` tag useful?
Its allows you to create a sort of default setting for your website. Scoping your styles and pretty good for refreshing your page.


## Javascript Coding Examples

### 1: 
```JS
    // Create a javascript alert
```
alert('yo');

### 2: 
```JS
    // Select an element with the ID 'mac-n-cheese'
```
 document.getElementById('mac-n-cheese');

### 3: 
```JS
    // Select all of the elements with the class name 'turtles'
```
    document.getElementByClassName('.turtles');
    pr $('turtles');
### 4: 
```JS
    // Log the background color from the style property on the body in the document to the console
```
    console.log(document.body.style.backgroundColor);

### 5: 
```JS
    // Select an element with the ID 'chocolate-chip-cookies'
    // Store the selection in a variable named 'cookie'
    // Add a `click` event to the element
    // Alert the ID of the element
```

var cookie= document.querySlector('chocolate-chip-cookie');
chookie.addEventListener('click', function(){
});

var el= e.currentTarget;
alert(el.id);
});

var callback= function(e)_
var el  or 

 cookie.addEventListener("click", function( event ) {
     window.alert(cookie.id);
   }, false);
+  cookie.addEventListener("click", function(e) {
+    var el = e.currentTarget;
+    alert(el.id);
+  }, false);


## What is the difference between document.getElementByID and document.querySelectorAll
document.getElementByID = this gives you a single element back
document.querySelectorAll= this gives you the elements back in an array

## Describe how variable scope works in Javascript
When you use var, you can only declare it once. Functions and other syntax defines scopes
## What is the difference between Javascript and jQuery?
Javascript is a coding/scripting language that allows the browswer to interact with the user. jQuery is a bunch of libraries and coding that is built on top of the Javascript language. JQuery is not a language of itself.
Jquery also wraps native functionality, and more concise methods to do some of the same thigns JS does. It also has cross compatibility.

