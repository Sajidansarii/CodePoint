const HTMLBasics = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML Basics
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        HTML, or <strong>HyperText Markup Language</strong>, is the backbone of every
        website. It defines the <strong>structure</strong> of a web page using
        elements called <strong>tags</strong>. Learning HTML basics is the first step
        in web development.
      </p>

      {/* Section: HTML Elements */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">
        Basic HTML Elements
      </h2>
      <p className="text-gray-700 mb-3">
        HTML is made up of elements wrapped in <strong>tags</strong>. A basic HTML page
        usually includes:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
        <li>
          <code>&lt;!DOCTYPE html&gt;</code> - Declares HTML5 document type.
        </li>
        <li>
          <code>&lt;html&gt;</code> - The root element of the page.
        </li>
        <li>
          <code>&lt;head&gt;</code> - Contains metadata like the title.
        </li>
        <li>
          <code>&lt;body&gt;</code> - Holds the content visible on the page.
        </li>
      </ul>

      {/* Code Example */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">
        Example: A Basic HTML Page
      </h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 overflow-x-auto text-sm">
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
        </code>
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">
        Explanation:
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
        <li><code>&lt;!DOCTYPE html&gt;</code> → Ensures browser uses HTML5.</li>
        <li><code>&lt;html&gt;</code> → Wraps all content.</li>
        <li><code>&lt;head&gt;</code> → Stores title and meta info.</li>
        <li><code>&lt;body&gt;</code> → Displays all visible page elements.</li>
      </ul>

      {/* Why Learn HTML */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">
        Why Learn HTML Basics?
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>It is the foundation of all websites.</li>
        <li>It is simple and beginner-friendly.</li>
        <li>Works with CSS and JavaScript for styling and interactivity.</li>
      </ul>

      {/* Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>HTML stands for HyperText Markup Language.</li>
          <li>Basic structure includes: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</li>
          <li>HTML is used to create the structure of web pages.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLBasics;