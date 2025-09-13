import React, { useState } from "react";

const JSHistoryBOM = () => {
  const [output, setOutput] = useState(
    "Click the buttons to navigate through browser history..."
  );

  const goBack = () => {
    window.history.back(); // Go back one page
  };

  const goForward = () => {
    window.history.forward(); // Go forward one page
  };

  const goSpecific = () => {
    window.history.go(-1); // Go back one page (same as back)
  };

  const showLength = () => {
    setOutput(Number `of entries in history: ${window.history.length}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        history Object in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        The <strong>history</strong> object provides access to the browser's session history.
        It allows you to move backward, forward, or jump to a specific page in the history stack.
      </p>

      <div className="space-x-2 mt-2">
        <button
          onClick={goBack}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
        <button
          onClick={goForward}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Go Forward
        </button>
        <button
          onClick={goSpecific}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Go -1
        </button>
        <button
          onClick={showLength}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          Show History Length
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Go back one page
window.history.back();

// Go forward one page
window.history.forward();

// Go to a specific page in history
window.history.go(-1); // -1 = back, 1 = forward

// Get the number of entries in history
console.log(window.history.length);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>window.history.back():</strong> Moves to the previous page in the session history.
        </li>
        <li>
          <strong>window.history.forward():</strong> Moves to the next page in the session history.
        </li>
        <li>
          <strong>window.history.go(n):</strong> Moves <code>n</code> steps in the session history. Negative for back, positive for forward.
        </li>
        <li>
          <strong>window.history.length:</strong> Returns the number of entries in the history stack.
        </li>
        <li>
          Useful for *navigation controls*, custom back/forward buttons, or managing user session history.
        </li>
      </ul>
    </div>
  );
};

export default JSHistoryBOM;