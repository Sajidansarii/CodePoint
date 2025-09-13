import React from "react";

const ImageFilterTutorial = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Image Filters</h1>
      <p className="text-gray-700">
        The <code className="bg-gray-200 px-1 rounded">filter</code> property in CSS is used to apply 
        visual effects to images like <b>blur</b>, <b>grayscale</b>, <b>brightness</b>, and more.  
        Filters make images more stylish without editing them in Photoshop.
      </p>

      {/* Blur Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Blur Filter</h2>
        <img
          src="https://via.placeholder.com/250"
          alt="Blur Example"
          className="rounded-lg shadow-md"
          style={{ filter: "blur(5px)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>blur(5px)</code> filter makes the image look blurred by <b>5px</b>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: blur(5px);
}`}
        </pre>
      </div>

      {/* Grayscale Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Grayscale Filter</h2>
        <img
          src="https://via.placeholder.com/250"
          alt="Grayscale Example"
          className="rounded-lg shadow-md"
          style={{ filter: "grayscale(100%)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>grayscale(100%)</code> filter converts the image into black and white.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: grayscale(100%);
}`}
        </pre>
      </div>

      {/* Brightness Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Brightness Filter</h2>
        <img
          src="https://via.placeholder.com/250"
          alt="Brightness Example"
          className="rounded-lg shadow-md"
          style={{ filter: "brightness(150%)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>brightness(150%)</code> filter increases the brightness of the image by 50%.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: brightness(150%);
}`}
        </pre>
      </div>

      {/* Contrast Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. Contrast Filter</h2>
        <img
          src="https://via.placeholder.com/250"
          alt="Contrast Example"
          className="rounded-lg shadow-md"
          style={{ filter: "contrast(200%)" }}
        />
        <p className="text-gray-700 mt-2">
          The <code>contrast(200%)</code> filter doubles the difference between dark and light areas.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: contrast(200%);
}`}
        </pre>
      </div>

      {/* Multiple Filters Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">5. Multiple Filters</h2>
        <img
          src="https://via.placeholder.com/250"
          alt="Multiple Filters Example"
          className="rounded-lg shadow-md"
          style={{ filter: "grayscale(80%) blur(2px) brightness(120%)" }}
        />
        <p className="text-gray-700 mt-2">
          You can also apply <b>multiple filters together</b> like this example 
          where the image is grayscale, slightly blurred, and brightened.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  filter: grayscale(80%) blur(2px) brightness(120%);
}`}
        </pre>
      </div>
    </div>
  );
};

export default ImageFilterTutorial;