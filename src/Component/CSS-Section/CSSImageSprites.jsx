import React from "react";

const CssImageSprites = () => {
  const SPRITE =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='32'>
         <rect width='32' height='32' fill='#f59e0b'/>
         <rect x='32' width='32' height='32' fill='#3b82f6'/>
         <rect x='64' width='32' height='32' fill='#10b981'/>
       </svg>`
    );

  const base = {
    backgroundImage: `url(${SPRITE})`,
    backgroundRepeat: "no-repeat",
    width: "32px",
    height: "32px",
    display: "inline-block",
  };

  const icons = {
    star: { backgroundPosition: "0 0" }, // orange
    user: { backgroundPosition: "-32px 0" }, // blue
    check: { backgroundPosition: "-64px 0" }, // green
  };

  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">CSS Image Sprites</h1>
      <p className="mb-4">
        A <strong>CSS image sprite</strong> combines multiple icons into a single image file.
        You then show one icon by shifting the <code>background-position</code>. This reduces
        HTTP requests and improves performance.
      </p>

      {/* Live Icons */}
      <h2 className="text-xl font-semibold mt-4 mb-2">Live Demo</h2>
       <div className="flex items-center gap-4 mb-4">
        <span style={{ ...base, ...icons.star }} aria-hidden="true" />
        <span style={{ ...base, ...icons.user }} aria-hidden="true" />
        <span style={{ ...base, ...icons.check }} aria-hidden="true" />
      </div> 

      {/* Buttons with icons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded border">
          <span style={{ ...base, ...icons.star }} aria-hidden="true" />
          Favorite
        </button>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded border">
          <span style={{ ...base, ...icons.user }} aria-hidden="true" />
          Profile
        </button>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded border">
          <span style={{ ...base, ...icons.check }} aria-hidden="true" />
          Confirm
        </button>
      </div>

      {/* Pure CSS version (copy/paste) */}
      <h2 className="text-xl font-semibold mt-4 mb-2">CSS Setup (Sprite + Positions)</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-500">.icon</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">inline-block</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">32px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">32px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-repeat</span>: <span className="text-green-700">no-repeat</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-image</span>: <span className="text-green-700">url('sprite.png')</span>; <span className="text-gray-500">/* your sprite */</span><br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* Each class shifts the window over the sprite */</span><br /><br />

    <span className="text-blue-500">.icon-star</span> <span>{'{'}</span> <span className="text-red-500">background-position</span>: <span className="text-green-700">0 0</span>; <span>{'}'}</span><br />
    <span className="text-blue-500">.icon-user</span> <span>{'{'}</span> <span className="text-red-500">background-position</span>: <span className="text-green-700">-32px 0</span>; <span>{'}'}</span><br />
    <span className="text-blue-500">.icon-check</span> <span>{'{'}</span> <span className="text-red-500">background-position</span>: <span className="text-green-700">-64px 0</span>; <span>{'}'}</span>
  </code>
</pre>


      {/* HTML usage snippet */}
      <h2 className="text-xl font-semibold mt-4 mb-2">HTML Usage</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-500">&lt;button</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"btn"</span>
    <span className="text-blue-500">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">&lt;span</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"icon icon-star"</span>
    <span className="text-red-500"> aria-hidden</span>=<span className="text-green-700">"true"</span>
    <span className="text-blue-500">&gt;&lt;/span&gt;</span><br />

    &nbsp;&nbsp;Favorite<br />

    <span className="text-blue-500">&lt;/button&gt;</span>
  </code>
</pre>

      {/* Retina tip */}
      <h2 className="text-xl font-semibold mt-4 mb-2">Retina/HiDPI Tip (2× Sprites)</h2>
      <p className="mb-2">
        If you export a sprite at <strong>2× size</strong> (e.g., each icon 64×64),
        set <code>background-size</code> to the <em>logical</em> size so icons remain crisp:
      </p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-500">.icon</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">32px</span>;
    <span className="text-red-500">height</span>: <span className="text-green-700">32px</span>;<br />

    &nbsp;&nbsp;<span className="text-red-500">background-image</span>: <span className="text-green-700">url('sprite@2x.png')</span>;
    <span className="text-gray-500">/* double-size sprite */</span><br />

    &nbsp;&nbsp;<span className="text-red-500">background-size</span>: <span className="text-green-700">96px 32px</span>;
    <span className="text-gray-500">/* total logical size (3 * 32) */</span><br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.icon-star</span> <span>{'{'}</span>
    <span className="text-red-500">background-position</span>: <span className="text-green-700">0 0</span>; <span>{'}'}</span><br />

    <span className="text-blue-500">.icon-user</span> <span>{'{'}</span>
    <span className="text-red-500">background-position</span>: <span className="text-green-700">-32px 0</span>; <span>{'}'}</span><br />

    <span className="text-blue-500">.icon-check</span> <span>{'{'}</span>
    <span className="text-red-500">background-position</span>: <span className="text-green-700">-64px 0</span>; <span>{'}'}</span>
  </code>
</pre>

      {/* Best practices */}
      <h2 className="text-xl font-semibold mt-4 mb-2">Best Practices</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Use sprites for small decorative icons to reduce requests.</li>
        <li>Keep a mapping of icon <em>name → background-position</em>.</li>
        <li>For meaningful icons (conveying info), ensure accessible label text in the UI.</li>
        <li>For scalable & themeable icons, consider SVG icons; sprites shine for legacy or bitmap sets.</li>
      </ul>
    </div>
  );
};

export default CssImageSprites;