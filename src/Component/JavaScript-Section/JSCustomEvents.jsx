import React, { useEffect } from "react";

const JSCustomEvents = () => {
  useEffect(() => {
    // Example: Listening to a custom event
    const handleCustomEvent = (event) => {
      alert(`Custom event received with message: ${event.detail.message}`);
    };

    // Add event listener
    window.addEventListener("myCustomEvent", handleCustomEvent);

    // Cleanup
    return () => {
      window.removeEventListener("myCustomEvent", handleCustomEvent);
    };
  }, []);

  // Trigger custom event
  const triggerCustomEvent = () => {
    const event = new CustomEvent("myCustomEvent", {
      detail: { message: "Hello from Custom Event!" },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript <span className="text-green-600">Custom Events</span>
      </h1>

      <p className="text-gray-700 mb-6">
        *Custom Events* allow you to create your own events in JavaScript, 
        making it possible to communicate between different parts of your application 
        without directly calling functions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating & Triggering a Custom Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <button
          type="button"
          onClick={triggerCustomEvent}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Trigger Custom Event
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explanation</h2>
      <p className="text-gray-700 mb-4">
        <strong>Steps to use custom events:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Create a custom event using <code>new CustomEvent('eventName', {` detail: { ... }` })</code>.</li>
          <li>Dispatch the event using <code>dispatchEvent</code> on the target element (like <code>window</code>).</li>
          <li>Listen to the event using <code>addEventListener('eventName', handler)</code>.</li>
        </ul>
      </p>

      <p className="text-gray-700">
        In React, you can use <code>useEffect</code> to add and clean up event listeners to ensure proper memory management.
      </p>
    </div>
  );
};

export default JSCustomEvents;