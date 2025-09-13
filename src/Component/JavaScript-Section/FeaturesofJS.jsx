import React from "react";

export default function FeaturesJavaScript() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Title */}
        <header className="text-center">
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            Features of JavaScript
          </h1>
          <p className="text-lg text-gray-600">
            Explore why JavaScript is the most popular language for the web 
          </p>
        </header>

        {/* Intro Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Why JavaScript?</h2>
          <p className="leading-relaxed">
            JavaScript has unique features that make it versatile, powerful, and
            easy to use. It is supported by all modern browsers and widely used
            in both frontend and backend development.
          </p>
        </section>

        {/* Features List */}
        <section className="bg-blue-50 shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Lightweight & Fast:</span> Runs
              directly in the browser without extra setup.
            </li>
            <li>
              <span className="font-semibold">Interpreted Language:</span> No
              need for compilation, executes line by line.
            </li>
            <li>
              <span className="font-semibold">Event-Driven & Interactive:</span>{" "}
              Responds to user actions like clicks, inputs, and hovers.
            </li>
            <li>
              <span className="font-semibold">Cross-Platform:</span> Works on
              all modern browsers and operating systems.
            </li>
            <li>
              <span className="font-semibold">Object-Oriented:</span> Supports
              objects, methods, and prototypes for structured coding.
            </li>
            <li>
              <span className="font-semibold">Versatile:</span> Can be used for
              frontend, backend (Node.js), mobile, and even AI apps.
            </li>
          </ul>
        </section>

        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: JavaScript in Action
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// Lightweight & Fast
console.log("Hello from JavaScript!");

// Event-Driven: Run when button is clicked
function greetUser(name) {
  return "Welcome, " + name + "!";
}

// Object-Oriented Feature
const user = {
  name: "Sajid",
  age: 22,
  introduce: function() {
    return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
  }
};

console.log(greetUser("Ali"));      // Function example
console.log(user.introduce());      // Object-Oriented example`}</code>
          </pre>
        </section>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">
                console.log()
              </code>{" "}
              → Shows JavaScript’s ability to run instantly in the browser.
            </li>
            <li>
              <span className="font-semibold">Function greetUser()</span> → 
              Demonstrates how JS handles reusable logic.
            </li>
            <li>
              <span className="font-semibold">Object user</span> → Shows
              JavaScript’s object-oriented nature with properties and methods.
            </li>
            <li>
              <span className="font-semibold">Event-driven capability</span> → 
              The <code>greetUser()</code> function could easily be called when a
              button is clicked on a webpage.
            </li>
          </ul>
        </section>

        {/* Key Takeaway */}
        <section className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
          <p className="text-lg">
            ✅ JavaScript is powerful because it is fast, interactive, versatile,
            and works everywhere — making it the backbone of modern web
            applications.
          </p>
        </section>
      </div>
    </div>
  );
}