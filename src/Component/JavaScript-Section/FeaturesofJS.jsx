import React from "react";

export default function FeaturesJavaScript() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl">
        {/* Page Title */}
        <header>
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            Features of JavaScript
          </h1>  
          <p className="text-lg">   
            Explore why JavaScript is the most popular language for the web 
          </p>
        </header>

        {/* Intro Section */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">Why JavaScript?</h2>
          <p className="leading-relaxed">
           JavaScript is a compact, runtime-executed coding language. It is frequently employed to build responsive and engaging components in online platforms. JavaScript is quite simple to use since it is embedded within HTML. It is free to use and compatible across different systems.
          </p>
        </section>

        {/* Features List */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Lightweight & Fast:</span> Runs
              directly in the browser without extra setup.
            </li>
            <li>
              <span className="font-semibold">Interpreted Language:</span> No
              need for compilation, executes line by line.
            </li>
            <li>
              <span className="font-semibold">Event-Driven & Interactive:</span>{" "}
              Responds to user actions like clicks, inputs, and hovers.
            </li>
            <li>
              <span className="font-semibold">Cross-Platform:</span> Works on
              all modern browsers and operating systems.
            </li>
            <li>
              <span className="font-semibold">Object-Oriented:</span> Supports
              objects, methods, and prototypes for structured coding.
            </li>
            <li>
              <span className="font-semibold">Versatile:</span> Can be used for
              frontend, backend (Node.js), mobile, and even AI apps.
            </li>
          </ul>
        </section>











        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg mt-10">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: JavaScript in Action
          </h2>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    // Lightweight &amp; Fast
    <br />
    console.log("Hello from JavaScript!");
    <br /><br />

    // Event-Driven: Run when button is clicked
    <br />
    function greetUser(name) {"{"}
    <br />
    &nbsp;&nbsp;return "Welcome, " + name + "!";
    <br />
    {"}"}
    <br /><br />

    // Object-Oriented Feature
    <br />
    const user = {"{"}
    <br />
    &nbsp;&nbsp;name: "Larsen",
    <br />
    &nbsp;&nbsp;age: 22,
    <br />
    &nbsp;&nbsp;introduce: function() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    {"}"};
    <br /><br />

    console.log(greetUser("Albert")); // Function example
    <br />
    console.log(user.introduce()); // Object-Oriented example
  </code>
</pre>

        </section>

        <h1 className="text-2xl mt-10">Easy Setup</h1>
        <p className="leading-relaxed mt-2">We don’t require a specific editor to begin writing JavaScript code. In fact, anyone can write JavaScript using something as simple as NotePad. Additionally, JavaScript can run directly in the browser without needing to install any interpreter or compiler.</p>
        <p className="leading-relaxed mt-2">The <span className="text-red-400 bg-gray-50 px-1">{'<script>'}</span> element enables the embedding of JavaScript code within an HTML document, as well as the inclusion of external JavaScript files with a <span className="text-red-400 bg-gray-50 px-1">.js</span> extension.</p>

        <h1 className="text-2xl mt-10 mb-2">Browser Support</h1>
        <p className="leading-relaxed">JavaScript is universally supported by modern web browsers, all of which include a native JavaScript engine for code execution.</p>
        <p className="leading-relaxed">The window object can be utilized to determine whether JavaScript or specific JavaScript features are supported by the user's browser.</p>

        <h1 className="text-2xl mt-10 mb-2">Dom Manipulation</h1>
        <p className="leading-relaxed">JavaScript enables developers to dynamically modify the Document Object Model (DOM) and interact with various browser functionalities.</p>
        <p className="leading-relaxed mt-1">JavaScript offers multiple methods for accessing DOM elements through various attributes and enables developers to modify and customize HTML elements dynamically.</p>

        <h1 className="text-2xl mt-10 mb-2">Event Handling</h1>
        <p className="leading-relaxed">JavaScript facilitates event handling, enabling developers to manage user interactions such as clicks, keystrokes, and mouse movements within the web page.</p>
        <p className="leading-relaxed mt-1">For instance, JavaScript can detect mouse click events on specific HTML elements and execute corresponding interactions.</p>
        <p className="leading-relaxed">Additional events exist, including those that detect the scrolling behavior of a webpage. These events will be discussed in detail in the JavaScript events chapter.</p>

        <h1 className="text-2xl mt-10">Dynamic Typing</h1>
        <p className="leading-relaxed mt-1">JavaScript employs dynamic typing, inferring variable data types during runtime, which allows developers to write code without explicitly declaring types.</p>
        <p className="leading-relaxed mt-2">JavaScript allows variables to be reassigned to values of different data types. For instance, a variable initially storing a numeric value can later be updated with a string.</p>

        <h1 className="text-2xl mt-10 mb-2">Functional Programming</h1>
        <p className="leading-relaxed">JavaScript embraces functional programming paradigms, allowing the definition of first-class functions, pure functions, closures, higher-order functions, arrow functions, and function expressions.</p>
        <p>Functions serve as the primary structural units for problem-solving in this paradigm.</p>

        <h1 className="text-2xl mt-10">Cross-platform Support</h1>
        <p className="leading-relaxed mt-2">JavaScript is supported across all operating systems and browsers, which contributes to its extensive use in developing websites, mobile applications, games, and desktop software.</p>

        <h1 className="text-2xl mt-10">Object-oriented Programming</h1>
        <p className="leading-relaxed mt-2">Additionally, it provides support for essential object-oriented programming principles including inheritance, abstraction, polymorphism, and encapsulation.</p>
        <p className="leading-relaxed">JavaScript includes class syntax, enabling the implementation of comprehensive object-oriented programming principles.</p>

        <h1 className="text-2xl mt-10">Built-in Objects</h1>
        <p className="leading-relaxed mt-2">JavaScript provides built-in objects such as <span className="bg-gray-50 px-1">Math</span> for executing mathematical computations and Date for handling date and time operations.</p>
        <p className="leading-relaxed">JavaScript provides built-in objects such as Math for executing mathematical computations and Date for handling date and time operations.</p>

        <h1 className="text-2xl mt-10">Object Prototypes</h1>
        <p className="leading-relaxed mt-2">JavaScript treats all data types—including arrays, functions, numbers, strings, booleans, sets, and maps—as objects.</p>
        <p className="leading-relaxed">Each object possesses an internal, hidden prototype property that facilitates inheritance and allows the extension of classes or objects with additional functionality.</p>

        <h1 className="text-2xl mt-10">Global Object</h1>
        <p className="mt-2 leading-relaxed">JavaScript provides a global object which serves as a container for variables accessible in all scopes.</p>
        <p>Global variables can be accessed via the window object in browser environments and through the global object in Node.js.</p>
        <p className="leading-relaxed">The <span className="bg-gray-50 px-1">globalThis</span> keyword has been recently introduced to provide a standard way to access global variables across various runtime environments.</p>

        <h1 className="text-2xl mt-10">Built-in Methods</h1>
        <p className="mt-2 leading-relaxed">JavaScript provides built-in methods associated with objects, enabling developers to produce efficient and succinct code.</p>
        <p className="leading-relaxed">For instance, the Array object provides the filter() method for element selection and the sort() method for ordering. The String object offers the replace() method for text substitution and the trim() method for whitespace removal.</p>

        <h1 className="text-2xl mt-10">Modular Programming</h1>
        <p className="leading-relaxed mt-2">JavaScript supports modular programming by enabling code to be divided into multiple modules connected through a parent module, facilitating maintainability.</p>
        <p className="leading-relaxed">Organizing code into separate modules decreases complexity and promotes code reuse across different parts of a project.</p>

        <h1 className="text-2xl mt-10">JSON</h1>
        <p className="leading-relaxed mt-2">JSON, or JavaScript Object Notation, is a widely adopted data interchange format used to transfer data between systems such as servers and clients.</p>
        <p className="leading-relaxed">JavaScript provides built-in support for the JSON format to store and manage data.</p>

        <h1 className="text-2xl mt-10">Asynchronous Programming</h1>
        <p className="leading-relaxed mt-2">JavaScript operates on a single thread. Employing asynchronous programming techniques allows for faster code execution.</p>
        <p className="leading-relaxed">Promises in JavaScript facilitate asynchronous programming, allowing for the management of multiple concurrent operations.</p>

        <h1 className="text-2xl mt-10">Event-driven Architecture</h1>
        <p className="leading-relaxed mt-2">The event-driven architecture in JavaScript facilitates the development of interactive, responsive web applications capable of managing concurrent user interactions.</p>
        <p className="leading-relaxed">Owing to its versatility and extensive capabilities, JavaScript is used in the development of Facebook’s front end. Netflix utilizes ReactJS, a JavaScript framework. Likewise, leading platforms such as Amazon, PayPal, Airbnb, LinkedIn, and Twitter incorporate JavaScript in their architecture.</p>

        <h1 className="text-2xl mt-10">Server-side Support</h1>
        <p className="leading-relaxed mt-2">Node.js, a JavaScript runtime environment, is commonly used for backend development. It allows JavaScript to be used for server-side programming and supports building scalable application backends.</p>







        {/* Explanation Section */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">
                console.log()
              </span>{" "}
              → Shows JavaScript’s ability to run instantly in the browser.
            </li>
            <li>
              <span className="font-semibold">Function greetUser()</span> → 
              Demonstrates how JS handles reusable logic.
            </li>
            <li>
              <span className="font-semibold">Object user</span> → Shows
              JavaScript’s object-oriented nature with properties and methods.
            </li>
            <li>
              <span className="font-semibold">Event-driven capability</span> → 
              The <code>greetUser()</code> function could easily be called when a
              button is clicked on a webpage.
            </li>
          </ul>
          <p className="mt-5">JavaScript is powerful because it is fast, interactive, versatile,
            and works everywhere — making it the backbone of modern web
            applications.</p>
        </section>

        
      </div>
    </div>
  );
}