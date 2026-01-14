import React, { useState } from "react";

const JSAlertBOM = () => {
  const [output, setOutput] = useState("Click the button to see an alert popup...");

  const handleAlert = () => {
    //  Show alert popup
    window.alert("You pressed alert button!!");

    setOutput("An alert popup was displayed using window.alert().");
  };

  const [confirm, setconfirm] = useState("Click the button to see an confirm popup...");
  const handleconfirm = () =>{
    window.confirm("You pressed OK!");
    setconfirm("An confirm popup was displayed using window.alert().")
  }

   const [Prompt, setPrompt] = useState("Click the button to see an prompt popup...");
  const handlePropmt = () =>{
    window.prompt('write something..','Harry Potter');
    setPrompt("An prompt popup was displayed using window.alert().")
  }

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Alert Popup in BOM (Browser Object Model)</h1>

      <p>
        The <span className="text-red-400">alert()</span> method of the <span className="text-red-400">window</span> object creates a
        popup dialog displaying a message to the user. It is a simple way to provide notifications
        or messages in the browser.
      </p>

      <p className="mt-10">JavaScript provides three types of popup boxes.</p>
      <ul className="list-[square] list-inside mt-5">
        <li>Alert box</li>
        <li>Prompt box</li>
        <li>Confirm box</li>
      </ul>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Alert Box</h1>
      <p>An alert box is used to ensure the user sees important information, requiring them to click "OK" to continue.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`window.alert("sometext");`}
        </code>
      </pre>

      <p className="mt-5">The <span className="text-red-400">window.alert()</span> method can be accessed without using the window prefix.</p>
      <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`alert("You pressed alert button!");`}
        </code>
      </pre>

            <button
        onClick={handleAlert}
        className="px-5 py-2 mt-5 mb-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Alert
      </button>
      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {output}
      </div>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Confirm Box</h1>
      <p className="mb-3">A <span className="text-red-400">confirm</span> box is used when you want the user to approve or reject something, requiring them to click "OK" or "Cancel" to continue.</p>
      <p>Clicking "OK" returns true, while clicking "Cancel" returns false.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`window.confirm("sometext");`}
        </code>
      </pre>

      <p className="mt-10">The <span className="text-red-400">window.confirm()</span> method can be called without using the window prefix.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
`}
        </code>
      </pre>

       <button
        onClick={handleconfirm}
        className="px-5 py-2 mt-5 mb-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show confirm
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {confirm}
      </div>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Prompt Box</h1>
      <p className="mb-3">A <span className="text-red-400">prompt</span> box is used when you want the user to provide input before proceeding, requiring them to click "OK" or "Cancel" after entering a value.</p>
      <p>Clicking "OK" returns the entered value, while clicking "Cancel" returns null.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
      <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`window.prompt("sometext","defaultText");`}
        </code>
      </pre>
   <p className="mt-5">You can use <span className="text-red-400">prompt()</span> directly instead of writing window.prompt().</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}`}
      </code>
    </pre>

    <button
        onClick={handlePropmt}
        className="px-5 py-2 mt-5 mb-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show prompt
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {Prompt}
      </div>






    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Line Breaks</h1>
    <p>To create line breaks in a popup box, use \n.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`alert("Hello\\nHow are you?");`}
      </code>
    </pre>

    </div>
  );
};

export default JSAlertBOM;