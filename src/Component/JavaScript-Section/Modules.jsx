import React from "react";

const JSModules = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Modules</span></h1>
      
      <p className="text-gray-700 mb-6">
        JavaScript *modules* allow you to split your code into separate files and *reuse code* across your project. 
        You can *export* functions, objects, or variables from one file and *import* them into another.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Exporting a Module</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Here, we export a function <span className="font-semibold">add</span> and a constant <span className="font-semibold">PI</span> from the file <span className="font-semibold">math.js</span>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Importing a Module</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// main.js
import { add, PI } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(PI);        // Output: 3.14159`}
        </code>
      </div>
      <p className="text-gray-700">
        Using <span className="font-semibold">import</span>, we can access the exported function and constant from <span className="font-semibold">math.js</span> in another file.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Points:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Modules help organize code into reusable files.</li>
        <li>Use <span className="font-semibold">export</span> to make functions, variables, or objects available to other files.</li>
        <li>Use <span className="font-semibold">import</span> to use exported content in another file.</li>
        <li>Modern JavaScript supports <span className="font-semibold">ES6 modules</span> with <code>import/export</code> syntax.</li>
      </ul>
    </div>
  );
};

export default JSModules;