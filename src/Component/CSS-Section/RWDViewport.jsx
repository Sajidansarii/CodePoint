import React from "react";

const CssRWDViewport = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">Responsive Web Design - Viewport</h1>

      {/* Introduction */}
      <p className="text-gray-700">
        <strong>Viewport</strong> ek user ke device ki visible area hoti hai. Desktop screens ke liye
        viewport bada hota hai, jabki mobile screens me chhota hota hai. Agar hum viewport define
        nahi karte to mobile browser desktop jaise zoomed-out view dikhata hai.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Viewport is Important?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Without viewport, website mobile par chhoti aur unreadable dikhegi.</li>
        <li>Viewport tag ke bina responsive design properly kaam nahi karta.</li>
        <li>Ye batata hai ki website ko device ke width ke according adjust karna hai.</li>
      </ul>

      {/* Code Example */}
      <h2 className="text-2xl font-semibold">Example: Viewport Meta Tag</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Viewport Example</title>
  
  <!-- Viewport Meta Tag -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    .box {
      width: 300px;
      height: 200px;
      background: coral;
      color: white;
      text-align: center;
      line-height: 200px;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1>Responsive Viewport Example</h1>
  <div class="box">Resize Me!</div>
</body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>{" "}
          ye browser ko batata hai ki viewport ko device ki width ke equal set karo.
        </li>
        <li>
          <strong>width=device-width</strong> → layout ko device ki actual screen width ke equal
          banata hai.
        </li>
        <li>
          <strong>initial-scale=1.0</strong> → zoom level ko 100% rakhta hai (default zoom nahi karega).
        </li>
        <li>
          Isse website mobile aur tablet par properly adjust hoti hai bina zoom kiye.
        </li>
      </ul>
    </div>
  );
};

export default CssRWDViewport;