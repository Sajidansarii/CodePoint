import React, { useState } from "react";

const JSWindowBOM = () => {
  const [output, setOutput] = useState("Click the button to see window object examples...");

  const handleExample = () => {
    // ✅ Example 1: Alert using window
    alert("This is a window alert!");

    // ✅ Example 2: Get window dimensions
    const dimensions = Window `size: ${window.innerWidth} x ${window.innerHeight}`;

    // ✅ Example 3: Scroll position
    const scrollPos = Scroll `position: X=${window.scrollX}, Y=${window.scrollY}`;

    setOutput(`${dimensions}\n${scrollPos}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        window Object in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        The <strong>window</strong> object represents the browser window. It is the top-level object
        in the Browser Object Model and provides methods, properties, and events to interact with
        the browser itself, not just the document (DOM).
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Window Examples
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Show an alert
window.alert("This is a window alert!");

// Get window size
console.log("Window size: " + window.innerWidth + " x " + window.innerHeight);

// Get scroll position
console.log("Scroll position: X=" + window.scrollX + ", Y=" + window.scrollY);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>window.alert():</strong> Displays an alert dialog in the browser.
        </li>
        <li>
          <strong>window.innerWidth / innerHeight:</strong> Returns the width and height of the browser window's viewport.
        </li>
        <li>
          <strong>window.scrollX / scrollY:</strong> Returns the current horizontal and vertical scroll position.
        </li>
        <li>
          The <strong>window</strong> object is the global object in the browser; all global variables and functions are properties of window.
        </li>
        <li>
          Useful for controlling browser behavior, detecting window size, handling scrolling, and more.
        </li>
      </ul>
    </div>
  );
};

export default JSWindowBOM;