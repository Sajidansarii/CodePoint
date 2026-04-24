import React from "react";

const CssProperties = () => {
  const data = [
    {Value:'initial', Description:'It changes all the properties applied to an element or to its parent to their initial value.'},
    {Value:'inherit', Description:'It changes all the properties applied to an element or to its parent to their parent value.'},
    {Value:'unset', Description:'It changes all the properties applied to the element or the elements parent to their parent value if they are inheritable else to their initial value if not'}
  ];
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Properties
      </h1>

      {/* Intro */}
      <p>
        The all shorthand property in CSS is used to reset most of an element’s properties to their initial, inherited, or unset values. However, it does not affect the direction, unicode-bidi, or custom CSS properties (variables). This reset can be useful for overriding styles from other sources, such as user-agent stylesheets or other cascade layers.
      </p>

      {/* Example Section */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h2 className="text-2xl font-semibold">Syntax Example</h2>
        <p>
          In the example below, the use of different CSS properties has been shown.
        </p>

        {/* CSS Code */}
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-500">/* CSS Properties Example */</span><br /><br />

    <span className="text-blue-600">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>; <span className="text-gray-500">/* Text ka color set karta hai */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">32px</span>; <span className="text-gray-500">/* Font size set karta hai */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>; <span className="text-gray-500">/* Text alignment control karta hai */</span><br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">gray</span>; <span className="text-gray-500">/* Paragraph text ka color */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">line-height</span>: <span className="text-green-700">1.6</span>; <span className="text-gray-500">/* Lines ke beech ka gap */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">margin-top</span>: <span className="text-green-700">10px</span>; <span className="text-gray-500">/* Upar ka space */</span><br />
    <span>{'}'}</span>
  </code>
</pre>
        <h1 className="text-2xl">Property Values</h1>
        <table className="min-w-full border border-gray-300 rounded-md text-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-200 font-bold text-gray-700">Value</th>
              <th className="px-4 py-2 border-b border-gray-200 font-bold text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Value}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
              </tr>
            ))}

          </tbody>
        </table>

        <h1 className="text-2xl">All Property with Initial Value</h1>
        <p>The initial keyword in CSS resets a property to its default value as defined by the browser, disregarding any previously applied styles. This can be seen in the following example.</p>
        <h1 className="text-2xl">Example</h1>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">html</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">25px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">lightcoral</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-style</span>: <span className="text-green-700">italic</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">#custom1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#ecf0f1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#e74c3c</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">#custom2</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">all</span>: <span className="text-green-700">initial</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        <h1 className="text-2xl">All Property with Inherit Value</h1>
        <p>Using the inherit keyword tells the browser to apply the same value for a property as that of the element’s parent. If the parent doesn't have the property explicitly set, the value is inherited from higher up in the DOM tree, usually from the {'<html>'} element. The example below demonstrates this behavior.</p>
        <h1 className="text-2xl">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">html</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">25px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">lightcoral</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-style</span>: <span className="text-green-700">italic</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">#custom1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightgreen</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#e74c3c</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">#custom2</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">all</span>: <span className="text-green-700">inherit</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        <h1 className="text2xl">All Property with Unset Value</h1>
        <p>The unset keyword resets a property to its inherited value if it’s naturally inheritable, or to its initial (default) value otherwise. This dual behavior is illustrated in the example that follows.</p>
        <h1 className="text-2xl">Example</h1>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">.parent</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">purple</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">20px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightgrey</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.custom1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.custom2</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">all</span>: <span className="text-green-700">unset</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>color:</strong> It changes the color of the text.
          </li>
          <li>
            <strong>font-size: </strong>It sets the size of the text (using px, em, rem units).
          </li>
          <li>
            <strong>text-align:</strong> It aligns the text to the left, right, or center.
          </li>
          <li>
            <strong>line-height:</strong> It controls the vertical spacing between lines.
          </li>
          <li>
            <strong>margin:</strong> It sets the space outside the element.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssProperties;