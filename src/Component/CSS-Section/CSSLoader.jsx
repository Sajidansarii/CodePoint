import React from "react";

const CssLoaderDemo = () => {
  return (
    <div className="p-8  max-w-4xl space-y-6 mt-10">
      {/* Page Header / Loading Info */}
      <h1 className="text-3xl font-medium  text-blue-500">
        CSS Loaders
      </h1>

      <p>
        To improve user experience, CSS loaders are used as visual indicators during the loading of a webpage. These animations, such as spinners or progress bars, are built with CSS and inform users that content is being processed.
      </p>

      <h1 className="text-2xl">How to Create a CSS Loader?</h1>
      <p>Use the steps below to develop a loader animation using CSS.</p>
      <ul className="list-[square] list-inside">
        <li>Initialize the HTML structure with a container {'<div>'}, embedding within it a child {'<div>'} to represent the loader <span className="ml-6">component.</span></li>
        <li>Specify <strong>width</strong> and <strong>height</strong> values for the loader container. Utilize flexbox properties to align the loader centrally.</li>
        <li>To create a circular loader, specify dimensions for the element, apply a styled  <strong>border-top</strong>, and round the shape <span className="ml-6">using a<strong>border-radius</strong> of 50%.</span></li>
        <li>Utilize <strong>CSS animations</strong> to apply dynamic effects to the loader, such as rotation, scaling, or other transform-based <span className="ml-6">movements.</span></li>
        <li>Define the <strong>@keyframes</strong> block to precisely control the loader’s transformation over the animation duration.</li>
      </ul>
      <p>Various colors, shapes, patterns, and animation strategies may be employed to tailor the loader’s appearance. CSS property adjustments are key to customization.</p>

      <h1 className="text-2xl">Example</h1>
      <p>Here’s an example of a CSS loader, similar to the loading animations you’ve probably encountered on many sites.</p>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <h3 className="font-semibold mt-0">CSS Code:</h3>

  <code>
    <span className="text-gray-500">/* Spinning Loader CSS */</span><br />

    <span className="text-blue-600">.loader-spin</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">64px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">64px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">6px solid #3b82f6</span>; <span className="text-gray-500">/* Blue border */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border-top-color</span>: <span className="text-green-700">transparent</span>; <span className="text-gray-500">/* Transparent top for gap effect */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">50%</span>; <span className="text-gray-500">/* Makes it circular */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">animation</span>: <span className="text-green-700">spin 1s linear infinite</span>; <span className="text-gray-500">/* Infinite rotation */</span><br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">@keyframes spin</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">from</span> <span>{'{'}</span> <span className="text-red-500">transform</span>: <span className="text-green-700">rotate(0deg)</span>; <span>{'}'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">to</span> <span>{'{'}</span> <span className="text-red-500">transform</span>: <span className="text-green-700">rotate(360deg)</span>; <span>{'}'}</span><br />
    <span>{'}'}</span>
  </code>
</pre>

      {/* Example 1: Spinning Loader */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="loader-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-700 font-semibold">Spinning Loader</span>
      </div>

      {/* Explanation and CSS code for Spinning Loader */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">How It Works:</h2>
        <p className="text-gray-700">
          This loader creates a circle with a border. One side of the border is transparent to create a "gap". 
          The <code>@keyframes spin</code> rotates the circle infinitely.
        </p>
      </div>

      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <h3 className="font-semibold mt-2">CSS Code:</h3>

  <code>
    <span className="text-gray-500">/* Bouncing Dots CSS */</span><br />

    <span className="text-blue-600">.loader-dots</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">gap</span>: <span className="text-green-700">8px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.loader-dots div</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">#3b82f6</span>; <span className="text-gray-500">/* Blue dots */</span><br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">animation</span>: <span className="text-green-700">bounce 0.6s infinite alternate</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.loader-dots div:nth-child(2)</span> <span>{'{'}</span> <span className="text-red-500">animation-delay</span>: <span className="text-green-700">0.2s</span>; <span>{'}'}</span><br />
    <span className="text-blue-600">.loader-dots div:nth-child(3)</span> <span>{'{'}</span> <span className="text-red-500">animation-delay</span>: <span className="text-green-700">0.4s</span>; <span>{'}'}</span><br /><br />

    <span className="text-blue-600">@keyframes bounce</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">from</span> <span>{'{'}</span> <span className="text-red-500">transform</span>: <span className="text-green-700">translateY(0)</span>; <span>{'}'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">to</span> <span>{'{'}</span> <span className="text-red-500">transform</span>: <span className="text-green-700">translateY(-16px)</span>; <span>{'}'}</span><br />
    <span>{'}'}</span>
  </code>
</pre>

      {/* Example 2: Bouncing Dots Loader */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="loader-dots flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
        </div>
        <span className="text-gray-700 font-semibold">Bouncing Dots Loader</span>
      </div>

      {/* Explanation and CSS code for Bouncing Dots */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">How It Works:</h2>
        <p className="text-gray-700">
          Each dot is a small circle. <code>@keyframes bounce</code> moves the dot up and down. 
          Staggered delays create a wave effect.
        </p>
      </div>

      {/* Optional Tips */}
      <p>
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use <code>animation</code> to create smooth motion effects.</li>
          <li>Keep loaders small and unobtrusive to maintain UX.</li>
          <li>Combine multiple animations with <code>animation-delay</code> for staggered effects.</li>
        </ul>
      </p>
    </div>
  );
};

export default CssLoaderDemo;