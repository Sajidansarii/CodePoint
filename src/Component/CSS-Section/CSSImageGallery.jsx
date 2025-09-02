import React from "react";

const CssImageGallery = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">CSS Image Gallery</h1>
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

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
{`/* CSS Example */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.gallery img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}`}
      </pre>

      {/* Responsive Gallery */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Responsive Image Gallery
      </h2>
      <p className="mb-4">
        With media queries or Tailwind utilities, the gallery adapts to different screen sizes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/300/200?random=${i + 10}`}
            alt={Gallery `${i}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
{`/* Responsive CSS */
@media screen and (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}`}
      </pre>

      {/* Hover Effect Gallery */}
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

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
{`/* Hover Overlay */
.gallery-item {
  position: relative;
}

.gallery-item img {
  display: block;
  width: 100%;
  border-radius: 10px;
}

.gallery-item .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.gallery-item:hover .overlay {
  opacity: 1;
}`}
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