import React from "react";

const ObjectDisplay = () => {

  return (
    <div className="max-w-4xl mt-10 p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Display Objects</h1>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How to Display JavaScript Objects?</h1>
    <p>When you display a JavaScript object, it appears as <span className="text-red-400">[object Object]</span>.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Displaying Object Properties</h1>
    <p>Object properties can be added using strings.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text = person.name + "," + person.age + "," + person.city;`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using a For .. In Loop</h1>
   <p>Object properties can be gathered using a loop.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using Object.values()</h1>
    <p><span className="text-red-400">Object.values( )</span> generates an array containing the object’s property values.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Stringify the Array
let text = myArray.toString();`}
      </code>
    </pre>


<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using Object.entries()</h1>
<p>You can use <span className="text-red-400">Object.entries( )</span> to simplify iterating over objects.</p>
<h2 className="text-2xl text-gray-800 mt-5 font-semibold">Example</h2>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {`const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}`}
  </code>
</pre>

<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Using JSON.stringify()</h1>
<p className="mb-3">You can convert a JavaScript object to a string with <span className="text-red-400">JSON.stringify()</span>.</p>
<p><span className="text-red-400">JSON.stringify()</span> is built into JavaScript and works in all browsers.</p>
<h2 className="text-2xl text-gray-800 mt-5 font-semibold">Example</h2>
<pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {`// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let text = JSON.stringify(person);`}
  </code>
</pre>

    </div>
  );
};

export default ObjectDisplay;
