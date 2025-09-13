import React from "react";

const CSSTemplates = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Templates</h1>
      <p className="mb-4">
        CSS Templates are pre-designed layouts that you can use to quickly build
        web pages. They provide a starting point for your project with a ready
        structure like header, navigation, content, and footer sections.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Example: Simple Page Template</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    header {
      background: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
    }
    nav {
      float: left;
      width: 20%;
      height: 300px;
      background: #f1f1f1;
      padding: 20px;
    }
    section {
      float: left;
      width: 80%;
      height: 300px;
      padding: 20px;
    }
    footer {
      clear: both;
      background: #ddd;
      text-align: center;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h2>My Website</h2>
  </header>

  <nav>
    <p>Navigation Links</p>
  </nav>

  <section>
    <h2>Main Content</h2>
    <p>This is a simple template example.</p>
  </section>

  <footer>
    <p>Footer Information</p>
  </footer>
</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Explanation:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Header:</strong> Top section of the page containing the title
          or logo.
        </li>
        <li>
          <strong>Navigation:</strong> Sidebar or menu to navigate to different
          pages.
        </li>
        <li>
          <strong>Section:</strong> Main content area where the main text or
          data is shown.
        </li>
        <li>
          <strong>Footer:</strong> Bottom section for additional info like
          copyright or links.
        </li>
      </ul>
    </div>
  );
};

export default CSSTemplates;