import React from "react";

const JSString = () => {
  const data = [
    {code:'\'', Result:"'", Description:'Single quote'},
    {code:'\"', Result:'"', Description:'Double quote'},
    {code:'\\', Result:'\'', Description:'Backslash'}
    
  ]
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Strings</h1>
      
      <p className="text-gray-700 mb-6">
        A <span className="text-red-400">string</span> in JavaScript is a sequence of characters used to represent <span className="font-semibold">text</span>. 
        Strings can be created using <span className="font-semibold">single quotes</span> (''), <span className="font-semibold">double quotes</span> (""), or <span className="font-semibold">backticks</span> (``) for template literals.
      </p>
      <p>A JavaScript string is a sequence of zero or more characters enclosed in quotes.</p>
       <h1 className="text-2xl mt-5">Example</h1>
       <pre className="text-green-400 bg-gray-900 rounded-lg mt-5">
        <code>
          {`
 let text = "John Doe";
          `}
        </code>
       </pre>
       <h2 className="text-xl mt-10">You can use single or double quotes:</h2>
       <h3 className="text-2xl mt-5">Example</h3>
      <pre className="bg-gray-900 text-green-400 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`
let singleQuote = 'Hello';
let doubleQuote = "World";

console.log(singleQuote);  // Output: Hello
console.log(doubleQuote);  // Output: World
 `}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">String Concatenation</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-4">
        <code>
          {`
let firstName = "Alice";
let lastName = "Johnson";

let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Alice Johnson
 
`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Template Literals</h2>
      <p className="mt-3">Template literals were added in ES6, released in 2016.</p>
      <p className="mt-3">Template literals are strings wrapped in backticks, like this: `This is a template string`.</p>
      <p className="mt-3">Templates allow single and double quotes inside a string:</p>
      <h1 className="text-2xl mt-6">Example</h1>
    <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mt-5">
        <code>
          {`let age = 25;
let message = \My name is \${firstName} and I am \${age} years old.\;
console.log(message); // Output: My name is Alice and I am 25 years old.`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">String Methods</h2>
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto rounded-lg mb-4 ">
        <code>
          {`let text = "Hello World";

console.log(text.length);               // Output: 11
console.log(text.toUpperCase());        // Output: HELLO WORLD
console.log(text.toLowerCase());        // Output: hello world
console.log(text.includes("World"));    // Output: true`}
        </code>
      </pre>

      <h1 className="text-2xl mt-5 mb-5">Escape Characters</h1>
      <p>As strings need to be written inside quotation marks, JavaScript will read this string incorrectly.</p>
      <pre className="text-green-400 bg-gray-900 overflow-x-auto rounded-lg mt-5 mb-5">
        <code>
          {`
 let text = "We are the so-called "Vikings" from the north.";
          `}
        </code>
      </pre>

      <p className="mt-3">JavaScript will shorten the string to "We are the so-called ".</p>
      <p className="mt-3">To solve this problem, you can use an backslash escape character.</p>
      <p className="mt-3">Using a backslash (\) allows special characters to be treated as part of a string.</p>
     
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Code</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Result</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
      <tbody>
       {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.code}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Result}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
     </table>


    </div>
  );
};

export default JSString;