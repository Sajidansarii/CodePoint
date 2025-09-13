import React from "react";

const CssTooltips = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Tooltips
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        <strong>Tooltip</strong> ek chhota popup box hota hai jo user ke hover
        karne par dikhai deta hai. Ye usually kisi element ke upar additional
        information dikhane ke liye use hota hai. Tooltip sirf{" "}
        <em>hover ya focus</em> par appear hota hai.
      </p>

      {/* Syntax */}
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
          Yahan <code>.tooltip</code> container hota hai, aur{" "}
          <code>.tooltip-text</code> wo content hai jo hover par dikhega.
        </p>
      </div>

      {/* Example 1 */}
      <div className="bg-white p-6 rounded shadow space-y-4 text-center">
        <h2 className="text-xl font-semibold">1. Basic Tooltip</h2>
        <p className="text-gray-600">
          Hover button par karo, tooltip dikhai dega:
        </p>
        <pre className="bg-gray-20 p-4 rounded text-sm overflow-x-auto text-left">
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
              Hello! I'm a tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Example 2 */}
      <div className="bg-white p-6 rounded shadow space-y-4 text-center">
        <h2 className="text-xl font-semibold">2. Tooltip on Top</h2>
        <pre className="bg-gray-20 p-4 rounded text-sm overflow-x-auto text-left">
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
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              w-32 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity">
              Tooltip on Top
            </span>
          </div>
        </div>
      </div>

      {/* Example 3 */}
      <div className="bg-white p-6 rounded shadow space-y-4 text-center">
        <h2 className="text-xl font-semibold">3. Tooltip on Right</h2>
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
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
              w-32 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity">
              Tooltip on Right
            </span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>position: relative</strong> → container ke andar tooltip ko
            position karne ke liye.
          </li>
          <li>
            <strong>position: absolute</strong> → tooltip text ko exact jagah
            par place karne ke liye.
          </li>
          <li>
            <strong>opacity + transition</strong> → smooth fade-in / fade-out
            effect ke liye.
          </li>
          <li>
            Tooltip ki direction (top, right, bottom, left) adjust karne ke liye{" "}
            <code>top</code>, <code>bottom</code>, <code>left</code>,{" "}
            <code>right</code> properties use hoti hain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssTooltips;