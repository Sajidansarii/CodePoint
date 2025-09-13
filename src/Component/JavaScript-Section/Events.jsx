import React from "react";

const JSEvents = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript <span className="text-green-600">Events</span></h1>
      
      <p className="text-gray-700 mb-6">
        In JavaScript, *events* are actions or occurrences that happen in the browser, such as a user clicking a button, hovering over an element, submitting a form, or pressing a key. 
        You can handle these events using *event listeners* to perform certain actions when the event occurs.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 1: Click Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// HTML element
<button id="clickBtn">Click Me</button>

// JavaScript
document.getElementById("clickBtn").addEventListener("click", function() {
  alert("Button clicked!");
});`}
        </code>
      </div>
      <p className="text-gray-700 mb-6">
        Here, we use <span className="font-semibold">addEventListener</span> to listen for a <span className="font-semibold">click</span> event on the button. 
        When the button is clicked, a popup alert appears.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example 2: Mouseover Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// HTML element
<div id="hoverDiv" style="width:200px;height:50px;background-color:lightblue;">
  Hover over me
</div>

// JavaScript
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightgreen";
});`}
        </code>
      </div>
      <p className="text-gray-700">
        In this example, we change the background color of a div when the user hovers over it using the <span className="font-semibold">mouseover</span> event.
      </p>
    </div>
  );
};

export default JSEvents;