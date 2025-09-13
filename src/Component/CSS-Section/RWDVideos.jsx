import React from "react";

const CssRWDVideos = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        Responsive Web Design - Videos
      </h1>

      {/* Intro */}
      <p className="text-gray-700">
        Responsive videos ka matlab hai ki videos har device aur screen size par
        automatically adjust ho jayein. Agar hum fixed width aur height denge to
        chhoti screens par video cut ho sakta hai. Isiliye responsive design me
        videos ko bhi flexible banana padta hai.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Responsive Videos?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Videos har device par properly fit hote hain.</li>
        <li>Mobile-friendly layout maintain hota hai.</li>
        <li>User experience aur accessibility improve hoti hai.</li>
      </ul>

      {/* Example 1 */}
      <h2 className="text-2xl font-semibold">Example: Responsive YouTube Video</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Video Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
      overflow: hidden;
    }
    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <h2>Resize the browser to see the video adjust:</h2>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>padding-bottom: 56.25%</code> → ye 16:9 aspect ratio maintain
          karta hai.
        </li>
        <li>
          <code>position: absolute</code> aur <code>width: 100%; height: 100%</code>{" "}
          se iframe poore container ko fill karta hai.
        </li>
        <li>
          Video automatically screen ke size ke hisaab se adjust hoti hai.
        </li>
      </ul>

      {/* Example 2 */}
      <h2 className="text-2xl font-semibold">Example: Responsive HTML5 Video</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<style>
  video {
    max-width: 100%;
    height: auto;
    border: 2px solid #333;
  }
</style>

<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>`}
      </pre>

      <p className="text-gray-700">
        Yahan pe <code>max-width: 100%</code> use kiya gaya hai taaki video apne
        container ke andar hi rahe aur <code>height: auto</code> se aspect ratio
        maintain hota hai.
      </p>
    </div>
  );
};

export default CssRWDVideos;