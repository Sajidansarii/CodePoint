import React, { useState } from "react";

const JSDebugging = () => {
  
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Debugging in JavaScript</h1>
      <p>Programming code can have syntax or logical errors, many of which are hard to identify. Often, faulty code produces no error messages at all, giving no clue about where the problem lies. The process of finding and correcting these issues is known as code debugging.</p>
     
     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Debuggers</h1>
    <p>Debugging can be challenging, but luckily all modern browsers include a built-in JavaScript debugger. These debuggers can be enabled or disabled to ensure errors are shown to the user. They also allow you to set breakpoints—points where execution pauses—and inspect variables while the code is running. Typically, debugging is activated by pressing the F12 key and choosing Console from the debugger menu.</p>
     

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The console.log() Method</h1>
     <p>When debugging is supported by the browser, <span className="text-red-400">console.log()</span> can be used to display JavaScript values in the debugger window.</p>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html>`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Setting Breakpoints</h1>
   <p>The debugger allows you to set breakpoints in JavaScript. At each breakpoint, the code stops running, letting you check variable values before resuming execution.</p>
   

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The debugger Keyword</h1>
   <p>The <span className="text-red-400">debugger</span> keyword pauses JavaScript execution and invokes the debugging tool if one is available. It works the same way as placing a breakpoint in the debugger. If debugging is not supported, the statement does nothing. When debugging is enabled, the code will pause before running the third line.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Major Browsers' Debugging Tools</h1>
   <p className="mb-3">Debugging is usually activated by pressing F12 and selecting Console in the debugger options.</p>
   <p>Otherwise, follow the steps below.</p>

   <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Chrome</h2>
  <ul className="list-[square] list-inside">
    <li>Open the browser.</li>
    <li>From the menu, select "More tools".</li>
    <li>From tools, choose "Developer tools".</li>
    <li>Finally, select Console.</li>
  </ul>

  <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Firefox</h2>
  <ul className="list-[square] list-inside">
    <li>Open the browser.</li>
    <li>From the menu, select "Web Developer".</li>
    <li>Finally, select "Web Console".</li>
  </ul>

  <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Edge</h2>
  <ul className="list-[square] list-inside">
    <li>Open the browser.</li>
    <li>From the menu, select "Developer Tools".</li>
    <li>Finally, select "Console".</li>
  </ul>

  <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Opera</h2>
  <ul className="list-[square] list-inside">
    <li>Open the browser.</li>
    <li>From the menu, select "Developer".</li>
    <li>From "Developer", select "Developer tools".</li>
    <li>Finally, select "Console".</li>
  </ul>

  <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Safari</h2>
  <ul className="list-[square] list-inside">
    <li>Go to Safari, Preferences, Advanced in the main menu.</li>
    <li>Check "Enable Show Develop menu in menu bar".</li>
    <li>When the new option "Develop" appears in the menu:
        Choose "Show Error Console".</li>
  </ul>


























    </div>
  );
};

export default JSDebugging;