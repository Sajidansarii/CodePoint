import React, { useState } from "react";

const JSHistoryBOM = () => {
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">History Object in BOM (Browser Object Model</h1>

      <p>
        The <span className="text-red-400">history</span> object provides access to the browser's session history.
        It allows you to move backward, forward, or jump to a specific page in the history stack.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Window History</h1>
      <p className="mb-3">The <span className="text-red-400">window.history</span> object can be accessed without using the window prefix.</p>
      <p className="mb-3">To protect user privacy, JavaScript access to this object is restricted.</p>
      <p>Some available methods are:</p>
      <ul className="list-[square] list-inside mt-5">
        <li><span className="text-red-400">history.back()</span> - same as clicking back in the browser</li>
        <li><span className="text-red-400">history.forward()</span> - same as clicking forward in the browser</li>
      </ul>

      <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Window History Back</h1>
      <p className="mb-3">The <span className="text-red-400">history.back()</span> method loads the previous page from the browser’s history.</p>
      <p>This works the same way as clicking the browser’s Back button.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Add a Back button to the page.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>`}
        </code>
       </pre>
        <p className="mt-5 mb-3">Output Will be:</p>
        <div className="bg-gray-200 p-4 mt-5">
    <button className="bg-gray-360 border border-black px-2 rounded">Back</button>
        </div>

        <h1 className="text-2xl text-gray-800 mt-10 mb-3 font-semibold">Window History Forward</h1>
        <p className="mb-3">The <span className="text-red-400">history.forward()</span> method loads the next page in the browser’s history.</p>
         <p>This works the same way as clicking the browser’s Forward button.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Add a Forward button to the page.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
          <code>
            {`<html>
<head>
<script>
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Forward" onclick="goForward()">

</body>
</html>`}
          </code>
         </pre>
          <p className="mt-5 mb-3">Output Will be:</p>
        <div className="bg-gray-200 p-4 mt-5">
    <button className="bg-gray-360 border border-black px-2 rounded">Forward</button>
        </div>
    
    </div>
  );
};

export default JSHistoryBOM;