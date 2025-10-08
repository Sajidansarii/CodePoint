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
       Responsive videos mean that the videos automatically adjust to every device and screen size. If we give them a fixed width and height, the video may get cut off on smaller screens. That’s why, in responsive design, videos also need to be made flexible.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Responsive Videos?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Videos fit properly on every device.</li>
        <li>A mobile-friendly layout is maintained.</li>
        <li>User experience and accessibility improve.</li>
      </ul>

      <h1 className="text-2xl">Using The width Property</h1>
      <p>Setting the <span className="text-red-400 bg-gray-50 px-1">width</span> property to 100% makes the video player responsive, allowing it to scale up or down.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">video</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"   "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">auto</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{"}"}</span>
      </pre>

      <p>The previous example allows the video player to enlarge past its original dimensions. Using <span className="text-red-400 bg-gray-50 px-1">max-width</span> can often provide a better solution.</p>

      <h1 className="text-2xl">Using The max-width Property</h1>
      <p>With <span className="text-red-400 bg-gray-50 px-1">max-width</span> at 100%, the video player will scale down if necessary, but won’t scale up beyond its original dimensions.</p>
      <h1 className="text-2xl">Example</h1>
       <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">video</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">max-width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"   "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">auto</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{"}"}</span>
      </pre>

      <h1 className="text-2xl">Add a Video to the Example Web Page</h1>
      <p>The video on our example page will be scaled to always cover the full available space.</p>
      <h1 className="text-2xl">Exampple</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">video</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"   "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">auto</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{"}"}</span>
      </pre>

      


























      {/* Explanation */}
      <div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold mb-2">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>padding-bottom: 56.25%</code> → It maintains a 16:9 aspect ratio.
        </li>
        <li>
          Using position: absolute along with width: 100% and height: 100%, the iframe fills the entire container.
        </li>
        <li>
        The video automatically adjusts according to the screen size.
        </li>
      </ul>
      </div>

      <p>
        Here, max-width: 100% is used so that the video stays within its container, and height: auto maintains the aspect ratio.
      </p>
    </div>
  );
};

export default CssRWDVideos;