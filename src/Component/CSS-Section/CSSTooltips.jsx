import React from "react";

const CssTooltips = () => {
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Tooltips
      </h1>

      <p>
       CSS tooltips are hover-triggered popups that reveal extra content. Using CSS properties like inset, translateX, and translateY, you can fully control their appearance and placement. This tutorial walks through how to build and style tooltips from scratch.
      </p>

      <h1 className="text-2xl">Tooltip Examples</h1>
      <p>This section contains demo tooltip examples. Tooltips will display when you hover your cursor over the associated text elements.</p>

      {/* Example 1 */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">1.Tooltip on Top</h2>
        <p>
         Hover over the button, the tooltip will appear.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg text-sm overflow-x-auto text-left">
{`<div class="tooltip">
  Hover me
  <span class="tooltip-text">Hello! I'm a tooltip</span>
</div>`}
        </pre>

        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              w-32 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity">
                Tooltip on Top
            </span>
          </div>
        </div>
      </div>

      {/* Example 2 */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2. Tooltip on Right</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`<div class="tooltip">
  Hover me
  <span class="tooltip-text">Tooltip on Top</span>
</div>`}
        </pre>
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 
              w-32 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity">
              Tooltip on Right
            </span>
          </div>
        </div>
      </div>

      {/* Example 3 */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3. Tooltip on Bottom</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`<div class="tooltip">
  Hover me
  <span class="tooltip-text">Tooltip on Right</span>
</div>`}
        </pre>
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1
              w-32 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity">
              Tooltip on Bottom
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">4.Tooltip on Left</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`<div class="tooltip">
  Hover me
  <span class="tooltip-text">Tooltip on Top</span>
</div>`}
        </pre>
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute right-1/2 -translate-x-1/2 mt-2
              w-32 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity">
              Tooltip on Left
            </span>
          </div>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
{`.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 4px;

  position: absolute;
  z-index: 1;
  bottom: 125%;   /* tooltip text upar show hoga */
  left: 50%;
  transform: translateX(-50%);

  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`}
        </pre>
        <p className="text-gray-600">
         Here, .tooltip is the container, and .tooltip-text is the content that will appear on hover.
        </p>
      </div>
      <h1 className="text-2xl">How to Create Tooltips in CSS?</h1>
      <p>We will be following below mentioned steps to create tooltips using CSS and HTML.</p>
      <ul className="list-[square] list-inside">
        <li>Define the HTML element (e.g., a {'<button>'}, {'<img>'}, or {'<div>'}) that will serve as the hover target for displaying the tooltip.</li>
        <li>Wrap the tooltip content in a {'<span>'} element. Apply visibility: hidden via CSS to keep it hidden until the parent element <span className="ml-5">is hovered.</span></li>
        <li>For precise positioning, apply position: relative to the tooltip's container. Then use position: absolute on the tooltip itself <span className="ml-5">to position it in relation to that container using CSS.</span></li>
        <li>Enhance the tooltip’s design by setting CSS properties such as <code>background-color</code>,<code> color</code>, <code>padding</code>, <code>border-radius</code>, <span className="ml-5">and</span> <code>font-size</code>.</li>
        <li>The tooltip is revealed using the :hover pseudo-class in CSS. When the user hovers over the container element, the tooltip <span className="ml-6">becomes</span> visible.</li>
      </ul>

      <h1 className="text-2xl">Tooltip Arrows</h1>
      <p>To display an arrow on a specific side of the tooltip, add an empty ::after pseudo-element using content: "". Then, apply CSS border styles to form a triangular arrow and position it as needed.</p>
      <pre className="bg-gray-300 rounded-lg p-4">
        {`/* Arrow styles */
.tooltip-text::after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}`}
      </pre>
      <p>To create a triangle shape in CSS, set the border color on just one side of an empty element. This forms a triangular top border — a common method for making arrows. Visit our free CSS arrows tutorial to see this in action.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 p-4 rounded-lg h-96 overflow-y-scroll">
        <code>
          {`<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .container{
            display: flex;
            justify-content: space-around;
            margin: 10%;
        }
        .tooltip-container {
            position: relative;
        }
        
        .button{
            font-family: san-serif;
            font-weight: bold;
            padding: 2px;
            border-radius: 5px;
            background-color: white;
        }

        .tooltip-container .tooltip-text {
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .tooltip-container:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        /* Tooltip on top */
        .tooltip-top .tooltip-text {
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
        }

        /* Tooltip on right */
        .tooltip-right .tooltip-text {
            top: 50%;
            left: 125%;
            transform: translateY(-50%);
        }

        /* Arrow styles */
        .tooltip-text::after {
            content: "";
            position: absolute;
            border-width: 5px;
            border-style: solid;
        }

        /* Arrow pointing up for top tooltip */
        .tooltip-top .tooltip-text::after {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-color: black transparent transparent transparent;
        }

        /* Arrow pointing left for right tooltip */
        .tooltip-right .tooltip-text::after {
            top: 50%;
            left: -10px;
            transform: translateY(-50%);
            border-color: transparent black transparent transparent;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="tooltip-container tooltip-top">
            <button class="button">Top </button>
            <span class="tooltip-text">Tooltip on top</span>
        </div>
        
        <div class="tooltip-container tooltip-right">
            <button class="button">Right </button>
            <span class="tooltip-text">Tooltip on right</span>
        </div>
    </div>
</body>

</html>   `}
        </code>
      </pre>
      <h1 className="text-2xl">Positioning Tooltips</h1>
      <p>By applying CSS positioning rules, you can place a tooltip on any side of the container — top, bottom, left, or right — depending on your design needs.</p>
      <p>To position a tooltip correctly, apply position: relative; to its container. This enables absolutely positioned child elements to be aligned relative to the container using inset properties like top, bottom, left, and right.</p>
      <pre className="bg-gray-300 p-4 rounded-lg">
        <code>
          {`.element {
   position: relative;
}
.tooltip{
    position: absolute;
    top: 50px; 
    left: 50px;
}`}
        </code>
      </pre>
      <p>By setting top: 50px and left: 50px, the tooltip appears 50 pixels below the top and 50 pixels from the left edge of the container.</p>
      <p>Next, we’ll see a practical example of tooltips positioned in different directions: top, bottom, left, and right.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 p-4 rounded-lg h-96 overflow-y-scroll">
        <code>
          {`<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .container{
            display: flex;
            justify-content: space-around;
            margin-top: 10%;
        }
        .tooltip-container {
            position: relative;
        }
        
        .button{
            font-family: san-serif;
            font-weight: bold;
            padding: 2px;
            border-radius: 5px;
            background-color: white;
        }

        .tooltip-container .tooltip-text {
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .tooltip-container:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        /* Tooltip on top */
        .tooltip-top .tooltip-text {
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
        }

        /* Tooltip on bottom */
        .tooltip-bottom .tooltip-text {
            top: 125%;
            left: 50%;
            transform: translateX(-50%); /* To center on top side */
        }

        /* Tooltip on left */
        .tooltip-left .tooltip-text {
            top: 50%;
            right: 125%;
            transform: translateY(-50%);
        }

        /* Tooltip on right */
        .tooltip-right .tooltip-text {
            top: 50%;
            left: 125%;
            transform: translateY(-50%);
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="tooltip-container tooltip-top">
            <button class="button">Top </button>
            <span class="tooltip-text">Tooltip on top</span>
        </div>
        
        <div class="tooltip-container tooltip-right">
            <button class="button">Right </button>
            <span class="tooltip-text">Tooltip on right</span>
        </div>

        <div class="tooltip-container tooltip-left">
            <button class="button">Left </button>
            <span class="tooltip-text">Tooltip on left</span>
        </div>
        
        <div class="tooltip-container tooltip-bottom">
            <button class="button">Bottom</button>
            <span class="tooltip-text">Tooltip on bottom</span>
        </div>
    </div>
</body>

</html>   `}
        </code>
      </pre>
      <h1 className="text-2xl">Fade In Tooltips</h1>
      <p>The CSS fade-in tooltip uses a gradual opacity transition to smoothly reveal the tooltip, enhancing the user experience with a subtle animation.</p>
      <p>Begin by setting the tooltip’s opacity to 0. In the hover state, update the opacity to 1. Then, apply a CSS transition to animate the change and create a fade-in effect.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-300 p-4 rounded-lg h-96 overflow-y-scroll">
        <code>
          {`<!DOCTYPE html>
<html>

<head>
    <style>
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
            margin: 10%;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -60px;
            opacity: 0;
            transition: opacity 2s;
        }
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
    </style>
</head>

<body style="text-align:center;">
    <div class="tooltip">
        Hover over this text
        <span class="tooltiptext">
            This is a fade-in tooltip
        </span>
    </div>
</body>

</html>`}
        </code>
      </pre>

      <h1 className="text-2xl">Advantages of Tooltips</h1>
      <ul className="list-[square] list-inside">
        <li>Tooltips enhance user experience by showing additional information only when needed, keeping the interface clean and <span className="ml-6">informative.</span></li>
        <li>With CSS, tooltips can be customized in both appearance and position to adapt to different screens. This makes them <span className="ml-6">perfect</span> for responsive design and mobile-first websites.</li>
        <li>CSS tooltips can be customized to match your website’s style by adjusting their colors, fonts, and animations, giving you <span className="ml-6">full</span> control over their appearance.</li>
        <li>Implementing CSS tooltips is relatively simple and doesn't require complex JavaScript or additional libraries.</li>
      </ul>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>position: relative</strong> → To position the tooltip inside the container.”
          </li>
          <li>
            <strong>position: absolute</strong> → To place the tooltip text at the exact position.
          </li>
          <li>
            <strong>opacity + transition</strong> → For a smooth fade-in / fade-out effect.
          </li>
          <li>
            To adjust the tooltip’s direction (top, right, bottom, left), the top, bottom, left, and right properties are used.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssTooltips;