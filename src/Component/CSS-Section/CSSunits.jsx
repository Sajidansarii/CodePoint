import React from "react";

const CssUnitsDemo = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      {/* Page Header */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Units
      </h1>

      <p className="text-gray-700">
        CSS Units define *length, size, and spacing* in your webpage. 
        They can be <strong>absolute</strong> or <strong>relative</strong>.
      </p>

      {/* Section 1: Absolute Units */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h2 className="font-bold">1. Absolute Units</h2>
        <p className="text-gray-700">
          Absolute units have a fixed size, regardless of other elements or screen size.
        </p>

        {/* Code Example */}
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`/* Absolute Units Example */
.box-absolute {
  width: 200px;    /* px - pixels */
  height: 100px;
  margin: 10mm;    /* mm - millimeters */
  padding: 1in;    /* in - inches */
  border: 1pt solid #3b82f6; /* pt - points */
}`}
        </pre>

        <p className="text-gray-700 mt-1">
          ✅ Explanation:
          <ul className="list-disc list-inside">
            <li><code>px</code> = pixels, commonly used for screen.</li>
            <li><code>mm</code> = millimeters, mostly print media.</li>
            <li><code>in</code> = inches, mostly print media.</li>
            <li><code>pt</code> = points, often used in typography.</li>
          </ul>
        </p>
      </div>

      {/* Section 2: Relative Units */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h2 className="font-bold">2. Relative Units</h2>
        <p className="text-gray-700">
          Relative units change size based on parent element, viewport, or font size.
        </p>

        {/* Code Example */}
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`/* Relative Units Example */
.box-relative {
  width: 50%;      /* percentage of parent width */
  height: 10rem;   /* rem - relative to root font size */
  margin: 2em;     /* em - relative to parent font size */
  font-size: 2vw;  /* vw - 2% of viewport width */
  line-height: 1.5ch; /* ch - width of "0" character */
}`}
        </pre>

        <p className="text-gray-700 mt-1">
          ✅ Explanation:
          <ul className="list-disc list-inside">
            <li><code>%</code> = percentage of parent element.</li>
            <li><code>em</code> = relative to parent font size.</li>
            <li><code>rem</code> = relative to root font size.</li>
            <li><code>vw / vh</code> = relative to viewport width / height.</li>
            <li><code>ch</code> = width of character "0" in current font.</li>
          </ul>
        </p>
      </div>

      {/* Tips */}
      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use absolute units for fixed size elements like borders.</li>
          <li>Use relative units for responsive designs.</li>
          <li>Combining <code>em</code>, <code>rem</code>, and <code>vw/vh</code> helps in fluid layouts.</li>
        </ul>
      </p>
    </div>
  );
};

export default CssUnitsDemo;