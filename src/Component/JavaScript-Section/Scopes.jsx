import React from "react";

const JSScope = () => {
  return (
    <div className="max-w-4xl p-6 ">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Scopes</h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, a <span className="text-red-400">scope</span> determines the accessibility of variables, functions, and objects. 
        There are mainly three types of scopes: *Global Scope, **Function Scope, and **Block Scope*.
      </p>

      <p className="leading-relaxed mt-2"><span className="text-red-400 bg-gray-50 px-1">Scope</span> defines the context in which variables are accessible or visible within your code.</p>
      <p className="leading-relaxed mt-2">In JavaScript, variables fall under three main scope types.</p>
      <ul className="list-[square] list-inside mt-2">
        <li>Global scope</li>
        <li>Function scope</li>
        <li>Block scope</li>
      </ul>

      <h1 className="text-2xl mt-10 mb-5">Global Scope</h1>
      <p className="leading-relaxed mt-2">In JavaScript, variables declared outside functions or blocks are globally scoped and accessible throughout the entire script.</p>
      <p className="leading-relaxed mt-2">Global variables are accessible from any part of a JavaScript program.</p>
      <p className="leading-relaxed mt-2">When declared outside a block, <span className="text-red-400 bg-gray-50 px-1">var</span>, <span className="text-red-400 bg-gray-50 px-1">let</span>, and <span className="text-red-400 bg-gray-50 px-1">const</span> behave similarly.</p>
      <p className="leading-relaxed mt-2">Each of these declarations (var, let, and const) results in a globally scoped variable when used at the top level.</p>
      
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`var x = 1;    // Global scope

let y = 2;    // Global scope

const z = 3;  // Global scope`}
      </pre>

      <h1 className="text-2xl mt-10">Example</h1>
      <p>Any variable defined outside a function is considered global in scope.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}`}
      </pre>

      <p className="mt-10 mb-5">Global variables has Global Scope:</p>
      <p>Variables defined in the global scope are available to all scripts and functions within the web page's context.</p>
    
    <h1 className="text-2xl mt-10 mb-5">Function Scope</h1>
    <p className="leading-relaxed mt-2">When you write a JavaScript function, it gets its own space for variables—that's its scope.</p>
    <p className="leading-relaxed mt-2">Function-scoped variables are limited in visibility to the function in which they are declared.</p>
    <p className="leading-relaxed mt-2">Within the scope of a function, <span className="text-red-400 bg-gray-50 px-1">var</span>, <span className="text-red-400 bg-gray-50 px-1">let</span>, and <span className="text-red-400 bg-gray-50 px-1">const</span> all create function-scoped variables with minor differences.</p>
    <p className="leading-relaxed mt-2"><span className="text-red-400 bg-gray-50 px-1">var</span>, <span className="text-red-400 bg-gray-50 px-1">let</span>, and <span className="text-red-400 bg-gray-50 px-1">const</span> are only accessible within the function they’re defined in.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`function myFunction1() {
  var carName = "Volvo";  // Function Scope
}

function myFunction2() {
  let carName = "Volvo";  // Function Scope
}

function myFunction3() {
  const carName = "Volvo";  // Function Scope
}`}
    </pre>

    <h1 className="text-2xl mt-5">Example</h1>
    <p className="leading-relaxed mt-3">Variables declared inside a function in JavaScript are scoped locally to that function.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName`}
    </pre>

    <h1 className="text-2xl mt-10 mb-5">Local Variables has Function Scope</h1>
    <ul className="list-[square] list-inside leading-relaxed">
      <li>They can only be accessed from within the function</li>
      <li>No scripts or functions outside the function can access them</li>
      <li>Variables with the same name can be used outside the function</li>
      <li>Variables with the same name can be used in different functions</li>
      <li>Local variables are created when a function starts</li>
      <li>Local variables are deleted when the function is completed</li>
      <li>Arguments (parameters) work as local variables inside functions</li>
    </ul>

    <h1 className="text-2xl mt-10">Block Scope</h1>
    <p className="leading-relaxed mt-3">Before the introduction of ES6, JavaScript variables were restricted to global and function scope only.</p>
    <p className="leading-relaxed mt-3">With the release of ES6, JavaScript gained two new block-scoped variable declarations: let and const.</p>
    <p className="leading-relaxed mt-3">These keywords enable variables to be scoped within a block, rather than a function or global context.</p>
    <p className="leading-relaxed mt-3">Variables declared using <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> are confined to the block in which they are declared, ensuring block-level scope.</p>
    
    <p className="leading-relaxed mt-3">This mechanism reduces the risk of variable collisions and enhances maintainability by organizing code more effectively.</p>
    <h1 className="text-2xl mt-5 mb-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`{
  let x = 2;
}
// x can NOT be used here`}
    </pre>

    <p className="leading-relaxed mt-10">Variables declared using <span className="text-red-400 bg-gray-50 px-1">var</span> lack block-level scope.</p>
    <p className="leading-relaxed mt-3">Variables declared with <span className="text-red-400 bg-gray-50 px-1">var</span> within a block are not confined to block scope and remain accessible externally.</p>

    <h1 className="text-2xl mt-5">Example (Not Recommended)</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`{
  var x = 2;
}
// x CAN be used here`}
    </pre>
    
    <h1 className="text-2xl mt-10 mb-5">Automatically Global</h1>
    <p className="leading-relaxed mt-3">Variables assigned without prior declaration are implicitly created in the global scope.</p>
    <p className="leading-relaxed mt-3">The example declares <span className="text-red-400 bg-gray-50 px-1">cityName</span> as a global variable, despite the assignment happening within a function.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`myFunction();

// code here can use carName

function myFunction() {
  cityName = "Mumbai";
}
`}
    </pre>

    <h1 className="text-2xl mt-10 mb-5">Strict Mode</h1>
    <p className="leading-relaxed mt-3">All contemporary browsers are compatible with JavaScript’s Strict Mode.</p>
    <p className="leading-relaxed mt-3">Under Strict Mode, assigning a value to an undeclared variable does not create a global variable.</p>


    <h1 className="text-2xl mt-10 mb-5">Global Variables in HTML</h1>
    <p className="leading-relaxed mt-3">With JavaScript, the global scope is the JavaScript environment.</p>
    <p className="leading-relaxed mt-3">In HTML, the global scope is the window object.</p>
    <p className="leading-relaxed mt-3">Global variables defined with the <span className="text-red-400 bg-gray-50 px-1">var</span> keyword belong to the window object:</p>

<h1 className="text-2xl mt-5">Example (Not Recommended)</h1>
<pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  {`var cityName = "Mumbai";
// code here can use window.cityName`}
</pre>

<p className="leading-relaxed mt-5">Global variables declared with <span className="text-red-400 bg-gray-50 px-1">let</span> are not properties of the global window object.</p>

<h1 className="text-2xl mt-5">Example</h1>
<pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  {`let carName = "Volvo";
// code here can NOT use window.carName`}
</pre>

<h1 className="text-2xl mt-10 mb-5">The Lifetime of JavaScript Variables</h1>

<p className="leading-relaxed mt-3">A variable begins to exist as soon as it’s declared.</p>
<p className="leading-relaxed mt-3">Function variables disappear after the function runs.</p>
<p className="leading-relaxed mt-3">Global variables exist only while the tab or window is open.</p>

    </div>
  );
};

export default JSScope;