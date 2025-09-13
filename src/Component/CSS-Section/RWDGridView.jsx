import React from "react";

const CssRWDGridView = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">Responsive Web Design - Grid View</h1>

      {/* Intro */}
      <p className="text-gray-700">
        <strong>Grid View</strong> ek aisa layout system hai jo content ko rows aur columns me
        arrange karta hai. RWD me grid bahut useful hota hai kyunki hum alag-alag screen size ke
        liye alag column structures define kar sakte hain.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Grid View?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Easy way to create multi-column layouts.</li>
        <li>Responsive ho jata hai using <code>@media</code> queries.</li>
        <li>Mobile, tablet aur desktop par alag-alag view set karna possible hota hai.</li>
      </ul>

      {/* CSS Example */}
      <h2 className="text-2xl font-semibold">Example: Responsive Grid Layout</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Grid View</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .grid-item {
      background: coral;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 18px;
    }

    /* Tablet view */
    @media (max-width: 768px) {
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Mobile view */
    @media (max-width: 480px) {
      .grid-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <h1>Responsive Grid View Example</h1>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
  </div>
</body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>display: grid;</code> → Grid layout activate karta hai.
        </li>
        <li>
          <code>grid-template-columns: repeat(4, 1fr);</code> → Desktop view me 4 equal columns banata hai.
        </li>
        <li>
          <code>@media (max-width: 768px)</code> → Tablet screens ke liye grid ko 2 columns me convert karta hai.
        </li>
        <li>
          <code>@media (max-width: 480px)</code> → Mobile screens ke liye grid ko single column (stacked layout) banata hai.
        </li>
      </ul>
    </div>
  );
};

export default CssRWDGridView;