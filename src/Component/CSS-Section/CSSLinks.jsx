import React from "react";

export default function CssLinks() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-medium mb-6 text-blue-500">CSS Links</h1>
      <p className="mb-4 text-gray-700">
        Links in HTML can be styled differently depending on their state. CSS
        provides pseudo-classes to target these states. Common ones are:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><code>:link</code> → default state of an unvisited link</li>
        <li><code>:visited</code> → link that has already been visited</li>
        <li><code>:hover</code> → when the mouse pointer is over the link</li>
        <li><code>:active</code> → when the link is being clicked</li>
      </ul>

      {/* Example Card */}
      <div className="mb-6 shadow-lg rounded-2xl">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <div className="w-5 h-5 text-green-600" />
            Example CSS for Links
          </h2>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
{`a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
  text-decoration: underline;
}

a:active {
  color: orange;
}`}
          </pre>
        </div>
      </div>

      {/* Demo Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-green-700">Demo:</h2>
        <p className="text-gray-700">
          Try hovering, clicking, and visiting the links below:
        </p>
        <div className="space-x-4">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-red-500 active:text-orange-500 visited:text-purple-600 underline"
          >
            React Official Docs
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-red-500 active:text-orange-500 visited:text-purple-600 underline"
          >
            Tailwind CSS Docs
          </a>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl mb-3">CSS Styling Links</h2>
        <p>HTML links can be styled with many CSS properties, like <strong>color</strong>, <strong>text-decoration</strong>, <strong>background-color</strong>, <strong>font-size</strong>, <strong>font-weight</strong>,<strong> font-family</strong>, etc.</p>
      </div>
          <p className="text-xl mt-3">styled a Hyper Link with Css.</p>
      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <h2>Example</h2>
        <pre>
          <code>
            {`          a{  
            background:blue;
            font-size:10rem;
            color:red;
            }`}
          </code>
        </pre>
      </div>
    </div>
  );
}