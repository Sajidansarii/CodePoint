import { useState } from "react";

 const  WhatIsJavaScript = () => {
     const [showOutput1, setShowOutput1] = useState(false); 
     const [showOutput2, setShowOutput2] = useState(false);

return ( <div className="max-w-3xl mx-auto p-4 space-y-6"> {/* Title */} <h1 className="text-2xl font-bold text-blue-600">What is JavaScript?</h1>

{/* Definition */}
  <p className="text-gray-700">
    JavaScript is a <strong>lightweight, interpreted programming language</strong>
    used to make web pages <strong>interactive</strong>. It runs inside the
    browser, and can also run on servers using <strong>Node.js</strong>.
  </p>

  {/* Key Points */}
  <div className="bg-gray-100 p-4 rounded-xl shadow">
    <h2 className="font-semibold mb-2">Key Points</h2>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Adds <strong>behavior</strong> to web pages.</li>
      <li>Works with <strong>HTML</strong> (structure) and <strong>CSS</strong> (style).</li>
      <li>Is <strong>case-sensitive</strong> (<code>myVar</code> ≠ <code>MyVar</code>).</li>
      <li>Supported by all modern browsers.</li>
    </ul>
  </div>

  {/* Syntax Example */}
  <div className="bg-white border rounded-xl p-4 shadow space-y-2">
    <h2 className="font-semibold">Syntax Example</h2>
    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg h-36 overflow-x-auto text-sm">

    {`<script> document.write("Hello, JavaScript!"); </script>}
     </pre> <button onClick={() => setShowOutput1(!showOutput1)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm" > {showOutput1 ? "Hide Output" : "Show Output"} </button> {showOutput1 && ( <div    className="mt-2 p-3 bg-gray-100 rounded-lg text-gray-800"> 👉 The text <strong>Hello,    JavaScript!</strong> will be printed on the page. </div> )`}
</pre>
 </div>


{/* Example: Change Content */}
  <div className="bg-white border rounded-xl p-4 shadow space-y-2">
    <h2 className="font-semibold">Example: Change Content</h2>
    <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto text-sm">

{`<!DOCTYPE html>

<html>
  <body>
    <h2 id="demo">Hello</h2>
    <script>
      document.getElementById("demo").innerHTML = "Hello, CodePoint!";
    </script>
  </body>
</html>`}
        </pre>
        <button
          onClick={() => setShowOutput2(!showOutput2)}
          className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm"
        >
          {showOutput2 ? "Hide Output" : "Show Output"}
        </button>
        {showOutput2 && (
          <div className="mt-2 p-3 bg-gray-100 rounded-lg text-gray-800">
            👉 The &lt;h2&gt; will change from <strong>Hello</strong> → <strong>Hello, CodePoint!</strong>
          </div>
        )}
      </div>{/* Note */}
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-md text-gray-700">
    <strong>Note:</strong> JavaScript runs line by line (interpreted). Place
    <code className="mx-1">&lt;script&gt;</code> tags either in <code>&lt;head&gt;</code> or
    just before closing <code>&lt;/body&gt;</code> for better performance.
  </div>

  {/* Quiz */}
  <div className="bg-gray-50 p-4 rounded-xl shadow space-y-2">
    <h2 className="font-semibold">Mini Quiz</h2>
    <ol className="list-decimal list-inside text-gray-700 space-y-1">
      <li>JavaScript is used for: a) Structure b) Styling c) Behavior ✅</li>
      <li>JavaScript is case-sensitive? (Yes/No)</li>
      <li>Which tag is used to add JavaScript inside HTML?</li>
    </ol>
  </div>
</div>

); }

export default WhatIsJavaScript;