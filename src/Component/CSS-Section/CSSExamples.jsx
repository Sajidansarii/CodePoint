import React from "react";

const CSSExamples = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Examples</h1>
      <p className="mb-6">
        CSS Examples help you understand how different CSS properties work in real
        projects. Let's look at some basic but important examples.
      </p>

      {/* Example 1 */}
      <div className="mb-8">
        <h2 className="text-2xl mb-2">1. CSS Colors</h2>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">red</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        <p className="mb-2">Output:</p>
        <div className="border p-4 rounded">
          <h1 className="text-blue-400">This is Blue Heading</h1>
          <p className="text-red-500">This is Red Paragraph</p>
        </div>
        <p className="mt-2">
           Here, <code>h1</code> text is blue and <code>p</code> text is red using
          the <code>color</code> property.
        </p>
      </div>

      {/* Example 2 */}
      <div className="mb-8">
        <h2 className="text-2xl mb-2">2. CSS Borders</h2>
        <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">div</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid green</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        <p className="mb-2">Output:</p>
        <div className="border-2 border-green-600 p-10 rounded">
          This box has a green border with padding.
        </div>
        <p className="mt-2">
          <code>border</code> property is used to create borders around an
          element.
        </p>
      </div>

      {/* Example 3 */}
      <div className="mb-8">
        <h2 className="text-2xl mb-2">3. CSS Background</h2>
        <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">div</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightblue</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        <p className="mb-2">Output:</p>
        <div className="p-20 rounded bg-[#90D5FF]">
          This div has a lightblue background.
        </div>
        <p className="mt-2">
           <code>background-color</code> sets the background of an element.
        </p>
      </div>

      {/* Example 4 */}
      <div className="mb-8">
        <h2 className="text-2xl mb-2">4. CSS Text</h2>
       <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">h2</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">underline</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        <p className="mb-2">Output:</p>
        <h2 className="text-center underline">This is Underlined Center Text</h2>
        <p className="mt-2">
           <code>text-align</code> and <code>text-decoration</code> are used for
          text formatting.
        </p>
      </div>
    </div>
  );
};

export default CSSExamples;