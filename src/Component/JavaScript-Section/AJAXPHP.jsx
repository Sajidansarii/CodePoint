import React, { useState } from "react";

const JSAJAXPHP = () => {
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX with PHP in JavaScript</h1>

      <p>
        AJAX can communicate with a <span className="text-red-400">PHP backend</span> to fetch or send data
        without refreshing the entire page. The PHP script processes the request and
        sends back a response.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">AJAX PHP </h1>
      <p>This example demonstrates real-time communication between a web page and a web server while the user enters characters.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`<p>Start typing a name in the input field below:</p>
<p>Suggestions: <span id="txtHint"></span></p>

<form>
First name: <input type="text" onkeyup="showHint(this.value)">
</form>

<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  xmlhttp.open("GET", "gethint.php?q=" + str);
  xmlhttp.send();
  }
}
</script>`}
        </code>
       </pre>

       <p className="mt-5">When the user enters a character in the input field, the <span className="text-red-400">onkeyup</span> event fires and executes the <span className="text-red-400">showHint()</span> function.</p>
       <p className="mt-10">Check whether the input field is empty (str.length == 0). If it is, erase the content of txtHint and exit the function.</p>
       <p className="mt-3">When the input field has content, execute the following:</p>
       <ul className="list-[square] list-inside mt-5 space-y-1">
        <li>Create an XMLHttpRequest object</li>
        <li>The str variable holds the content of the input field</li>
        <li>Notice that q parameter is added gethint.php?q="+str</li>
        <li>Send the request off to a PHP file (gethint.php) on the server</li>
        <li>Create the function to be executed when the server response is ready</li>
       </ul>


















    </div>
  );
};

export default JSAJAXPHP;