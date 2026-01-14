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
    <div className="max-w-4xl p-6 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript addEventListener</h1>

      <p className="text-gray-700 mb-4">
        The <span className="text-red-400">addEventListener</span> method allows you to attach an event handler to a DOM element. 
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

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">The addEventListener() method</h1>
      <p>Add an event listener that fires when a user clicks a button:</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-10">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`document.getElementById("myBtn").addEventListener("click", displayDate);`}
        </code>
      </pre>

      <p><span className="text-red-400">addEventListener()</span> lets you attach an event handler to an element.It does not overwrite existing handlers, so multiple handlers can coexist.You can assign many handlers to the same element, even multiple handlers of the same type, like two "click" events.</p>
      <p>Event listeners can be added to any DOM object, not just HTML elements—for example, the <span className="text-red-400">window object</span>.It allows better control over event bubbling.</p>
      <p>Using addEventListener() separates JavaScript from HTML, improving readability and allowing you to attach events even when you don’t control the markup.
       Event listeners can be removed easily with removeEventListener().</p>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10">Syntax</h1>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg">
        <code>{`element.addEventListener(event, function, useCapture);`}</code>
       </pre>
       <p>The first argument indicates the type of event to listen for, e.g., "click", "keydown", or any standard DOM event.The second argument is the callback function that will be invoked whenever the event is triggered.</p>

       <p>The optional third argument is a boolean value indicating whether the event should be handled during the capturing phase (true) or the bubbling phase (false).</p>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10">Add an Event Handler to an Element</h1>
       <p>Alert "Hello World!" when the user clicks on an element:</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-10">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`element.addEventListener("click", function(){ alert("Hello World!"); });`}
        </code>
      </pre>
      <p>You can also refer to an external "named" function:</p>

      <h2 className="text-2xl text-gray-800 font-semibold mt-10">Example</h2>
     <p>Alert "Hello World!" when the user clicks on an element:</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Add Many Event Handlers to the Same Element</h1>
     <p>Using <span className="text-red-400">addEventListener()</span>, you can register multiple event handlers on the same element without overwriting previously attached handlers.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg font-semibold mt-5">
      <code>
        {`element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);`}
      </code>
     </pre>

     <p>You can add events of different types to the same element:</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900  p-4 rounded-lg mt-5">
      <code>
        {`element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);`}
      </code>
     </pre>


     <h1 className="text-2xl text-gray-800 font-semibold mt-10">Add an Event Handler to the window Object</h1>
    <p>The <span className="text-red-400">addEventListener()</span> method can attach event listeners to any HTML DOM object, including HTML elements, the document, the window, or other event-supporting objects like XMLHttpRequest.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <p>Attach an event listener that triggers whenever the window is resized.</p>
   <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10">Passing Parameters</h1>
   <p>When you need to pass arguments, wrap the function call in an anonymous function so the parameters are supplied correctly.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 ">
    <code>
      {`element.addEventListener("click", function(){ myFunction(p1, p2); });`}
    </code>
  </pre>


  <h1 className="text-2xl text-gray-800 font-semibold mt-10">The removeEventListener() method</h1>
  <p><span className="text-red-400">removeEventListener()</span> removes event listeners previously registered with <span className="text-red-400">addEventListener()</span> from a specified element.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`element.removeEventListener("mousemove", myFunction);`}
    </code>
  </pre>

    </div>
  );
};

export default JSAddEventListener;