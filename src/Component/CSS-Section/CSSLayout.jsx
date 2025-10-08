import React from "react";

const CssLayout = () => {
  return (
    <div className="p-6 space-y-6">
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
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`header {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}`}
      </pre>

      <div className="bg-[rgb(241_241_241)] text-center p-10 border-2">Header</div>

      <h1 className="text-2xl">CSS Navigation Bar</h1>
      <p>A navigation bar contains a list of links to help visitors navigate through your website:</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg ">
        {`/* Style the topnav */
ul.topnav {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333333;
}

/* Style links in topnav */
ul.topnav li a {
  display: block;
  color: #f1f1f1;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
ul.topnav li a:hover {
  background-color: #dddddd;
  color: black;
}`}
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
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`div.flex-container {
  display: flex;
  /* Show the flex items horizontally */
  flex-direction: row;
}

div.flex-container > div {
  margin: 10px;
}

/* Use media query and show the flex items vertically if screen width is less than 600px */
@media screen and (max-width:600px) {
  div.flex-container {
    flex-direction: column;
  }
}`}
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
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 8px;
}`}
    </pre>

    <div className="bg-[rgb(241_241_241)] text-center p-5">Footer</div>
    <p>Here’s an example of a footer that stays visible at the bottom as you scroll.</p>
    <h1 className="text-2xl">Example</h1>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1;
  padding: 8px;
  text-align: center;
  z-index: 1000;
}`}
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