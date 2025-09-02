import React from "react";

const CssBrowserSupport = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">🌍 CSS Browser Support</h2>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Sabhi CSS properties har browser me ek jaise kaam nahi karte. Naye CSS
        features ko support karne ke liye kuch browsers vendor prefixes use karte hain.
      </p>

      {/* Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
<pre>{`/* Browser Prefix Example */
.my-box {
  -webkit-border-radius: 10px; /* Safari, iOS */
  -moz-border-radius: 10px;    /* Firefox */
  border-radius: 10px;         /* Standard */
}`}</pre>
      </div>

      {/* Support Table */}
      <h3 className="text-xl font-semibold mb-3">✅ Common Browser Prefixes</h3>
      <table className="w-full border border-gray-300 text-left text-sm mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Prefix</th>
            <th className="border p-2">Browser</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">-webkit-</td>
            <td className="border p-2">Chrome, Safari, iOS</td>
          </tr>
          <tr>
            <td className="border p-2">-moz-</td>
            <td className="border p-2">Mozilla Firefox</td>
          </tr>
          <tr>
            <td className="border p-2">-ms-</td>
            <td className="border p-2">Internet Explorer, Edge (old)</td>
          </tr>
          <tr>
            <td className="border p-2">-o-</td>
            <td className="border p-2">Opera (old)</td>
          </tr>
        </tbody>
      </table>

      {/* Explanation */}
      <p className="text-gray-700">
        Modern browsers me vendor prefixes ki zarurat kam hoti ja rahi hai.
        Lekin hamesha <b>MDN Docs</b> ya <b>Can I Use</b> website check karna
        chahiye taaki pata chale kaunse CSS property kaunse browser me supported hai.
      </p>
    </div>
  );
};

export default CssBrowserSupport;