# JavaScript DOM
The **DOM** is the structural representation of the source HTML document in the form of node trees and Objects such that Programming Languages such as JavaScript can connect to and manipulate its structure, Style or Content.

It is crucial to understand that the DOM is essentially an interface or API to the web page and not equavelent to the source HTML itself. This is exemplified below.

### HTML and The DOM
1. Let’s take this HTML document for example:
```
    <!doctype html>
    <html>
        Hello, world!
    </html>
```
The document is missing a `<head>` and `<body>` element, which is a requirement for valid HTML. But still the resulting DOM tree is:
```
    html
        head
        body
            Hello, world!
```

2. When the DOM is manipulated by javaScript new contents can be added or removed but the source HTML remains the same.
hence DOM is not exactly the same as the HTML.

3. HTML includes pseudo-elements but the DOM does not include pseudo-elements.

4. Element given display of none are no part of the DOM but still remains as part of the HTML

