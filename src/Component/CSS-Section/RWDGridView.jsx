import React from "react";

const CssRWDGridView = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">Responsive Web Design - Grid View</h1>

      {/* Intro */}
      <p >
        Grid view is a layout system that arranges content in rows and columns. In responsive web design (RWD), grids are very useful because they allow us to define different column structures for different screen sizes.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl">What and Why Grid-View?</h2>
      <ul className="list-[square] space-y-2">
        <li>Web pages are often structured using a grid format, dividing the layout into a series of rows and columns for better organization.</li>
        <li>Utilizing a grid-view in web design provides a structured approach, making it easier to position elements accurately.</li>
        <li>Responsive grid systems commonly consist of 6 or 12 columns and are designed to expand or contract based on the browser window's size.</li>
        <li>A simple method for creating multi-column layouts.</li>
        <li>It becomes responsive by using @media queries.</li>
        <li>It's possible to customize the view separately for mobile, tablet, and desktop.</li>
      </ul>

      <h1 className="text-2xl">Building a Grid View</h1>
      <p>Let’s begin creating a grid layout.</p>
      <p>Initially, ensure that every HTML element is set to box-sizing: border-box, which includes padding and border within the element’s total dimensions.</p>
      <p>Add this code block to the very top of your CSS.</p>

      <pre className="border border-1 p-2 border-gray-300">
        <code>
          <span className="text-red-500">*</span>{" "}
          <span className="text-gray-400">{"{"}</span> {" "}
          <span className="text-red-500">margin</span>
         <span className="text-gray-400">:</span>
          <span className="text-blue-500">0</span>
           <span className="text-gray-400">;</span> <br/>{"    "}
          <span className="text-red-500">box-sizing</span>
           <span className="text-gray-400">:</span>
            <span className="text-blue-500">border-box</span>
            <span className="text-gray-400">;</span><br/>
            <span className="text-gray-400">{"}"}</span>
  </code>
      </pre>
      <p>Learn more about the box-sizing property in the CSS Box Sizing section.</p>

      <h1 className="text-2xl">The HTML</h1>
      <p>The grid layout includes five areas: item1 for the header, item2 for the menu, item3 for the main content, item4 for the right side, and item5 for the footer.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Here’s the full HTML code:</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">.grid-container</span> {'{'}
    <br />

    &nbsp;&nbsp;<span className="text-red-500">display</span>:{" "}
    <span className="text-green-700">grid</span>;
    <br />

    &nbsp;&nbsp;<span className="text-red-500">gap</span>:{" "}
    <span className="text-green-700">20px</span>;
    <br />

    {'}'}

    <br /><br />

    <span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"grid-container"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"item1"</span>
    <span className="text-blue-600">&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>Chania<span className="text-blue-600">&lt;/h1&gt;</span>
    <br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>
    <br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"item2"</span>
    <span className="text-blue-600">&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;ul&gt;</span>
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;li&gt;</span>The Flight<span className="text-blue-600">&lt;/li&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;li&gt;</span>The City<span className="text-blue-600">&lt;/li&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;li&gt;</span>The Island<span className="text-blue-600">&lt;/li&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;li&gt;</span>The Food<span className="text-blue-600">&lt;/li&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/ul&gt;</span>
    <br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>

    <br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"item3"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>The City<span className="text-blue-600">&lt;/h1&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>Chania is the capital of the Chania region on the island of Crete.<span className="text-blue-600">&lt;/p&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>The city can be divided in two parts, the old town and the modern city. The old town is situated next to the old harbour and is the matrix around which the whole urban area was developed.<span className="text-blue-600">&lt;/p&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>Chania lies along the north west coast of the island Crete.<span className="text-blue-600">&lt;/p&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>

    <br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"item4"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h2&gt;</span>Facts:<span className="text-blue-600">&lt;/h2&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;ul&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;li&gt;</span>Chania is a city on the island of Crete<span className="text-blue-600">&lt;/li&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;li&gt;</span>Crete is a Greek island in the Mediterranean Sea<span className="text-blue-600">&lt;/li&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/ul&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>

    <br /><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span>{" "}
    <span className="text-red-500">class</span>=
    <span className="text-green-700">"item5"</span>
    <span className="text-blue-600">&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>Resize the browser window to see how the content respond to the resizing.<span className="text-blue-600">&lt;/p&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/div&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>
      <h1 className="text-2xl">The CSS</h1>
      <p>To improve the user interface, we’ll introduce some CSS for styling and color.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Here’s the full set of CSS styles:</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">*</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>:{" "}
    <span className="text-green-700">0</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">box-sizing</span>:{" "}
    <span className="text-green-700">border-box</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">body</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>:{" "}
    <span className="text-green-700">"Lucida Sans", sans-serif</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.grid-container</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>:{" "}
    <span className="text-green-700">grid</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">grid-template-areas</span>:{" "}
    <span className="text-green-700">
      'header header header header header header'
      <br />
      'menu main main main main right'
      <br />
      'footer footer footer footer footer footer'
    </span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">gap</span>:{" "}
    <span className="text-green-700">10px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">white</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">10px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.grid-container &gt; div</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">10px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>:{" "}
    <span className="text-green-700">16px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item1</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">grid-area</span>:{" "}
    <span className="text-green-700">header</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">purple</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>:{" "}
    <span className="text-green-700">center</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">#ffffff</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item1 &gt; h1</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>:{" "}
    <span className="text-green-700">40px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item2</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">grid-area</span>:{" "}
    <span className="text-green-700">menu</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item2 ul</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">list-style-type</span>:{" "}
    <span className="text-green-700">none</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>:{" "}
    <span className="text-green-700">0</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">0</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item2 li</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">8px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">margin-bottom</span>:{" "}
    <span className="text-green-700">7px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">#33b5e5</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">#ffffff</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item2 li:hover</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">#0099cc</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item3</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">grid-area</span>:{" "}
    <span className="text-green-700">main</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item3 &gt; h1</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>:{" "}
    <span className="text-green-700">30px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">margin-bottom</span>:{" "}
    <span className="text-green-700">7px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item3 &gt; p</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">margin-bottom</span>:{" "}
    <span className="text-green-700">7px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item4</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">grid-area</span>:{" "}
    <span className="text-green-700">right</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>:{" "}
    <span className="text-green-700">2px solid #0099cc</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">white</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">15px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">#000000</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item4 &gt; h2</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>:{" "}
    <span className="text-green-700">20px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding-bottom</span>:{" "}
    <span className="text-green-700">10px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item4 li</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>:{" "}
    <span className="text-green-700">5px</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">margin-bottom</span>:{" "}
    <span className="text-green-700">5px</span>;
    <br />
    {'}'}

    <br /><br />

    <span className="text-red-500">.item5</span> {'{'}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">grid-area</span>:{" "}
    <span className="text-green-700">footer</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">#0099cc</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">#ffffff</span>;
    <br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>:{" "}
    <span className="text-green-700">center</span>;
    <br />
    {'}'}
  </code>
</pre>


      {/* Explanation */}
      <div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold mb-3">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>display: grid;</strong> → It enables the grid layout.
        </li>
        <li>
          <strong>grid-template-columns: repeat(4, 1fr);</strong> → It displays four equal columns on desktop view.
        </li>
        <li>
          <strong>@media (max-width: 768px)</strong> → On tablet screens, the grid changes to 2 columns.
        </li>
        <li>
          <strong>@media (max-width: 480px)</strong> → The grid switches to a single-column stacked layout on mobile devices.
        </li>
      </ul>
      </div>
    </div>
  );
};

export default CssRWDGridView;