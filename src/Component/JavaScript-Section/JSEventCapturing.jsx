import React from "react";

const JSEventCapturing = () => {
  // Event handlers
  const parentHandler = () => {
    alert("Parent div clicked (capturing)!");
  };

  const childHandler = () => {
    alert("Child div clicked (capturing)!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript <span className="text-green-600">Event Capturing</span>
      </h1>

      <p className="text-gray-700 mb-6">
        *Event capturing* is the process where the event is first captured by the *outermost element* and then propagated down to the target element. 
        This is the opposite of *event bubbling*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Event Capturing</h2>
      <div className="bg-gray-100 p-6 rounded">
        <div
          onClickCapture={parentHandler} // Capturing on parent
          className="p-8 bg-blue-200 mb-4"
        >
          Parent Div
          <div
            onClickCapture={childHandler} // Capturing on child
            className="p-6 bg-blue-400 mt-4 text-white cursor-pointer"
          >
            Child Div
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explanation</h2>
      <p className="text-gray-700 mb-4">
        In this example:  
        <ul className="list-disc list-inside mt-2">
          <li>We use <code>onClickCapture</code> to listen for events during the capturing phase.</li>
          <li>When you click on the *child div, the event first triggers the **parent handler* (outermost) and then the *child handler* (target element).</li>
          <li>Capturing ensures that outer elements get a chance to handle the event before inner elements.</li>
        </ul>
      </p>

      <p className="text-gray-700">
        <strong>Tip:</strong> React supports *event capturing* using the <code>onEventCapture</code> syntax (like <code>onClickCapture</code>), which is helpful when you want *parent elements to react before children*.
      </p>
    </div>
  );
};

export default JSEventCapturing;