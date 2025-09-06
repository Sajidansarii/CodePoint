import React from "react";

const JSEventDelegation = () => {
  // Event delegation handler
  const handleListClick = (e) => {
    // Check if clicked element is an <li>
    if (e.target && e.target.tagName === "LI") {
      alert(`You clicked on: ${e.target.textContent}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Event Delegation</span>
      </h1>

      <p className="text-gray-700 mb-6">
        *Event delegation* lets you add a *single event listener* on a parent element to handle events for its child elements. 
        It’s efficient and works even if child elements are added dynamically.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example:</h2>
      <div
        onClick={handleListClick} // Parent div handles click
        className="bg-gray-100 p-4 rounded mb-4 cursor-pointer"
      >
        <ul className="list-disc list-inside">
          <li className="p-2 hover:bg-gray-200">Item 1</li>
          <li className="p-2 hover:bg-gray-200">Item 2</li>
          <li className="p-2 hover:bg-gray-200">Item 3</li>
          <li className="p-2 hover:bg-gray-200">Item 4</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explanation:</h2>
      <p className="text-gray-700 mb-4">
        In this example:
        <ul className="list-disc list-inside mt-2">
          <li>The parent <code>div</code> listens for click events on all its children.</li>
          <li>Inside the handler, we check if the <code>e.target</code> is an <code>LI</code> element.</li>
          <li>This approach is more *memory-efficient* than adding a click listener to each <code>li</code>.</li>
        </ul>
      </p>

      <p className="text-gray-700">
        <strong>Note:</strong> Event delegation is especially useful for *dynamic lists* where child elements can be added or removed.
      </p>
    </div>
  );
};

export default JSEventDelegation;