import React from "react";

const CssMinifyDemo = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Minify
      </h1>

      <p className="text-gray-700">
        <strong>CSS Minify</strong> ka matlab hai CSS file ko *chhota karna* 
        taaki *file size kam ho aur website fast load ho*. 
        Minifying se extra spaces, comments, aur unnecessary characters remove ho jaate hain.
      </p>

      {/* Example 1: Original CSS */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Original CSS</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}`}
        </pre>
      </div>

      {/* Example 2: Minified CSS */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Minified CSS</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
       {`body{background-color:#f0f0f0;font-family:Arial,sans-serif;color:#333}h1{font-size:2rem;margin-bottom:1rem}`}
        </pre>
      </div>

      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Minifying reduces file size and improves page load speed.</li>
          <li>Tools like <a href="https://cssminifier.com" target="_blank" className="text-blue-600 underline">CSS Minifier</a> or <code>npm packages</code> can automate this.</li>
          <li>Always keep a readable version for development and minified for production.</li>
          <li>Tailwind CSS automatically purges unused classes in production, which is similar to minifying.</li>
        </ul>
      </p>
    </div>
  );
};

export default CssMinifyDemo;