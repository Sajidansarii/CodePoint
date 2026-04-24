import React from "react";

const CssPagination = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Pagination
      </h1>

      {/* Intro */}
      <p>
        <span className="text-red-400 bg-gray-50 px-1 rounded">Pagination</span> ka use large content (jaise articles, products, 
        ya search results) ko multiple pages me divide karne ke liye hota hai. 
        CSS ke through hum pagination ko visually attractive aur user-friendly 
        bana sakte hain.
      </p>

      {/* Example with CSS Code */}
      <div className="bg-white p-6 rounded space-y-6">
        <h2 className="text-xl font-semibold">Basic Pagination Example</h2>
        <p>
          Niche diya gaya example ek simple pagination UI banata hai jisme 
          active page highlight hota hai aur hover effect bhi diya gaya hai.
        </p>

        {/* CSS Code Block */}
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-500">/* CSS Pagination Example */</span><br />

    <span className="text-blue-600">.pagination</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">list-style</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">0</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.pagination li</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">margin</span>: <span className="text-green-700">0 5px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.pagination a</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">black</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">float</span>: <span className="text-green-700">left</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">8px 16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">1px solid #ddd</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.pagination a.active</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#4CAF50</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">1px solid #4CAF50</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.pagination a:hover:not(.active)</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#ddd</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        {/* Live Demo */}
        <ul className="flex list-none justify-center">
          <li>
            <a
              href="#"
              className="px-3 py-1 border border-gray-300 hover:bg-gray-200"
            >
              «
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border border-gray-300 hover:bg-gray-200"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border border-green-600 bg-green-600 text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border border-gray-300 hover:bg-gray-200"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border border-gray-300 hover:bg-gray-200"
            >
              »
            </a>
          </li>
        </ul>
      </div>

      {/* Explanation Section */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <code>display: flex;</code> → pagination ko ek horizontal row me 
            arrange karta hai.
          </li>
          <li>
            <code>.pagination a</code> → har page number ko ek clickable button 
            ke tarah style karta hai.
          </li>
          <li>
            <code>.active</code> → jo page currently select hai use highlight 
            karta hai.
          </li>
          <li>
            <code>:hover:not(.active)</code> → jab user kisi page number par hover 
            kare to uska background color change ho jaye (except active page).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssPagination;