import React from "react";

const CssRWDImages = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">Responsive Web Design - Images</h1>

      {/* Intro */}
      <p className="text-gray-700">
        Responsive images wo hoti hain jo apne container ki width ke hisaab se adjust ho jati
        hain. Agar hum normal fixed-size images use karenge to wo chhoti screens par cut ho
        sakti hain. Isi liye <strong>RWD images</strong> ka use zaroori hai.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Responsive Images?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Images automatically screen ke size ke hisaab se adjust hoti hain.</li>
        <li>Small devices par layout break hone se bachata hai.</li>
        <li>Website ko user-friendly aur professional look deta hai.</li>
      </ul>

      {/* CSS Example */}
      <h2 className="text-2xl font-semibold">Example: Responsive Image</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Image Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    img {
      max-width: 100%;
      height: auto;
      border: 3px solid #333;
    }
  </style>
</head>
<body>
  <h2>Resize the browser window to see the image adjust:</h2>
  <img src="https://via.placeholder.com/800x400" alt="Example Image">
</body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>max-width: 100%</code> → Image apne container se bahar nahi jayegi.
        </li>
        <li>
          <code>height: auto</code> → Image ka aspect ratio (width vs height) automatically maintain hota hai.
        </li>
        <li>
          Agar browser resize hota hai, to image bhi apne aap resize ho jati hai.
        </li>
      </ul>

      {/* Picture Element */}
      <h2 className="text-2xl font-semibold">Example: Picture Element</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<picture>
  <source srcset="small.jpg" media="(max-width: 600px)">
  <source srcset="medium.jpg" media="(max-width: 1200px)">
  <img src="large.jpg" alt="Responsive Image Example">
</picture>`}
      </pre>

      <p className="text-gray-700">
        Yahan pe <code>&lt;picture&gt;</code> tag ka use karke alag screen sizes ke liye alag images load hoti hain.
        Isse bandwidth bachta hai aur mobile devices ke liye optimized images dikhayi jaati hain.
      </p>
    </div>
  );
};

export default CssRWDImages;