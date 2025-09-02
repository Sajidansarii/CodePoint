import React from "react";

const Css3DAnimation = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS 3D Animation
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        <strong>3D Animations</strong> ka use elements ko X, Y aur Z axis me
        continuously rotate, move ya scale karne ke liye hota hai. Ye animation
        mostly <code>@keyframes</code> ke sath banayi jaati hai.
      </p>

      {/* Syntax */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">🔹 Syntax</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`@keyframes myAnimation {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.box {
  animation: myAnimation 5s infinite linear;
}`}
        </pre>
      </div>

      {/* Example - 3D Rotating Cube */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">🎲 Example: Rotating 3D Cube</h2>
        <p className="text-gray-700">
          Yahan hum ek <strong>cube</strong> banayenge jisme 6 sides hongi aur
          cube continuously 3D me rotate karega.
        </p>

        {/* CSS Example Code */}
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`.scene {
  width: 200px;
  height: 200px;
  perspective: 600px; /* depth ka effect ke liye */
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 6s infinite linear;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(0, 150, 250, 0.7);
  border: 2px solid #fff;
}

/* cube ki sides position */
.front  { transform: rotateY(0deg) translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

@keyframes spin {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}`}
        </pre>

        {/* Live Demo */}
        <div className="flex justify-center mt-6">
          <div className="scene">
            <div className="cube animate-[spin_6s_linear_infinite]">
              <div className="face front bg-blue-500/70 flex items-center justify-center text-white font-bold">
                Front
              </div>
              <div className="face back bg-red-500/70 flex items-center justify-center text-white font-bold">
                Back
              </div>
              <div className="face right bg-green-500/70 flex items-center justify-center text-white font-bold">
                Right
              </div>
              <div className="face left bg-yellow-500/70 flex items-center justify-center text-white font-bold">
                Left
              </div>
              <div className="face top bg-purple-500/70 flex items-center justify-center text-white font-bold">
                Top
              </div>
              <div className="face bottom bg-pink-500/70 flex items-center justify-center text-white font-bold">
                Bottom
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <strong>perspective</strong> → depth ka illusion create karta hai.
          </li>
          <li>
            <strong>transform-style: preserve-3d</strong> → 3D transformations ko preserve karta hai.
          </li>
          <li>
            <strong>translateZ()</strong> → element ko andar/bahar push karta hai cube ke center se.
          </li>
          <li>
            <strong>@keyframes spin</strong> → cube ko continuously rotate karata hai.
          </li>
          <li>
            <strong>animation: spin 6s infinite linear;</strong> → cube ko infinite smooth rotation deta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Css3DAnimation;