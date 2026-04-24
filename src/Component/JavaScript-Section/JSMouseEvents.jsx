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

  const data = [
    {Event:'onclick', 	Occurs:'A user clicks on an element'},
    {Event:'oncontextmenu', Occurs:'A user right-clicks on an element'},
    {Event:'ondblclick', Occurs:'A user double-clicks on an element'},
    {Event:'onmousedown', Occurs:'A mouse button is pressed over an element'},
    {Event:'onmouseenter', Occurs:'The mouse pointer moves into an element'},
    {Event:'onmouseleave', Occurs:'The mouse pointer moves out of an element'},
    {Event:'onmousemove', Occurs:'The mouse pointer moves over an element'},
    {Event:'onmouseout', Occurs:'The mouse pointer moves out of an element'},
    {Event:'onmouseover', Occurs:'The mouse pointer moves onto an element'},
    {Event:'onmouseup', Occurs:'A mouse button is released over an element'}
  ]

  return (
    <div className="max-w-4xl  p-6 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Mouse Events</h1>

      <p className="text-gray-700 mb-4">
        <span className="text-red-400">Mouse events</span> let you respond to user interactions with the mouse. 
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


      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Mouse Events</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Event</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Occurs When</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-gray-200">{row.Event}</td>
              <td className="px-4 py-2 border-gray-200">{row.Occurs}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Click Event</h1>
      <p>This example shows how the click event works. When the button is clicked, it prints “Clicked!” to the console. Click events are commonly used for submitting forms.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const clickButton = document.getElementById('clickButton');
      const outputDiv = document.getElementById("output");
      clickButton.addEventListener('click', function(event) {
         outputDiv.innerHTML += 'Clicked!'+ JSON.stringify(event) + "<br>";
      });`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Double Click Event</h1>
     <p>This example uses the dblclick event, which fires when the button is double-clicked. The listener is attached to the element with the ID "doubleClickButton", and a function logs a message to the console when the user double-clicks it.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-10">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {` const doubleClickButton = document.getElementById('doubleClickButton');
      const outputDiv = document.getElementById("output");
      doubleClickButton.addEventListener('dblclick', function(event) {
         outputDiv.innerHTML += 'Double-clicked!' + JSON.stringify(event) + "<br>";
      });`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Mouse Down and Mouse Up Events</h1>
     <p>In this scenario, the mousedown and mouseup events are applied to a {'<div>'} element with the ID "mouseUpDownDiv". Two separate event listeners are attached: one triggers when the mouse button is pressed, logging a corresponding message, and the other triggers upon release, logging an appropriate notification.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-10">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {` const mouseUpDownDiv = document.getElementById('mouseUpDownDiv');
      const outputDiv = document.getElementById("output");
      mouseUpDownDiv.addEventListener('mousedown', function(event) {
         outputDiv.innerHTML += 'Mouse button down!' + JSON.stringify(event) + "<br>";
      });

      mouseUpDownDiv.addEventListener('mouseup', function(event) {
         outputDiv.innerHTML += 'Mouse button up!' + JSON.stringify(event) + "<br>";
      });`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Mouse Move Event</h1>
     <p>This example demonstrates the mousemove event on a {'<div>'} element identified as "mouseMoveDiv". The handler function retrieves the clientX and clientY properties from the event object, representing the pointer’s X and Y coordinates, and logs them to the console, providing continuous feedback on the cursor’s location within the div.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const mouseMoveDiv = document.getElementById('mouseMoveDiv');
      const outputDiv = document.getElementById("output");
      mouseMoveDiv.addEventListener('mousemove', function(event) {
         const x = event.clientX;
         const y = event.clientY;
         outputDiv.innerHTML += \`Mouse moved to (\${x}, $\{y}) + JSON.stringify(event) + <br>;\`
      });`}
      </code> 
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Wheel Event</h1>
     <p>This example demonstrates the wheel event on a {'<div>'} with the ID "wheelDiv". When the mouse wheel is scrolled over the div, the event listener logs a message in the console indicating that the wheel was rotated.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {` const wheelDiv = document.getElementById('wheelDiv');
      const outputDiv = document.getElementById("output");
      wheelDiv.addEventListener('wheel', function(event) {
         outputDiv.innerHTML += 'Mouse wheel rotated!'+ event + "<br>";
      });`}
      </code>
     </pre>



      <h2 className="text-2xl font-semibold text-gray-800 mt-20">Explanation</h2>
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