import React from "react";

const JSEventBubbling = () => {
  // Event handlers
  const parentHandler = () => {
    alert("Parent div clicked (bubbling)!");
  };

  const childHandler = () => {
    alert("Child div clicked (bubbling)!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Event Bubbling</span>
      </h1>

      <p className="text-gray-700 mb-6">
        *Event bubbling* is the process where an event starts at the *target element* and then propagates *upwards to its parent elements*. 
        This is the default event propagation mechanism in JavaScript.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Event Bubbling</h2>
      <div className="bg-gray-100 p-6 rounded">
        <div
          onClick={parentHandler} // Parent handler
          className="p-8 bg-green-200 mb-4"
        >
          Parent Div
          <div
            onClick={childHandler} // Child handler
            className="p-6 bg-green-400 mt-4 text-white cursor-pointer"
          >
            Child Div
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explanation</h2>
      <p className="text-gray-700 mb-4">
        In this example:  
        <ul className="list-disc list-inside mt-2">
          <li>We use <code>onClick</code> to listen for click events (default bubbling phase).</li>
          <li>When you click on the *child div, the event triggers the **child handler first, then bubbles up to the **parent handler*.</li>
          <li>Event bubbling allows parent elements to *react to events on their child elements* without adding separate listeners.</li>
        </ul>
      </p>

      <p className="text-gray-700">
        <strong>Tip:</strong> You can stop the bubbling using <code>event.stopPropagation()</code> if you want the event to *not propagate* to parent elements.
      </p>
    </div>
  );
};

export default JSEventBubbling;