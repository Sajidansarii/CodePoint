import { useState } from "react";

 const  WhatIsJavaScript = () => {
     const [showOutput1, setShowOutput1] = useState(false); 
     const [showOutput2, setShowOutput2] = useState(false);

return ( 
<div className="max-w-3xl p-4"> 
  <h1 className="text-3xl font-medium text-blue-500 mb-3">What is JavaScript?</h1>

{/* Definition */}
  <p className="leading-relaxed">
    JavaScript is a compact, runtime-executed coding language. It is frequently employed to build responsive and engaging components in online platforms. JavaScript is quite simple to use since it is embedded within HTML. It is free to use and compatible across different systems.
  </p>

  {/* Key Points */}
  <div className="p-4 mt-10">
    <h2 className="font-semibold text-xl mb-2">Key Points</h2> 
    <ul className="list-disc list-inside space-y-1">
      <li>Adds <strong>behavior</strong> to web pages.</li>
      <li>Works with <strong>HTML</strong> (structure) and <strong>CSS</strong> (style).</li>
      <li>Is <strong>case-sensitive</strong> (<code>myVar</code> ≠ <code>MyVar</code>).</li>
      <li>Supported by all modern browsers.</li>
    </ul>
  </div>

  {/* Syntax Example */}
  <div className="bg-white border rounded-xl p-4 shadow mb-20 space-y-2">
    <h2 className="font-semibold">Syntax Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">

    {`<script> document.write("Hello, JavaScript!"); </script>}
     </pre> <button onClick={() => setShowOutput1(!showOutput1)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm" > {showOutput1 ? "Hide Output" : "Show Output"} </button> {showOutput1 && ( <div    className="mt-2 p-3 bg-gray-100 rounded-lg text-gray-800">  The text <strong>Hello,    JavaScript!</strong> will be printed on the page. </div> )`}
</pre>
 </div>


{/* Example: Change Content */}
  <div className="bg-white border rounded-xl p-4 shadow space-y-2 mb-20">
    <h2 className="font-semibold">Example: Change Content</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">

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
             The &lt;h2&gt; will change from <strong>Hello</strong> → <strong>Hello, CodePoint!</strong>
          </div>
        )}
      </div>
      
      {/* Note */}
      
  <div className="bg-yellow-50 mb-10 border-l-4 border-yellow-400 p-3 rounded-md text-gray-700">
    <strong>Note:</strong> JavaScript runs line by line (interpreted). Place
    <code className="mx-1">&lt;script&gt;</code> tags either in <code>&lt;head&gt;</code> or
    just before closing <code>&lt;/body&gt;</code> for better performance.
  </div>

  {/* Quiz */}
  <div className="bg-gray-50 p-4 rounded-xl shadow space-y-2">
    <h2 className="font-semibold">Mini Quiz</h2>
    <ol className="list-decimal list-inside text-gray-700 space-y-1">
      <li>JavaScript is used for: a) Structure b) Styling c) Behavior </li>
      <li>JavaScript is case-sensitive? (Yes/No)</li>
      <li>Which tag is used to add JavaScript inside HTML?</li>
    </ol>
  </div>
</div>

); }

export default WhatIsJavaScript;