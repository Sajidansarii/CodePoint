import React from "react";

const CSSExamples = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">CSS Examples</h1>
      <p className="mb-6">
        CSS Examples help you understand how different CSS properties work in real
        projects. Let's look at some basic but important examples.
      </p>

      {/* Example 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. CSS Colors</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
{`p {
  color: red;
}

h1 {
  color: blue;
}`}
        </pre>
        <p className="mb-2">Output:</p>
        <div className="border p-4 rounded">
          <h1>This is Blue Heading</h1>
          <p>This is Red Paragraph</p>
        </div>
        <p className="mt-2">
          👉 Here, <code>h1</code> text is blue and <code>p</code> text is red using
          the <code>color</code> property.
        </p>
      </div>

      {/* Example 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. CSS Borders</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
{`div {
  border: 2px solid green;
  padding: 10px;
}`}
        </pre>
        <p className="mb-2">Output:</p>
        <div className="border-2 border-green-600 p-4 rounded">
          This box has a green border with padding.
        </div>
        <p className="mt-2">
          👉 <code>border</code> property is used to create borders around an
          element.
        </p>
      </div>

      {/* Example 3 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. CSS Background</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
{`div {
  background-color: lightblue;
  padding: 20px;
}`}
        </pre>
        <p className="mb-2">Output:</p>
        <div className="p-6 rounded" style={{ backgroundColor: "lightblue" }}>
          This div has a lightblue background.
        </div>
        <p className="mt-2">
          👉 <code>background-color</code> sets the background of an element.
        </p>
      </div>

      {/* Example 4 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. CSS Text</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
{`h2 {
  text-align: center;
  text-decoration: underline;
}`}
        </pre>
        <p className="mb-2">Output:</p>
        <h2 className="text-center underline">This is Underlined Center Text</h2>
        <p className="mt-2">
          👉 <code>text-align</code> and <code>text-decoration</code> are used for
          text formatting.
        </p>
      </div>
    </div>
  );
};

export default CSSExamples;