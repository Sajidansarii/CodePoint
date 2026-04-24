import React from "react";

const CssDropdowns = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
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

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-500">/* CSS Example */</span><br />

    <span className="text-blue-500">.dropdown</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">inline-block</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.dropdown-content</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#fff</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">min-width</span>: <span className="text-green-700">160px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">box-shadow</span>: <span className="text-green-700">0 8px 16px rgba(0,0,0,0.2)</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.dropdown:hover .dropdown-content</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">block</span>;<br />
    <span>{'}'}</span>
  </code>
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

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-500">/* Using HTML &lt;details&gt; and &lt;summary&gt; */</span><br /><br />

    <span className="text-blue-500">&lt;details&gt;</span><br />

    <span className="text-blue-500">&lt;summary&gt;</span>
    Click Me
    <span className="text-blue-500">&lt;/summary&gt;</span><br />

    <span className="text-blue-500">&lt;div</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"dropdown-content"</span>
    <span className="text-blue-500">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">&lt;a</span>
    <span className="text-red-500"> href</span>=<span className="text-green-700">"#"</span>
    <span className="text-blue-500">&gt;</span>Profile<span className="text-blue-500">&lt;/a&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">&lt;a</span>
    <span className="text-red-500"> href</span>=<span className="text-green-700">"#"</span>
    <span className="text-blue-500">&gt;</span>Settings<span className="text-blue-500">&lt;/a&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">&lt;a</span>
    <span className="text-red-500"> href</span>=<span className="text-green-700">"#"</span>
    <span className="text-blue-500">&gt;</span>Logout<span className="text-blue-500">&lt;/a&gt;</span><br />

    <span className="text-blue-500">&lt;/div&gt;</span><br />
    <span className="text-blue-500">&lt;/details&gt;</span>
  </code>
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

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mt-5">
  <code>
    <span className="text-blue-500">.navbar ul</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">list-style</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.navbar li</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">margin-right</span>: <span className="text-green-700">20px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.navbar li:hover ul</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">block</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.navbar ul ul</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">#fff</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#000</span>;<br />
    <span>{'}'}</span>
  </code>
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