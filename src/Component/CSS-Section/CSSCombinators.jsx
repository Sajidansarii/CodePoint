import React from "react";

const CssCombinators = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Combinators</h1>
      <p className="mb-4">
        CSS Combinators define the relationship between two selectors. 
        They are used to target elements based on their hierarchy or sibling relationships.
      </p>

      {/* 1. Descendant Selector */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Descendant Selector (A B)</h2>
      <p className="mb-4">
        Selects all elements <code>B</code> inside <code>A</code> (at any level).
      </p>
      <div className="border p-4 mb-4 bg-gray-50">
        <div className="text-blue-600">
          <p>This paragraph is inside a div</p>
          <section>
            <p>This paragraph is deeper inside a section (still selected)</p>
          </section>
        </div>
      </div>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
{`div p {
  color: blue;
}`}
      </pre>

      {/* 2. Child Selector */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Child Selector (A {'>'} B)</h2>
      <p className="mb-4">
        Selects elements <code>B</code> that are <strong>direct children</strong> of <code>A</code>.
      </p>
      <div className="border p-4 mb-4 bg-gray-50">
        <div className="text-green-600">
          <p>This paragraph is a direct child</p>
          <section>
            <p>This one is nested inside a section (not selected)</p>
          </section>
        </div>
      </div>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
{`div > p {
  color: green;
}`}
      </pre>

      {/* 3. Adjacent Sibling Selector */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Adjacent Sibling Selector (A + B)</h2>
      <p className="mb-4">
        Selects the <strong>first sibling</strong> <code>B</code> that comes immediately after <code>A</code>.
      </p>
      <div className="border p-4 mb-4 bg-gray-50">
        <h3 className="text-lg">Heading</h3>
        <p className="text-red-600">This paragraph comes right after h3 (selected)</p>
        <p>This paragraph is not selected</p>
      </div>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
{`h3 + p {
  color: red;
}`}
      </pre>

      {/* 4. General Sibling Selector */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. General Sibling Selector (A ~ B)</h2>
      <p className="mb-4">
        Selects <code>B</code> elements that are <strong>siblings</strong> of <code>A</code> (not just the first).
      </p>
      <div className="border p-4 mb-4 bg-gray-50">
        <h3 className="text-lg">Heading</h3>
        <p className="text-purple-600">This is a sibling paragraph (selected)</p>
        <p className="text-purple-600">This one too (selected)</p>
      </div>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
{`h3 ~ p {
  color: purple;
}`}
      </pre>

      {/* Summary */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><code>A B</code> → Selects all <code>B</code> inside <code>A</code> (descendant).</li>
        <li><code>A {'>'} B</code> → Selects only direct children.</li>
        <li><code>A + B</code> → Selects the first <code>B</code> immediately after <code>A</code>.</li>
        <li><code>A ~ B</code> → Selects all <code>B</code> siblings after <code>A</code>.</li>
      </ul>
    </div>
  );
};

export default CssCombinators;