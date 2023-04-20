# **In this project I created my own UI library.**

## *To get the elements from the page, the "$" function is used.*

Example: ``$('#example');``

# Working with *CSS classes*.

# .addClass()
> ***Adds the specified class(es) to each element in the set of matched elements***.

``$("p").addClass("myClass yourClass");``

# .removeClass()
> ***Remove a single class or multiple classes from each element in the set of matched elements***.

``$("p").removeClass("myClass yourClass");``

# .toggleClass()
> ***Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.This method takes one  class as its parameter. In the first version, if an element in the matched set of elements already has the class, then it is removed; if an element does not have the class, then it is added***.

For example, we can apply ``.toggleClass()`` to a simple ``<div>``:

``<div class="tumble">Some text.</div>``

The first time we apply ``$("div.tumble").toggleClass("bounce");``, we get the following:

``<div class="tumble bounce">Some text.</div>``

The second time we apply ``$("div.tumble").toggleClass("bounce")``, the ``<div>`` class is returned to the single tumble value:

``<div class="tumble">Some text.</div>``

# Working with *event handlers*.

# .on()
> ***Attach an event handler function for one event to the selected elements***.

``.on(event, handler)``
> event:
Type: String;
One event type such as "click" or "keydown.myPlugin".

> handler:
Type: Function(Event event Object [, Anything extraParameter ] [, ... ])
A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.

# .off()
> Remove an event handler.

``.off(event, handler)``

> event:
Type: String;
One event type such as "click", "keydown.myPlugin", or ".myPlugin".

> handler:
Type: Function(Event event Object)
A handler function previously attached for the event(s), or the special value false.

# .click()
> Bind an event handler to the "click" JavaScript event, or trigger that event on an element.

``.click(handler)``

> handler:
Type: Function(Event eventObject)
A function to execute each time the event is triggered.

> ***This method is a shortcut for ``.on("click", handler)``***

> **If you call the function without an argument, the click on the element will be initialized.**

# Working with **attributes**

# .setAttr()
> ***The method takes two arguments, the attribute name and the value for the attribute.***

``.setAttr(attrName, value)``

# .hasAttr()
> ***The method allows you to check an element for the presence of an attribute. Returns either true or false.***

``.hasAttr(attrName)``

# .getAttr()
> ***The method allows you to get the value of the attribute passed as an argument***.

``.getAttr(attrName)``

# .removeAttr()
> ***The method accepts one argument, the name of the attribute to be deleted.***

``.removeAttr(attrName)``

# .toggleAttr()
> ***The method accepts one argument, the name of the attribute. If the attribute is missing it will be added, if it exists it will be deleted.***

``.toggleAttr(attrName)``

# Methods for working with ***elements***

# .html()
> ***Get the HTML contents of the first element in the set of matched elements.***

Example:
```
<div class="example"> Hello World </div>
$('.example').html() // Hello World
```

> ***If an argument is passed to the method, the contents of the element will be replaced with the passed value.***

Example:
```
<div class="example"> Hello World </div>
$('.example').html('Replace text') // <div class="example"> Replace text </div>
```

# .eq()
> ***Reduce the set of matched elements to the one at the specified index.***

Example:
```
<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>

$('li').eq(2) // <li> list item 3 </li>
```

# .index()
> ***Search for a given element from among the matched elements.***

Example:
```
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>

$('#bar').index() // 1
```

# .find()
> ***Get the descendants of each element in the current set of matched elements, filtered by a selector, object or element.***

``.find(selector)``

Example:
```
<ul class="level-1">
  <li class="item-i">I</li>
  <li class="item-ii">II
    <ul class="level-2">
      <li class="item-a">A</li>
      <li class="item-b">B
        <ul class="level-3">
          <li class="item-1">1</li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
        </ul>
      </li>
      <li class="item-c">C</li>
    </ul>
  </li>
  <li class="item-iii">III</li>
</ul>
```
```
$('.level-3').find('li')

<li class="item-1">1</li>
<li class="item-2">2</li>
<li class="item-3">3</li>
```

# ..closest()
> ***For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.***

``.closest(selector)``

> selector
Type: Selector
A string containing a selector expression to match elements against.

# .siblings()
> ***Get the siblings of each element in the set of matched elements, optionally filtered by a selector.***

``elem.sibling()``

# ***Animation***

# .fadeIn()
> ***Display the matched elements by fading them to opaque.***

``.fadeIn(number)``

> duration (number)
Type: Number
A string or number determining how long the animation will run.
> complete
Type: Function()
A function to call once the animation is complete, called once per matched element.

# .fadeOut()
> ***Hide the matched elements by fading them to transparent.***

``.fadeOut(number)``

> duration (number)
Type: Number
A string or number determining how long the animation will run.
> complete
Type: Function()
A function to call once the animation is complete, called once per matched element.

# .fadeToggle()
> ***Display or hide the matched elements by animating their opacity.***

``.fadeToggle(number)``

> duration (number)
Type: Number
A string or number determining how long the animation will run.

# ***Style*** Documentation

# ***-General***

# ***base***

```
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
```

# ***typography***

```
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}
```

# ***variables***

```
//Colors
$primary: #025fff;
$success: #2a9924;
$warning: #ffc907;
$danger: #ea2e41;
$dark: #343a40;
```

# ***-Helpers***

# ***align***

```
.text-center {
  text-align: center;
}

.block-center {
  margin: 0 auto;
}
```

# ***display***

```
.hidden {
  visibility: hidden;
}

.visible {
  visibility: visible;
}

.d-none {
  display: none;
}

.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.f-centered {
  justify-content: center;
  align-items: center;
}

.f-space-around {
  justify-content: space-around;
}

.f-space-between {
  justify-content: space-between;
}
```

# ***font***

```
.fz-16 {
  font-size: 16px;
}
.fz-20 {
  font-size: 20px;
}
.fz-24 {
  font-size: 24px;
}
.bold {
  font-weight: bold;
}
.thin {
  font-weight: 300;
}
.italic {
  font-style: italic;
}
.text-color-primary {
  color: $primary;
}
.text-color-dark {
  color: $dark;
}
.text-color-danger {
  color: $danger;
}
.text-color-warning {
  color: $warning;
}
.text-color-success {
  color: $success;
}
```

# ***margin***

```
.m10 {
  margin: 10px;
}
.m20 {
  margin: 20px;
}
.mt-10 {
  margin-top: 10px;
}
.mb-10 {
  margin-bottom: 10px;
}
.ml-10 {
  margin-left: 10px;
}
.mr-10 {
  margin-right: 10px;
}
.mt-20 {
  margin-top: 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
.ml-20 {
  margin-left: 20px;
}
.mr-20 {
  margin-right: 20px;
}
```

# ***padding***

```
.p10 {
  padding: 10px;
}
.p20 {
  padding: 20px;
}
.pt-10 {
  padding-top: 10px;
}
.pb-10 {
  padding-bottom: 10px;
}
.pl-10 {
  padding-left: 10px;
}
.pr-10 {
  padding-right: 10px;
}
.pt-20 {
  padding-top: 20px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pl-20 {
  padding-left: 20px;
}
.pr-20 {
  padding-right: 20px;
}
```

# ***sizes***

```
.w-100 {
  width: 100%;
}
.w-50 {
  width: 50%;
}
.w-300px {
  width: 300px;
}
.w-500px {
  width: 500px;
}
.h-100 {
  height: 100%;
}
.h-50 {
  height: 50%;
}
.h-300px {
  height: 300px;
}
.h-500px {
  height: 500px;
}
```
