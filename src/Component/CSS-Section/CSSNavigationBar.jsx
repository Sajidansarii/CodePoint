import React from "react";

const CssNavigationBar = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">CSS Navigation Bar</h1>
      <p className="mb-4">
        A <strong>navigation bar (navbar)</strong> is a menu that helps users
        navigate between different sections or pages of a website. In CSS, you
        can style a navigation bar using lists, flexbox, or grid.
      </p>

      {/* Horizontal Navbar */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Horizontal Navigation Bar</h2>
      <p className="mb-4">Here’s a simple horizontal navigation bar:</p>

      <div className="bg-gray-800 text-white rounded-lg shadow-md">
        <ul className="flex space-x-6 p-4">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li a {
  text-decoration: none;
  padding: 10px 15px;
  color: white;
}

li a:hover {
  color: yellow;
}`}
      </pre>

      {/* Vertical Navbar */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Vertical Navigation Bar</h2>
      <p className="mb-4">You can also create a vertical sidebar-style navigation bar:</p>

      <div className="bg-gray-100 w-48 rounded-lg shadow-md">
        <ul className="flex flex-col p-4 space-y-3">
          <li><a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Home</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">About</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Services</a></li>
          <li><a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Contact</a></li>
        </ul>
      </div>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
{`ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
}

li a:hover {
  background-color: blue;
  color: white;
}`}
      </pre>

      {/* Sticky Navbar */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Sticky Navigation Bar</h2>
      <p className="mb-4">
        You can make a navbar stick to the top of the page using{" "}
        <code>position: fixed</code> or <code>sticky</code>.
      </p>

      <div className="sticky top-0 bg-blue-600 text-white p-3 rounded-lg shadow-md">
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
{`.navbar {
  position: sticky;
  top: 0;
  background-color: blue;
  color: white;
}`}
      </pre>

      {/* Notes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Important Notes</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Use <code>flex</code> or <code>grid</code> for easy navbar layout.</li>
        <li>Avoid inline styles; use CSS classes for reusability.</li>
        <li>Use <code>position: sticky</code> for modern sticky navbars.</li>
        <li>Keep navigation simple and consistent across pages.</li>
      </ul>
    </div>
  );
};

export default CssNavigationBar;