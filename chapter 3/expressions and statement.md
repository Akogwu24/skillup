# JAVASCRIPT STATEMENT WITH
In reality a Statement is a series or combination of terms which makes sense and it conforms to the rules of that particular language.
Similarly, Statements in javaScript are executable sequence of syntax that follows the ECMAScript specification (javaScript language).
It make a complete sense to the JavaScript engine.
Examples of statement in JavaScript is *`console.log("hello)`*
which simply instructs the JavaScript engine to print or output the text "**hello**"
Another example of statement in JavaScript is `const name = "Akogwu"` This is a statement that instructs the JavaScript engine to assign a *string* data type 

> Akogwu

 to the constant variable 

> name

  
# JAVASCRIPT EXPRESSION
In JavaScript Any unit of code that outputs a value is an expression. In other words expressions are single units of JavaScript that the engine can evaluate.
Some  categories of JavaScript expression are:
  ### **Arithmetic Expressions** 
Arithmetic expressions evaluate to a numeric value. example is 

    daysInAMonth++ //periodic increment by one unit or unary operator
   
    250 //value


### **String Expressions**
String expressions are expressions that evaluate to a string. example is

    "something"

    "JavaScript" + "is"+ "bae" //which evaluates to "JavaScript is bae"


### Assignment Expressions
When expressions use the = operator to assign a value to a variable, it is called an assignment expression. Examples include

    const assigned = 3 //

### **Logical Expressions**

Expressions that evaluates to the Boolean value (true or false). This set of expressions often involve the usage of logical operators && (AND), ||(OR) and !(NOT). Examples include

    a && b //evaluates to true if a and b both satisfy the given condition
    a || b //evaluates to true if a or be satisfy the condition



# Statements

A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.

## Types of JavaScript Statement
### Declaration Statements
Such type of statements create variables and functions by using the var, let and function statements respectively. Examples include

    let age; //variable declaration
    
    function greet(message) {  //function declaration
	    console.log(message);   
    }

### Conditional Statements:

Conditional statements execute statements based on the value of an expression. Examples of conditional statements includes the if...else and switch statements.

    if (expression) {
	    statement 1 
	} else {
		statement 2
	}

### Loops

Looping statements includes the following statements: while, do/while, for and for/in. Jump statements are used to make the JavaScript interpreter jump to a specific location within the program. Examples of jump statements includes break, continue, return and throw.

 

### Expression Statements
Wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression.

    var a = (b = 1); // since (b = 1) is an assignment expression and not a statement


## Difference between Statement and Expression
1. Expressions return a value while statement do not return a value.
2. Using expressions consistently leads to code that is both safer and more compact.
3. Expression is mostly associated with equality sign but statements are not

## Functions
A function is a chunk of statements and expressions that perform a particular task. its delared with the keyword function in JavaScript. except in the case of Arrow Function which is declared with an Arrow.
example od a function can be a function to multiply 2 numbers.
it can be written as 

    function multiplyByTwo(number) {
	    return number*2
    }
    console.log(multiplyByTwo(35)) //this should ouput 70





 

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
