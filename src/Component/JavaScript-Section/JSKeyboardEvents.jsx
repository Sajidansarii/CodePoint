import React, { useState } from "react";

const JSKeyboardEvents = () => {
  const [keyPressed, setKeyPressed] = useState("");

  // Handle keydown event
  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        JavaScript <span className="text-green-600">Keyboard Events</span>
      </h1>

      <p className="text-gray-700 mb-4">
        *Keyboard events* allow you to detect when a user presses keys on the keyboard. 
        Common events include <code>keydown</code>, <code>keyup</code>, and <code>keypress</code>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Example: Detect Key Press</h2>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {keyPressed && (
        <p className="text-gray-700">
          You pressed: <strong>{keyPressed}</strong>
        </p>
      )}

      <h2 className="text-2xl font-semibold text-gray-800">Explanation</h2>
      <p className="text-gray-700 mb-2">
        - <code>onKeyDown</code> triggers when the user *presses a key*. It receives an event object.
      </p>
      <p className="text-gray-700 mb-2">
        - <code>e.key</code> gives the *value of the key pressed* (e.g., "a", "Enter", "ArrowUp").
      </p>
      <p className="text-gray-700">
        Keyboard events are useful for creating *keyboard shortcuts, **form input validation, or **interactive games*.
      </p>
    </div>
  );
};

export default JSKeyboardEvents;