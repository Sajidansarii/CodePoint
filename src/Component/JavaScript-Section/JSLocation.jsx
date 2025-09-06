import React, { useState } from "react";

const JSLocationBOM = () => {
  const [output, setOutput] = useState("Click the button to see location details...");

  const handleExample = () => {
    // ✅ Get current URL
    const href = window.location.href;

    // ✅ Get protocol
    const protocol = window.location.protocol;

    // ✅ Get hostname
    const hostname = window.location.hostname;

    // ✅ Get pathname
    const pathname = window.location.pathname;

    // ✅ Redirect example (commented out to prevent actual redirect)
    // window.location.href = "https://www.example.com";

    setOutput(
      Current `URL: ${href}\nProtocol: ${protocol}\nHostname: ${hostname}\nPathname: ${pathname}`
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        location Object in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        The <strong>location</strong> object contains information about the current URL of the browser.
        It allows you to read URL components and redirect to other URLs. It is part of the Browser Object Model (BOM).
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Location Info
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Get current URL
console.log(window.location.href);

// Get protocol
console.log(window.location.protocol);

// Get hostname
console.log(window.location.hostname);

// Get pathname
console.log(window.location.pathname);

// Redirect to another URL (optional)
// window.location.href = "https://www.example.com";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>window.location.href:</strong> Returns the full URL of the current page.
        </li>
        <li>
          <strong>window.location.protocol:</strong> Returns the protocol (http:, https:).
        </li>
        <li>
          <strong>window.location.hostname:</strong> Returns the domain name or IP address.
        </li>
        <li>
          <strong>window.location.pathname:</strong> Returns the path after the domain.
        </li>
        <li>
          You can also change <code>window.location.href</code> to redirect to another URL.
        </li>
      </ul>
    </div>
  );
};

export default JSLocationBOM;