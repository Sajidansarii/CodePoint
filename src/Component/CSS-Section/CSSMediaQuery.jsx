import { DessertIcon } from "lucide-react";
import React from "react";

const CssMediaQueries = () => {
  const data = [
    {Value:'all', Description:'Used for all media type devices'},
    {Value:'print', Description:'Used for print preview mode'},
    {Value:'screen', Description:'Used for computer screens, tablets, smart-phones etc.'},
  ];

  const data2 = [
    {Value:'orientation', Description:'Orientation of the viewport. Landscape or portrait'},
    {Value:'max-height', Description:'Maximum height of the viewport'},
    {Value:'min-height', Description:'Minimum height of the viewport'},
    {Value:'height',    Description:'Height of the viewport (including scrollbar)'},
    {Value:'max-width', Description:'Maximum width of the viewport'},
    {Value:'min-width', Description:'Minimum width of the viewport'},
    {Value:'width',     Description:'Width of the viewport (including scrollbar)'},
  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Media Queries
      </h1>

      {/* Intro */}
      <p>Media Queries are used to create responsive designs. With their help, we can write different CSS for different devices (mobile, tablet, desktop).
      The syntax looks something like this:
      </p>
      <p>In CSS3, media queries improved on CSS2’s media types by targeting device features—like width, height, or orientation—rather than just the device type itself.</p>
      <p>Media queries are useful for checking several device properties, like:</p>
      <ul className="list-[square] list-inside">
        <li>width and height of the viewport</li>
        <li>width and height of the viewport</li>
        <li>orientation of the viewport (landscape or portrait) resolution</li>
      </ul>
      <p>By using media queries, you can create different style sheets for various devices—including desktops, tablets, and mobile phones—ensuring a responsive and user-friendly experience across all screen sizes.</p>
      <h1 className="text-2xl">CSS Media Types</h1>
      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Value</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="hover:bg-gray-100 cursor-text">
            <td className="px-4 py-2 border-b border-gray-200">{row.Value}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl">CSS Common Media Features</h1>
      <p>Below is a list of frequently used media features in CSS media queries:</p>
      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Value</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Value}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl">Media Query Syntax</h1>
      <p>Media queries consist of a media type and one or more media features. Each feature is tested, and if the conditions are met (true), the styles are applied.</p>

      {/* Syntax Example */}
      <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
      </pre>
      <p>By default, the media type is optional and will default to all if left out. However, if your media query includes not or only, then specifying a media type is required.</p>
      <p>Stylesheets can be linked selectively to respond to various media types or viewport widths.</p>
      <pre className="bg-gray-300 p-4 rounded-lg max-w-3xl overflow-x-scroll">
        <code>
          {`<link rel="stylesheet" media="print" href="print.css">
<link rel="stylesheet" media="screen" href="screen.css">
<link rel="stylesheet" media="screen and (min-width: 480px)" href="example1.css">
<link rel="stylesheet" media="screen and (min-width: 701px) and (max-width: 900px)" href="example2.css">`}
        </code>
      </pre>
      <h1 className="text-2xl">Media Queries Examples</h1>
      <p>Media queries can be written directly inside your existing stylesheet to apply styles conditionally based on screen size or device type.</p>
      <p>In this case, a media query sets the background to lightgreen at widths of 480px or more, and pink for anything narrower.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 p-4 rounded-lg">
        <code>
          {`@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}`}
        </code>
      </pre>

      <p>In this example, the menu is positioned to the left side of the page when the viewport is at least 480 pixels wide. For smaller viewports, it shifts above the main content.</p>

      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 p-4 rounded-lg">
        <code>
          {`@media screen and (min-width: 480px) {
  #leftsidebar {width: 200px; float: left;}
  #main {margin-left: 216px;}
}`}
        </code>
      </pre>
    </div>
  );
};

export default CssMediaQueries;