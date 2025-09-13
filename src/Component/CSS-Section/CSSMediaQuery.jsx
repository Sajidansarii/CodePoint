import React from "react";

const CssMediaQueries = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Media Queries
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        <strong>Media Queries</strong> ka use responsive design banane ke liye
        hota hai. Iski madad se hum alag–alag devices (mobile, tablet, desktop)
        ke liye alag CSS likh sakte hain. <br />
        Syntax kuch is tarah hota hai:
      </p>

      {/* Syntax Example */}
      <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
      </pre>

      {/* Example 1 */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">1. Background Change Example</h2>
        <p className="text-gray-700">
          Is example me agar screen ki width <code>600px</code> se chhoti hai
          (mobile screen), to background color lightblue ho jayega.
        </p>

        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`body {
  background-color: white;
}

@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
        </pre>

        <div className="p-4 border rounded text-center">
          👉 Resize karke dekho: Desktop par white background hoga, mobile size
          me lightblue.
        </div>
      </div>

      {/* Example 2 */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2. Responsive Text Example</h2>
        <p className="text-gray-700">
          Media queries se text ka size bhi change kar sakte ho:
        </p>

        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto text-left">
{`h1 {
  font-size: 40px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 28px;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 20px;
  }
}`}
        </pre>

        <div className="p-4 border rounded text-center">
          <h1 className="text-3xl md:text-2xl sm:text-xl font-bold">
            Resize karke dekho → Text size change hoga
          </h1>
        </div>
      </div>

      {/* Example 3 */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3. Hide Element on Mobile</h2>
        <p className="text-gray-700">
          Kai baar chhoti screen par kuch elements ko hide karna padta hai:
        </p>

        <pre className="bg-gray-20 p-4 rounded text-sm overflow-x-auto text-left">
{`.sidebar {
  display: block;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`}
        </pre>

        <div className="flex justify-center">
          <div className="sidebar bg-blue-600 text-white px-4 py-2 rounded">
            Sidebar (Resize par hide ho jayega)
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <code>@media</code> rule alag-alag screen sizes ke liye alag styles
            apply karta hai.
          </li>
          <li>
            <strong>max-width</strong> → Jab screen is width se chhoti ho tab CSS
            apply hoti hai.
          </li>
          <li>
            <strong>min-width</strong> → Jab screen is width se badi ho tab CSS
            apply hoti hai.
          </li>
          <li>
            Common breakpoints:
            <ul className="list-disc pl-6">
              <li>480px → Mobile</li>
              <li>768px → Tablet</li>
              <li>1024px → Laptop</li>
              <li>1200px+ → Desktop</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssMediaQueries;