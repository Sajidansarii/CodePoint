import React from "react";

const CSSCursor = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        CSS Cursor Property
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>CSS <code>cursor</code></strong> property is used to specify
        the type of mouse cursor that should be displayed when the user hovers
        over an element. It improves the user experience by indicating the
        element’s interactivity.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-200 p-4 rounded-lg text-sm mb-4">
        <pre>
{`selector {
  cursor: value;
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Common Cursor Values
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <code>default</code> → Default arrow pointer.
        </li>
        <li>
          <code>pointer</code> → A hand icon (used for links/buttons).
        </li>
        <li>
          <code>text</code> → Text selection cursor (I-beam).
        </li>
        <li>
          <code>move</code> → Indicates something can be dragged/moved.
        </li>
        <li>
          <code>wait</code> → Indicates loading (spinning circle or hourglass).
        </li>
        <li>
          <code>not-allowed</code> → Shows restricted action (🚫).
        </li>
        <li>
          <code>help</code> → A question mark/help cursor.
        </li>
        <li>
          <code>crosshair</code> → A crosshair icon.
        </li>
        <li>
          <code>zoom-in</code> / <code>zoom-out</code> → For zoom interactions.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example: Different Cursor Styles
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-default">
          default
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-pointer">
          pointer
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-text">
          text
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-move">
          move
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-wait">
          wait
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-not-allowed">
          not-allowed
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-help">
          help
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-crosshair">
          crosshair
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-zoom-in">
          zoom-in
        </div>
        <div className="p-4 bg-white shadow rounded-lg text-center cursor-zoom-out">
          zoom-out
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Code Example</h2>
      <div className="bg-gray-200  p-4 rounded-lg text-sm mb-6">
        <pre>
{`.default { cursor: default; }
.pointer { cursor: pointer; }
.text { cursor: text; }
.move { cursor: move; }
.wait { cursor: wait; }
.not-allowed { cursor: not-allowed; }
.help { cursor: help; }
.crosshair { cursor: crosshair; }
.zoom-in { cursor: zoom-in; }
.zoom-out { cursor: zoom-out; }`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          The <code>cursor</code> property enhances usability by giving visual
          hints.
        </li>
        <li>
          Commonly used values are <code>pointer</code>, <code>text</code>, and{" "}
          <code>not-allowed</code>.
        </li>
        <li>
          You can also use custom images with{" "}
          <code>cursor: url('image.png'), auto;</code>.
        </li>
      </ul>
    </div>
  );
};

export default CSSCursor;