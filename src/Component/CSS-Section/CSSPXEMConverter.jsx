import React, { useState } from "react";

const PxEmConverter = () => {
  const [px, setPx] = useState(16);
  const [base, setBase] = useState(16);

  // Formula for conversion
  const emValue = (px / base).toFixed(2);

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">📏 CSS PX ↔ EM Converter</h2>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        <b>PX</b> (pixels) ek fixed unit hai, jabki <b>EM</b> ek relative unit hota hai.
        1em = parent element ka <code>font-size</code>. By default, 
        <code> 1em = 16px</code>. 
      </p>

      {/* Converter Box */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <label className="block mb-2 font-semibold">Enter PX Value:</label>
        <input
          type="number"
          value={px}
          onChange={(e) => setPx(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block mb-2 font-semibold">Base Font Size (px):</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />

        <div className="bg-gray-100 p-3 rounded text-center">
          <p className="text-lg">
            <b>{px}px</b> = <b>{emValue}em</b> (base {base}px)
          </p>
        </div>
      </div>

      {/* Example Code */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm">
<pre>{`/* Example Conversion */
body {
  font-size: 16px;   /* base font */
}
p {
  font-size: 32px;   /* = 2em */
}
span {
  font-size: 12px;   /* = 0.75em */
}`}</pre>
      </div>

      {/* Explanation */}
      <p className="mt-6 text-gray-700">
        👉 EM units responsive design ke liye useful hote hain, kyunki 
        yeh parent ke font-size ke relative scale karte hain. PX fixed hota hai 
        aur responsive design me flexible nahi hota.
      </p>
    </div>
  );
};

export default PxEmConverter;