## Learn Javascript

# Module I: Introduction to programming

### Intro

- What is programming and how to learn it?
- What to do with Javascript?
- Programming in browser vs. programming on file system

### Hello World program

- Install NodeJS
- Install editor of choice ([Atom](https://atom.io/), [Brackets](//brackets.io/), [Sublime](https://www.sublimetext.com/), [Code](https://code.visualstudio.com/)...)
  - Install plugins (Emmet, linter, beautifier)
- Hello World program
  - Run `.js` file in browser
  - Run `.js` file via command line
- Push files to GitHub

### Variables and constants

- What is a variable?
- Variables vs. constants in Javascript
  - Changing constant objects in Javascript
- Naming conventions
- Variable scope (global and local)

### Data types

- Intro to data and binary numbers
- Data types in Javascript
  - Boolean (`true` i `false`)
  - Number
  - String (text)
  - Array
  - Object
  - Non-existing values (`null` i `undefined`)
- Primitive data vs. data structures
- `typeof` operator
- Type conversion

### Numbers and arithmetic

- Basic arithmetic operations (`+`, `-`, `*`, `/`)
- Modulo operator (`%`)
- Floating-point arithmetic errors
- Advance `Math` methods
- Conversions
  - String to number (`Number()`, `parseInt()`)
  - Translate binary (`parseInt('10100', 2)`) and hexadecimal (`parseInt('ffaadd', 16)`)
- Project: How long I have to learn to become an expert
- Project: Setup your business model

### Programming logic

- Intro to programming logic
- Comparison operators
- Logical operators (and, or, no)
- Conditional statements
  - `if`
  - `if-else`
  - `else if`
  - `switch`
- Project: Create a text adventure
- Project: Implement logic to check if user is underage

### Loops and iteration

- Basic loops
  - `while` loop
  - `do while` loop
  - `for` loop
- `break` and `continue`
- A flag variable

### Functions

- What is a function?
- Different ways of defining functions in JS
- Parameters and default parameters
- `return` statement
- Function invocation
  - Assign return value to a variable
- Pure vs. impure functions
- Arrow functions
- Anonymous functions
- Project: Create pure functions for calculate tax

### Working with arrays

- One-dimensional and two-dimensional arrays
- Adding element to array (`push()` method)
- Accessing array element (`array[index]`)
- `sort()` mutator method
- Array iteration
  - `for`, `forEach()`, `map()`
- Project: Find specific user in array of users
- Project: Find minimal number in array of numbers

### Objects

- Intro to data structures
- Three kind of objects in Javascript
  - Object as a dictionary
  - Object as a real-world model
  - Object as a tree
- Object iteration (`for in` and `hasOwnProperty`)
- Project: Find all occurrences of specific name in array
- Project: [Building a Cash Register](https://www.codecademy.com/courses/close-the-super-makert/0/1?curriculum_id=506324b3a7dffd00020bf661)

### JSON format

- Intro to JSON
- Basic methods: `JSON.parse()`, `JSON.stringify()`
- Project: Create an adress book in JSON file

### Object-oriented programming

- Classes and inheritance
  - Properties and methods
  - `constructor`, `super` and `this`
- Instantiate `new` objects
- Project: create game characters (class Hero and inheritors Elf and Orc)
- Project: create patient files (or movie database) with search

# Module II: Front-end programming

### Working in a browser environment

- Document Object Model (DOM)
  - Tree data structure
  - HTML vs. DOM
- Browser global objects: `window` and `document`
  - `window` properties and methods: `innerHeight`, `innerWidth`, `location`, `setTimeout(), open()`
  - `document` properties and methods: `activeElement`, `domain`, `location`, `referrer`
- Front-end vs. Back-end programming
- Project: Model HTML tree with JS object

### DOM manipulation

- Selectors:
  - `document.getElementById()`
  - `document.querySelector()`
  - `document.querySelectorAll()`
- [Adding DOM elements](https://jsfiddle.net/mudroljub/rhLggx3t/) (`appendChild`, `innerHTML`, `element.insertAdjacentHTML()`)
- Removing DOM elements (`removeChild` ili `innerHTML`)

### Styling with Javascript

- Styling with `style` attribute
  - Mapping CSS to JS
  - Styling with Javascript as a bad practice
- Styling with CSS classes

### Events

- Intro to Javascript events
  - mouse events (`click`, `dblclick`, `mousemove`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`)
  - keyboard events (`keydown`, `keyup`)
  - form events (`focus`, `blur`, `change`, `submit`)
  - global events (`DOMContentLoaded`, `load`, `resize`)
  - `DOMContentLoaded` vs. `window.onload`
- Adding event listeners
  - via attributes (`onclick`) vs. via method (`addEventListener`)
  - callback functions and passing arguments
  - `this` in arrow functions
  - `event` object and its properties
- Preventing default behavior (`event.preventDefault()`)
  - Prevent form submit
  - Prevend open URL
- Project: change text on hover
- Project: [element folllows mouse move](https://jsfiddle.net/mudroljub/du274n9z/)
- Project: prevent default behavior of some element

### Form validation

- Read `input` field value
- Form submit and validation
  - Validation with Javascript
  - Native browser validation
  - Regular expression
  - Send data to backend
- Project: [email validation](https://jsfiddle.net/mudroljub/h70xtpco/)
- Project: [regex for name, adress and email](https://jsfiddle.net/mudroljub/6b36w613/)
- Project: prevent default form submit, validate, then send

### Working with images

- Add and load images
- Change image size
- Change image source
- Project: change image on click
- Project: detect when all images are loaded
- Project: [create a dynamic photo gallery](https://jsfiddle.net/mudroljub/d4zwwp70/)

### Working with audio and video

- Loading audio and video files
- Playing multimedia files
- Project: Create a player with playlist

### Drawing and animation

- Drawing on `canvas`
- Main loop for animations
- Animate with `setInterval` and `requestAnimationFrame`
  - FPS (frames per second)
  - Delta time
- Interactive animations
- Project: Create animation triggered by user input

### jQuery library

- Adding a library
- Basic methods: `hide()`, `show()`, `toggle()`, `append()`, `addClass()`, `removeClass()`
- `jQuery` selector vs `document.querySelector`
  - JS element vs. jQuery object
- jQuery events
  - `$(document).ready` vs `window.onload`
- Project: show/hide section on click
- Project: add some jQuery UI element (menu, accordion, calendar...)
- Project: create a mini jQuery

### AJAX i API

- Asynchronous Javascript and HTML
  - AJAX methodology explained
  - `XMLHttpRequest` and `fetch`
- Application programming interface (API)
- Project: read some [public API](https://github.com/toddmotto/public-apis) and render HTML

### React

- React tools and ecosystem
- JSX format
- Components
  - Class vs. functional component
  - Component lifecycle
  - Render method
- `props`
  - Passing properties
  - Passing *handler* functions
- `state`
  - Initial state
  - Updating state
  - Updating parent state
- Styling
  - `className` attribute
  - Conditional CSS classes
- Routing
- Project: Render data from JSON API

### Node.js and NPM

- NPM ecosystem
  - Linter
  - Live server
  - localtunnel
- Global and local `npm install`
- Understand a `package.json` file

### Final project

- Create a single page application with search functionality via public API
- Code refactoring (optimisation and readability)
- Apply some code standard (JS Standard or Airbnb Code Style)
- Pusblish your app on GitHub Pages
