import React from "react";

const CssPagination = () => {
  return (
    <div className="p-8min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Pagination
      </h1>

      {/* Intro */}
      <p>
        <strong>Pagination</strong> ka use large content (jaise articles, products, 
        ya search results) ko multiple pages me divide karne ke liye hota hai. 
        CSS ke through hum pagination ko visually attractive aur user-friendly 
        bana sakte hain.
      </p>

      {/* Example with CSS Code */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h2 className="text-xl font-semibold">🔹 Basic Pagination Example</h2>
        <p>
          Niche diya gaya example ek simple pagination UI banata hai jisme 
          active page highlight hota hai aur hover effect bhi diya gaya hai.
        </p>

        {/* CSS Code Block */}
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`/* CSS Pagination Example */
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
`}
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