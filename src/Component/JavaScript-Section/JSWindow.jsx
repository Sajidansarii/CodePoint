import React, { useEffect, useState } from "react";

const JSWindowDocumentEvents = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Keydown event on document
    const handleKeyDown = (e) => {
      alert(`You pressed: ${e.key}`);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        JavaScript <span className="text-green-600">Window & Document Events</span>
      </h1>

      <p className="text-gray-700">
        JavaScript allows you to respond to *events on the global objects* <code>window</code> and <code>document</code>. 
        Common events include <strong>scroll</strong>, <strong>resize</strong>, and <strong>keyboard events</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">Example:</h2>
      <div className="bg-gray-100 p-4 rounded space-y-4">
        <p className="text-gray-700">Current vertical scroll: <strong>{scrollY}px</strong></p>
        <p className="text-gray-700">Window width: <strong>{windowWidth}px</strong></p>
        <p className="text-gray-700">Press any key to see a keydown alert.</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Scroll Event:</strong> <code>window.addEventListener("scroll", handler)</code> triggers when the page is scrolled.
        </li>
        <li>
          <strong>Resize Event:</strong> <code>window.addEventListener("resize", handler)</code> triggers when the browser window is resized.
        </li>
        <li>
          <strong>Keyboard Event:</strong> <code>document.addEventListener("keydown", handler)</code> triggers when a key is pressed anywhere on the page.
        </li>
        <li>
          We use <code>useEffect</code> to add event listeners when the component mounts and remove them when it unmounts to avoid memory leaks.
        </li>
      </ul>

      <p className="text-gray-700">
        These events are useful for implementing *responsive layouts, **keyboard shortcuts, and **dynamic interactions* on your website.
      </p>
    </div>
  );
};

export default JSWindowDocumentEvents;