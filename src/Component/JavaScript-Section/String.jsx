import React from "react";

const JSString = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Strings</span></h1>
      
      <p className="text-gray-700 mb-6">
        A *string* in JavaScript is a sequence of characters used to represent *text*. 
        Strings can be created using *single quotes (''), **double quotes (""), or **backticks (``)* for template literals.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Strings</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = \Hello World\;

console.log(singleQuote);       // Output: Hello
console.log(doubleQuote);       // Output: World
console.log(templateLiteral);   // Output: Hello World`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">String Concatenation</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let firstName = "Alice";
let lastName = "Johnson";

let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Alice Johnson`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Template Literals</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let age = 25;
let message = \My name is \${firstName} and I am \${age} years old.\;
console.log(message); // Output: My name is Alice and I am 25 years old.`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">String Methods</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`let text = "Hello World";

console.log(text.length);       // Output: 11
console.log(text.toUpperCase()); // Output: HELLO WORLD
console.log(text.toLowerCase()); // Output: hello world
console.log(text.includes("World")); // Output: true`}
        </code>
      </div>

      <p className="text-gray-700">
        JavaScript provides many *string methods* to manipulate text, check for content, and transform characters. Template literals (\\``) make string interpolation easier and more readable.
      </p>
    </div>
  );
};

export default JSString;