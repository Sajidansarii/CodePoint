import React from "react";

const JSEvents = () => {
  const data = [
    {Event:'onchange', Description:'An HTML element has been changed'},
    {Event:'onclick',  Description:'The user clicks an HTML element'},
    {Event:'onmouseover', Description:'The user moves the mouse over an HTML element'},
    {Event:'onmouseout', Description:'The user moves the mouse away from an HTML element'},
    {Event:'onkeydown', Description:'The user pushes a keyboard key'},
    {Event:'onload', Description:'The browser has finished loading the page'},
  ];
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Events</h1>
      
      <p className="mb-6">
        In JavaScript, <span className="text-red-400">events</span> are actions or occurrences that happen in the browser, such as a user clicking a button, hovering over an element, submitting a form, or pressing a key. 
        You can handle these events using *event listeners* to perform certain actions when the event occurs.
      </p>
      <h1 className="text-2xl mt-10">HTML Events</h1>
      <p className="leading-relaxed mt-3">An HTML event happens when the browser or user does something.</p>
      <p className="leading-relaxed mt-3">Below are examples of events in HTML:</p>
      <ul className="list-[square] list-inside leading-relaxed mb-5">
        <li className="mt-3">An HTML web page has finished loading</li>
        <li>An HTML input field was changed</li>
        <li>An HTML button was clicked</li>
      </ul>

      <p className="leading-relaxed mt-3">When something happens, like a click, you might want to do something in response.</p>
      <p className="leading-relaxed mt-3">JavaScript can run code when something happens on the page.</p>
      <p className="leading-relaxed mt-3">HTML lets you run JavaScript by adding event handlers to elements.</p>
      <p className="mt-5 mb-3">With single quotes:</p>
      <pre className=" border border-gray-300 py-1 px-2">
        <span className="text-gray-500">&lt;</span>
        <span className="text-red-500">element</span>{"  "}
        <span className="text-green-600">event</span>{" "}
        <span className="text-gray-500">=</span>{" "}
        <span className="text-blue-500">'some JavaScript'</span>
        <span className="text-gray-500">&gt;</span>
        </pre>


        <h1 className="mt-10">With double quotes:</h1>
        <pre className=" border border-gray-300 py-1 px-2">
        <span className="text-gray-500">&lt;</span>
        <span className="text-red-500">element</span>{"  "}
        <span className="text-green-600">event</span>{" "}
        <span className="text-gray-500">=</span>{" "}
        <span className="text-blue-500">"some JavaScript"</span>
        <span className="text-gray-500">&gt;</span>
        </pre>

        <p className="mt-5">Here, we add an onclick event to a <span className="text-red-400 bg-gray-100 px-1">{"<button>"}</span> to run JavaScript when it’s clicked.</p>
        <h1 className="text-2xl mt-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
          {`<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>`}
        </pre>

        <p className="leading-relaxed mt-10">The code above updates the text inside the element with the id "demo".</p>
        <p className="leading-relaxed">In the next example, the element changes its own content using <span className="text-red-400 bg-gray-50 px-1">this.innerHTML</span>.</p>
        <h1 className="text-2xl mt-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
          {`<button onclick="this.innerHTML = Date()">The time is?</button>`}
        </pre>

        <h1 className="text-2xl mt-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
          {`<button onclick="displayDate()">The time is?</button>`}
        </pre>

        <h1 className="text-2xl mt-10 mb-5">Common HTML Events</h1>
        <p>Here are common things that can happen in HTML (called events):</p>
        <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 border-b border-gray-300 text-gray-700 font-bold">Event</th>
              <th className="px-2 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Event}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1 className="text-2xl mt-10 mb-3">JavaScript Event Handlers</h1>
        <p>You can use event handlers to check and respond to what the user or browser does.</p>
        <ul className="list-[square] list-inside mt-4 leading-relaxed">
          <li>Things that should be done every time a page loads</li>
          <li>Things that should be done when the page is closed</li>
          <li>Action that should be performed when a user clicks a button</li>
          <li>Content that should be verified when a user inputs data</li>
        </ul>

        <p className="mt-10">There are several ways to make JavaScript respond to <span className="text-red-400 bg-gray-100 px-1">events</span>.</p>
        <ul className="list-[square] list-inside mt-4 leading-relaxed">
          <li>HTML event attributes can execute JavaScript code directly</li>
          <li>HTML event attributes can call JavaScript functions</li>
          <li>You can assign your own event handler functions to HTML elements</li>
          <li>You can prevent events from being sent or being handled</li>
        </ul>
    </div>
  );
};

export default JSEvents;