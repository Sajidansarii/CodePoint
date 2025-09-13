import React from "react";

const CssWebsiteLayout = () => {
  return (
    <div className="font-sans max-w-3xl">
      <h1 className="tetx-blue-500 font-medium text-3xl">Css Website Layout</h1>
      <p className="mb-10">CSS layout plays a crucial role in shaping the visual structure, organization, and responsiveness of a website. <br/> In this tutorial, we’ll cover key CSS techniques to help you build clean, effective, and responsive layouts.</p>
      <h1 className="text-2xl mt-10">Structure of Webpage Layout</h1>
      <p className="mb-10">A webpage typically consists of sections such as a header, navigation menu, main content, and footer. These core elements serve as the foundation for a wide range of layout designs available to developers</p>
      {/* Header */}
      <header className="bg-gray-800 text-white p-6 text-center text-xl font-bold border">
        Header
      </header>

      {/* Navbar */}
      <nav className="bg-gray-600 text-white p-4 text-center border">
        Navigation Bar
      </nav>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row border">
        {/* Sidebar */}
        <aside className="md:w-1/3 bg-gray-100 p-6 text-gray-700 border border-black-500">
          Sidebar
        </aside>

        {/* Main Content */}
        <main className="md:w-2/3 bg-white p-6 text-gray-900 border border-black-500">
          Main Content
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-4 border border-black-500"> 
        Footer
      </footer>
      <p className="mt-10 mb-10">To learn how to define the structure of a webpage, check out our tutorial on HTML Layout, where we explain each element of a webpage in detail. In this tutorial, we’ll focus on how to style and structure those layouts using CSS.</p>

      <h1 className="text-2xl mt-10">CSS Normal Layout Flow</h1>
      <p>Normal flow is the default layout behavior in CSS, where elements are rendered in the order they appear in the HTML, following the natural top-to-bottom, left-to-right sequence.</p>
      <ul className="mt-5 list-decimal ml-5">
        <li>Block-level elements such as {'<div>'}, {'<p>'}, and headings stack vertically and occupy the full width of their container by default</li>
        <li>Inline elements like {'<span>'} and {'<strong>'} flow horizontally within a line, and their width and height cannot be modified.</li>
        <li>Inline-block elements combine both behaviors—they appear inline with other elements but allow you to set their width and height.</li>
      </ul>
      <h1 className="text-3xl mt-5 mb-5">Example</h1>
     <div className="bg-gray-200 p-4 rounded-lg">
      <pre>
        {`<!DOCTYPE html>
<html>

<head>
    <style>
        div, span{
            border: 2px solid;
            margin: 10px;
        }
        .inlineBlock{
            display: inline-block;
            height: 100px;
            width: 100px;
        }
    </style>
</head>

<body>
    <div> Block Element </div>
    <div> Block Element </div>
    <span> Inline element </span>
    <span> Inline element </span>
    <div> Block Element </div>
    <span> Inline element </span>
    <div class="inlineBlock">
        Inline Block Element
    </div>
</body>\
</html>  `}
      </pre>
     </div>
     <h1 className="text-2xl mt-10 mb-5">CSS Float Layout</h1>
     <p>The float layout is used to position elements to the left or right within the normal document flow. It's commonly used for creating two-column layouts or wrapping text around images on a webpage.</p>
    </div>
  );
};

export default CssWebsiteLayout;
