import React, { useState } from "react";

const JSMouseEvents = () => {
  const [message, setMessage] = useState("Hover or click the box below!");

  // Mouse event handlers
  const handleClick = () => {
    setMessage("Mouse clicked!");
  };

  const handleMouseEnter = () => {
    setMessage("Mouse entered the box!");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse left the box!");
  };

  const handleDoubleClick = () => {
    setMessage("Mouse double-clicked!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        JavaScript <span className="text-green-600">Mouse Events</span>
      </h1>

      <p className="text-gray-700 mb-4">
        *Mouse events* let you respond to user interactions with the mouse. 
        Common events include <code>click</code>, <code>dblclick</code>, <code>mouseenter</code>, and <code>mouseleave</code>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Example: Mouse Interactions</h2>
      <div
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-32 bg-blue-200 flex items-center justify-center rounded cursor-pointer hover:bg-blue-300 transition"
      >
        <p className="text-gray-700">{message}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation</h2>
      <p className="text-gray-700 mb-2">
        - <code>onClick</code>: Triggered when the user clicks the element.  
        - <code>onDoubleClick</code>: Triggered on double-click.  
        - <code>onMouseEnter</code>: Triggered when the mouse pointer enters the element.  
        - <code>onMouseLeave</code>: Triggered when the mouse pointer leaves the element.
      </p>
      <p className="text-gray-700">
        Mouse events are essential for *interactive UI elements*, such as buttons, cards, drag-and-drop components, and hover effects.
      </p>
    </div>
  );
};

export default JSMouseEvents;