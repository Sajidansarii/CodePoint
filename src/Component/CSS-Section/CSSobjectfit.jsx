import React from "react";

const ObjectFitTutorial = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600">CSS object-fit</h1>
      <p className="text-gray-700">
        The <code className="bg-gray-200 px-1 rounded">object-fit</code> property defines 
        how an <b>image</b> or <b>video</b> should be resized to fit its container.
      </p>

      {/* Fill */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. object-fit: fill;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Fill Example"
            className="w-full h-full"
            style={{ objectFit: "fill" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: fill;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          Image is stretched to fill the box. Aspect ratio may be distorted.
        </p>
      </div>

      {/* Contain */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. object-fit: contain;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Contain Example"
            className="w-full h-full"
            style={{ objectFit: "contain" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: contain;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          Entire image is visible and aspect ratio is preserved. Empty space may appear.
        </p>
      </div>

      {/* Cover */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. object-fit: cover;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Cover Example"
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: cover;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          Image covers the box fully. Aspect ratio is preserved but image may be cropped.
        </p>
      </div>

      {/* None */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. object-fit: none;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="None Example"
            className="w-full h-full"
            style={{ objectFit: "none" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: none;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          Image is shown in its original size. It may overflow outside the box.
        </p>
      </div>

      {/* Scale-down */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">5. object-fit: scale-down;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Scale Down Example"
            className="w-full h-full"
            style={{ objectFit: "scale-down" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: scale-down;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          The image will either be displayed at its original size or scaled down 
          to fit, whichever is smaller.
        </p>
      </div>
    </div>
  );
};

export default ObjectFitTutorial;