import React from "react";

const CssLayout = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Layout</h1>

      {/* Intro */}
      <p className="text-gray-700">
        CSS Layout techniques are used to arrange the elements of a web page. The layout determines how the header, sidebar, content, and footer will appear on the web page. In modern CSS, multiple methods are available, such as Flexbox, Grid, Positioning, and the traditional block/inline layout.
      </p>

        <ul className="list-[square] list-inside">
        <li><strong>Header</strong> – Contains the logo, site title, and perhaps a search bar or language selector.</li>
       <li><strong>Navigation Bar</strong> – A menu to guide users through different pages or sections.</li>
       <li><strong>Main Body</strong> – The central content area where the primary information or features are presented.</li>
       <li><strong>Footer</strong> – Holds contact details, legal links, and other secondary information.</li>
      </ul>

 <p>Although layout designs can vary widely, the structure we've shown is a standard foundation. This tutorial will walk you through its components and how to use them effectively.</p>

    <h1 className="text-2xl">CSS Header</h1>
    <p>The <span className="text-red-400 bg-gray-50 px-1">{'<header>'}</span> element, located at the top of a webpage, typically contains branding elements such as the logo or site title.</p>
      <h1 className="text-2xl">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">header</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#f1f1f1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <div className="bg-[rgb(241_241_241)] text-center p-10 border-2">Header</div>

      <h1 className="text-2xl">CSS Navigation Bar</h1>
      <p>A navigation bar contains a list of links to help visitors navigate through your website:</p>
      <h1 className="text-2xl">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-500">/* Style the topnav */</span><br />
    <span className="text-blue-600">ul.topnav</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">list-style-type</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#333333</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* Style links in topnav */</span><br />
    <span className="text-blue-600">ul.topnav li a</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">block</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#f1f1f1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">14px 16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">none</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* Change color on hover */</span><br />
    <span className="text-blue-600">ul.topnav li a:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#dddddd</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">black</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>
      <ul className="bg-[rgb(51_51_51)] flex text-white gap-5">
        <li className="hover:text-black hover:bg-[rgb(221_221_221)] cursor-pointer p-5 ">Home</li>
        <li className="hover:text-black hover:bg-[rgb(221_221_221)] cursor-pointer p-5 ">About</li>
        <li className="hover:text-black hover:bg-[rgb(221_221_221)] cursor-pointer p-5 ">Contact us</li>
      </ul>
      

      <h1 className="text-2xl">CSS Layout Content</h1>
      <p>How your website looks can change depending on what device someone’s using. Some of the most popular layout options are:</p>
      <ul className="list-[square] list-inside">
        <li><strong>1-column layout</strong> (often used for mobile browsers)</li>
        <li><strong>2-columns layout</strong> (often used for tablets and laptops)</li>
        <li><strong>3-columns layout</strong> (only used for desktops)</li>
      </ul>
    <p>We'll implement a responsive layout that displays three columns on wider screens, and collapses to a single column when the viewport is under 600px.</p>
    <h1 className="text-2xl">Example</h1>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">div.flex-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-gray-500">/* Show the flex items horizontally */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">row</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">div.flex-container &gt; div</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* Use media query and show the flex items vertically if screen width is less than 600px */</span><br />
    <span className="text-blue-600">@media screen and (max-width:600px)</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">div.flex-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">flex-direction</span>: <span className="text-green-700">column</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br />
    <span>{'}'}</span>
  </code>
</pre>
    <div className="flex flex-row bg-gray-200 py-2 px-6">

      <div className=" ">
        <h1 className="text-2xl">Column</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias consequuntur omnis aut maxime veritatis, exercitationem et voluptas facilis earum?</p>
      </div>

      <div>
        <h1 className="text-2xl">Column</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias consequuntur omnis aut maxime veritatis, exercitationem et voluptas facilis earum?</p>
      </div>

      <div>
        <h1 className="text-2xl">Column</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias consequuntur omnis aut maxime veritatis, exercitationem et voluptas facilis earum?</p>
      </div>
    </div>

    <h1 className="text-2xl">CSS Basic and Fixed Footer</h1>
    <p>The <span className="text-red-400 bg-gray-50 px-1">{'<footer>'}</span> element is located at the bottom of the page and commonly includes metadata such as copyright information and links for contacting the site owner.</p>
    <p>Here’s a simple example of how to style a footer.</p>
    <h1 className="text-2xl">Example</h1>
   <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">footer</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#f1f1f1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">8px</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

    <div className="bg-[rgb(241_241_241)] text-center p-5">Footer</div>
    <p>Here’s an example of a footer that stays visible at the bottom as you scroll.</p>
    <h1 className="text-2xl">Example</h1>
   <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">footer</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">fixed</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">bottom</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">left</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">100%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#f1f1f1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">8px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">z-index</span>: <span className="text-green-700">1000</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
      <p className="text-gray-700">
       CSS Layout is the foundation of designing and structuring web pages. By using a combination of traditional block/inline elements, positioning, Flexbox, and Grid, you can create powerful and responsive layouts.
      </p>
    </div>
    
  );
};

export default CssLayout;