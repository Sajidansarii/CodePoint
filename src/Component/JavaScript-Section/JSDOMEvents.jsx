import React, { useState } from "react";

const JSDOMEvents = () => {
  const [text, setText] = useState("Hover over me!");
  const [inputValue, setInputValue] = useState("");

  // Click event handler
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Mouseover event handler
  const handleMouseOver = () => {
    setText("Mouse is over the text!");
  };

  const handleMouseOut = () => {
    setText("Hover over me!");
  };

  // Input change handler
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">DOM Events</span>
      </h1>

      <p className="text-gray-700 mb-6">
        *DOM events* allow your web page to respond to user actions like clicks, mouse movements, typing, or page load. 
        React uses *camelCase event handlers* like <code>onClick</code> and <code>onMouseOver</code>.
      </p>

      {/* Click Event */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Click Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <button
          type="button"
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Click Me
        </button>
      </div>

      {/* Mouseover Event */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mouseover Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="text-gray-800 cursor-pointer"
        >
          {text}
        </p>
      </div>

      {/* Input Change Event */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Input Change Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Type something..."
        />
        <p className="mt-2 text-gray-700">You typed: {inputValue}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explanation</h2>
      <p className="text-gray-700">
        In React, events are written in *camelCase* and passed as *functions*, not strings. 
        Using <code>type="button"</code> for buttons prevents page reload, 
        and onMouseOver, onMouseOut, and onChange let you interact dynamically without refreshing the page.
      </p>
    </div>
  );
};

export default JSDOMEvents;