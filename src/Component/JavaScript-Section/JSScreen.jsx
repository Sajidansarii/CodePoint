import React, { useState } from "react";

const JSScreenBOM = () => {
  const [output, setOutput] = useState("Click the button to see screen object details...");

  const handleExample = () => {
    // ✅ Screen width and height
    const screenSize = Screen `size: ${window.screen.width} x ${window.screen.height}`;

    // ✅ Available width and height (excluding OS taskbars, etc.)
    const availableSize = Available `screen size: ${window.screen.availWidth} x ${window.screen.availHeight}`;

    // ✅ Color depth
    const colorDepth = Color `depth: ${window.screen.colorDepth} bits`;

    setOutput(`${screenSize}\n${availableSize}\n${colorDepth}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        screen Object in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        The <strong>screen</strong> object contains information about the user's screen, such as
        its width, height, available space, and color depth. It is part of the Browser Object Model (BOM)
        and helps JavaScript interact with the browser environment.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Screen Info
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Screen width and height
console.log("Screen size: " + window.screen.width + " x " + window.screen.height);

// Available screen size
console.log("Available screen size: " + window.screen.availWidth + " x " + window.screen.availHeight);

// Color depth
console.log("Color depth: " + window.screen.colorDepth + " bits");`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>screen.width / screen.height:</strong> Returns the total width and height of the screen in pixels.
        </li>
        <li>
          <strong>screen.availWidth / availHeight:</strong> Returns the available width and height excluding OS taskbars and other interface features.
        </li>
        <li>
          <strong>screen.colorDepth:</strong> Returns the number of bits used to display a color.
        </li>
        <li>
          Useful for detecting screen size, adjusting layouts, or gathering display information.
        </li>
      </ul>
    </div>
  );
};

export default JSScreenBOM;