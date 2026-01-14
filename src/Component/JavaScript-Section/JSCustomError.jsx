import React, { useState } from "react";


const JSCustomError = () => {
  
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Custom Errors in JavaScript</h1>
    
    <p>Custom errors let developers define their own error types in JavaScript, which is useful for handling specific issues like database or HTTP errors. JavaScript throws built-in Error objects by default, but you can also throw custom ones using the throw statement. For example, you can throw an ageNotValid error if a user is under 18. First, learn the Error class syntax to create custom errors.</p>
     
     <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">The Error Class</h1>
     <p>The Error class in JavaScript serves as a generic error type. Developers can create an instance of this class and supply a custom message. It includes three main properties: name, message, and stack. Therefore, the syntax of the Error class can be assumed as follows.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class Error {
   constructor(message) {
      this.message = message;
      this.name = "Error"; 
      this.stack = <call stack>;
   }
}`}
      </code>
     </pre>
<p className="mt-3">The stack property in the syntax above is non-standard and is currently supported only by Firefox.</p>
     
<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Creating Custom Errors Using the Instance of the Error Class</h1>
<p>The simplest way to make a custom error is to create an Error object and modify its properties.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
<p>You can use the syntax below to create custom errors by modifying the properties of an Error instance.</p>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-3">
  <code>
    {`const customError = new Error(message);
customError.name = "CustomError";`}
  </code>
</pre>

<p>We instantiated the Error class with a message and updated the name property. In the same way, you can set the message property afterward instead of passing it to Error().</p>


<p className="mt-5">The code below creates an Error object assigned to customError and updates its name property to 'CustomError'. The try block throws this error, and the catch block displays its name and message.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {` const customError = new Error("This is a custom error");
      customError.name = "CustomError";
      try {
         throw customError;
      } catch (err) {
         document.getElementById("output").innerHTML = err;
      }`}
  </code>
</pre>


<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Creating the Custom Errors Using the Function Constructor</h1>
<p>A function constructor can be used to define a template for the object, including the name and message properties. Then, set its prototype to the Error class prototype.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
<p>The syntax below shows how to create custom errors using a function constructor.</p>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {`function validationError(messag, name) {
   this.message = messag;
   this.name = name;
}
validationError.prototype = Error.prototype;`}
  </code>
</pre>


<p className="mt-5">The code below creates a <span className="text-red-400">validationError()</span> constructor function and sets its prototype to the Error class. In the try block, the variable str is initialized with a number, and its type is verified using typeof. If it isn’t a string, a validationError is thrown with a name and message. The catch block prints the message to the webpage, and running the code displays the error.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {` const output = document.getElementById("demo");
      function validationError(message = "", name = "validationError") {
         this.message = message;
         this.name = name;
      }
      validationError.prototype = Error.prototype;

      try {
         let str = 10;
         if (typeof str != "string") {
            throw new validationError("Not a string", "NotStringError");
         } else {
            output.innerHTML = "String is valid";
         }
      } catch (e) {
         output.innerHTML = e.name + ": " + e.message;
      }`}
  </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Creating Custom Errors by Extending the Error Class</h1>
<p>Creating custom errors is best done by making a new class that extends Error. This uses inheritance so the custom error class gets all Error properties, and you can initialize them in the constructor() method.</p>
<h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {`class CustomError extends Error {
   constructor(message) {
      super(message)
      // Initialize properties
   }
}`}
  </code>
</pre>

<p className="mt-5">The example shows calling the parent class constructor with super(). You can initialize CustomError properties in the constructor, and choose any of the approaches mentioned to create custom errors.</p>

    </div>
  );
};

export default JSCustomError;