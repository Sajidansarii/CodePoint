import React from "react";

const CssAuralMedia = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Aural Media
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        <strong>Aural Media</strong> ek CSS media type hai jo <em>speech
        synthesizers</em> aur <em>screen readers</em> ke liye use hota tha.
        Iska purpose visually impaired users ke liye website ko sunana tha.{" "}
        <br />
        Aaj kal iski jagah <code>speech media</code> aur{" "}
        <code>ARIA attributes</code> use hote hain.
      </p>

      {/* Syntax */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">🔹 Syntax</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`@media aural {
  h1 {
    voice-family: male;
    stress: 20;
    richness: 90;
    cue-before: url("ding.wav");
  }
}`}
        </pre>
      </div>

      {/* Example */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">🎧 Example: Aural Media Query</h2>
        <p className="text-gray-700">
          Niche ek example hai jisme <code>aural</code> media type screen reader
          ke liye alag style define karta hai:
        </p>

        {/* CSS Example */}
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`@media speech {
  h1 {
    voice-family: female;
    volume: loud;
    pitch: x-high;
    richness: 80;
  }

  p {
    pause-before: 200ms;
    pause-after: 200ms;
  }
}`}
        </pre>

        <p className="text-gray-600 italic">
          ⚠ Ye properties modern browsers me directly kaam nahi karti, lekin
          <strong> screen readers </strong> aur experimental speech engines me
          support hoti thi.
        </p>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <strong>@media aural</strong> → special styles apply karta tha jab
            output ek <em>aural device</em> (speech reader) ho.
          </li>
          <li>
            <strong>voice-family</strong> → specify karta hai ki male/female
            voice use hogi.
          </li>
          <li>
            <strong>volume</strong> → voice ki loudness control karta hai (soft,
            medium, loud).
          </li>
          <li>
            <strong>pitch</strong> → sound ki frequency set karta hai (low, high,
            x-high).
          </li>
          <li>
            <strong>cue-before / cue-after</strong> → audio cue (jaise “ding”
            sound) play karta hai before/after content.
          </li>
        </ul>
      </div>

      {/* Note */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-gray-700">
          ⚠ <strong>Important:</strong> Aural media type ab deprecated hai.
          Modern web me accessibility ke liye{" "}
          <code>ARIA roles</code>, <code>labels</code>, aur{" "}
          <code>screen reader support</code> use karna best practice hai.
        </p>
      </div>
    </div>
  );
};

export default CssAuralMedia;