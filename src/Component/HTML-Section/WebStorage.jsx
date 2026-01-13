import { useState } from "react";

const HTMLWebStorage = () => {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState(localStorage.getItem("name") || "");

  const saveToLocal = () => {
    localStorage.setItem("name", name);
    setStoredName(name);
    setName("");
  };

  const clearLocal = () => {
    localStorage.removeItem("name");
    setStoredName("");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML Web Storage</h1>

      <p className="leading-relaxed mb-3">
        HTML5 Web Storage provides two mechanisms for storing key-value pairs in a web browser:
      </p>

      <ul className="list-[square] list-inside leading-relaxed mb-3">
        <li><strong>localStorage</strong> — Data stored with no expiration time.</li>
        <li><strong>sessionStorage</strong> — Data stored until the browser tab is closed.</li>
      </ul>

      {/* Code Example */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">JavaScript Example</h2>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
          <code>{`// Save data
localStorage.setItem("name", "John");

// Retrieve data
let user = localStorage.getItem("name");

// Remove data
localStorage.removeItem("name");`}</code>
        </pre>
      </div>

      {/* Interactive Demo */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">Try It Yourself</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-auto"
          />
          <button
            onClick={saveToLocal}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={clearLocal}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear
          </button>
        </div>
        {storedName && (
          <p className="text-green-600 font-medium">
            Stored name: <span className="underline">{storedName}</span>
          </p>
        )}
      </div>

      {/* Notes */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="text-lg font-semibold text-yellow-700 mb-3">📝 Good to Know</h3>
        <ul className="list-[square] list-inside leading-relaxed space-y-1">
          <li>Stored data is in *string format*.</li>
          <li>You can convert objects using <code>JSON.stringify()</code> and <code>JSON.parse()</code>.</li>
          <li>localStorage is shared across tabs from the same origin.</li>
          <li>sessionStorage is limited to the current browser tab.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLWebStorage;