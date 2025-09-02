import React from "react";

const CssMasking = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3-2xl font-bold text-center text-gray-800">
        CSS Masking
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        <strong>CSS Masking</strong> ka use elements par <em>mask images</em> ya{" "}
        <em>gradients</em> apply karne ke liye hota hai. Ye mask ek tarah ka
        filter hota hai jo decide karta hai ki element kaunsa part visible hoga
        aur kaunsa transparent.  
      </p>

      {/* Example 1: Basic Masking with PNG */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">
          1. Mask Image with Transparent PNG
        </h2>
        <p className="text-gray-600">
          Hum ek <code>mask-image</code> property ka use karke PNG image ke
          transparent parts ko mask ke tarah use kar sakte hain.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  mask-image: url('mask-shape.png');
  -webkit-mask-image: url('mask-shape.png'); /* Safari ke liye */
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}`}
        </pre>

        <div className="border p-4 text-center">
          <p>
            👉 Yahan agar tum ek PNG image mask use karoge (jaise star-shape),
            to content us shape ke andar hi dikhega.
          </p>
        </div>
      </div>

      {/* Example 2: Gradient Masking */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">2. Gradient Mask</h2>
        <p className="text-gray-600">
          Gradient ko mask banakar hum smooth fade effects create kar sakte
          hain.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  mask-image: linear-gradient(to right, black, transparent);
  -webkit-mask-image: linear-gradient(to right, black, transparent);
}`}
        </pre>

        <div className="border p-4 text-center">
          <p>
            👉 Is example me element left se solid dikhai dega aur right side me
            transparent ho jaayega.
          </p>
        </div>
      </div>

      {/* Example 3: Mask with SVG */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">3. Mask with SVG</h2>
        <p className="text-gray-600">
          Hum ek <code>SVG shape</code> ko mask ke tarah use kar sakte hain.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div {
  mask-image: url('shape.svg');
  -webkit-mask-image: url('shape.svg');
  mask-repeat: no-repeat;
  mask-position: center;
}`}
        </pre>

        <div className="border p-4 text-center">
          <p>
            👉 Agar tum ek circle ya polygon SVG doge, to content wahi shape ke
            andar visible hoga.
          </p>
        </div>
      </div>

      {/* Example 4: Masking vs Clipping */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">4. Masking vs Clipping</h2>
        <p className="text-gray-600">
          Masking aur clipping dono similar lagte hain, lekin:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Masking</strong> intensity (opacity) ke basis pe visibility
            decide karta hai.
          </li>
          <li>
            <strong>Clipping</strong> sirf shape ke andar content dikhata hai,
            baaki part hide kar deta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssMasking;