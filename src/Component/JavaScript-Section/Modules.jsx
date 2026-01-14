import React from "react";

const JSModules = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Modules</h1>
      
      <p className="mb-6">
        JavaScript <span className="text-red-400">modules</span> allow you to split your code into separate files and *reuse code* across your project. 
        You can <span className="text-red-400">export</span> functions, objects, or variables from one file and *import* them into another.
      </p>
      <p>JavaScript modules require the script tag to use <span className="text-red-400 bg-gray-50 px-1">type="module"</span>.</p>
     <h1 className="text-2xl mt-5">Example</h1>
     <pre className="text-green-400 bg-gray-900 overflow-x-auto p-4 rounded-lg mt-5">
      {`<script type="module">
import message from "./message.js";
</script>

`}
     </pre>

     <h1 className="text-2xl mt-10 mb-3">Export</h1>
     <p className="leading-relaxed mt-2">Module files can contain <span className="font-semibold">functions</span> or <span className="font-semibold">variables</span>.</p>
     <p className="leading-relaxed mt-2">JavaScript modules use named and default<span className="font-semibold">exports</span>.</p>
     
     <h1 className="text-2xl mt-10 mb-3">Named Exports</h1>
     <p className="leading-relaxed mt-3">Set up <span className="text-red-400 bg-gray-50 px-1">person.js</span> with the functions or variables to export.</p>
     <p className="leading-relaxed mt-3">Named exports can be declared individually or collectively at the bottom.</p>
     <h1 className="text-2xl mt-5">In-line individually:</h1>
     <p><span className="text-red-400 bg-gray-50 px-1">person.js</span></p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`export const name = "Jesse";
export const age = 40;`}
     </pre>

     <h1 className="text-2xl mt-10">All at once at the bottom:</h1>
     <p><span className="text-red-400 bg-gray-50 px-1">person.js</span></p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      {`const name = "Jesse";
const age = 40;

export {name, age};`}
     </pre>

     <h1 className="text-2xl mt-10">Default Exports</h1>
     <p className="leading-relaxed mt-3">Create a new file named message.js to illustrate default export.</p>
     <p className="leading-relaxed mt-3">Only a single default export is permitted in a file.</p>
     <h1 className="text-2xl mt-5">Example</h1>
     <p><span className="text-red-400 bg-gray-50 px-1">message.js</span></p>
     <pre className="text-green-400 bg-gray-900 p-4 overflow-x-auto rounded-lg mt-5">
      {`const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;`}
     </pre>

     <h1 className="text-2xl mt-10">Import</h1>
     <p className="leading-relaxed mt-3">Module imports vary depending on whether the exports are named or default.</p>
     <p className="leading-relaxed mt-3">Named exports require curly braces while default exports do not.</p>
     <h1 className="text-2xl mt-10">Import from named exports</h1>
     <p className="mt-3">Import named exports from <span className="text-red-400 bg-gray-50 px-1">person.js</span>:</p>
     <pre className="text-green-400 bg-gray-900 p-4 overflow-x-auto rounded-lg mt-5">
      {`import { name, age } from "./person.js";`}
     </pre>

     <h1 className="text-2xl mt-5">Import from default exports</h1>
     <p className="mt-3">Import the default export from <span className="text-red-400  bg-gray-50 px-1">message.js</span>:</p>
     <pre className="text-green-400 bg-gray-900 p-4 overflow-x-auto rounded-lg mt-5">
      {`import message from "./message.js";`}
     </pre>

      <h2 className="text-2xl font-semibold mb-3 mt-10">Key Points:</h2>
      <ul className="list-disc list-inside leading-relaxed">
        <li>Modules help organize code into reusable files.</li>
        <li>Use <span className="font-semibold">export</span> to make functions, variables, or objects available to other files.</li>
        <li>Use <span className="font-semibold">import</span> to use exported content in another file.</li>
        <li>Modern JavaScript supports <span className="font-semibold">ES6 modules</span> with <code>import/export</code> syntax.</li>
      </ul>
    </div>
  );
};

export default JSModules;