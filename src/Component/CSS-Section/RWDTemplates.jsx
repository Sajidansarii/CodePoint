import React from "react";

const CssRWDTemplates = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        Responsive Web Design - Templates
      </h1>

      {/* Intro */}
      <p className="text-gray-700">
        Responsive Web Design (RWD) templates pre-built website layouts hote
        hain jo automatically har screen size par adjust ho jaate hain. Ye
        templates aapko ready-made design dete hain jisse aapko scratch se
        layout banane ki zarurat nahi padti. Sirf content aur styling customize
        karni hoti hai.
      </p>

      {/* Why Templates */}
      <h2 className="text-2xl font-semibold">Why Use RWD Templates?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Time-saving: Pre-built layouts already responsive hote hain.</li>
        <li>Cross-device compatibility ensure hoti hai.</li>
        <li>Easy customization ke options milte hain.</li>
        <li>Beginner-friendly development.</li>
      </ul>

      {/* Example 1: Basic Responsive Template */}
      <h2 className="text-2xl font-semibold">Example: Basic Responsive Template</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header, footer {
      background: #1e40af;
      color: white;
      text-align: center;
      padding: 15px;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
    }
    .sidebar, .content {
      padding: 20px;
      flex: 1;
    }
    .sidebar {
      background: #f3f4f6;
    }
    .content {
      background: #e0f2fe;
    }
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>My Responsive Template</h1>
  </header>
  <div class="container">
    <div class="sidebar">Sidebar</div>
    <div class="content">Main Content</div>
  </div>
  <footer>
    <p>Footer</p>
  </footer>
</body>
</html>`}
      </pre>
      <p className="text-gray-700">
        Is template me <code>flexbox</code> use kiya gaya hai jisme desktop par
        sidebar aur content side by side aate hain. Lekin <code>@media</code>{" "}
        query ki wajah se small screens par ye dono stack ho jaate hain.
      </p>

      {/* Example 2: Tailwind Responsive Template */}
      <h2 className="text-2xl font-semibold">Example: Tailwind CSS Template</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<div class="flex flex-col min-h-screen">
  <header class="bg-blue-700 text-white p-4 text-center">
    Header
  </header>
  
  <main class="flex flex-1 flex-col md:flex-row">
    <aside class="bg-gray-200 p-4 md:w-1/4">Sidebar</aside>
    <section class="bg-blue-100 p-4 flex-1">Main Content</section>
  </main>
  
  <footer class="bg-blue-700 text-white p-4 text-center">
    Footer
  </footer>
</div>`}
      </pre>
      <p className="text-gray-700">
        Tailwind me responsive classes jaise <code>md:flex-row</code> aur{" "}
        <code>md:w-1/4</code> use karke ek hi template alag-alag screen sizes
        par automatically adjust ho jaata hai.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
      <p className="text-gray-700">
        RWD templates beginners aur professionals dono ke liye useful hote hain
        kyunki ye pre-built structure dete hain. Sirf content replace karke ek
        complete responsive website banayi jaa sakti hai.
      </p>
    </div>
  );
};

export default CssRWDTemplates;