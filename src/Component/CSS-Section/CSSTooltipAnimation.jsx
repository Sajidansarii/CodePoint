import React from "react";

const CssTooltipsAnimation = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Tooltips with Animation
      </h1>

      {/* Intro */}
      <p>
        A normal tooltip only shows on hover, but by using CSS <strong>transitions</strong> and <strong>@keyframes</strong>, we can make tooltips more attractive. For example: fade-in, slide-in, bounce effects.
      </p>

      {/* Example 1: Fade In Tooltip */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">1. Fade-in Tooltip</h2>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">.tooltip</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">inline-block</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.tooltip .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">visibility</span>: <span className="text-green-700">hidden</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">opacity</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">black</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">#fff</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">padding</span>: <span className="text-green-700">6px 10px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">5px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">bottom</span>: <span className="text-green-700">125%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">left</span>: <span className="text-green-700">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">transform</span>: <span className="text-green-700">translateX(-50%)</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">transition</span>: <span className="text-green-700">opacity 0.5s ease-in-out</span>; <span className="text-gray-500">/* smooth animation */</span><br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.tooltip:hover .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">visibility</span>: <span className="text-green-700">visible</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">opacity</span>: <span className="text-green-700">1</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>
        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              w-36 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity duration-500">
              Fade-in Tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Example 2: Slide-in Tooltip */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2. Slide-in Tooltip</h2>
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">.tooltip .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">hidden</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translate(-50%, 10px)</span>; <span className="text-gray-500">/* start position */</span><br />
    &nbsp;&nbsp;<span className="text-red-400">transition</span>: <span className="text-green-400">all 0.4s ease</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-400">.tooltip:hover .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">visible</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translate(-50%, 0)</span>; <span className="text-gray-500">/* slide into place */</span><br />

    <span>{'}'}</span>
  </code>
</pre>

        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 
              w-36 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500">
              Slide-in Tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Example 3: Bounce Animation Tooltip */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3. Bounce Tooltip</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">@keyframes bounceIn</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">0%</span> {'{'} <span className="text-red-400">transform</span>: <span className="text-green-400">translateY(10px)</span>; <span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>; {'}'}<br />
    &nbsp;&nbsp;<span className="text-red-400">50%</span> {'{'} <span className="text-red-400">transform</span>: <span className="text-green-400">translateY(-5px)</span>; <span className="text-red-400">opacity</span>: <span className="text-green-400">1</span>; {'}'}<br />
    &nbsp;&nbsp;<span className="text-red-400">100%</span> {'{'} <span className="text-red-400">transform</span>: <span className="text-green-400">translateY(0)</span>; {'}'}<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-400">.tooltip .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">hidden</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">bottom</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateX(-50%)</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-400">.tooltip:hover .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">visible</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">animation</span>: <span className="text-green-400">bounceIn 0.5s ease forwards</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 
              w-36 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 animate-[bounceIn_0.5s_ease_forwards]">
              Bounce Tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <strong>Fade-in Tooltip</strong> → <code>opacity + transition</code>{" "} 
            se smooth visibility change.
          </li>
          <li>
            <strong>Slide-in Tooltip</strong> → At the start position, translateY is used, and on hover, it returns back to its original position.
          </li>
          <li>
            <strong>Bounce Tooltip</strong> → A custom animation was created using @keyframes that first slides and then gives a bounce effect.
          </li>
          <li>
           In all tooltips, position: relative is used for the parent, and position: absolute is used for the tooltip text.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssTooltipsAnimation;