import React from "react";

const CssCombinators = () => {
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Combinators
      </h1>

      <p>A combinator in CSS is a syntax construct that establishes a relationship between two or more selectors.</p>
      <p>Combinators allow developers to chain multiple selectors in CSS to define complex relationships and increase specificity.</p>
      <p>The CSS specification outlines four types of combinators that determine the relationship between elements:</p>
      <ul className="list-[square] list-inside">
        <li>Descendant combinator (space)</li>
        <li>Child combinator {'(>)'}</li>
        <li>Next sibling combinator (+)</li>
        <li>Subsequent-sibling combinator (~)</li>
      </ul>

      <h1 className="text-2xl">Descendant Combinator (space)</h1>

      {/* Example 1: Descendant Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">1. Descendant Selector (space)</h2>
        <p>
          This combinator enables the selection of elements that are structurally subordinate to a given element, regardless of nesting depth.
        </p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`div p {
  background-color: blue;
}`}
        </pre>
      </div>

      {/* Example 2: Child Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">2. Child Selector ({'>'})</h2>
        <p>
          The child combinator matches elements that are immediate descendants of a specified parent in the DOM tree. </p>
          <p>The following example demonstrates how to select all {'<p>'} elements that are immediate child nodes of {'<div>'} elements.</p>


        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`div > p {
  background-color: red;
}`}
        </pre>
      </div>

      {/* Example 3: Adjacent Sibling Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">
          3. Adjacent Sibling Selector (+)
        </h2>
        <p>
          In CSS, this combinator is used to target elements that are adjacent siblings—directly succeeding the referenced element.
        </p>
        <p>In the DOM, sibling elements are defined as elements that share a common parent node.</p>
        <p>In this example, a {'<p>'} element is selected only if it directly succeeds a {'<div>'} within the same parent container.</p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`h2 + p {
  background-color: green;
}`}
        </pre>
      </div>

      {/* Example 4: General Sibling Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">4. General Sibling Selector (~)</h2>
        <p>In CSS, this combinator enables the selection of all sibling elements that follow a given element in the DOM hierarchy.
        </p>
        <p>In this example, the selector applies styles to each {'<p>'} element that appears after a {'<div>'} as a sibling within the same parent element.</p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`h2 ~ p {
  background-color: purple;
}`}
        </pre>

      </div>
    </div>
  );
};

export default CssCombinators;