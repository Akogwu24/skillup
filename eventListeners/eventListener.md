explain EventListeners with Examples
list all tyes of events
# Event Listener

In plain, Events are actions that happen when the user or browser manipulates a webpage/webApp. thus, we can say:

An Event Listener is a Procedure or function in a computer program that waits(listens) for an event or events to happen before getting activated.
these Events can be of different types such as click events on the mouse, keypress on keyboard, scroll and so on.
The Event Listener basically listens for inputs or signal and sets the event handler in motion ones it encounter the event(signal) it listens for.

The `addEventListener()` is an inbuilt function in JavaScript which takes the event to listen for, a second argument to be called whenever the described event gets fired and an optional  useCapture parmeter. 

Any number of event handlers can be added to a single element without overwriting existing event handlers.


JavaScript event listener can be added in three ways
1. HTML global onevent attributes eg   `onClick`
2. JQuery event method
3. The DOM API's `addEventListener()` method


### addEventListener() Syntax is simply written as
```
target.addEventListener(event, function, useCapture)
```

*  **Target**: the HTML element you wish to add your event handler to. This element exists as part of the Document Object Model (DOM).
* **Event**: a string that specifies the name of the event. We already mentioned load and click events.
* **Function**: specifies the function to run when the event is detected. This is the magic that can allow your web pages to change dynamically.
* **UseCapture**: an optional Boolean value (true or false) that specifies whether the event should be executed in the capturing or bubbling phase. In the case of nested HTML elements (such as an img within a div) with attached event handlers, this value determines which event gets executed first. By default, it's set to false which means that the innermost HTML event handler is executed first (bubbling phase).
* **Event Prameter**: The event Parmeter usuallu writtne as `event` or simply `e` is the element on which the event listened for occured and itt can be used to get the properties of the element.
```
button.addEventListener('click', (e)=>{ //e is the event parameter whicch is the element we listened on for the 'click' event
  console.log(e.target.id) //the Id of the button element
})
```

##  Some Types of Event
1. keyboard
2. mouse
3. Focus
4. Clipboard
5. CSS transition 
6. FullScren
7. Gamepad
8. Inputs
9. Media
10. Text Selection
