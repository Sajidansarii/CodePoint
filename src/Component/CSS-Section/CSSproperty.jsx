import React from "react";

const CssProperties = () => {
  const data = [
    {Value:'initial', Description:'It changes all the properties applied to an element or to its parent to their initial value.'},
    {Value:'inherit', Description:'It changes all the properties applied to an element or to its parent to their parent value.'},
    {Value:'unset', Description:'It changes all the properties applied to the element or the elements parent to their parent value if they are inheritable else to their initial value if not'}
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
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
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`/* CSS Properties Example */
h1 {
  color: blue;            /* Text ka color set karta hai */
  font-size: 32px;        /* Font size set karta hai */
  text-align: center;     /* Text alignment control karta hai */
}

p {
  color: gray;            /* Paragraph text ka color */
  line-height: 1.6;       /* Lines ke beech ka gap */
  margin-top: 10px;       /* Upar ka space */
}
`}
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
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4">
          {`html {
         font-size: 25px;
         color: lightcoral;
         font-style: italic;
      }

      #custom1 {
         background-color: #ecf0f1;
         color: #e74c3c;
      }

      #custom2 {
         all: initial;
      }`}
        </pre>

        <h1 className="text-2xl">All Property with Inherit Value</h1>
        <p>Using the inherit keyword tells the browser to apply the same value for a property as that of the element’s parent. If the parent doesn't have the property explicitly set, the value is inherited from higher up in the DOM tree, usually from the {'<html>'} element. The example below demonstrates this behavior.</p>
        <h1 className="text-2xl">Example</h1>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4">
          {` html {
         font-size: 25px;
         color: lightcoral;
         font-style: italic;
      }

      #custom1 {
         background-color: lightgreen;
         font-weight: bold;
         padding: 10px;
         color: #e74c3c;
      }

      #custom2 {
         all: inherit;
      }
`}
        </pre>

        <h1 className="text2xl">All Property with Unset Value</h1>
        <p>The unset keyword resets a property to its inherited value if it’s naturally inheritable, or to its initial (default) value otherwise. This dual behavior is illustrated in the example that follows.</p>
        <h1 className="text-2xl">Example</h1>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4">
          {`.parent {
         color: purple;
         font-weight: bold;
         font-size: 20px;
         text-align: center;
         background-color: lightgrey;
      }

      .custom1 {
         font-weight: bold;
         padding: 10px;
      }

      .custom2 {
         all: unset;
      }`}
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