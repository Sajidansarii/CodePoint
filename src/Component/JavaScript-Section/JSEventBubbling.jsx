import React from "react";

const JSEventBubbling = () => {
  // Event handlers
  const parentHandler = () => {
    alert("Parent div clicked (bubbling)!");
  };

  const childHandler = () => {
    alert("Child div clicked (bubbling)!");
  };

  return (
    <div className="max-w-4xl  p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Event Bubbling</h1>

      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Event bubbling</span> is the process where an event starts at the target element and then propagates upwards to its parent elements. 
        This is the default event propagation mechanism in JavaScript.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Event Bubbling</h2>
      <div className="bg-gray-100 p-6 rounded mt-10">
        <div
          onClick={parentHandler} // Parent handler
          className="p-8 bg-green-200 mb-4"
        >
          Parent Div
          <div
            onClick={childHandler} // Child handler
            className="p-6 bg-green-400 mt-4 text-white cursor-pointer"
          >
            Child Div
          </div>
        </div>
      </div>
       

       <h1 className="text-2xl text-gray-800 mt-10 font-semibold mb-3">Event Bubbling using 2 Nested DIVs</h1>
      <p className="mt-10">In nested {'<div>'}s, clicking the child triggers both the child and parent listeners as the event bubbles upward.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`let messageElement = document.getElementById('message');

		document.getElementById('parentDiv').addEventListener('click', function () {
			messageElement.innerHTML+='Parent div clicked<br>';
		});

		document.getElementById('childDiv').addEventListener('click', function () {
			messageElement.innerHTML+='Child div clicked<br>';
		});`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 mt-10 font-semibold mb-3">Event Bubbling using 3 Nested Levels</h1>
     <p>Three nested {'<div>'}s show event bubbling. Clicking Level 3 fires listeners on Level 3, then Level 2, then Level 1. Different background colors and console logs make the bubbling path easy to see.</p>
     <h2 className="text-2xl text-gray-800 mt-10 font-semibold mb-3"></h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`	const messageElement = document.getElementById("message");
		document.getElementById('div1').addEventListener("click", function (event) {
			messageElement.innerHTML += "Clicked on Level 1, Background 
      Color:" + getComputedStyle(event.target).backgroundColor + "<br>";
		});

		document.getElementById('div2').addEventListener("click", function (event) {
			messageElement.innerHTML += "Clicked on Level 2, Background 
      Color:" + getComputedStyle(event.target).backgroundColor + "<br>";
		});

		document.getElementById('div3').addEventListener('click', function (event) {
			messageElement.innerHTML +="Clicked on Level 3, Background 
      Color:" + getComputedStyle(event.target).backgroundColor + "<br>";
		});`}
      </code>
     </pre>



    </div>
  );
};

export default JSEventBubbling;