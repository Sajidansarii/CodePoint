import React from "react";

const CssWebsite = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-medium mb-6 text-blue-500">
        Build a Website with CSS
      </h1>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        By using CSS, we can make our website attractive and responsive. HTML provides the structure, and CSS styles that structure. Here is an example of a simple website layout.
      </p>

      {/* Example Code */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <pre className="text-sm text-gray-800 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My CSS Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background: #1e3a8a;
      color: white;
      text-align: center;
      padding: 20px;
    }
    nav {
      background: #2563eb;
      padding: 10px;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      padding: 20px;
    }
    footer {
      background: #1e3a8a;
      color: white;
      text-align: center;
      padding: 15px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My CSS Website</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>

  <main>
    <h2>About This Website</h2>
    <p>
      Ye ek simple example hai jisme humne CSS ka use karke 
      ek basic website banayi hai.
    </p>
  </main>

  <footer>
    <p>&copy; 2025 My CSS Website</p>
  </footer>
</body>
</html>`}
        </pre>
      </div>

      {/* Explanation */}
      <div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">
        Explanation:
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <code>header</code> → The top section of the website that contains the title.
        </li>
        <li>
          <code>nav</code> → A navigation bar has been created with a hover effect.
        </li>
        <li>
          <code>main</code> → It is the content section of the page.
        </li>
        <li>
          <code>footer</code> → The bottom section is fixed and contains the copyright text.
        </li>
        <li>
         CSS properties like background, color, padding, and text-align are used for styling.
        </li>
      </ul>
      </div>

    </div>
  );
};

export default CssWebsite;