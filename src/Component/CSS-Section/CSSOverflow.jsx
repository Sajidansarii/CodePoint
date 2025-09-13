import React from "react";

const CssOverflow = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Overflow</h1>
      <p className="mb-4">
        The <code>overflow</code> property controls what happens when the content of an element 
        is too large to fit in its box.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Values of overflow</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>visible</strong> (default) – Content is not clipped, it overflows outside the box.</li>
        <li><strong>hidden</strong> – Content that overflows is hidden and not accessible.</li>
        <li><strong>scroll</strong> – Content is clipped but scrollbars are always visible.</li>
        <li><strong>auto</strong> – Scrollbars appear only when needed.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Overflow visible */}
        <div>
          <h3 className="font-semibold mb-2">overflow: visible</h3>
          <div className="w-40 h-24 border bg-gray-200 overflow-visible p-2">
            This text is very long and will overflow outside the box.
          </div>
        </div>

        {/* Overflow hidden */}
        <div>
          <h3 className="font-semibold mb-2">overflow: hidden</h3>
          <div className="w-40 h-24 border bg-gray-200 overflow-hidden p-2">
            This text is very long and will be clipped.
          </div>
        </div>

        {/* Overflow scroll */}
        <div>
          <h3 className="font-semibold mb-2">overflow: scroll</h3>
          <div className="w-40 h-24 border bg-gray-200 overflow-scroll p-2">
            This text is very long and will add scrollbars inside the box.
          </div>
        </div>

        {/* Overflow auto */}
        <div>
          <h3 className="font-semibold mb-2">overflow: auto</h3>
          <div className="w-40 h-24 border bg-gray-200 overflow-auto p-2">
            This text is very long and scrollbars will appear only if needed.
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
      <pre className="bg-gray-200  p-4 rounded-lg overflow-x-auto">
{`selector {
  overflow: visible | hidden | scroll | auto;
}`}
      </pre>
    </div>
  );
};

export default CssOverflow;