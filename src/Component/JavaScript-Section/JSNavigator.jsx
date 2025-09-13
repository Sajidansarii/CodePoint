import React, { useState } from "react";

const JSNavigatorBOM = () => {
  const [output, setOutput] = useState("Click the button to see navigator details...");

  const handleExample = () => {
    // ✅ Browser name
    const browserName = Browser `Name: ${navigator.appName}`;

    // ✅ Browser version
    const browserVersion = Browser `Version: ${navigator.appVersion}`;

    // ✅ Platform
    const platform = `Platform: ${navigator.platform}`;

    // ✅ User agent
    const userAgent = User `Agent: ${navigator.userAgent}`;

    setOutput(`${browserName}\n${browserVersion}\n${platform}\n${userAgent}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        navigator Object in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        The <strong>navigator</strong> object provides information about the browser and operating system.
        It is part of the Browser Object Model (BOM) and can be used to detect the user's environment.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Navigator Info
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Browser name
console.log("Browser Name: " + navigator.appName);

// Browser version
console.log("Browser Version: " + navigator.appVersion);

// Platform
console.log("Platform: " + navigator.platform);

// User agent
console.log("User Agent: " + navigator.userAgent);`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>navigator.appName:</strong> Returns the browser name (often "Netscape" for modern browsers).  
        </li>
        <li>
          <strong>navigator.appVersion:</strong> Returns the browser version information.  
        </li>
        <li>
          <strong>navigator.platform:</strong> Returns the operating system platform (e.g., "Win32", "MacIntel").  
        </li>
        <li>
          <strong>navigator.userAgent:</strong> Returns the full user agent string, useful for detecting browser and OS details.  
        </li>
        <li>
          Useful for *browser detection, **feature detection*, or adjusting behavior based on platform.
        </li>
      </ul>
    </div>
  );
};

export default JSNavigatorBOM;