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
    <div className="p-8 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Media Queries
      </h1>

      {/* Intro */}
      <p><span className="text-red-400 bg-gray-50 px-1 rounded-lg">Media Queries</span> are used to create responsive designs. With their help, we can write different CSS for different devices (mobile, tablet, desktop).
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
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">@media screen and (max-width: 600px)</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightblue</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <p>By default, the media type is optional and will default to all if left out. However, if your media query includes not or only, then specifying a media type is required.</p>
      <p>Stylesheets can be linked selectively to respond to various media types or viewport widths.</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">media</span>=<span className="text-green-700">"print"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"print.css"</span><span className="text-blue-600">&gt;</span><br />

    <span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">media</span>=<span className="text-green-700">"screen"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"screen.css"</span><span className="text-blue-600">&gt;</span><br />

    <span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">media</span>=<span className="text-green-700">"screen and (min-width: 480px)"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"example1.css"</span><span className="text-blue-600">&gt;</span><br />

    <span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">media</span>=<span className="text-green-700">"screen and (min-width: 701px) and (max-width: 900px)"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"example2.css"</span><span className="text-blue-600">&gt;</span>
  </code>
</pre>

      <h1 className="text-2xl">Media Queries Examples</h1>
      <p>Media queries can be written directly inside your existing stylesheet to apply styles conditionally based on screen size or device type.</p>
      <p>In this case, a media query sets the background to lightgreen at widths of 480px or more, and pink for anything narrower.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">@media screen and (min-width: 480px)</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightgreen</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <p>In this example, the menu is positioned to the left side of the page when the viewport is at least 480 pixels wide. For smaller viewports, it shifts above the main content.</p>

      <h1 className="text-2xl">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">@media screen and (min-width: 480px)</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">#leftsidebar</span> <span>{'{'}</span>
    <span className="text-red-500">width</span>: <span className="text-green-700">200px</span>; 
    <span className="text-red-500">float</span>: <span className="text-green-700">left</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">#main</span> <span>{'{'}</span>
    <span className="text-red-500">margin-left</span>: <span className="text-green-700">216px</span>;
    <span>{'}'}</span><br />

    <span>{'}'}</span>
  </code>
</pre>

    </div>
  );
};

export default CssMediaQueries;