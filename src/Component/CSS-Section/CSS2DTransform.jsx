import React from "react";

const Css2DTransforms = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS 2D Transforms
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        <strong>2D Transform</strong> ka use elements ko move (translate), rotate,
        scale aur skew karne ke liye hota hai. Ye sirf X aur Y axis par apply hote
        hain. 
      </p>

      {/* Syntax */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">🔹 Syntax</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`transform: translate(x, y);
transform: rotate(angle);
transform: scale(x, y);
transform: skew(x-angle, y-angle);`}
        </pre>
      </div>

      {/* Example 1 - Translate */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">1. Translate Example</h2>
        <p className="text-gray-700">
          <code>translate()</code> se element ko X aur Y axis par move kar sakte
          ho.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`.box {
  width: 100px;
  height: 100px;
  background: tomato;
  transform: translate(50px, 30px);
}`}
        </pre>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-red-500 transform translate-x-12 translate-y-8"></div>
        </div>
      </div>

      {/* Example 2 - Rotate */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2. Rotate Example</h2>
        <p className="text-gray-700">
          <code>rotate()</code> se element ko X-Y plane par ghuma sakte ho.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`.box {
  width: 100px;
  height: 100px;
  background: lightseagreen;
  transform: rotate(45deg);
}`}
        </pre>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-teal-500 transform rotate-45"></div>
        </div>
      </div>

      {/* Example 3 - Scale */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3. Scale Example</h2>
        <p className="text-gray-700">
          <code>scale()</code> element ka size increase ya decrease karta hai.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`.box {
  width: 100px;
  height: 100px;
  background: orange;
  transform: scale(1.5, 1.5);
}`}
        </pre>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-orange-500 transform scale-150"></div>
        </div>
      </div>

      {/* Example 4 - Skew */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">4. Skew Example</h2>
        <p className="text-gray-700">
          <code>skew()</code> se element ko X aur Y axis par tilt (tedha) kar
          sakte ho.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`.box {
  width: 100px;
  height: 100px;
  background: violet;
  transform: skew(20deg, 10deg);
}`}
        </pre>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-purple-400 transform skew-x-12 skew-y-6"></div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li><strong>translate(x, y)</strong> → element ko X aur Y direction me move karta hai.</li>
          <li><strong>rotate(angle)</strong> → element ko ghuma deta hai.</li>
          <li><strong>scale(x, y)</strong> → size bada ya chhota kar deta hai.</li>
          <li><strong>skew(x, y)</strong> → element ko tilt karta hai.</li>
          <li>Multiple transforms ek sath bhi use ho sakte hain:
            <pre className="bg-gray-900 text-green-300 p-2 rounded mt-2 text-sm overflow-x-auto">{`transform: translate(50px, 20px) rotate(30deg) scale(1.2);`}
            </pre>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Css2DTransforms;