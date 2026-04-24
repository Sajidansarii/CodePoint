import React from "react";

const CssBoxSizing = () => {
  const data = [
    {Property:'box-sizing', Description:'Defines how the width and height of an element are calculated: should they include padding and borders, or not'},
  ];
  return (
    <div className="p-8 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Box-Sizing
      </h1>

      {/* Intro */}
      <p>
        <span className="text-red-400 bg-gray-50 px-1 rounded">box-sizing</span> The property is used to control how the width and height of an element are calculated. Its two most common values are content-box (the default) and border-box.
      </p>
      <h1 className="text-2xl">CSS Box Sizing Property</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 rounded-md text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-gray-700 border-b border-gray-300">Property</th>
            <th className="px-4 py-2 font-bold text-gray-700 border-b border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Property}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <p>With <span className="text-red-400 bg-gray-100">box-sizing,</span> padding and borders are included within the specified width and height of the element.</p>
      <p>When you apply <span className="text-red-400 bg-gray-100">box-sizing:</span> border-box;, the total width and height of the element won't grow with padding or borders—they're calculated inside the set dimensions.</p>
      <p>Here's the same code, but now both {'<div>'}s include box-sizing: border-box; for better sizing behavior.</p>

      {/* Example Section */}
      <div className="bg-white p-6 rounded space-y-6">
        <h2 className="text-2xl font-semibold">Box-Sizing Example</h2>

        {/* CSS Code */}
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">/* CSS Box-Sizing Example */</span><br />

    <span className="text-blue-500">.box</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">300px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">20px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">5px solid #4CAF50</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">10px 0</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">/* Default - Content Box */</span><br />

    <span className="text-blue-500">.content-box</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">box-sizing</span>: <span className="text-green-700">content-box</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">/* Border Box */</span><br />

    <span className="text-blue-500">.border-box</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">box-sizing</span>: <span className="text-green-700">border-box</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        {/* Live Demo */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          {/* Content Box */}
          <div className="w-full p-5 border-[5px] border-green-600 box-content bg-green-100">
            <p className="text-center text-gray-800">content-box</p>
          </div>

          {/* Border Box */}
          <div className="w-full p-5 border-[5px] border-blue-600 box-border bg-blue-100">
            <p className="text-center text-gray-800">border-box</p>
          </div>
        </div>
      </div>

      <p>Since <span className="text-red-400 bg-gray-100">box-sizing</span> : <span className="text-red-400 bg-gray-100">border-box</span>; simplifies box model calculations, it's become a best practice to apply it site-wide.</p>
      <p>The snippet below applies <span className="text-red-400 bg-gray-100">box-sizing</span>: <span className="text-red-400 bg-gray-100">border-box</span>; universally, creating a consistent box model. Although many browsers apply this to certain form elements by default, inconsistencies remain—especially with inputs and textareas at full width.</p>
      <p>Globally applying this ensures consistent box sizing and avoids unexpected layout behavior.</p>

      <h1 className="text-2xl">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">*</span> <span>{'{'}</span><br />

    <span className="text-red-500">box-sizing</span>
    <span>: </span>
    <span className="text-green-700">border-box</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl">Without the CSS box-sizing Property</h1>
      <p>By default, CSS doesn’t include padding or borders in the width and height — here’s how it works:</p>
      <p>width + padding + border = actual width of an element</p>
     <p>height + padding + border = actual height of an element</p>
     <p>As a result, specifying width or height can lead to elements exceeding those values, since padding and borders are added to the total size.</p>
     <p>The diagram below displays two {'<div>'} elements, each assigned the same width and height properties.</p>
     <p>The two {'<div>'} elements appear different in size because div2 has padding, which increases its overall dimensions.</p>
     <h1 className="text-2xl">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">.div1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">300px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">100px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">1px solid blue</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.div2</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">300px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">100px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">50px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">1px solid red</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>
     <div className="w-300px h-100px border border-blue-500">This is div1</div>
     <div className="w-300px h-100px border p-[50px] border-red-500">This is div2</div>
     <p>The <span className="text-red-400 bg-gray-100">box-sizing</span> property solves this problem.</p>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>content-box (default):</strong> Width 300px is only for the content. Border and padding are added on top of this.Total width = content + padding + border.
          </li>
          <li>
            <strong>border-box: </strong> 
             In width 300px, content, padding, and border are all included. This means the total width of the element will always remain 300px.
          </li>
          <li>
            <strong>Best Practice: </strong>In modern web development, box-sizing: border-box; is often used so that layouts remain predictable.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssBoxSizing;