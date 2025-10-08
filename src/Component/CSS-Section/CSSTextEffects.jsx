import React from "react";

const CSSTextEffects = () => {
  const data = [
    {Property:'text-justify', Description:'Specifies how justified text should be aligned and spaced'},
    {Property:'text-overflow', Description:'Specifies how overflowed content that is not displayed should be signaled to the user'},
    {Property:'word-break', Description:'	Specifies line breaking rules for non-CJK scripts'},
    {Property:'word-wrap', Description:'	Allows long words to be able to be broken and wrap onto the next line'},
    {Property:'writing-mode', Description:'Specifies whether lines of text are laid out horizontally or vertically'},

  ];
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Text Effects</h1>
      <p>
        CSS provides different properties to make text more attractive, such as{" "}
        <code>text-shadow</code>, <code>-webkit-text-stroke</code>, 
        gradient text, spacing, and transformations.
      </p>
      <p>Here’s what you’ll learn in this chapter:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">text-overflow</span> - Specifies how to handle overflowed content</li>
        <li><span className="text-red-400 bg-gray-50 px-1">word-wrap</span> - Allows long words to be able to be broken and wrap onto the next line</li>
        <li><span className="text-red-400 bg-gray-50 px-1">word-break</span> - Specifies line breaking rules</li>
        <li><span className="text-red-400 bg-gray-50 px-1">writing-mode</span> - Specifies whether lines of text are laid out horizontally or vertically</li>
      </ul>

      {/* Example 1: Text Shadow */}
      <div>
        <h2 className="text-2xl">Text Shadow</h2>
        <p className="text-gray-700">
          The <code>text-shadow</code> property adds shadow to text.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  text-shadow: 2px 2px 5px gray;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1 style={{ textShadow: "2px 2px 5px gray" }} className="text-2xl font-bold">
            Shadow Effect
          </h1>
        </div>
      </div>

      {/* Example 2: Text Stroke */}
      <div>
        <h2 className="text-2xl">Text Stroke</h2>
        <p className="text-gray-700">
          The <code>-webkit-text-stroke</code> property creates an outline effect on text.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  -webkit-text-stroke: 2px black;
  color: white;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1
            style={{
              WebkitTextStroke: "2px black",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Stroke Effect
          </h1>
        </div>
      </div>

      {/* Example 3: Glow Effect */}
      <div>
        <h2 className="text-2xl">Glow Effect</h2>
        <p className="text-gray-700">
          A glowing effect can be made using <code>text-shadow</code> with bright colors.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  text-shadow: 0 0 10px cyan, 0 0 20px blue;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1
            style={{
              textShadow: "0 0 10px cyan, 0 0 20px blue",
              color: "white",
              background: "black",
              padding: "10px",
            }}
          >
            Glow Effect
          </h1>
        </div>
      </div>

      {/* Example 4: Gradient Text */}
      <div>
        <h2 className="text-2xl">Gradient Text</h2>
        <p className="text-gray-700">
          You can apply gradients to text using <code>background-clip: text</code> and{" "}
          <code>color: transparent</code>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  background: linear-gradient(to right, red, yellow);
  -webkit-background-clip: text;
  color: transparent;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1
            style={{
              background: "linear-gradient(to right, red, yellow)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Gradient Text
          </h1>
        </div>
      </div>

      {/* Example 5: Letter Spacing & Uppercase */}
      <div>
        <h2 className="text-2xl">Letter Spacing & Uppercase</h2>
        <p className="text-gray-700">
          Using <code>letter-spacing</code> and <code>text-transform</code> we can create unique typography effects.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`p {
  letter-spacing: 5px;
  text-transform: uppercase;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <p style={{ letterSpacing: "5px", textTransform: "uppercase" }} className="text-lg">
            Spaced Uppercase Text
          </p>
        </div>
      </div>

      <h1 className="text-2xl ">CSS text-overflow Property</h1>
      <p>The <span className="text-red-400 bg-gray-50 px-1">text-overflow</span> property in CSS controls how hidden overflow text is displayed—either clipped or shown with an ellipsis (...).</p>
      <p>To enable <span className="text-red-400 bg-gray-50 px-1">text-overflow</span>, you need to apply both of these properties:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">white-space: nowrap;</span></li>
        <li><span className="text-red-400 bg-gray-50 px-1">overflow: hidden;</span></li>
      </ul>
      <p>Here, any content that overflows is hidden (clipped).</p>
      <p className="border border-gray-400 w-52 py-2 text-center">This is the text</p>
      <p>Overflowed content is trimmed and ends with an ellipsis (...).</p>
      <p className="border border-gray-400 w-52 py-2 text-center">This is the text</p>
     <p>The following CSS implements this:</p>
     <h1 className="text-2xl">Example</h1>
     <pre className="text-green-400 bg-black rounded-lg p-4">
      {`p.test1 {
  width: 200px;
  border: 1px solid #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

p.test2 {
  width: 200px;
  border: 1px solid #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p:hover {
  overflow: visible;
}
`}
     </pre>

     <h1 className="text-2xl">CSS word-wrap Property</h1>
     <p>With the <span className="text-red-400 bg-gray-50 px-1">word-wrap</span> property, long words can be broken and wrapped to the next line to prevent overflow.</p>
     <p>When a word is too long to fit in its container, it overflows beyond the boundaries.</p>
     <p className="border border-gray-400 h-54 w-40">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus reiciendis quo harum Pseudopseudohypoparathyroidism vitae, et ut maiores quisquam quasi possimus commodi.</p>
     <p>This property forces text to wrap to the next line, allowing breaks within long words if necessary.</p>
     <p className="border border-gray-400 h-54 w-40 break-words">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus reiciendis quo harum Pseudopseudohypoparathyroidism vitae, et ut maiores quisquam quasi possimus commodi.</p>
   <h1 className="text-2xl">Example</h1>
   <p>Allow long words to break and continue on a new line.</p>
   <pre className="text-green-400 bg-black rounded-lg p-4">
    {`p {
  word-wrap: break-word;
}`}
   </pre>

   <h1 className="text-2xl">CSS word-break Property</h1>
  <p>Use word-break to control how words split when they reach the end of a line.</p>
  <p>This property accepts the following values:</p>
  <ul className="list-[square] list-inside">
    <li><span className="text-red-400 bg-gray-50 px-1">normal</span>- This is default. Uses the default line breaking rules of the language</li>
    <li><span className="text-red-400 bg-gray-50 px-1">break-all</span> Allows words to be broken at any character to prevent overflow</li>
    <li><span className="text-red-400 bg-gray-50 px-1">keep-all </span> - Prevents words from breaking</li>
  </ul>
  <p>Here, the value normal is applied:</p>
   <p className="border border-gray-400 h-54 w-40 p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus reiciendis quo harum vitae, et ut maiores quisquam quasi possimus commodi.</p>
      
      <p>This example uses break-all to control word breaks:</p>
      <p className="border border-gray-400 h-54 w-40 p-2 break-all">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus reiciendis quo harum vitae, et ut maiores quisquam quasi possimus commodi.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="text-green-400 bg-black rounded-lg p-4">
        {`p.test1 {
  word-break: normal;
}

p.test2 {
  word-break: break-all;
}
`}
      </pre>

      <h1 className="text-2xl">CSS writing-mode Property</h1>
      <p>The <span className="text-red-400 bg-gray-50 px-1">writing-mod</span>e property in CSS determines if text flows horizontally or vertically.</p>
      <p>The following values are valid for this property:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">horizontal-tb</span>- Default. The text flows horizontally from left to right, vertically from top to bottom</li>
        <li><span className="text-red-400 bg-gray-50 px-1">vertical-rl</span> - The text flows vertically from top to bottom, horizontally from right to left</li>
        <li><span className="text-red-400 bg-gray-50 px-1">vertical-lr</span> - The text flows vertically from top to bottom, horizontally from left to right</li>
      </ul>
      <p>The example below demonstrates various writing modes.</p>
      <h1 className="text-2xl">Example</h1>
  <pre className="text-green-400 bg-black rounde-lg p-4">
    {`p.test1 {
  writing-mode: horizontal-tb;
}

span {
  writing-mode: vertical-rl;
}

p.test2 {
  writing-mode: vertical-rl;
}`}
  </pre>
  <h1 className="text-2xl">CSS Text Effect Properties</h1>
  <p>The table below outlines the CSS text effect properties.</p>
  <table className="min-w-full border border-gray-300 text-gray-700 rounded-md text-sm text-left">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Property</th>
        <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">	Description</th>
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
    </div>
  );
};

export default CSSTextEffects;