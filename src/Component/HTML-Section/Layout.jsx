const HTMLLayout = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        Layout
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Layout is how elements are arranged on a web page. Good layout makes content readable, responsive, and visually clear. HTML provides structure, while CSS controls layout using models like Flexbox, Grid, and positioning.
      </p>

      {/* Box Model */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Box Model (Recap)</h2>
        <p className="leading-relaxed mb-3">
          Every element is a box composed of content, padding, border, and margin. Understanding the box model is the foundation of layout.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
          <code>{`div {
  width: 200px; /* content width */
  padding: 10px; /* inside */
  border: 2px solid #ccc; /* edge */
  margin: 20px; /* outside */
}`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Use <code>box-sizing: border-box;</code> to include padding and border in the width.
        </p>
      </section>

      {/* Flexbox */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. Flexbox</h2>
        <p className="leading-relaxed mb-3">
          Flexbox is for one-dimensional layouts—arranging items in a row or column with alignment and distribution control.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
          <code>{`.container {
  display: flex;
  gap: 10px;
}
.item {
  flex: 1;
}`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Common properties:
        </p>
        <ul className="list-[square] list-inside leading-relaxed mb-3">
          <li><code>justify-content</code> — horizontal distribution (start, center, space-between)</li>
          <li><code>align-items</code> — vertical alignment (stretch, center)</li>
          <li><code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> — control size behavior</li>
        </ul>
        <p className="leading-relaxed">
          Example: two columns that share space equally.
        </p>
      </section>

      {/* Grid */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Grid</h2>
        <p className="leading-relaxed mb-3">
          CSS Grid is for two-dimensional layouts—rows and columns together. It’s powerful for complex page structures.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
          <code>{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          You can span items, name areas, and define implicit/explicit tracks.
        </p>
      </section>

      {/* Positioning */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Positioning</h2>
        <p className="leading-relaxed mb-3">
          Positioning determines how elements are placed relative to normal flow or other elements.
        </p>
        <ul className="list-[square] list-inside leading-relaxed mb-3">
          <li><code>static</code> — default flow.</li>
          <li><code>relative</code> — offset from its normal position.</li>
          <li><code>absolute</code> — positioned relative to nearest positioned ancestor.</li>
          <li><code>fixed</code> — fixed relative to viewport (stays on scroll).</li>
          <li><code>sticky</code> — toggles between relative and fixed depending on scroll.</li>
        </ul>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
          <code>{`.box {
  position: absolute;
  top: 10px;
  right: 10px;
}`}</code>
        </pre>
      </section>

      {/* Responsive Layout */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Responsive Layout</h2>
        <p className="leading-relaxed mb-3">
          Layout must adapt to different screen sizes. Use media queries or utility-first frameworks (like Tailwind) to adjust structure.
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
          <code>{`@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`}</code>
        </pre>
        <p className="leading-relaxed mb-3">
          Common responsive pattern: sidebar + main content becomes stacked on small screens.
        </p>
      </section>

      {/* Common Layout Patterns */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">6. Common Layout Patterns</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
          <li>
            <strong>Header - Content - Footer:</strong> Standard page skeleton.
          </li>
          <li>
            <strong>Sidebar + Content:</strong> Two columns with navigation/sidebar.
          </li>
          <li>
            <strong>Card Grid:</strong> Repeatable content blocks arranged with grid or flex.
          </li>
          <li>
            <strong>Hero Section:</strong> Wide banner followed by feature sections.
          </li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Start mobile-first: design for small screens first, then enhance.</li>
          <li>Prefer Flexbox/Grid over outdated float-based layouts.</li>
          <li>Keep structure semantic; use CSS for visual arrangement.</li>
          <li>Limit deeply nested containers; keep hierarchy manageable.</li>
          <li>Use spacing consistently (margin/padding) to avoid cramped or uneven designs.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Mixing too many layout techniques at once (overcomplicates).</li>
          <li>Not handling small screens—elements overflow or become unreadable.</li>
          <li>Forgetting <code>box-sizing: border-box</code>, causing size math errors.</li>
          <li>Using fixed widths instead of flexible units (e.g., % / fr / flex).</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Layout uses box model, Flexbox, Grid, and positioning to arrange content.</li>
          <li>Flexbox for linear (row/column), Grid for two-dimensional.</li>
          <li>Responsive design ensures usability on all screen sizes.</li>
          <li>Use common patterns and semantic structure for clarity.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLLayout;