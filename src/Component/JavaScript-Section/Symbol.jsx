import React from "react";

const JSSymbol = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Symbols</span></h1>
      
      <p className="text-gray-700 mb-6">
        A *Symbol* is a *unique and immutable primitive value* introduced in ES6. Symbols are often used as *unique keys for object properties*, ensuring that property names do not conflict.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Symbols</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const sym1 = Symbol();
const sym2 = Symbol("description");

console.log(sym1); // Output: Symbol()
console.log(sym2); // Output: Symbol(description)`}  
        </code>
      </div>

      <p className="text-gray-700 mb-6">
        Symbols are always unique, even if they have the same description. They are *not equal* to each other:
      </p>

      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const a = Symbol("id");
const b = Symbol("id");

console.log(a === b); // Output: false`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Using Symbols as Object Keys</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const id = Symbol("id");

const user = {
  name: "Alice",
  [id]: 123
};

console.log(user.name); // Output: Alice
console.log(user[id]);  // Output: 123`}
        </code>
      </div>

      <p className="text-gray-700">
        Symbols are often used to create *hidden or unique object properties* that do not conflict with other keys, even if the key name is the same.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Points:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Symbols are *unique and immutable*.</li>
        <li>They can be used as *unique keys* for object properties.</li>
        <li>Even Symbols with the same description are *not equal*.</li>
        <li>They are useful for defining *hidden or private object properties*.</li>
      </ul>
    </div>
  );
};

export default JSSymbol;