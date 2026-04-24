import React, { useState } from "react";

const JSKeyboardEvents = () => {
  const [keyPressed, setKeyPressed] = useState("");

  // Handle keydown event
  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
  };

  const data = [
    {Property:'event.key', Description:'String representing the key value of the pressed key.'},
    {Property:'event.code', Description:'String representing the physical key on the keyboard.'},
    {Property:'event.location', Description:'Integer indicating the location of the key on the keyboard.'},
    {Property:'event.ctrlKey', Description:'Boolean indicating whether the Ctrl key was held down.'},
    {Property:'event.shiftKey', Description:'Boolean indicating whether the Shift key was held down.'},
    {Property:'event.altKey', Description:'Boolean indicating whether the Alt key was held down.'},
    {Property:'event.metaKey', Description:'Boolean indicating whether the Meta (Command) key was held down.'},
    {Property:'event.repeat', Description:'Boolean indicating whether the key event is a repeat event.'},
    {Property:'event.isComposing', Description:'Boolean indicating whether the event is part of a composition of multiple keystrokes.'},
    {Property:'event.which', Description:'Deprecated property; previously used to identify the numeric key code.'},
    {Property:'event.getModifierState(keyArg)', Description:'Method that returns a boolean indicating whether the modifier key is pressed.'}
  ]

  return (
    <div className="max-w-4xl p-6 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Keyboard Events</h1>

      <p className="text-gray-700 mb-4">
        <span className="text-red-400">Keyboard events</span> allow you to detect when a user presses keys on the keyboard. 
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

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Keyboard Event Properties</h1>
      <p>In JavaScript, keyboard events provide various properties that help determine which key was pressed. Some of the most important ones include:</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Property</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Keydown Event</h1>
      <p>This example shows how the JavaScript keydown event works. When any key is pressed, the event listener detects it and displays the pressed key inside the HTML element with the ID "output".</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-10">Example</h2>
      <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`document.addEventListener('keydown', function (event) {
         document.getElementById('output').innerHTML = 
		 "Key pressed: " + event.key;
      });`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Keyup Event</h1>
      <p>This example demonstrates the functionality of the keyup event. It registers the moment a pressed key is released and then displays the corresponding key on the screen.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {` document.addEventListener('keyup', function (event) {
         document.getElementById('output').innerHTML = 
		 "Key released: " + event.key;
      });`}
        </code>
      </pre>

      <p>keydown happens whenever any key is pressed, giving details about the key and modifiers. It keeps firing if the key is held down. keypress only occurs for character keys and shows the typed character, but doesn’t include modifier information.</p>
      <p>In all the examples above, we used addEventListener, but it’s also possible to handle events without it by assigning functions directly to event properties. Still, addEventListener is preferred because it lets you attach multiple handlers to the same event and keeps JavaScript separate from HTML.</p>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Keypress Event</h1>
      <p>In this example, the keypress event is employed to register user-typed characters. Once a character is entered, the event listener activates and renders the character inside the HTML element identified as "output".</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {` document.addEventListener('keypress', function (event) {
         document.getElementById('output').innerHTML = 
         "Character pressed: " + event.key;
      });`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Without using addEventListener method</h1>
      <p>This example has an input box. When a key is pressed, the handleKeyDown function runs, and when a key is released, the handleKeyUp function runs. Both functions display messages on the screen.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`function handleKeyDown(event) {
         document.getElementById('output').innerHTML+= 
		 "Key pressed: " + event.key+'<br>Key code: ' + event.keyCode+'<br>';
      }
      function handleKeyUp(event) {
         document.getElementById('output').innerHTML+= 
		 "Key released: ' + event.key+'<br><br>";
      }`}
        </code>
      </pre>





      
    </div>
  );
};

export default JSKeyboardEvents;