import React from "react";

const CssImageGallery = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-2xl font-medium mb-4 text-blue-500">CSS Image Gallery</h1>
      <p className="mb-4">
        A <strong>CSS Image Gallery</strong> is a collection of images arranged
        in a grid layout. With CSS, you can style images, add hover effects, and
        make the gallery responsive. Image galleries are widely used in
        portfolios, e-commerce, and photography websites.
      </p>

      {/* Simple Gallery */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Simple Image Gallery</h2>
      <p className="mb-4">
        Here’s a basic gallery layout using CSS Grid and Tailwind CSS.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="https://picsum.photos/300/200?random=1"
          alt="Gallery 1"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="https://picsum.photos/300/200?random=2"
          alt="Gallery 2"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="https://picsum.photos/300/200?random=3"
          alt="Gallery 3"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="https://picsum.photos/300/200?random=4"
          alt="Gallery 4"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="https://picsum.photos/300/200?random=5"
          alt="Gallery 5"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="https://picsum.photos/300/200?random=6"
          alt="Gallery 6"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
      </div>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">.gallery</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">grid</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">grid-template-columns</span>: <span className="text-green-700">repeat(3, 1fr)</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">gap</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.gallery img</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">100%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">10px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">transition</span>: <span className="text-green-700">transform 0.3s</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.gallery img:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">transform</span>: <span className="text-green-700">scale(1.05)</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      {/* Responsive Gallery */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Responsive Image Gallery</h2>
      <p className="mb-4"> With media queries or Tailwind utilities, the gallery adapts to different screen sizes.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {Array.from({ length: 8 }).map((_, i) => (
    <img
      key={i}
      src={`https://picsum.photos/300/200?random=${i + 10}`}
      alt={`Gallery ${i}`}
      className="rounded-lg shadow-md hover:scale-105 transition-transform"
    />
  ))}
</div>


     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-gray-500">@media screen and (max-width: 768px)</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-500">.gallery</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">grid-template-columns</span>: <span className="text-green-700">repeat(2, 1fr)</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">@media screen and (max-width: 480px)</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-blue-500">.gallery</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">grid-template-columns</span>: <span className="text-green-700">1fr</span>;<br />
    &nbsp;&nbsp;<span>{'}'}</span><br />
    <span>{'}'}</span>
  </code>
</pre>


      {/*   Hover Effect Gallery */}
       <h2 className="text-xl font-semibold mt-6 mb-2">Gallery with Hover Effects</h2>
      <p className="mb-4">
        Add overlays and captions when hovering over images.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="relative group">
          <img
            src="https://picsum.photos/300/200?random=20"
            alt="Gallery Hover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-white font-bold">Caption 1</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://picsum.photos/300/200?random=21"
            alt="Gallery Hover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-white font-bold">Caption 2</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://picsum.photos/300/200?random=22"
            alt="Gallery Hover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-white font-bold">Caption 3</span>
          </div>
        </div>
      </div>

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-500">.gallery-item</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.gallery-item img</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">block</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">100%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">10px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.gallery-item .overlay</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">absolute</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">inset</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">rgba(0,0,0,0.5)</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">align-items</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">justify-content</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">opacity</span>: <span className="text-green-700">0</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">transition</span>: <span className="text-green-700">0.3s</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.gallery-item:hover .overlay</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">opacity</span>: <span className="text-green-700">1</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      {/* Notes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Key Points</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Use <code>display: grid</code> or <code>flexbox</code> for layouts.</li>
        <li>Add <code>hover</code> effects for interactivity.</li>
        <li>Make galleries <strong>responsive</strong> with media queries or Tailwind utilities.</li>
        <li>Use placeholders like <code>picsum.photos</code> or <code>placehold.co</code> for sample images.</li>
      </ul>
    </div>
  );
};

export default CssImageGallery;