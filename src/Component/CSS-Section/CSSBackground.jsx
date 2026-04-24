import React from "react";

const CSSBackground = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">CSS Background</h1>

      <p className="mb-4">
        The <span className="text-red-400">CSS background</span> properties are used to define the
        background effects for elements. You can set colors, images, positions,
        and more.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Common Background Properties
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code className="bg-gray-50 text-red-400 px-1 rounded">background-color</code> –
          sets a background color.
        </li>
        <li>
          <code className="bg-gray-50 text-red-400 px-1 rounded">background-image</code> –
          sets an image as the background.
        </li>
        <li>
          <code className="bg-gray-50 text-red-400 px-1 rounded">background-repeat</code> –
          controls if/how the background image repeats.
        </li>
        <li>
          <code className="bg-gray-50 text-red-400 px-1 rounded">background-position</code>{" "}
          – sets the starting position of the background image.
        </li>
        <li>
          <code className="bg-gray-50 text-red-400 px-1 rounded">background-attachment</code>{" "}
          – sets whether the background scrolls with the page or is fixed.
        </li>
        <li>
          <code className="bg-gray-50 text-red-400 px-1 rounded">background</code> – a
          shorthand property to set all background properties in one line.
        </li>
      </ul>

      {/* Example 1: Background Color */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 1: Background Color
      </h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">body</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">lightblue</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <div className="p-6 mb-6 rounded-lg" style={{ backgroundColor: "lightblue" }}>
        This box has a <strong>lightblue</strong> background color.
      </div>

      {/* Example 2: Background Image */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 2: Background Image
      </h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">div</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-image</span>
    <span>: </span>
    <span className="text-green-700">url("https://picsum.photos/200/300")</span>
    <span>;</span><br />

    <span className="text-red-500">background-repeat</span>
    <span>: </span>
    <span className="text-green-700">no-repeat</span>
    <span>;</span><br />

    <span className="text-red-500">background-size</span>
    <span>: </span>
    <span className="text-green-700">cover</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <div
        className="h-40 rounded-lg mb-6 flex items-center justify-center  font-bold"
        style={{
          backgroundImage: "url('https://picsum.photos/400/200')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        Background Image Example
      </div>

      {/* Example 3: Background Shorthand */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 3: Background Shorthand
      </h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">div</span> <span>{'{'}</span><br />

    <span className="text-red-500">background</span>
    <span>: </span>
    <span className="text-green-700">lightgreen url("bg.jpg") no-repeat right top</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <div
        className="h-32 rounded-lg flex items-center justify-center"
        style={{
          background: "lightgreen url('https://picsum.photos/300/200') no-repeat right top",
        }}
      >
        Shorthand Background Example
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Use <code>background-color</code> as a fallback when using images.
        </li>
        <li>
          Combine properties with <code>background</code> shorthand for cleaner
          code.
        </li>
        <li>
          Always set <code>background-size</code> to{" "}
          <code>cover</code> or <code>contain</code> for responsive designs.
        </li>
      </ul>
    </div>
  );
};

export default CSSBackground;