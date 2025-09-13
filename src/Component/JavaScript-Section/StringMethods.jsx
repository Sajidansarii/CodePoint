import React from "react";

const StringMethodsExample = () => {
  // ✅ Original string to demonstrate string methods
  const message = "Hello, JavaScript World!";

  // ✅ String method examples
  const upper = message.toUpperCase();       // Converts the entire string to uppercase
  const lower = message.toLowerCase();       // Converts the entire string to lowercase
  const sliced = message.slice(7, 17);        // Extracts part of the string (from index 7 to 16)
  const includesWord = message.includes("JavaScript"); // Checks if the word "JavaScript" is in the string
  const replaced = message.replace("World", "Universe"); // Replaces "World" with "Universe"
  const length = message.length;             // Gets the number of characters in the string

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        🔤 JavaScript String Methods
      </h1>

      <p className="text-gray-700 mb-6">
        JavaScript provides various built-in <strong>string methods</strong> that let you manipulate and interact with strings easily.
        Below are some commonly used methods, demonstrated using the string:
        <code className="bg-gray-100 px-2 py-1 rounded ml-1 text-sm font-mono">"{message}"</code>
      </p>

      <div className="space-y-6 text-sm text-gray-800 font-mono bg-gray-50 p-4 rounded-md">
        {/* Uppercase method */}
        <div>
          <span className="text-blue-600 font-semibold">// toUpperCase()</span><br />
          <code>{`message.toUpperCase()`}</code> → <span className="text-green-700">{upper}</span>
        </div>

        {/* Lowercase method */}
        <div>
          <span className="text-blue-600 font-semibold">// toLowerCase()</span><br />
          <code>{`message.toLowerCase()`}</code> → <span className="text-green-700">{lower}</span>
        </div>

        {/* Slice method */}
        <div>
          <span className="text-blue-600 font-semibold">// slice(start, end)</span><br />
          <code>{`message.slice(7, 17)`}</code> → <span className="text-green-700">{sliced}</span><br />
          {/* slice includes start index and excludes end index */}
        </div>

        {/* Includes method */}
        <div>
          <span className="text-blue-600 font-semibold">// includes(substring)</span><br />
          <code>{`message.includes("JavaScript")`}</code> → <span className="text-green-700">{includesWord.toString()}</span>
        </div>

        {/* Replace method */}
        <div>
          <span className="text-blue-600 font-semibold">// replace(oldValue, newValue)</span><br />
          <code>{`message.replace("World", "Universe")`}</code> → <span className="text-green-700">{replaced}</span>
        </div>

        {/* Length property */}
        <div>
          <span className="text-blue-600 font-semibold">// length</span><br />
          <code>{`message.length`}</code> → <span className="text-green-700">{length}</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6 italic">
        These methods are essential for manipulating text in web development, especially for form validation, formatting, search features, and more.
      </p>
    </div>
  );
};

export default StringMethodsExample;
