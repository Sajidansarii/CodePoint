import React from "react";

export default function JavaScriptSyntax() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Page Title */}
        <header className="text-center">
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            Syntax of JavaScript
          </h1>
          <p className="text-lg text-gray-600">
            Learn the building blocks of JavaScript programs 🧩
          </p>
        </header>

        {/* Intro Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Syntax in JavaScript refers to the set of rules that define how a
            JavaScript program is written and interpreted. Just like grammar in
            English, syntax defines how we structure code so the computer can
            understand it.
          </p>
        </section>

        {/* Syntax Rules */}
        <section className="bg-blue-50 shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Syntax Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              JavaScript is <span className="font-semibold">case-sensitive</span>.  
              <code className="bg-gray-100 px-1 rounded">myVar</code> and{" "}
              <code className="bg-gray-100 px-1 rounded">MyVar</code> are different.
            </li>
            <li>
              Statements are usually ended with a{" "}
              <span className="font-semibold">semicolon ( ; )</span>.
            </li>
            <li>
              Code blocks are wrapped in{" "}
              <span className="font-semibold">curly braces {"{}"}</span>.
            </li>
            <li>
              Single-line comments start with{" "}
              <code className="bg-gray-100 px-1 rounded">//</code>.
            </li>
            <li>
              Multi-line comments are written between{" "}
              <code className="bg-gray-100 px-1 rounded">/* ... */</code>.
            </li>
            <li>
              Variables can be declared using{" "}
              <code className="bg-gray-100 px-1 rounded">var</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">let</code>, or{" "}
              <code className="bg-gray-100 px-1 rounded">const</code>.
            </li>
          </ul>
        </section>

        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: JavaScript Syntax
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// This is a single-line comment

/* 
   This is a multi-line comment
   explaining the following code 
*/

// Variable declaration
let name = "Sajid";
const age = 22;

// Function definition
function greet(user, years) {
  return "Hello " + user + ", age " + years;
}

// Calling the function
console.log(greet(name, age));`}</code>
          </pre>
        </section>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-gray-100 px-1 rounded">//</code> → Adds a
              single-line comment.
            </li>
            <li>
              <code className="bg-gray-100 px-1 rounded">/* ... */</code> → Adds
              a multi-line comment.
            </li>
            <li>
              <code className="bg-gray-100 px-1 rounded">let</code> → Declares a
              block-scoped variable.
            </li>
            <li>
              <code className="bg-gray-100 px-1 rounded">const</code> → Declares
              a constant value that cannot be reassigned.
            </li>
            <li>
              <code className="bg-gray-100 px-1 rounded">function greet()</code>{" "}
              → Defines a reusable block of code.
            </li>
            <li>
              <code className="bg-gray-100 px-1 rounded">console.log()</code> →
              Prints output to the browser console.
            </li>
          </ul>
        </section>

        {/* Takeaway */}
        <section className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
          <p className="text-lg">
            ✅ Mastering JavaScript syntax is the first step towards becoming a
            JavaScript developer. It’s the grammar of the language that lets you
            write meaningful programs.
          </p>
        </section>
      </div>
    </div>
  );
}