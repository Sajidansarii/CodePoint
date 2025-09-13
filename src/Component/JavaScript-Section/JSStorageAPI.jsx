import React, { useState } from "react";

const JSStorageAPI = () => {
  const [localValue, setLocalValue] = useState(localStorage.getItem("localData") || "");
  const [sessionValue, setSessionValue] = useState(sessionStorage.getItem("sessionData") || "");

  // ✅ Save to localStorage
  const saveLocal = () => {
    localStorage.setItem("localData", "Hello from localStorage!");
    setLocalValue(localStorage.getItem("localData"));
  };

  // ✅ Save to sessionStorage
  const saveSession = () => {
    sessionStorage.setItem("sessionData", "Hello from sessionStorage!");
    setSessionValue(sessionStorage.getItem("sessionData"));
  };

  // ✅ Clear storages
  const clearStorage = () => {
    localStorage.removeItem("localData");
    sessionStorage.removeItem("sessionData");
    setLocalValue("");
    setSessionValue("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Storage API in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>Storage API</strong> provides two main objects: 
        <code>localStorage</code> and <code>sessionStorage</code>. 
        They allow storing data in the browser with different lifetimes.
      </p>

      <div className="space-x-2">
        <button
          onClick={saveLocal}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save to localStorage
        </button>
        <button
          onClick={saveSession}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Save to sessionStorage
        </button>
        <button
          onClick={clearStorage}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Clear Storage
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md space-y-2">
        <p className="font-semibold text-gray-800">
          Local Storage: {localValue || "❌ No data saved"}
        </p>
        <p className="font-semibold text-gray-800">
          Session Storage: {sessionValue || "❌ No data saved"}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Save data
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");

// Get data
localStorage.getItem("key");
sessionStorage.getItem("key");

// Remove data
localStorage.removeItem("key");
sessionStorage.removeItem("key");

// Clear all storage
localStorage.clear();
sessionStorage.clear();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>localStorage</strong> → Stores data with no expiration (even after browser is closed).
        </li>
        <li>
          <strong>sessionStorage</strong> → Stores data for the current session only (cleared when tab is closed).
        </li>
        <li>
          Both store data in <strong>key-value pairs</strong> (strings only).
        </li>
        <li>
          Useful for saving user preferences, tokens, or temporary session data.
        </li>
      </ul>
    </div>
  );
};

export default JSStorageAPI;