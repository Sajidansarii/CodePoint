import React from "react";

const ImageStylingTutorial = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600">CSS Image Styling</h1>
      <p className="text-gray-700">
        CSS allows you to style images in many creative ways such as adding borders, 
        shadows, rounded corners, opacity, and hover effects. Let’s see some examples:
      </p>

      {/* Example 1 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Rounded Corners</h2>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Rounded Image"
            className="rounded-lg inline-block"
          />
        </div>
        <p className="text-gray-700 mt-2">
          Using <code>border-radius</code> you can make rounded corners or even a circular image.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  border-radius: 15px; /* Rounded corners */
}

img.circle {
  border-radius: 50%; /* Perfect circle */
}`}
        </pre>
      </div>

      {/* Example 2 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Borders</h2>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Bordered Image"
            className="border-4 border-blue-500 inline-block"
          />
        </div>
        <p className="text-gray-700 mt-2">
          The <code>border</code> property adds outline around an image.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  border: 5px solid blue;
  border-radius: 10px;
}`}
        </pre>
      </div>

      {/* Example 3 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Shadows</h2>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Shadowed Image"
            className="shadow-xl inline-block"
          />
        </div>
        <p className="text-gray-700 mt-2">
          The <code>box-shadow</code> property adds depth to the image.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
}`}
        </pre>
      </div>

      {/* Example 4 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. Opacity</h2>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Opacity Image"
            className="opacity-60 hover:opacity-100 inline-block transition"
          />
        </div>
        <p className="text-gray-700 mt-2">
          With <code>opacity</code> you can make an image transparent. 
          Hover effects can make it fully visible when user interacts.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  opacity: 0.6;
}

img:hover {
  opacity: 1;
}`}
        </pre>
      </div>

      {/* Example 5 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">5. Hover Effects</h2>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Hover Image"
            className="transition-transform duration-300 hover:scale-110 inline-block"
          />
        </div>
        <p className="text-gray-700 mt-2">
          Using <code>transform</code> with <code>:hover</code>, you can create zoom effects on images.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.1);
}`}
        </pre>
      </div>
    </div>
  );
};

export default ImageStylingTutorial;