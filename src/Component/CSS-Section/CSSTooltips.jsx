import React from "react";

const CssTooltips = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
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
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;Hover me<br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Hello! I'm a tooltip<span className="text-blue-400">&lt;/span&gt;</span><br />

    <span className="text-blue-400">&lt;/div&gt;</span>
  </code>
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
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;Hover me<br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on Top<span className="text-blue-400">&lt;/span&gt;</span><br />

    <span className="text-blue-400">&lt;/div&gt;</span>
  </code>
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
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;Hover me<br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on Right<span className="text-blue-400">&lt;/span&gt;</span><br />

    <span className="text-blue-400">&lt;/div&gt;</span>
  </code>
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
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;Hover me<br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on Top<span className="text-blue-400">&lt;/span&gt;</span><br />

    <span className="text-blue-400">&lt;/div&gt;</span>
  </code>
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
       <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">.tooltip</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">display</span>: <span className="text-green-400">inline-block</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-400">.tooltip .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">hidden</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">width</span>: <span className="text-green-400">120px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">background-color</span>: <span className="text-green-400">black</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">color</span>: <span className="text-green-400">#fff</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">text-align</span>: <span className="text-green-400">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">padding</span>: <span className="text-green-400">5px 0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">border-radius</span>: <span className="text-green-400">4px</span>;<br /><br />

    &nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">z-index</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">bottom</span>: <span className="text-green-400">125%</span>; <span className="text-gray-400">/* tooltip text upar show hoga */</span><br />
    &nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateX(-50%)</span>;<br /><br />

    &nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">transition</span>: <span className="text-green-400">opacity 0.3s</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-400">.tooltip:hover .tooltip-text</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">visible</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">1</span>;<br />

    <span>{'}'}</span>
  </code>
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
   <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-400">/* Arrow styles */</span><br />

    <span className="text-blue-400">.tooltip-text::after</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">content</span>: <span className="text-green-400">""</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">border-width</span>: <span className="text-green-400">5px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">border-style</span>: <span className="text-green-400">solid</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">border-color</span>: <span className="text-green-400">black transparent transparent transparent</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

      <p>To create a triangle shape in CSS, set the border color on just one side of an empty element. This forms a triangular top border — a common method for making arrows. Visit our free CSS arrows tutorial to see this in action.</p>
      <h1 className="text-2xl">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-400">&lt;html</span> <span className="text-red-400">lang</span>=<span className="text-green-400">"en"</span><span className="text-blue-400">&gt;</span><br /><br />

    <span className="text-blue-400">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-400">&lt;style&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">display</span>: <span className="text-green-400">flex</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">justify-content</span>: <span className="text-green-400">space-around</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">margin</span>: <span className="text-green-400">10%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">relative</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.button</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">font-family</span>: <span className="text-green-400">sans-serif</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">font-weight</span>: <span className="text-green-400">bold</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">padding</span>: <span className="text-green-400">2px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-radius</span>: <span className="text-green-400">5px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">background-color</span>: <span className="text-green-400">white</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-container .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">hidden</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">width</span>: <span className="text-green-400">120px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">background-color</span>: <span className="text-green-400">black</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">color</span>: <span className="text-green-400">#fff</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">text-align</span>: <span className="text-green-400">center</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-radius</span>: <span className="text-green-400">6px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">padding</span>: <span className="text-green-400">5px 0</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">z-index</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transition</span>: <span className="text-green-400">opacity 0.3s</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-container:hover .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">visible</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Tooltip on top */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-top .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">bottom</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateX(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Tooltip on right */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-right .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateY(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Arrow styles */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-text::after</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">content</span>: <span className="text-green-400">""</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-width</span>: <span className="text-green-400">5px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-style</span>: <span className="text-green-400">solid</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Arrow pointing up for top tooltip */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-top .tooltip-text::after</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">100%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateX(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-color</span>: <span className="text-green-400">black transparent transparent transparent</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Arrow pointing left for right tooltip */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-right .tooltip-text::after</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">-10px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateY(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-color</span>: <span className="text-green-400">transparent black transparent transparent</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;/style&gt;</span><br />
    <span className="text-blue-400">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-400">&lt;body&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"container"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-container tooltip-top"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;button</span> <span className="text-red-400">class</span>=<span className="text-green-400">"button"</span><span className="text-blue-400">&gt;</span>Top<span className="text-blue-400">&lt;/button&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on top<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-container tooltip-right"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;button</span> <span className="text-red-400">class</span>=<span className="text-green-400">"button"</span><span className="text-blue-400">&gt;</span>Right<span className="text-blue-400">&lt;/button&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on right<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br />
    <span className="text-blue-400">&lt;/body&gt;</span><br />

    <span className="text-blue-400">&lt;/html&gt;</span>
  </code>
</pre>
 <h1 className="text-2xl">Positioning Tooltips</h1>
      <p>By applying CSS positioning rules, you can place a tooltip on any side of the container — top, bottom, left, or right — depending on your design needs.</p>
      <p>To position a tooltip correctly, apply position: relative; to its container. This enables absolutely positioned child elements to be aligned relative to the container using inset properties like top, bottom, left, and right.</p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">.element</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">relative</span>;<br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-400">.tooltip</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">50px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50px</span>;<br />

    <span>{'}'}</span>
  </code>
</pre>

      <p>By setting top: 50px and left: 50px, the tooltip appears 50 pixels below the top and 50 pixels from the left edge of the container.</p>
      <p>Next, we’ll see a practical example of tooltips positioned in different directions: top, bottom, left, and right.</p>
      <h1 className="text-2xl">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-400">&lt;html</span> <span className="text-red-400">lang</span>=<span className="text-green-400">"en"</span><span className="text-blue-400">&gt;</span><br /><br />

    <span className="text-blue-400">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-400">&lt;style&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">display</span>: <span className="text-green-400">flex</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">justify-content</span>: <span className="text-green-400">space-around</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">margin-top</span>: <span className="text-green-400">10%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">relative</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.button</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">font-family</span>: <span className="text-green-400">sans-serif</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">font-weight</span>: <span className="text-green-400">bold</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">padding</span>: <span className="text-green-400">2px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-radius</span>: <span className="text-green-400">5px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">background-color</span>: <span className="text-green-400">white</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-container .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">hidden</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">width</span>: <span className="text-green-400">120px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">background-color</span>: <span className="text-green-400">black</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">color</span>: <span className="text-green-400">#fff</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">text-align</span>: <span className="text-green-400">center</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-radius</span>: <span className="text-green-400">6px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">padding</span>: <span className="text-green-400">5px 0</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">z-index</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transition</span>: <span className="text-green-400">opacity 0.3s</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-container:hover .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">visible</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Tooltip on top */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-top .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">bottom</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateX(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Tooltip on bottom */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-bottom .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateX(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Tooltip on left */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-left .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">right</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateY(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">/* Tooltip on right */</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip-right .tooltip-text</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">top</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transform</span>: <span className="text-green-400">translateY(-50%)</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;/style&gt;</span><br />
    <span className="text-blue-400">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-400">&lt;body&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"container"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-container tooltip-top"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;button</span> <span className="text-red-400">class</span>=<span className="text-green-400">"button"</span><span className="text-blue-400">&gt;</span>Top<span className="text-blue-400">&lt;/button&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on top<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-container tooltip-right"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;button</span> <span className="text-red-400">class</span>=<span className="text-green-400">"button"</span><span className="text-blue-400">&gt;</span>Right<span className="text-blue-400">&lt;/button&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on right<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-container tooltip-left"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;button</span> <span className="text-red-400">class</span>=<span className="text-green-400">"button"</span><span className="text-blue-400">&gt;</span>Left<span className="text-blue-400">&lt;/button&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on left<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-container tooltip-bottom"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;button</span> <span className="text-red-400">class</span>=<span className="text-green-400">"button"</span><span className="text-blue-400">&gt;</span>Bottom<span className="text-blue-400">&lt;/button&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip-text"</span><span className="text-blue-400">&gt;</span>Tooltip on bottom<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br />
    <span className="text-blue-400">&lt;/body&gt;</span><br />

    <span className="text-blue-400">&lt;/html&gt;</span>
  </code>
</pre>
 <h1 className="text-2xl">Fade In Tooltips</h1>
      <p>The CSS fade-in tooltip uses a gradual opacity transition to smoothly reveal the tooltip, enhancing the user experience with a subtle animation.</p>
      <p>Begin by setting the tooltip’s opacity to 0. In the hover state, update the opacity to 1. Then, apply a CSS transition to animate the change and create a fade-in effect.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-400">&lt;html&gt;</span><br /><br />

    <span className="text-blue-400">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-400">&lt;style&gt;</span><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">relative</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">display</span>: <span className="text-green-400">inline-block</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">cursor</span>: <span className="text-green-400">pointer</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">margin</span>: <span className="text-green-400">10%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip .tooltiptext</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">hidden</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">width</span>: <span className="text-green-400">120px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">background-color</span>: <span className="text-green-400">#555</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">color</span>: <span className="text-green-400">#fff</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">text-align</span>: <span className="text-green-400">center</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">border-radius</span>: <span className="text-green-400">6px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">padding</span>: <span className="text-green-400">5px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">position</span>: <span className="text-green-400">absolute</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">z-index</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">bottom</span>: <span className="text-green-400">125%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">left</span>: <span className="text-green-400">50%</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">margin-left</span>: <span className="text-green-400">-60px</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">0</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">transition</span>: <span className="text-green-400">opacity 2s</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">.tooltip:hover .tooltiptext</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">visibility</span>: <span className="text-green-400">visible</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">opacity</span>: <span className="text-green-400">1</span>;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;/style&gt;</span><br />
    <span className="text-blue-400">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-400">&lt;body</span> <span className="text-red-400">style</span>=<span className="text-green-400">"text-align:center;"</span><span className="text-blue-400">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltip"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;Hover over this text<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;span</span> <span className="text-red-400">class</span>=<span className="text-green-400">"tooltiptext"</span><span className="text-blue-400">&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a fade-in tooltip<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/span&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-400">&lt;/div&gt;</span><br />

    <span className="text-blue-400">&lt;/body&gt;</span><br />

    <span className="text-blue-400">&lt;/html&gt;</span>
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
        <ul className="list-disc pl-6 space-y-2">
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