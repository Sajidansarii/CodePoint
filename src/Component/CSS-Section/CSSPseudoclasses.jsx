import React from "react";

const CssPseudoClassesDemo = () => {
  return (
    <div className="p-8  min-h-screen">
<h1 className="text-3xl font-medium text-blue-500">CSS Pseudo-Classes</h1>
      <p className="mt-5">A CSS pseudo-class is a selector keyword used to apply styles to elements based on their state or position in the document structure.</p>
      <p className="mt-3">Common applications of CSS pseudo-classes include:</p>
      <ul className="list-[square] list-inside mt-5">
        <li>Style an element when a user moves the mouse over it</li>
        <li>Style visited and unvisited links differently</li>
        <li>Style an element when it gets focus</li>
        <li>Style valid/invalid/required/optional form elements</li>
        <li>Style an element that is the first child of its parent</li>
      </ul>
      <h1 className="text-2xl mt-10">Syntax</h1>
      <p className="mt-3">CSS pseudo-classes are denoted using a single colon (:) preceding the pseudo-class identifier.</p>
      <div className="mt-5 bg-gray-200 p-4 rounded-lg">
        <pre>
          {`selector:pseudo-class-name {
  CSS properties
}`}
        </pre>
      </div>

      <p className="mt-5">In this context, the <span className="text-red-500">:hover</span> and <span className="text-red-500">:focus</span> pseudo-classes are applied to style elements during user interaction.</p>
      
 <div className="mt-5">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Hover Me
        </button>
        <input
          type="text"
          placeholder="Focus Me"
          className="px-4 py-2 border border-gray-400 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <h1 className="text-2xl mt-10">Pseudo-classes Used on Links</h1>
      <p className="mt-2">HTML links typically utilize the following pseudo-classes to define their various interaction states:</p>
      <ul className="mt-5 list-[square] list-inside">
        <li> <span className="text-red-500">:link</span> - Styles unvisited links</li>
        <li> <span className="text-red-500">:visited</span> - Styles visited links</li>
        <li> <span className="text-red-500">:hover</span> - Styles an link on mouse over</li>
        <li> <span className="text-red-500">:active</span> - Styles an activated link</li>
      </ul>
      <h1 className="text-2xl mt-10 mb-2">Example</h1>
      <p>Apply distinct color styles to links according to their interaction state (e.g., default, visited, hover, active).</p>
      <div className="bg-gray-200 p-4 rounded-lg mt-10">
        <pre>
          {`/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}`}
        </pre>
      </div>
      
      <h1 className="text-2xl mt-10 mb-2">:hover on {'<div>'}</h1>
      <p>Below is an example demonstrating the use of the :hover pseudo-class on a {'<div>'} to apply styles when it is hovered.</p>
      <h1 className="text-2xl mt-2">Example</h1>
      <div className="bg-gray-200 mt-3 p-4 rounded-lg">
        <pre>
          {`div:hover {
  background-color: blue;
}`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10 mb-2">:Focus on {'<input>'}</h1>
      <p>This example showcases the use of the :focus pseudo-class to apply styles to an input element when it receives focus.</p>
      <h1 className="text-2xl mt-4">Exapmle</h1>
      <div  className="bg-gray-200 mt-5 p-4 rounded-lg">
        <pre>
          {`input:focus {
  background-color: yellow;
}`}
        </pre>
      </div>
      <h1 className="text-2xl mt-10 mb-2">Pseudo-classes and HTML Classes</h1>
      <p>Pseudo-classes may be combined with class selectors to target elements in particular states within a specific class.</p>
      <h1 className="text-2xl mt-5 mb-2">Example</h1>
      <p>Target the {'<a>'} element with the class highlight using the :hover pseudo-class to define hover-specific styles.</p>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`a.highlight:hover {
  color: #ff0000;
}`}
        </pre>
      </div>
      <h1 className="text-2xl mt-10">Simple Tooltip Hover</h1>
      <p>Display a hidden {'<p>'} element on hover of a {'<div>'}, mimicking tooltip behavior.</p>

     <div className="flex mt-5">
  <div className="relative group inline-block">
    <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
      Hover Me!
    </button>
    {/* Tooltip text */}
    <span
      className="absolute translate-x-28 -translate-y-8  mb-12
      hidden group-hover:block rounded bg-gray-800 px-5 py-1 text-xs
      text-white whitespace-nowrap"
    >
      Hover over me to show the {'<p>'} element.
    </span>
  </div>
</div>

      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 p-4  rounded-lg">
        <pre>
          {`.tooltip-container {
  position: relative;
  display: inline-block;
  margin-top: 20px; 
}

.tooltip-btn {
  background-color: #3b82f6; 
  color: white;
  padding: 8px 16px; 
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.tooltip-btn:hover {
  background-color: #2563eb; 
}

.tooltip-text {
  position: absolute;
  top: -32px;       
  left: 50%;
  transform: translateX(-50%);
  background-color: #1f2937; 
  color: white;
  padding: 4px 12px; 
  font-size: 12px;  
  white-space: nowrap;
  border-radius: 4px;
  display: none;    
}

.tooltip-container:hover .tooltip-text {
  display: block; 
}`}
        </pre>
      </div>
      <h1 className="text-2xl mt-10">The CSS :first-child Pseudo-class</h1>
      <p className="mt-2">The <span className="text-red-500">:first-child</span> pseudo-class selects an element that appears first among the children of its parent element.</p>
      <h1 className="text-xl mt-3">Style all first child {'<p>'} elements</h1>
      <p className="mt-3">This selector targets all {'<p>'} elements that are the first child within their parent element.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`p:first-child {
  color: blue;
}`}
        </pre>
      </div>

      <h1 className="text-xl mt-10">Style the first {'<em>'} element in all {'<p>'} elements</h1>
      <p className="mt-5">Here, the selector selects the first{' <em>'} element that appears within all {'<p>'} elements.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`p em:first-child {
  color: blue;
}`}
        </pre>
      </div>

      <h1 className="text-xl mt-10">Style all {'<em>'} elements in all first child {'<p>'} elements</h1>
      <p className="mt-5">Here, the selector applies to all {'<em>'} elements located in {'<p>'} tags, as long as the {'<p>'} is the first child of its parent.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`p:first-child em {
  color: blue;
}`}
        </pre>
      </div>

      <h1 className="text-2xl mt-10">The CSS :lang() Pseudo-class</h1>
      <p className="mt-5">You can use the <span className="text-red-500">:lang()</span> pseudo-class to target elements with a specific lang attribute value.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <pre>
          {`<html>
<head>
<style>
q:lang(no) {
  quotes: "~" "~";
}
</style>
</head>
<body>

<p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>

</body>
</html>
`}
        </pre>
      </div>







    </div>
  );
};

export default CssPseudoClassesDemo;