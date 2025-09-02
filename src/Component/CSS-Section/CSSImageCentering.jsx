import React from "react";

const ImageCenteringTutorial = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600">CSS Image Centering</h1>
      <p className="text-gray-700">
        Centering an image is a common task in web design. CSS provides different 
        ways to align and center images both <b>horizontally</b> and <b>vertically</b>.
      </p>

      {/* Method 1 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Using <code>text-align: center;</code></h2>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Centered with text-align"
            className="inline-block"
          />
        </div>
        <p className="text-gray-700 mt-2">
          By applying <code>text-align: center;</code> to the parent element, the inline 
          image will be horizontally centered.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`.container {
  text-align: center;
}

img {
  display: inline-block;
}`}
        </pre>
      </div>

      {/* Method 2 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Using <code>margin: auto;</code></h2>
        <div className="border p-4 bg-gray-100 flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Centered with margin auto"
            className="block mx-auto"
          />
        </div>
        <p className="text-gray-700 mt-2">
          When the image is a block element, setting <code>margin: auto;</code> will center it horizontally.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  display: block;
  margin: auto;
}`}
        </pre>
      </div>

      {/* Method 3 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Using Flexbox</h2>
        <div className="border p-4 bg-gray-100 flex items-center justify-center h-48">
          <img
            src="https://via.placeholder.com/150"
            alt="Centered with flexbox"
            className="rounded"
          />
        </div>
        <p className="text-gray-700 mt-2">
          By using <code>display: flex;</code> with <code>justify-content: center;</code> 
          and <code>align-items: center;</code>, the image is centered both horizontally and vertically.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}`}
        </pre>
      </div>

      {/* Method 4 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. Using Grid</h2>
        <div className="border p-4 bg-gray-100 grid place-items-center h-48">
          <img
            src="https://via.placeholder.com/150"
            alt="Centered with grid"
            className="rounded"
          />
        </div>
        <p className="text-gray-700 mt-2">
          Using <code>display: grid;</code> with <code>place-items: center;</code> 
          is the simplest way to center an image in both directions.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`.container {
  display: grid;
  place-items: center;
  height: 200px;
}`}
        </pre>
      </div>
    </div>
  );
};

export default ImageCenteringTutorial;