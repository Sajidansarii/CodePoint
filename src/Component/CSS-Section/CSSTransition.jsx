import React from "react";

const CssTransition = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Transitions
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        <strong>CSS Transitions</strong> ek smooth effect create karte hain jab
        kisi element ki property change hoti hai (hover, focus, active etc.).
        Ye <em>animations ka simple form</em> hai jo automatically property
        changes ko animate karta hai.
      </p>

      {/* Syntax Section */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`selector {
  transition: property duration timing-function delay;
}`}
        </pre>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>property</strong> → kaunsi CSS property animate hogi
            (example: <code>background-color</code>, <code>width</code>)
          </li>
          <li>
            <strong>duration</strong> → kitne time me transition complete hoga
            (example: <code>2s</code>)
          </li>
          <li>
            <strong>timing-function</strong> → transition ki speed curve (ease,
            linear, ease-in, ease-out, ease-in-out)
          </li>
          <li>
            <strong>delay</strong> → kitna time rukkar transition start hoga
          </li>
        </ul>
      </div>

      {/* Example 1: Background Color Transition */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">
          1. Background Color Transition
        </h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  width: 150px;
  height: 150px;
  background-color: blue;
  transition: background-color 1s ease;
}

div:hover {
  background-color: red;
}`}
        </pre>
        <p className="text-gray-600">
          Jab user hover karega, <code>background-color</code> blue se red me
          smoothly change ho jaayega.
        </p>
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-blue-500 hover:bg-red-500 transition-colors duration-1000"></div>
        </div>
      </div>

      {/* Example 2: Width Transition */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2. Width Transition</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  width: 100px;
  height: 50px;
  background-color: purple;
  transition: width 0.5s ease-in-out;
}

div:hover {
  width: 200px;
}`}
        </pre>
        <p className="text-gray-600">
           Hover karne par width smoothly <code>100px</code> se{" "}
          <code>200px</code> tak badhegi.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-12 bg-purple-500 hover:w-48 transition-all duration-500"></div>
        </div>
      </div>

      {/* Example 3: Multiple Properties */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3. Multiple Properties</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: width 1s, background-color 2s;
}

div:hover {
  width: 200px;
  background-color: orange;
}`}
        </pre>
        <p className="text-gray-600">
          Yahan <code>width</code> 1 second me badhegi aur{" "}
          <code>background-color</code> 2 second me change hogi.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-500 hover:w-48 hover:bg-orange-500 transition-all duration-1000"></div>
        </div>
      </div>

      {/* Example 4: Timing Functions */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">4. Timing Functions</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  transition: all 2s ease-in;
}`}
        </pre>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <code>ease</code> → slow start, fast middle, slow end (default)
          </li>
          <li>
            <code>linear</code> → constant speed
          </li>
          <li>
            <code>ease-in</code> → slow start then fast
          </li>
          <li>
            <code>ease-out</code> → fast start then slow
          </li>
          <li>
            <code>ease-in-out</code> → slow start & slow end
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssTransition;