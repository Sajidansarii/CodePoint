import React from "react";

const CSSSelectors = () => {
  return (
    <div className="p-4 sm:p-6  max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Selectors</h1>

      <p className="mb-4">
        CSS selectors are used to target <strong>HTML elements</strong> that you
        want to style. A selector tells the browser <em>which element(s)</em> a
        CSS rule applies to.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Types of CSS Selectors
      </h2>

      <ul className="list-disc list-inside mb-6">
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">Universal Selector (*):</span> Selects all elements on a page.
        </li>
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">Type Selector (element):</span> Selects all elements of a given type
          (e.g., <code>p</code>, <code>h1</code>).
        </li>
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">Class Selector (.classname):</span> Selects elements with a
          specific class attribute.
        </li>
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">ID Selector (#id):</span> Selects an element with a specific ID.
        </li>
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">Group Selector (A, B):</span> Selects multiple elements at once.
        </li>
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">Descendant Selector (A B):</span> Selects elements inside another element.
        </li>
        <li>
          <span className="text-red-400 bg-gray-50 px-1 rounded">Attribute Selector ([attribute]):</span> Selects elements with a specific attribute.
        </li>
      </ul>

      <h2 className="text-xl font-semibold  mb-2">Examples</h2>

      <div className="bg-gray-900 text-green-400  p-4 rounded-lg overflow-x-auto mb-6 text-sm">
        <pre>
{`/* Universal Selector */
* {
  margin: 0;
  padding: 0;
}

/* Type Selector */
p {
  color: blue;
}

/* Class Selector */
.intro {
  font-size: 18px;
  color: green;
}

/* ID Selector */
#header {
  background-color: lightgray;
}

/* Group Selector */
h1, h2, p {
  text-align: center;
}

/* Descendant Selector */
div p {
  color: red;
}

/* Attribute Selector */
input[type="text"] {
  border: 1px solid black;
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Explanation</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><code>*</code> → styles all elements</li>
        <li><code>p</code> → styles all &lt;p&gt; tags</li>
        <li><code>.intro</code> → styles elements with class="intro"</li>
        <li><code>#header</code> → styles the element with id="header"</li>
        <li><code>h1, h2, p</code> → applies styles to all listed tags</li>
        <li><code>div p</code> → styles only &lt;p&gt; inside &lt;div&gt;</li>
        <li><code>input[type="text"]</code> → styles input fields of type text</li>
      </ul>

      <p className="text-gray-700 mt-4">
        Selectors are the foundation of CSS. They let you control exactly
        which elements your styles apply to.
      </p>
    </div>
  );
};

export default CSSSelectors;