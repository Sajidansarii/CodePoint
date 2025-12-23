import React from "react";

const JSXIntro = () => {
    return (
        <div className="max-w-4xl mt-10 p-6">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React JSX Introduction</h1>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is JSX?</h2>
       <p>JSX, which stands for JavaScript XML, allows us to write HTML directly in React, making it easier to create and add HTML elements.</p>
       
       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Coding JSX</h2>
       <p className="mb-3">JSX lets us write HTML elements directly in JavaScript and insert them into the DOM without using <span className="text-red-400">createElement()</span> or <span className="text-red-400">appendChild()</span>.</p>
       <p>JSX transforms HTML tags into React elements.</p>
       
       <p className="mt-5">Here are two examples: the first one uses JSX, and the second one does not.</p>
      
      <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`const myElement = <h1>I Love JSX!</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);`}
        </code>
      </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>        
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`const myElement = React.createElement('h1', {}, 'I do not use JSX!');

createRoot(document.getElementById('root')).render(
  myElement
);`}
            </code>
        </pre>

        <p className="mt-5">As shown in the first example, JSX allows HTML to be written inside JavaScript code. It is an ES6-based JavaScript extension and is translated into standard JavaScript when the code runs.</p>


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Expressions in JSX</h2>
    <p>JSX allows you to include expressions inside curly braces { }. These expressions can be React variables, properties, or any valid JavaScript code, and JSX will evaluate them and return the result.</p>

  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = <h1>React is {5 + 5} times better with JSX</h1>;`}
    </code>
  </pre>


  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Inserting a Large Block of HTML</h1>
  <p>When writing multi-line HTML, place the code inside parentheses.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);`}
    </code>
  </pre>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">One Top Level Element</h1>
  <p>The HTML must have only one top-level element. So, to include two paragraphs, place them inside a parent container like a <span className="text-red-400">{'<div>'}</span>.</p>
 <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
 <p>Wrap both paragraphs in a <span className="text-red-400">{'<div>'}</span> element.</p>
 <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);`}
    </code>
 </pre>

 <p className="mt-5">Another option is using a fragment to group multiple elements, keeping the DOM clean. Fragments use an empty tag syntax: <></>.</p>
 <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
 <p>Enclose two paragraphs within a fragment.</p>
 <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);`}
    </code>
 </pre>

 <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Elements Must be Closed</h1>
 <p>JSX follows XML syntax, so all HTML elements must be properly closed.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
<p>Use{' />'} to close self-closing elements.</p>
<pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = <input type="text" />;`}
    </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Attribute class = className</h1>
<p className="mb-3">The class attribute is common in HTML, but in JSX you cannot use it because <span className="text-red-400">class</span> is a reserved keyword in JavaScript.</p>
<p>JSX fixes this issue by using className instead. When rendered, JSX converts className into a standard class attribute.</p>

<h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
<p>Replace class with className when writing JSX.</p>
<pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = <h1 className="myclass">Hello World</h1>;`}
    </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Comments in JSX</h1>
<p>In JSX, comments are written using <span className="text-red-400">{'/* */'}</span>.</p>
<h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Example</h2>
<p>Comments in JSX:</p>
<pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`const myElement = <h1>Hello {/* Wonderful */} World </h1>;`}
    </code>
</pre>


<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JSX in React Components</h1>
<p>React uses components to create user interfaces. Components are independent, reusable pieces of code, similar to JavaScript functions, and they return HTML. JSX works seamlessly inside these components.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
<p>JSX in Components:</p>
<pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`function Car() {
  return (
    <>
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
)`}
    </code>
</pre>

<p className="mt-5">Within components, you can perform other operations before returning the HTML.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
<p>JSX in Components:</p>
<pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
        {`function Car() {
  const brand = "Ford";
  const model = "Mustang";
  return (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
)`}
    </code>
</pre>





















    
    
    </div>
    
)
}

export default JSXIntro;