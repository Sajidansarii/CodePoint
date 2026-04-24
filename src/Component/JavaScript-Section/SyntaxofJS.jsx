import React from "react";

export default function JavaScriptSyntax() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl space-y-6">
        {/* Page Title */}
        <header>
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            Syntax of JavaScript
          </h1>
          <p className="text-lg text-gray-600">
            Learn the building blocks of JavaScript programs 
          </p>
        </header>

        {/* Intro Section */}
        <section className="py-6">
          <p className="leading-relaxed">
            Syntax in JavaScript refers to the set of rules that define how a
            JavaScript program is written and interpreted. Just like grammar in
            English, syntax defines how we structure code so the computer can
            understand it.
          </p>
        </section>
        <h1 className="text-2xl">Syntax Rules</h1>
        <p>In programming, syntax defines the rules and structure required to write valid code.</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`// How to Declare variables:
let x = 5;
let y = 6;

// How to Compute values:
let z = x + y;

// I am a Comment. I do Nothing`}
        </pre>

        <h1 className="text-2xl">JavaScript Values</h1>
        <p>In JavaScript, syntax categorizes values into two primary types.</p>
        <ul className="list-[square] list-inside">
          <li><strong>Literals</strong> (Fixed values)</li>
          <li><strong>Variables </strong>(Variable values)</li>
        </ul>

        <h1 className="text-2xl">JavaScript Literals</h1>
        <p>The following are the essential syntax rules for using <strong>literals</strong> (fixed values) in JavaScript:</p>
        <p>JavaScript allows <strong>numbers</strong> to be written as either integers or floating-point values.</p>
        <h1 className="text-2xl">Example</h1>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`10.50

1001`}
        </pre>
        <p>In JavaScript, strings are sequences of characters enclosed in single (' ') or double (" ") quotes.</p>
        <p><strong>Strings</strong> are text, written within double or single quotes:</p>

        <h1 className="text-2xl">JavaScript Keywords</h1>
        <p>JavaScript <strong>keywords</strong> are used to define specific <strong>actions</strong> or behaviors in a program.</p>
        <p>The <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> keywords are used to declare variables in JavaScript.</p>
        <h1 className="text-2xl">Example</h1>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`let x = 5;

const fname = "John";`}
        </pre>

        <h1 className="text-2xl">JavaScript Variables</h1>
        <p>A variable is like a container that holds a piece of data, such as a number or a string.</p>
        <p>Variables are assigned unique identifiers to distinguish them within the program's scope.</p>
        <h1 className="text-2xl">Example</h1>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`// Define x as a variable
let x;

// Assign the value 6 to x
x = 6;`}
        </pre>

        <h1 className="text-2xl">JavaScript Identifiers</h1>
        <p>An identifier refers to the name used to uniquely identify a variable in code.</p>
        <h1 className="text-2xl">Identifier rules:</h1>
        <ul className="list-[square] list-inside">
          <li>Must start with a letter, _, or $</li>
          <li>Can contain digits after the first character</li>
          <li>Cannot be a reserved keyword (let, const, if, etc.)</li>
          <li>Are case-sensitive</li>
        </ul>

        <h1 className="text-2xl">JavaScript Operators</h1>
       <p>The assignment operator (=) in JavaScript is used to assign values to variables.</p>
       <h1 className="text-2xl">Example</h1>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`let x = 5;
let y = 6;
let sum = x + y;
`}
       </pre>
       <p> <strong>Arithmetic operators</strong> such as addition (+), subtraction (-), multiplication (*), and division (/) are used in JavaScript to compute values.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">{`5 * 10`}</pre>

      <h1 className="text-2xl">JavaScript Expressions</h1>
      <p>An expression is a syntactic construct composed of values, variables, and operators that evaluates to a single value.</p>
      <h1 className="text-2xl">Example</h1>
      <p>(5 + 6) * 10 evaluates to 110:</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`(5 + 6) * 10`}
      </pre>

      <p>Expressions can also contain variable:</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`x * 10`}
      </pre>

      <p>"John" + " " + "Doe", evaluates to "John Doe":</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`"John" + " " + "Doe"`}
      </pre>


      <h1 className="text-2xl">JavaScript is Case Sensitive</h1>
      <p>Identifiers in JavaScript are <strong>case sensitive</strong>, meaning that myVar and myvar are treated as different names.</p>
      <p>Variables named <span className="text-red-400 bg-gray-50 px-1">lastName</span> and <span className="text-red-400 bg-gray-50 px-1">lastname</span> are treated as different identifiers in JavaScript.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        { `let lastName = "Doe";
let lastname = "Peterson";`}
      </pre>

      <h1 className="text-2xl">JavaScript and Camel Case</h1>
      <p>Over time, different naming conventions have been adopted to join multiple words in a single variable identifier.</p>
      <h1 className="text-xl font-semibold">Hyphens:</h1>
      <p>first-name, last-name, master-card, inter-city.</p>
      <h1 className="text-xl font-semibold">Underscore:</h1>
      <p>first_name, last_name, master_card, inter_city.</p>
      <h1 className="text-xl font-semibold">Upper Camel Case (Pascal Case):</h1>
      <p>FirstName, LastName, MasterCard, InterCity.</p>
      <h1 className="text-xl font-semibold">Lower Camel Case:</h1>
      <p>firstName, lastName, masterCard, interCity.</p>




        {/* Syntax Rules */}
        <section className="py-6">
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


        {/* Explanation Section */}
        <section className="py-6">
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
            Mastering JavaScript syntax is the first step towards becoming a
            JavaScript developer. It’s the grammar of the language that lets you
            write meaningful programs.
          </p>
        </section>
      </div>
    </div>
  );
}