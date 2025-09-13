import React from "react";

export default function JavaScriptVersions() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Page Title */}
        <header className="text-center">
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            JavaScript Versions
          </h1>
          <p className="text-lg text-gray-600">
            From ES1 to ESNext – Understanding how JavaScript has evolved 
          </p>
        </header>

        {/* Intro Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="leading-relaxed">
            JavaScript has continuously evolved since its creation in 1995. The
            major updates are known as{" "}
            <span className="font-semibold text-blue-600">ECMAScript (ES)</span>{" "}
            versions. Each version introduced new features that made JavaScript
            more powerful, readable, and developer-friendly.
          </p>
        </section>

        {/* Versions Timeline */}
        <section className="bg-blue-50 shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Major Versions</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold">ES5 (2009):</span> Introduced{" "}
              <code className="bg-gray-100 px-1 rounded">strict mode</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">JSON support</code>, and
              array methods like{" "}
              <code className="bg-gray-100 px-1 rounded">forEach()</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">map()</code>.
            </li>
            <li>
              <span className="font-semibold">ES6 / ES2015:</span> A major update
              with <span className="text-blue-600">let/const</span>, arrow
              functions, classes, template literals, promises, and modules.
            </li>
            <li>
              <span className="font-semibold">ES7+ (2016 onward):</span> Added
              features like <code className="bg-gray-100 px-1 rounded">async/await</code>, 
              spread/rest operators, optional chaining, and modern syntax.
            </li>
            <li>
              <span className="font-semibold">ESNext:</span> Refers to the
              latest ongoing updates to the language. Browsers keep adding new
              features every year.
            </li>
          </ul>
        </section>

        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: ES5 vs ES6
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// ES5 Style
var name = "Sajid";
var greet = function(name) {
  return "Hello " + name;
};
console.log(greet(name));

// ES6 Style
let user = "Sajid";
const greetUser = (user) => \Hello \${user}\;
console.log(greetUser(user));

// ES7+ Feature (Async/Await)
async function fetchData() {
  return "Data fetched successfully!";
}
fetchData().then(console.log);`}</code>
          </pre>
        </section>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">ES5:</span> Uses{" "}
              <code className="bg-gray-100 px-1 rounded">var</code> for
              variables and normal functions.
            </li>
            <li>
              <span className="font-semibold">ES6:</span> Introduced{" "}
              <code className="bg-gray-100 px-1 rounded">let</code> &
              <code className="bg-gray-100 px-1 rounded">const</code> for
              block-scoping, and arrow functions{" "}
              <code className="bg-gray-100 px-1 rounded"> {'()=>'} {}</code> for
              shorter syntax. Template literals{" "}
              <code className="bg-gray-100 px-1 rounded"> \` \${} \` </code>{" "}
              allow string interpolation.
            </li>
            <li>
              <span className="font-semibold">ES7+:</span> Added{" "}
              <code className="bg-gray-100 px-1 rounded">async/await</code> for
              easier asynchronous code handling.
            </li>
          </ul>
        </section>

        {/* Key Takeaway */}
        <section className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
          <p className="text-lg">
            ✅ Each new version of JavaScript makes development faster,
            cleaner, and more modern. Always try to use the latest ES features
            supported by browsers for better performance and readability.
          </p>
        </section>
      </div>
    </div>
  );
}