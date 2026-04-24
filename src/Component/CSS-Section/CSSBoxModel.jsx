import React from "react";

const CssBoxModel = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-5">CSS Box Model</h1>

      {/* Intro */}
      <p className="mb-2">
       The CSS Box Model treats every element on a web page as a box. In this model, each element is made up of 4 parts:
      </p>
      <p className="mb-2">The visual representation of elements in CSS is governed by a model commonly referred to as the box model.</p>
      <p className="mb-2">The CSS box model surrounds each HTML element with a series of boxes.</p>
      <p>Below is a visual representation of the CSS box model:</p>

     
      {/* Explanation of Code */}
      <p className="mt-[450px] mb-5">An explanation of each section, beginning at the center and moving outward:</p>
     
      <ul className="list-[square] ml-6">
        <li><strong>Content</strong> → The part of the box dedicated to displaying your actual webpage content.</li>
        <li><strong>padding</strong> → Padding provides spacing around the content and remains invisible.</li>
        <li><strong>border</strong> → This layer encases the padding and content, making up the visible edge of the box.</li>
        <li><strong>margin</strong> → Creates space outside the border; the margin itself is fully transparent.</li>
        <li><strong>background-color</strong> → It is used to set the background color of the element.</li>
      </ul>
      <p className="mt-5">Using the box model, we can place borders around elements and define gaps between them.</p>
      <h1 className="text-2xl mt-4 mb-2">Example</h1>
      <p>Overview of the box model structure</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">div</span> <span>{'{'}</span><br />

    <span className="text-red-500">width</span>
    <span>: </span>
    <span className="text-green-700">300px</span>
    <span>;</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">15px solid green</span>
    <span>;</span><br />

    <span className="text-red-500">padding</span>
    <span>: </span>
    <span className="text-green-700">50px</span>
    <span>;</span><br />

    <span className="text-red-500">margin</span>
    <span>: </span>
    <span className="text-green-700">20px</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10 mb-3">Width and Height of an Element</h1>
      <p>Without understanding the box model, you may face issues when trying to set width and height accurately in different browsers.</p>
       <h1 className="text-2xl mt-2 mb-2">Example</h1>
       <p>This {'<div>'} will measure 350px in width and 80px in height overall.</p>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">div</span> <span>{'{'}</span><br />

    <span className="text-red-500">width</span>
    <span>: </span>
    <span className="text-green-700">320px</span>
    <span>;</span><br />

    <span className="text-red-500">height</span>
    <span>: </span>
    <span className="text-green-700">50px</span>
    <span>;</span><br />

    <span className="text-red-500">padding</span>
    <span>: </span>
    <span className="text-green-700">10px</span>
    <span>;</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">5px solid gray</span>
    <span>;</span><br />

    <span className="text-red-500">margin</span>
    <span>: </span>
    <span className="text-green-700">0</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>


     <div className="max-w-5xl mx-auto my-10 bg-blue-500 p-6 sm:p-10 text-center">
  <p className="text-black mb-2">Margin</p>

  <div className="bg-green-500 p-6 sm:p-10">
    <p className="text-black mb-2">Border</p>

    <div className="bg-gray-400 p-6 sm:p-10">
      <p className="text-black mb-2">Padding</p>

      <div className="bg-white py-6">
        <p className="text-black">Content</p>
      </div>

    </div>
  </div>
</div>



      {/* Total Size Formula */}
      <h2 className="text-2xl mt-10 mb-2">Total Size Calculation</h2>
      <p>If an element has a width of 200px</p>

      <ul className="list-disc ml-6 mt-2 mb-2">
        <li>Padding = 20px (left + right = 40px)</li>
        <li>Border = 5px (left + right = 10px)</li>
        <li>Margin = 30px (The outer space is not counted as part of the element’s size.)</li>
      </ul>
      <p>
        To element ka total width hoga:  
        <b>200 + 40 + 10 = 250px</b> (+ margin bahar se add hoti hai).
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl mt-10 mb-2 ">Conclusion</h2>
      <p className="mb-2">Here’s how to calculate the total width of an element:</p>
      <p className="mb-2">Total element width = width + left padding + right padding + left border + right border</p>
      <p className="mb-2">The total height of an element should be calculated like this:</p>
      <p className="mb-2">Total element height = height + top padding + bottom padding + top border + bottom border</p>
    </div>
  );
};

export default CssBoxModel;