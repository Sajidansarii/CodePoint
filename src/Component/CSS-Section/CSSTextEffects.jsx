import React from "react";

const CSSTextEffects = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-purple-600">CSS Text Effects</h1>
      <p className="text-gray-700">
        CSS provides different properties to make text more attractive, such as{" "}
        <code>text-shadow</code>, <code>-webkit-text-stroke</code>, 
        gradient text, spacing, and transformations.
      </p>

      {/* Example 1: Text Shadow */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Text Shadow</h2>
        <p className="text-gray-700">
          The <code>text-shadow</code> property adds shadow to text.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  text-shadow: 2px 2px 5px gray;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1 style={{ textShadow: "2px 2px 5px gray" }} className="text-2xl font-bold">
            Shadow Effect
          </h1>
        </div>
      </div>

      {/* Example 2: Text Stroke */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Text Stroke</h2>
        <p className="text-gray-700">
          The <code>-webkit-text-stroke</code> property creates an outline effect on text.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  -webkit-text-stroke: 2px black;
  color: white;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1
            style={{
              WebkitTextStroke: "2px black",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Stroke Effect
          </h1>
        </div>
      </div>

      {/* Example 3: Glow Effect */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Glow Effect</h2>
        <p className="text-gray-700">
          A glowing effect can be made using <code>text-shadow</code> with bright colors.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  text-shadow: 0 0 10px cyan, 0 0 20px blue;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1
            style={{
              textShadow: "0 0 10px cyan, 0 0 20px blue",
              color: "white",
              background: "black",
              padding: "10px",
            }}
          >
            Glow Effect
          </h1>
        </div>
      </div>

      {/* Example 4: Gradient Text */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. Gradient Text</h2>
        <p className="text-gray-700">
          You can apply gradients to text using <code>background-clip: text</code> and{" "}
          <code>color: transparent</code>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  background: linear-gradient(to right, red, yellow);
  -webkit-background-clip: text;
  color: transparent;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1
            style={{
              background: "linear-gradient(to right, red, yellow)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Gradient Text
          </h1>
        </div>
      </div>

      {/* Example 5: Letter Spacing & Uppercase */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">5. Letter Spacing & Uppercase</h2>
        <p className="text-gray-700">
          Using <code>letter-spacing</code> and <code>text-transform</code> we can create unique typography effects.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`p {
  letter-spacing: 5px;
  text-transform: uppercase;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <p style={{ letterSpacing: "5px", textTransform: "uppercase" }} className="text-lg">
            Spaced Uppercase Text
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSSTextEffects;