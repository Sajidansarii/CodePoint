const HTMLResponsive = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-3">
        Responsive in HTML
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Responsive design ensures a web page looks good and works well on all screen sizes—from phones to desktops. In HTML you enable responsiveness with proper meta tags, flexible layouts, images, and media queries in CSS.
      </p>

      {/* Meta Viewport */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Meta Viewport Tag</h2>
        <p className="leading-relaxed mb-3">
          The first step is adding the viewport meta tag in the <code>&lt;head&gt;</code> so browsers scale the page correctly on mobile devices.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
        This makes the layout width match the device width and sets initial zoom to 1.
        </p>
      </section>

      {/* Fluid Layouts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. Fluid / Flexible Layouts</h2>
        <p className="leading-relaxed mb-3">
          Avoid fixed widths. Use relative units like percentages, <code>max-width</code>, <code>em</code>, or CSS flex/grid to let content adapt automatically.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`.container {
  max-width: 100%;
  padding: 0 1rem;
}
.card {
  width: 100%; /* shrinks/grows with parent */
}`}</code>
        </pre>
      </section>

      {/* Responsive Images */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Responsive Images</h2>
        <p className="leading-relaxed mb-3">
          Make images scale and load appropriately using CSS or attributes:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`<!-- CSS -->
img {
  max-width: 100%;
  height: auto;
}

<!-- srcset example -->
<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, 800px" 
  alt="Example" />`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          This ensures images don’t overflow and the browser picks the best size.
        </p>
      </section>

      {/* Media Queries */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Media Queries</h2>
        <p className="leading-relaxed mb-3">
          Media queries apply different CSS rules depending on screen size or other features.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`/* Mobile first */
.container {
  display: block;
}

/* Larger screens */
@media (min-width: 768px) {
  .container {
    display: flex;
    gap: 1rem;
  }
}`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Start with styles for small screens, then override for wider viewports (mobile-first).
        </p>
      </section>

      {/* Layout Techniques */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Layout Tools</h2>
        <p className="leading-relaxed mb-3">
          Use modern CSS layout systems that adapt well:
        </p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li><strong>Flexbox:</strong> One-dimensional, good for rows/columns that wrap.</li>
          <li><strong>Grid:</strong> Two-dimensional, for complex responsive grids.</li>
          <li><strong>Relative units:</strong> %, <code>fr</code>, <code>em</code>, <code>rem</code> instead of fixed px.</li>
        </ul>
      </section>

      {/* Mobile-first & Breakpoints */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">6. Mobile-First & Breakpoints</h2>
        <p className="text-gray-700 mb-3">
          Design starting for small screens, then add breakpoints to enhance for larger devices. Common breakpoints:
        </p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
          <li><code>640px</code> – small tablets / large phones</li>
          <li><code>768px</code> – tablets</li>
          <li><code>1024px</code> – small laptops</li>
          <li><code>1280px</code> – desktops</li>
        </ul>
        <p className="leading-relaxed">
          Example (Tailwind-style): <code>@media (min-width: 768px)</code> adjusts layout above tablet width.
        </p>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Forgetting the viewport meta tag—mobile browsers scale incorrectly.</li>
          <li>Using fixed widths that break on small screens.</li>
          <li>Images overflowing because <code>max-width</code> isn’t set.</li>
          <li>Not testing at various breakpoints (only designing for desktop).</li>
          <li>Overly deep nesting causing hard-to-maintain responsive overrides.</li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Start with a mobile-first approach.</li>
          <li>Use relative units and fluid containers.</li>
          <li>Combine flexbox/grid with media queries for adaptive structure.</li>
          <li>Optimize images and lazy-load offscreen content.</li>
          <li>Test on real devices and emulate various screen sizes.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Add the viewport meta tag to enable responsiveness.</li>
          <li>Use flexible layouts and images so content scales.</li>
          <li>Apply media queries for different screen sizes (mobile-first).</li>
          <li>Use modern layout systems like Flexbox and Grid.</li>
          <li>Test across breakpoints and avoid fixed dimensions.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLResponsive;