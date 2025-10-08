import React from "react";

const CssRWD = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">CSS RWD (Responsive Web Design)-</h1>

      {/* Introduction */}
      <p>
        RWD means <strong>Responsive Web Design</strong>. It means that a website automatically adjusts to every screen size (desktop, tablet, mobile) without the need to create a separate website. The main goal of responsive design is to provide the best user experience.</p>
        <p>Responsive web design isn’t a software or a script like JavaScript—it's a design technique used to make websites flexible across all screen sizes and devices.</p>

      {/* Features */}
      <h2 className="text-2xl font-semibold">Key Features of RWD:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><span className="text-red-400 bg-gray-50 px-1">Flexible Layouts</span> – % And use relative units instead of pixels.</li>
        <li><span className="text-red-400 bg-gray-50 px-1">Media Queries</span> –   CSS is applied according to the screen size.</li>
        <li><span className="text-red-400 bg-gray-50 px-1">Responsive Images</span> – Images shrink according to the screen size.</li>
      </ul>

      <h1 className="text-2xl">Designing For The Best Experience For All Users</h1>
       <p>Web pages are accessed on a variety of devices, including desktops, tablets, and smartphones. No matter which device is used, your website should be visually appealing and user-friendly.</p>
       <p>Instead of cutting out information for smaller devices, websites should adapt their content to display properly on all screen sizes.</p>
       <div className="min-w-full h-96 bg-[url('/public/size.jpg')] bg-cover bg-center"></div>

      {/* Code Example */}
      <h2 className="text-2xl font-semibold">Example Code:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
<head>
  <title>Responsive Web Design</title>
  <style>
    .container {
      display: flex;
      gap: 10px;
    }
    .box {
      flex: 1;
      padding: 20px;
      color: white;
    }
    .box1 { background: red; }
    .box2 { background: green; }
    .box3 { background: blue; }

    /* Media Query for small screens */
    @media (max-width: 600px) {
      .container {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <h1>Responsive Web Design Example</h1>
  <div class="container">
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
    <div class="box box3">Box 3</div>
  </div>
</body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Normal desktop screen par boxes <strong>row</strong> me dikhte hain.
        </li>
        <li>
          Agar screen width <strong>600px se kam</strong> ho jaye to media query apply hoti hai aur
          boxes <strong>column</strong> me stack ho jate hain.
        </li>
        <li>
          Is tarah website automatically adjust hoti hai — yehi hota hai{" "}
          <strong>Responsive Web Design (RWD)</strong>.
        </li>
      </ul>
    </div>
  );
};

export default CssRWD;