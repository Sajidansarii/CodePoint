const HTMLImagesDetailed = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Images
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Images add visual meaning and engagement to web pages. In HTML, the <code>&lt;img&gt;</code> tag embeds images, and with proper attributes and techniques you can make them accessible, responsive, and performant.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <p className="text-gray-700 mb-2">
          The simplest image tag includes <code>src</code> and <code>alt</code>:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{'<img src="logo.png" alt="CodePoint Logo" />'}</code>
        </pre>
        <p className="text-gray-700">
          <code>src</code> points to the image file, and <code>alt</code> describes it for screen readers or if it fails to load.
        </p>
      </section>

      {/* Responsive Images */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Responsive Images</h2>
        <p className="text-gray-700 mb-2">
          Use <code>srcset</code> and <code>sizes</code> to let the browser pick the best version depending on screen size and resolution.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px" 
  alt="Scenic view" 
  loading="lazy" />`}</code>
        </pre>
        <p className="text-gray-700">
          This improves performance by loading an appropriately sized image for the device.
        </p>
      </section>

      {/* Lazy Loading */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Lazy Loading</h2>
        <p className="text-gray-700 mb-2">
          Deferring offscreen images speeds up initial load. Use:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{'<img src="photo.jpg" alt="Example" loading="lazy" />'}</code>
        </pre>
        <p className="text-gray-700">
          The browser only loads it when it's near the viewport.
        </p>
      </section>

      {/* Figure + Caption */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Image with Caption</h2>
        <p className="text-gray-700 mb-2">
          Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for semantic captions.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<figure>
  <img src="sunset.jpg" alt="Sunset" loading="lazy" />
  <figcaption>Sunset over mountains.</figcaption>
</figure>`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            Always include a meaningful <code>alt</code> attribute. If the image is purely decorative, use <code>alt=""</code>.
          </li>
          <li>
            Don’t convey critical information using images alone; combine with text.
          </li>
          <li>
            Use descriptive captions when needed to give more context (<code>&lt;figcaption&gt;</code>).
          </li>
        </ul>
      </section>

      {/* Performance Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Performance Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Optimize image file size (e.g., WebP, proper compression).</li>
          <li>Use responsive attributes (<code>srcset</code> / <code>sizes</code>) to avoid oversized downloads.</li>
          <li>Lazy load below-the-fold images with <code>loading="lazy"</code>.</li>
          <li>Specify width & height to reduce layout shift.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Missing or empty <code>alt</code> when image conveys meaning.</li>
          <li>Using large uncompressed images, slowing page load.</li>
          <li>Not using responsive techniques, causing blurry or oversized images.</li>
          <li>Forcing dimensions that distort aspect ratio instead of respecting intrinsic ratio or using CSS object-fit.</li>
        </ul>
      </section>

      {/* CodePoint Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Example for CodePoint</h2>
        <p className="text-gray-700 mb-2">
          Logo with lazy loading and accessibility:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<img 
  src="/assets/codepoint-logo.png" 
  alt="CodePoint Logo" 
  width="200" 
  height="60" 
  loading="lazy" />`}</code>
        </pre>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;img&gt;</code> embeds images; always include <code>alt</code>.</li>
          <li>Use <code>srcset</code>/<code>sizes</code> for responsiveness.</li>
          <li>Lazy-load with <code>loading="lazy"</code> to improve speed.</li>
          <li>Wrap with <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> when captioning.</li>
          <li>Optimize file size and dimensions to reduce layout shifts.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLImagesDetailed;