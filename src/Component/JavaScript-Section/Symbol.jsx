import React from "react";

const JSSymbol = () => {
  return (
    <div className="max-w-4xl  p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Symbols</h1>
      
      <p className="text-gray-700 mb-6">
        A <span className="text-red-400">Symbol</span> is a unique and immutable primitive value introduced in ES6. Symbols are often used as *unique keys for object properties*, ensuring that property names do not conflict.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Creating Symbols</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code className="text-green-400">
          {`const sym1 = Symbol();
const sym2 = Symbol("description");

console.log(sym1); // Output: Symbol()
console.log(sym2); // Output: Symbol(description)`}  
        </code>
      </pre>

      <p className="text-gray-700 mb-6">
        Symbols are always unique, even if they have the same description. They are *not equal* to each other:
      </p>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`const a = Symbol("id");
const b = Symbol("id");

console.log(a === b); // Output: false`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Using Symbols as Object Keys</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
          {`
const id = Symbol("id");

const user = {
  name: "Alice",
  [id]: 123
};

console.log(user.name); // Output: Alice
console.log(user[id]);  // Output: 123`}
        </code>
      </pre>

      <p className="text-gray-700 mt-5">
        Symbols are often used to create *hidden or unique object properties* that do not conflict with other keys, even if the key name is the same.
      </p>

    </div>
  );
};

export default JSSymbol;