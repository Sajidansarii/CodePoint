import React from "react";

const JSEventDelegation = () => {

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Event Delegation</h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Event delegation</span> lets you attach one listener to a parent element and use the event object to identify which child triggered the action, reducing the need for multiple listeners.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Event Delegation </h1>
      <p>We add one click listener to the {'<ul>'} to manage clicks on all tutorial {'<li>'} items. Clicking an item reveals it as the event target and logs its content. This shows how event delegation makes dynamic lists easier to manage.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {` const output = document.getElementById("output");
	  const myList = document.getElementById("myList")
      myList.addEventListener("click", function(event) {
         if (event.target.tagName === "LI") {
            output.innerHTML += "Tutorial clicked: " + 
			event.target.textContent + "<br>";
         }
      });`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Form Control Changes</h1>
      <p>This example uses event delegation to track input changes. A single input listener on the {'<form>'} catches updates from its fields. By checking the event target, the script confirms it came from an {'<input>'} and logs the field’s name and new value.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {` const messageElement = document.getElementById("message");
	  const myForm = document.getElementById("myForm")
      myForm.addEventListener("input", function(event) {
         if (event.target.nodeName === "INPUT") {
            messageElement.innerHTML += 
			"Input changed: " + event.target.name + 
            " - New value: " + event.target.value+'<br>';
         }
      });`}
        </code>
      </pre>

      <p className="mt-10">Event delegation lets one listener manage many elements, saving code and boosting performance. It’s great for lists, forms, tables, menus, tabs, accordions, and other dynamic UI parts, helping keep your code organized and flexible.</p>



    </div>
  );
};

export default JSEventDelegation;