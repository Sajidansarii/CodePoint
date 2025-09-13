import React from "react";

export default function IntroJavaScript() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Title */}
        <header className="text-center">
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            Introduction to JavaScript
          </h1>
          <p className="text-lg text-gray-600">
            Learn the language of the web step by step 
          </p>
        </header>

        {/* Introduction Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">What is JavaScript?</h2>
          <p className="leading-relaxed">
            JavaScript (JS) is a powerful programming language that allows you
            to add <span className="font-semibold text-blue-600">interactivity</span>, 
            <span className="font-semibold text-blue-600"> logic</span>, and{" "}
            <span className="font-semibold text-blue-600">dynamic content</span>{" "}
            to websites. It runs directly in the browser and is one of the
            three core web technologies along with{" "}
            <span className="font-semibold">HTML</span> and{" "}
            <span className="font-semibold">CSS</span>.
          </p>
        </section>

        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: Hello World in JavaScript
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// This will show a message in the browser console
console.log("Hello, World!");

// This will show an alert popup on the webpage
alert("Welcome to JavaScript!");`}</code>
          </pre>
        </section>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">console.log()</code>{" "}
              is used to print messages in the browser’s developer console. This
              is useful for debugging.
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">alert()</code>{" "}
              displays a popup message to the user.
            </li>
            <li>
              Both statements end with a <span className="font-semibold">semicolon (;)</span>, 
              which indicates the end of a line in JavaScript (optional but recommended).
            </li>
          </ul>
        </section>

        {/* Key Takeaway */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl">
          <p className="text-lg">
            ✅ JavaScript makes web pages come alive by adding interactivity and
            logic. It’s the foundation of modern web development.
          </p>
        </section>
      </div>
    </div>
  );
}