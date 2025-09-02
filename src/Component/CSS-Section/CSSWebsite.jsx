import React from "react";

const CssWebsite = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Build a Website with CSS
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-700 leading-relaxed">
        CSS ka use karke hum apni website ko attractive aur responsive 
        bana sakte hain. HTML structure provide karta hai aur CSS us structure 
        ko style karta hai. Yaha ek simple website layout ka example diya gaya hai.
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
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">
        Explanation:
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <code>header</code> → Website ka top section jisme title hota hai.
        </li>
        <li>
          <code>nav</code> → Navigation bar create ki gayi hai with hover effect.
        </li>
        <li>
          <code>main</code> → Page ka content section hota hai.
        </li>
        <li>
          <code>footer</code> → Bottom section fixed hai jisme copyright text.
        </li>
        <li>
          <code>CSS properties</code> jaise <code>background</code>, 
          <code>color</code>, <code>padding</code>, <code>text-align</code> 
          ka use styling ke liye kiya gaya hai.
        </li>
      </ul>
    </div>
  );
};

export default CssWebsite;