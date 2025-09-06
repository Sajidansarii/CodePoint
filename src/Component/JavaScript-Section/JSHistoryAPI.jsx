import React, { useState } from "react";

const JSHistoryAPI = () => {
  const [message, setMessage] = useState("Use the buttons below to navigate history...");

  // ✅ Go back one step in history
  const goBack = () => {
    window.history.back();
    setMessage("⬅ Moved back in history");
  };

  // ✅ Go forward one step in history
  const goForward = () => {
    window.history.forward();
    setMessage("➡ Moved forward in history");
  };

  // ✅ Push a new state to history
  const pushState = () => {
    window.history.pushState({ page: "new" }, "New Page", "/new-page");
    setMessage(" New state pushed to history (URL changed without reload)");
  };

  // ✅ Listen for popstate (when user navigates with back/forward buttons)
  window.onpopstate = (event) => {
    setMessage( `You navigated to: ${document.location.pathname}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        History API in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>History API</strong> allows manipulation of the browser session history. 
        You can navigate back and forward, and change the URL without reloading the page.
      </p>

      <div className="space-x-2">
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
          onClick={pushState}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          Push New State
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {message}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Go back one step
window.history.back();

// Go forward one step
window.history.forward();

// Push new state to history
window.history.pushState({ page: "new" }, "New Page", "/new-page");

// Listen for back/forward navigation
window.onpopstate = (event) => {
  console.log("Navigated to:", document.location.pathname);
};`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>history.back()</code> → Moves one step back in session history.
        </li>
        <li>
          <code>history.forward()</code> → Moves one step forward in session history.
        </li>
        <li>
          <code>history.pushState()</code> → Adds a new entry to the history stack and updates the URL without reloading the page.
        </li>
        <li>
          <code>window.onpopstate</code> → Event triggered when navigating with back/forward buttons.
        </li>
        <li>
          Useful for *Single Page Applications (SPAs)* where you want to update the URL dynamically without reloading.
        </li>
      </ul>
    </div>
  );
};

export default JSHistoryAPI;