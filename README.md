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

> **If you call the function without an argument, the click on the element will be initialized**
