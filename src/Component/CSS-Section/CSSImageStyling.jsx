import React from "react";

const ImageStylingTutorial = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Image Styling</h1>
      <p>
        CSS allows you to style images in many creative ways such as adding borders, 
        shadows, rounded corners, opacity, and hover effects. Let’s see some examples:
      </p>

      {/* Example 1 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">1. Rounded Corners</h2>
        <p className="ml-5 mt-4">Use the <span className="text-red-400 bg-gray-100 px-1">border-radius</span> property to give images rounded corners or make them circular.</p>
        <div className="p-4">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Rounded Image"
            className="rounded-lg w-72 h-72"
          />
        </div>
        <h1 className="text-2xl mt-5">Example</h1>
        <p className="mt-2">Using border-radius you can make rounded corners or even a circular image.</p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  border-radius: 8px; 
}
`}
        </pre>
      </div>

      {/* Example 2 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-20">2. Borders</h2>
        <p className="ml-5 mt-4">Use CSS <span className="text-red-400 bg-gray-100 px-1">border</span> to frame your images with custom colors, widths, and styles.</p>
        <div className="p-4">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Bordered Image"
            className="border-4 border-blue-500 rounded inline-block w-80 h-80"
          />
        </div>
        <h1 className="text-2xl mt-5">Example</h1>
        <p className="mt-3">The <code>border</code> property adds outline around an image.</p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  border: 5px solid blue;
  border-radius: 10px;
}`}
        </pre>
      </div>

      {/* Example 3 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">3. Shadows</h2>
        <p className="mt-4 ml-5">Apply <span className="text-red-400 bg-gray-100 px-1">box-shadow</span> to give images a sense of depth and a more dynamic appearance.</p>
        <div className="p-4 ">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Shadowed Image"
            className="hover:shadow-2xl inline-block w-80 h-80"
          />
        </div>
        <h1 className="text-2xl mt-5">Example</h1>
        <p className="mt-3">The <code>box-shadow</code> property adds depth to the image.</p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
}`}
        </pre>
      </div>

      {/* Example 4 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">4. Opacity</h2>
        <p className="ml-5 mt-3">Use <span className="text-red-400 bg-gray-100 px-1">opacity</span> to reduce the visibility of an image without removing it from the layout.</p>
        <div className="p-4">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Opacity Image"
            className="opacity-60 hover:opacity-100 inline-block transition w-80 h-80"
          />
        </div>
        <h1 className="text-2xl mt-5">Example</h1>
        <p className="mt-3">With <code>opacity</code> you can make an image transparent. 
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
        <h2 className="text-2xl font-semibold text-gray-800">5. Hover Effects</h2>
        <p className="ml-5 mt-3">Use the <span className="text-red-400 bg-gray-100 px-1">:hover</span> state to enhance images with dynamic styles when users move their cursor over them.</p>
        <div className="p-4">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Hover Image"
            className="transition-transform duration-300 hover:scale-110 h-80 w-80 inline-block"
          />
        </div>
        <h1 className="text-2xl mt-5">Example</h1>
        <p className=" mt-3">
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