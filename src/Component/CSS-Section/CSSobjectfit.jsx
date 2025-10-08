import React from "react";

const ObjectFitTutorial = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS object-fit</h1>
      <h1 className="text-2xl">CSS object-fit Property</h1>
      <p>The <span className="text-red-400 bg-gray-100">object-fit</span> property controls how an image or video fills the space of its container, adjusting its size and cropping as needed.</p>
      <p>You can assign any of the following values to this property:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-100">fill</span> – The content expands or contracts to cover the entire box. This may result in a loss of the original proportions.</li>
        <li> <span className="text-red-400 bg-gray-100">contain</span> – Ensures the media fits within the container and maintains its aspect ratio, possibly leaving blank space around the <span className="ml-20">edges.</span></li>
        <li><span className="text-red-400 bg-gray-100">cover</span> – Maintains the image’s aspect ratio and resizes it to fill the container, even if it means cropping edges.</li>
        <li><span className="text-red-400 bg-gray-100">none</span> – The content is displayed using its intrinsic size, without any attempt to fit it inside the box.</li>
        <li><span className="text-red-400 bg-gray-100">scale</span>-down – The content is scaled down only when it exceeds the container size, maintaining aspect ratio without <span className="ml-16">enlarging</span> smaller images.</li>
      </ul>

      {/* Fill */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. object-fit: fill;</h2>
        <p>Using <span className="text-red-400 bg-gray-100">object-fit</span>: fill; forces the image to match the container’s dimensions exactly, which may cause stretching or shrinking.</p>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
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
        <p>With <span className="text-red-400 bg-gray-100">object-fit</span>: contain;, the image scales to fit inside the container without distortion, preserving its proportions.</p>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
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
        <p>The <span className="text-red-400 bg-gray-100">cover</span> value ensures the image fills the container completely without distortion, even if some parts are cut off.</p>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
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
        <p>Using <span className="text-red-400 bg-gray-100">object-fit: none;</span>  means the image will not be adjusted and may overflow the container if it’s larger.</p>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
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
        <p>This value scales the image down only when necessary, preventing it from being larger than the container, but never scaling it up.</p>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
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