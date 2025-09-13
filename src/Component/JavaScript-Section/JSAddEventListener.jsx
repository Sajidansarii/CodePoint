import React, { useEffect, useState } from "react";

const JSAddEventListener = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Event handler function
    const handleClick = () => {
      setCount((prev) => prev + 1);
    };

    // Add event listener to the button
    const button = document.getElementById("myButton");
    button.addEventListener("click", handleClick);

    // Cleanup function to remove the event listener
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        JavaScript <span className="text-green-600">addEventListener</span>
      </h1>

      <p className="text-gray-700 mb-4">
        The <code>addEventListener</code> method allows you to attach an event handler to a DOM element. 
        Unlike inline event handlers, it allows multiple handlers on the same element.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Example: Counting Clicks</h2>
      <button
        id="myButton"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click Me
      </button>

      <p className="text-gray-700 mt-4">
        Button clicked: <strong>{count}</strong> times
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><code>document.getElementById("myButton")</code> selects the button element.</li>
        <li><code>addEventListener("click", handleClick)</code> attaches the click event to the button.</li>
        <li>We update state <code>count</code> when the button is clicked.</li>
        <li>The cleanup function inside <code>useEffect</code> ensures the listener is removed when the component unmounts, preventing memory leaks.</li>
      </ul>

      <p className="text-gray-700">
        Using <code>addEventListener</code> is the preferred way to handle events when you need multiple listeners or dynamic attachment.
      </p>
    </div>
  );
};

export default JSAddEventListener;