import React from "react";

const CssRWDTemplates = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        Responsive Web Design - Templates
      </h1>

      {/* Intro */}
      <p>
       Responsive Web Design (RWD) templates are pre-built website layouts that automatically adjust to any screen size. These templates provide you with a ready-made design, so you don’t need to build the layout from scratch—just customize the content and styling.
      </p>

      {/* Why Templates */}
      <h2 className="text-2xl font-semibold">Why Use RWD Templates?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Time-saving: Pre-built layouts are already responsive.</li>
        <li>Cross-device compatibility is ensured.</li>
        <li>Easy customization options are available.</li>
        <li>Beginner-friendly development.</li>
      </ul>

      {/* Example 1: Basic Responsive Template */}
      <h2 className="text-2xl font-semibold">Basic Responsive Template</h2>
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
      <p>This template uses Flexbox, where the sidebar and content appear side by side on desktop screens. However, due to the <span className="text-red-400 bg-gray-50 px-1">@media-query</span>, they stack on top of each other on small screens.</p>

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
      <p>In Tailwind, using responsive classes like md:flex-row and md:w-1/4, a single template automatically adjusts across different screen sizes.</p>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
     <p>
      RWD templates are useful for both beginners and professionals because they provide a pre-built structure. By simply replacing the content, a complete responsive website can be created.
     </p>
    </div>
  );
};

export default CssRWDTemplates;