import React from "react";

const CSSDisplay = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Display</h1>

      <p className="mb-4">
        The <strong>CSS <code>display</code></strong> property specifies how an
        element is displayed on the page. It is one of the most important CSS
        properties because it controls the layout behavior of elements.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">selector</span> <span>{'{'}</span><br />

    <span className="text-red-500">display</span>
    <span>: </span>
    <span className="text-green-700">value</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Common Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <code>block</code> → Element takes up the full width, starts on a new
          line (e.g., &lt;div&gt;, &lt;p&gt;).
        </li>
        <li>
          <code>inline</code> → Element does not start on a new line, only takes
          up as much width as needed (e.g., &lt;span&gt;, &lt;a&gt;).
        </li>
        <li>
          <code>inline-block</code> → Behaves like inline but allows setting
          width/height.
        </li>
        <li>
          <code>none</code> → Hides the element (it will not occupy space).
        </li>
        <li>
          <code>flex</code> → Enables flexbox layout.
        </li>
        <li>
          <code>grid</code> → Enables grid layout.
        </li>
      </ul>

      {/* Example 1: Block vs Inline */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 1: Block vs Inline
      </h2>
      <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">inline</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">span</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">block</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <div className="mb-6">
        <p className="bg-blue-200 inline px-2">This is a paragraph (inline)</p>
        <span className="bg-green-200 block px-2">
          This is a span (block)
        </span>
      </div>

      {/* Example 2: Inline-block */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 2: Inline-block
      </h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">.box</span> <span>{'{'}</span><br />

    <span className="text-red-500">display</span>
    <span>: </span>
    <span className="text-green-700">inline-block</span>
    <span>;</span><br />

    <span className="text-red-500">width</span>
    <span>: </span>
    <span className="text-green-700">100px</span>
    <span>;</span><br />

    <span className="text-red-500">height</span>
    <span>: </span>
    <span className="text-green-700">100px</span>
    <span>;</span><br />

    <span className="text-red-500">background</span>
    <span>: </span>
    <span className="text-green-700">lightblue</span>
    <span>;</span><br />

    <span className="text-red-500">margin</span>
    <span>: </span>
    <span className="text-green-700">5px</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <div className="mb-6">
        <div className="inline-block w-24 h-24 bg-blue-300 m-2"></div>
        <div className="inline-block w-24 h-24 bg-green-300 m-2"></div>
        <div className="inline-block w-24 h-24 bg-yellow-300 m-2"></div>
      </div>

      {/* Example 3: None */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 3: None (Hide Element)
      </h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">.hidden</span> <span>{'{'}</span><br />

    <span className="text-red-500">display</span>
    <span>: </span>
    <span className="text-green-700">none</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <div className="mb-6">
        <p className="bg-red-200 p-2">This is visible</p>
        <p className="hidden bg-gray-300 p-2">This is hidden</p>
      </div>

      {/* Example 4: Flex & Grid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 4: Flex & Grid
      </h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">.flex-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">gap</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.grid-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">grid</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">grid-template-columns</span>: <span className="text-green-700">repeat(3, 1fr)</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">gap</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-700">Flex Example:</h3>
        <div className="flex gap-2 mb-4">
          <div className="bg-blue-300 p-4">1</div>
          <div className="bg-green-300 p-4">2</div>
          <div className="bg-yellow-300 p-4">3</div>
        </div>

        <h3 className="font-semibold text-gray-700">Grid Example:</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-300 p-4">A</div>
          <div className="bg-green-300 p-4">B</div>
          <div className="bg-yellow-300 p-4">C</div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <code>display</code> is crucial for controlling layout and element
          positioning.
        </li>
        <li>
          Use <code>flex</code> and <code>grid</code> for modern, responsive
          layouts.
        </li>
        <li>
          <code>display: none</code> removes the element completely, while{" "}
          <code>visibility: hidden</code> hides it but keeps the space.
        </li>
      </ul>
    </div>
  );
};

export default CSSDisplay;