import React from "react";

const ObjectPositionTutorial = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS object-position</h1>
      <p>
        The <code className="bg-gray-200 px-1 rounded">object-position</code> property is used 
        to set the <b>alignment</b> of an image or video inside its container when 
        <code className="bg-gray-200 px-1 rounded text-red-400">object-fit</code> is applied.  
        It works like <b>background-position</b> but for images and videos.
      </p>

      {/* Center */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. object-position: center;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Center Example"
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: cover;
  object-position: center;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          The image is cropped but stays centered in the box.
        </p>
      </div>

      {/* Top Left */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. object-position: top left;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Top Left Example"
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "top left" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: cover;
  object-position: top left;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          The image is cropped but aligned from the top-left corner.
        </p>
      </div>

      {/* Bottom Right */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. object-position: bottom right;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Bottom Right Example"
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "bottom right" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: cover;
  object-position: bottom right;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          The image is cropped but aligned to the bottom-right corner of the box.
        </p>
      </div>

      {/* Custom Position */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">4. object-position: 20% 80%;</h2>
        <div className="w-64 h-40 border-2 border-gray-400 overflow-hidden">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Custom Position Example"
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "20% 80%" }}
          />
        </div>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`img {
  object-fit: cover;
  object-position: 20% 80%;
}`}
        </pre>
        <p className="text-gray-600 mt-2">
          The first value (20%) moves the image horizontally, and the second value (80%) 
          moves it vertically. This allows precise control of alignment.
        </p>
      </div>
    </div>
  );
};

export default ObjectPositionTutorial;