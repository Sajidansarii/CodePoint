import React from "react";

const CssDropdowns = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Dropdowns</h1>
      <p className="mb-4">
        A <strong>dropdown</strong> is a hidden menu that becomes visible when a
        user hovers or clicks on a button or link. Dropdowns are commonly used
        in navigation bars and forms.
      </p>

      {/* Simple Dropdown */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Simple Hover Dropdown</h2>
      <p className="mb-4">
        This dropdown appears when you hover over the button.
      </p>

      <div className="relative inline-block group">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Hover Me
        </button>
        <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Link 1
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Link 2
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Link 3
          </a>
        </div>
      </div>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mt-4">
{`/* CSS Example */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.dropdown:hover .dropdown-content {
  display: block;
}`}
      </pre>

      {/* Click Dropdown */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Click Dropdown</h2>
      <p className="mb-4">This dropdown opens when you click on the button.</p>

      <details className="relative inline-block">
        <summary className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
          Click Me
        </summary>
        <div className="absolute bg-white shadow-lg mt-2 rounded-md">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Logout
          </a>
        </div>
      </details>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mt-4">
{`/* Using HTML <details> and <summary> */
<details>
  <summary>Click Me</summary>
  <div class="dropdown-content">
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <a href="#">Logout</a>
  </div>
</details>`}
      </pre>

      {/* Navbar Dropdown */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Dropdown in Navigation Bar</h2>
      <p className="mb-4">Dropdown menus are often used inside navigation bars.</p>

      <nav className="bg-gray-800 text-white p-4 rounded-md shadow-md">
        <ul className="flex space-x-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="relative group">
            <button className="hover:underline">Services</button>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Web Design</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Development</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">SEO</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <pre className="bg-gray-200  p-4 rounded-lg overflow-x-auto mt-4">
{`.navbar ul {
  list-style: none;
  display: flex;
}

.navbar li {
  position: relative;
  margin-right: 20px;
}

.navbar li:hover ul {
  display: block;
}

.navbar ul ul {
  display: none;
  position: absolute;
  background: #fff;
  color: #000;
}`}
      </pre>

      {/* Notes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Key Points</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Use <code>position: relative</code> on the parent and <code>absolute</code> on the dropdown content.</li>
        <li><code>:hover</code> shows dropdown on hover, <code>&lt;details&gt;</code> works for click.</li>
        <li>Always add padding and hover styles for better UX.</li>
        <li>Dropdowns in navbars improve navigation but should not be overloaded.</li>
      </ul>
    </div>
  );
};

export default CssDropdowns;