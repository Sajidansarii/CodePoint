import React from "react";

const CssLoaderDemo = () => {
  return (
    <div className="p-8  min-h-screen space-y-6">
      {/* Page Header / Loading Info */}
      <h1 className="text-3xl font-medium  text-blue-500">
        CSS Loaders
      </h1>

      <p className="text-gray-700">
        To improve user experience, CSS loaders are used as visual indicators during the loading of a webpage. These animations, such as spinners or progress bars, are built with CSS and inform users that content is being processed.
      </p>

      <h1 className="text-2xl">How to Create a CSS Loader?</h1>
      <p>Use the steps below to develop a loader animation using CSS.</p>
      <ul className="list-[square] list-inside">
        <li>Initialize the HTML structure with a container {'<div>'}, embedding within it a child {'<div>'} to represent the loader <span className="ml-6">component.</span></li>
        <li>Specify <strong>width</strong> and <strong>height</strong> values for the loader container. Utilize flexbox properties to align the loader centrally.</li>
        <li>To create a circular loader, specify dimensions for the element, apply a styled  <strong>border-top</strong>, and round the shape using a <span className="ml-6"><strong>border-radius</strong> of 50%.</span></li>
        <li>Utilize <strong>CSS animations</strong> to apply dynamic effects to the loader, such as rotation, scaling, or other transform-based <span className="ml-6">movements.</span></li>
        <li>Define the <strong>@keyframes</strong> block to precisely control the loader’s transformation over the animation duration.</li>
      </ul>
      <p>Various colors, shapes, patterns, and animation strategies may be employed to tailor the loader’s appearance. CSS property adjustments are key to customization.</p>

      <h1 className="text-2xl">Example</h1>
      <p>Here’s an example of a CSS loader, similar to the loading animations you’ve probably encountered on many sites.</p>

      <pre className="bg-gray-200 p-4 rounded-lg">
        <h3 className="font-semibold mt-0">CSS Code:</h3>
          <code>
{`/* Spinning Loader CSS */
.loader-spin {
  width: 64px;
  height: 64px;
  border: 6px solid #3b82f6;  /* Blue border */
  border-top-color: transparent; /* Transparent top for gap effect */
  border-radius: 50%;           /* Makes it circular */
  animation: spin 1s linear infinite; /* Infinite rotation */
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`}
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

       <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
        <h3 className="font-semibold mt-2">CSS Code:</h3>
        <code>
{`/* Bouncing Dots CSS */
.loader-dots {
  display: flex;
  gap: 8px;
}

.loader-dots div {
  width: 16px;
  height: 16px;
  background-color: #3b82f6; /* Blue dots */
  border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
}

.loader-dots div:nth-child(2) { animation-delay: 0.2s; }
.loader-dots div:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-16px); }
}`}
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
      <p className="text-gray-700">
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