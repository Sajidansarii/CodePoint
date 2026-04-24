import React, { useState } from "react";

const JSNavigatorBOM = () => {
  

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Navigator Object in BOM (Browser Object Model)</h1>

      <p>
        The <span className="text-red-400">navigator</span> object provides information about the browser and operating system.
        It is part of the Browser Object Model (BOM) and can be used to detect the user's environment.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Navigator Object</h1>
      <p className="mb-1">The <span className="text-red-400">navigator</span> object holds details about the visitor’s browser.</p>
      <p className="mb-1">You can write it with or without the window prefix, like this:</p>
      <p><span className="text-red-400">window.navigator</span> or simply navigator</p>
       
       <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Browser Cookies</h1>
       <p>The cookieEnabled property is true when cookies are allowed, otherwise false.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
       <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>`}
        </code>
       </pre>

       <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Browser Language</h1>
       <p>The <span className="text-red-400">language</span> property provides the browser’s language.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Is The Browser Online?</h1>
     <p>The <span className="text-red-400">onLine</span> property is true when the browser has an internet connection.</p>
     <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
     <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Browser Application Name</h1>
     <p>The <span className="text-red-400">appName</span> property gives the name of the browser application.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Browser Application Code Name</h1>
    <p>The <span className="text-red-400">appCodeName</span> property provides the browser’s code name.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>`}
      </code>
    </pre>

    <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">The Browser Engine</h1>
    <p>The <span className="text-red-400">product</span> property gives the name of the browser engine.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Browser Version</h1>
    <p>The <span className="text-red-400">appVersion</span> property provides the browser’s version information.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Browser Agent</h1>
    <p>The <span className="text-red-400">userAgent</span> property provides the user-agent string sent by the browser.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Browser Platform</h1>
    <p>The <span className="text-red-400">platform</span> property provides the browser’s operating system.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>`}
    </code>
   </pre>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Is Java Enabled?</h1>
   <p>The <span className="text-red-400">javaEnabled()</span> method is true when Java is enabled in the browser.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="overflow-x-auto bg-gray-200 p-4 rounded-lg mt-5">
    <code>
      {`<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>`}
    </code>
  </pre>

    </div>
  );
};

export default JSNavigatorBOM;