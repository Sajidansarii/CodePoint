import React from "react";

const CssRWDMediaQueries = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">Responsive Web Design - Media Queries</h1>

      {/* Intro */}
      <p className="text-gray-700">
        <strong>Media Queries</strong> ek CSS technique hai jisme hum alag-alag devices (mobile,
        tablet, desktop) ke liye alag styles apply kar sakte hain. Ye RWD ka backbone hai jisse
        website har screen size par properly dikhai deti hai.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Media Queries?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Different screen sizes ke liye alag-alag styles set karna possible hota hai.</li>
        <li>Website ko mobile-friendly aur tablet-friendly banata hai.</li>
        <li>Developer ko ek hi CSS file me responsive design implement karne ki facility deta hai.</li>
      </ul>

      {/* CSS Example */}
      <h2 className="text-2xl font-semibold">Example: Media Queries</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Media Queries Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      background-color: lightblue;
      font-family: Arial, sans-serif;
    }

    h1 {
      text-align: center;
      padding: 20px;
    }

    /* Tablet View */
    @media (max-width: 768px) {
      body {
        background-color: lightgreen;
      }
      h1 {
        font-size: 24px;
      }
    }

    /* Mobile View */
    @media (max-width: 480px) {
      body {
        background-color: lightcoral;
      }
      h1 {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <h1>Responsive Design with Media Queries</h1>
</body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Default view (desktop): background lightblue aur heading normal size.
        </li>
        <li>
          <code>@media (max-width: 768px)</code> → Tablet screens par background lightgreen ho jata hai aur font chhota ho jata hai.
        </li>
        <li>
          <code>@media (max-width: 480px)</code> → Mobile screens par background lightcoral ho jata hai aur heading aur chhoti ho jati hai.
        </li>
      </ul>
    </div>
  );
};

export default CssRWDMediaQueries;