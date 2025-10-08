import React from "react";

const CssRWDGridView = () => {
  return (
    <div className="p-6 space-y-6">
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
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`
       
 <div class="grid-container">
  <div class="item1">
    <h1>Chania</h1>
  </div>

  <div class="item2">
    <ul>
      <li>The Flight</li>
      <li>The City</li>
      <li>The Island</li>
      <li>The Food</li>
    </ul>
  </div>

  <div class="item3">
     <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete.</p>
    <p>The city can be divided in two parts, the old town and the modern city. 
    The old town is situated next to the old harbour and is the matrix around which
     the whole urban area was developed.</p>
    <p>Chania lies along the north west coast of the island Crete.</p>
</div>

  <div class="item4">
    <h2>Facts:</h2>
    <ul>
      <li>Chania is a city on the island of Crete</li>
      <li>Crete is a Greek island in the Mediterranean Sea</li>
    </ul>
  </div>

  <div class="item5">
    <p>Resize the browser window to see how the content respond to the resizing.</p>
  </div>

</div>
`}
      </pre>
      <h1 className="text-2xl">The CSS</h1>
      <p>To improve the user interface, we’ll introduce some CSS for styling and color.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Here’s the full set of CSS styles:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`
        * {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lucida Sans", sans-serif;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main right'
    'footer footer footer footer footer footer';
    gap: 10px;
    background-color: white;
    padding: 10px;
}

.grid-container > div {
  padding: 10px;
  font-size: 16px;
}

.item1 {
  grid-area: header;
  background-color: purple;
  text-align: center;
  color: #ffffff;
}

.item1 > h1 {
  font-size: 40px;
}

.item2 {
  grid-area: menu;
}

.item2 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.item2 li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
}

.item2 li:hover {
  background-color: #0099cc;
}

.item3 {
  grid-area: main;
}

.item3 > h1 {
  font-size: 30px;
  margin-bottom: 7px;
}

.item3 > p {
  margin-bottom: 7px;
}

.item4 {
  grid-area: right;
  border: 2px solid #0099cc;
  background-color: white;
  padding: 15px;
  color: #000000;
}

.item4 > h2 {
  font-size: 20px;
  padding-bottom: 10px;
}

.item4 li {
  padding: 5px;
  margin-bottom: 5px;
}

.item5 {
  grid-area: footer;
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
}`}
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