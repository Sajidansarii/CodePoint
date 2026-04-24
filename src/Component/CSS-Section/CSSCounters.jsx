import React from "react";

const CssCounter = () => {
   const data = [
    { property: 'Default value', value: 'none' },
    { property: 'Applies to', value: 'All elements' },
    { property: 'Inherited', value: 'No' },
    { property: 'Animatable', value: 'No. See animatable properties.' },
    { property: 'Version', value: 'CSS 2, 3' },
  ];

  const data2 = [
    {property: 'identifier', value: 'The name of the counter to increment.'},
    {property: 'integer', value: 'The value to add to the counter. The default increment is 1. Zero or negative values are allowed.'},
    {property: 'none', value:'No counters will be incremented. This is default value.'},
    {property:'initial', value:'Sets this property to its default value.'},
    {property:'inherit', value:'If specified, the associated element takes the computed value of its parent element direction property.'},
  ]
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl mb-4 font-medium text-blue-500">CSS Counters</h1>
      <p className="mb-4">
        CSS Counters are used to automatically number elements with CSS only.
      </p>
      <p>
        With CSS counters, you can create dynamic numbering of elements (like headings, sections, or list items) without using JavaScript.
         CSS counters are "variables" maintained by CSS, and their values can be incremented (or decremented) by CSS rules.
      </p>
      <p>The following table summarizes the usages context and the version history of this property.</p>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Property</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{row.property}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-3xl mt-10">Syntax</h1>
      <p className="mt-3">The syntax of the property is given with:</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-red-500">counter-increment</span>
    <span>: </span>
    <span className="text-green-700">[ identifier integer ]1 or more pairs | none | initial | inherit</span>
  </code>
</pre>
      <p className="leading-relaxed mt-10">The example below shows the counter-increment property in action.</p>
      <h1 className="mt-5 text-2xl mb-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">counter-reset</span>: <span className="text-green-700">section</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">counter-reset</span>: <span className="text-green-700">category</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">h1:before</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">counter-increment</span>: <span className="text-green-700">section</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">content</span>: <span className="text-green-700">"Section" counter(section) "."</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">h1:before</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">counter-increment</span>: <span className="text-green-700">category</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">content</span>: <span className="text-green-700">counter(section) "." counter(category)</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl mt-10">Property Values</h1>
      <p className="mt-3">The following table describes the values of this property.</p>

       <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Value</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {data2  .map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{row.property}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default CssCounter;