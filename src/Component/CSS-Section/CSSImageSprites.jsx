import React from "react";

/**
 * CSS Image Sprites
 * - One image contains many smaller icons.
 * - Each icon is shown by shifting background-position.
 * - Benefits: fewer network requests, better caching, consistent rendering.
 */
const CssImageSprites = () => {
  // A tiny 3-icon sprite made as an inline SVG (96x32).
  //  ┌──────────┬──────────┬──────────┐
  //  │  ORANGE  │   BLUE   │  GREEN   │  (each cell = 32x32)
  //  └──────────┴──────────┴──────────┘
  const SPRITE =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='32'>
         <rect width='32' height='32' fill='#f59e0b'/>
         <rect x='32' width='32' height='32' fill='#3b82f6'/>
         <rect x='64' width='32' height='32' fill='#10b981'/>
       </svg>`
    );

  // Utility styles: one base "icon" and 3 variants that shift background-position.
  const base = {
    backgroundImage: url("${SPRITE}"),
    backgroundRepeat: "no-repeat",
    width: "32px",
    height: "32px",
    display: "inline-block",
  };

  const icons = {
    // column offsets: 0, -32px, -64px
    star: { backgroundPosition: "0 0" }, // orange
    user: { backgroundPosition: "-32px 0" }, // blue
    check: { backgroundPosition: "-64px 0" }, // green
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-3">CSS Image Sprites</h1>
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
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`.icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-image: url('sprite.png'); /* your sprite */
}

/* Each class shifts the window over the sprite */
.icon-star  { background-position:   0    0; }
.icon-user  { background-position: -32px  0; }
.icon-check { background-position: -64px  0; }`}
      </pre>

      {/* HTML usage snippet */}
      <h2 className="text-xl font-semibold mt-4 mb-2">HTML Usage</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<button class="btn">
  <span class="icon icon-star" aria-hidden="true"></span>
  Favorite
</button>`}
      </pre>

      {/* Retina tip */}
      <h2 className="text-xl font-semibold mt-4 mb-2">Retina/HiDPI Tip (2× Sprites)</h2>
      <p className="mb-2">
        If you export a sprite at <strong>2× size</strong> (e.g., each icon 64×64),
        set <code>background-size</code> to the <em>logical</em> size so icons remain crisp:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`.icon {
  width: 32px; height: 32px;
  background-image: url('sprite@2x.png'); /* double-size sprite */
  background-size: 96px 32px; /* total logical size (3 * 32) */
}

.icon-star  { background-position:    0     0; }
.icon-user  { background-position:  -32px   0; }
.icon-check { background-position:  -64px   0; }`}
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