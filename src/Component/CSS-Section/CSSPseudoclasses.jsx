import React from "react";

const CssPseudoClassesDemo = () => {
  return (
    <div className="p-8  max-w-4xl space-y-6 mt-10">
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
    <pre className="bg-gray-200 p-4 mt-5 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">selector:pseudo-class-name</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-gray-500">CSS properties</span><br />
    <span>{'}'}</span>
  </code>
</pre>

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
     <pre className="bg-gray-200 p-4 rounded-lg mt-10 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-gray-500">/* unvisited link */</span><br />
    <span className="text-blue-600">a:link</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#FF0000</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* visited link */</span><br />
    <span className="text-blue-600">a:visited</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#00FF00</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* mouse over link */</span><br />
    <span className="text-blue-600">a:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#FF00FF</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* selected link */</span><br />
    <span className="text-blue-600">a:active</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#0000FF</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>
      
      <h1 className="text-2xl mt-10 mb-2">:hover on {'<div>'}</h1>
      <p>Below is an example demonstrating the use of the :hover pseudo-class on a {'<div>'} to apply styles when it is hovered.</p>
      <h1 className="text-2xl mt-2">Example</h1>
     <pre className="bg-gray-200 p-4 mt-5 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">div:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">blue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10 mb-2">:Focus on {'<input>'}</h1>
      <p>This example showcases the use of the :focus pseudo-class to apply styles to an input element when it receives focus.</p>
      <h1 className="text-2xl mt-4">Exapmle</h1>
    <pre className="bg-gray-200 mt-5 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">input:focus</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">yellow</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10 mb-2">Pseudo-classes and HTML Classes</h1>
      <p>Pseudo-classes may be combined with class selectors to target elements in particular states within a specific class.</p>
      <h1 className="text-2xl mt-5 mb-2">Example</h1>
      <p>Target the {'<a>'} element with the class highlight using the :hover pseudo-class to define hover-specific styles.</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">a.highlight:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#ff0000</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

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
<pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">.tooltip-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">inline-block</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">margin-top</span>: <span className="text-green-700">20px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.tooltip-btn</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#3b82f6</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">8px 16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">8px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">cursor</span>: <span className="text-green-700">pointer</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">transition</span>: <span className="text-green-700">background-color 0.2s ease</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.tooltip-btn:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#2563eb</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">top</span>: <span className="text-green-700">-32px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">left</span>: <span className="text-green-700">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">transform</span>: <span className="text-green-700">translateX(-50%)</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#1f2937</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">4px 12px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">12px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">white-space</span>: <span className="text-green-700">nowrap</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">4px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">none</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.tooltip-container:hover .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">block</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">The CSS :first-child Pseudo-class</h1>
      <p className="mt-2">The <span className="text-red-500">:first-child</span> pseudo-class selects an element that appears first among the children of its parent element.</p>
      <h1 className="text-xl mt-3">Style all first child {'<p>'} elements</h1>
      <p className="mt-3">This selector targets all {'<p>'} elements that are the first child within their parent element.</p>
      <h1 className="text-2xl mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p:first-child</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-xl mt-10">Style the first {'<em>'} element in all {'<p>'} elements</h1>
      <p className="mt-5">Here, the selector selects the first{' <em>'} element that appears within all {'<p>'} elements.</p>
      <h1 className="text-2xl mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p em:first-child</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-xl mt-10">Style all {'<em>'} elements in all first child {'<p>'} elements</h1>
      <p className="mt-5">Here, the selector applies to all {'<em>'} elements located in {'<p>'} tags, as long as the {'<p>'} is the first child of its parent.</p>
      <h1 className="text-2xl mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p:first-child em</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">The CSS :lang() Pseudo-class</h1>
      <p className="mt-5">You can use the <span className="text-red-500">:lang()</span> pseudo-class to target elements with a specific lang attribute value.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;html&gt;</span><br />
    <span className="text-blue-600">&lt;head&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">q:lang(no)</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">quotes</span>: <span className="text-green-700">"~" "~"</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span><br />

    <span className="text-blue-600">&lt;/head&gt;</span><br />
    <span className="text-blue-600">&lt;body&gt;</span><br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>
    Some text <span className="text-blue-600">&lt;q lang="no"&gt;</span>A quote in a paragraph<span className="text-blue-600">&lt;/q&gt;</span>
    Some text.
    <span className="text-blue-600">&lt;/p&gt;</span><br /><br />

    <span className="text-blue-600">&lt;/body&gt;</span><br />
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>
</div>
  );
};

export default CssPseudoClassesDemo;