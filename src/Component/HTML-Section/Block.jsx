const HTMLBlockElements = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        Block-level Elements
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Block-level elements create structure by taking the full available width and starting on a new line. They are used for major building blocks of a page like sections, paragraphs, and containers.
      </p>

      {/* Definition & Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is a Block Element?</h2>
        <p className="text-gray-700 mb-2">
          A block-level element always starts on a new line and stretches to fill its container’s width by default. Examples include <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;article&gt;</code>.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div>
  <h1>Title</h1>
  <p>This is a paragraph inside a block.</p>
</div>`}</code>
        </pre>
      </section>

      {/* Block vs Inline */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Block vs Inline</h2>
        <p className="text-gray-700 mb-2">
          Understanding the difference helps with layout:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li>
            <strong>Block:</strong> Starts on a new line and stretches horizontally (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).
          </li>
          <li>
            <strong>Inline:</strong> Flows inside a line and only takes as much width as needed (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- Block elements stack vertically -->
<div>Block 1</div>
<div>Block 2</div>

<!-- Inline elements sit horizontally -->
<span>Inline 1</span><span>Inline 2</span>`}</code>
        </pre>
      </section>

      {/* Changing Display */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Changing Display Behavior</h2>
        <p className="text-gray-700 mb-2">
          You can override default behavior with CSS using the <code>display</code> property.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div style="display: inline;">This behaves like inline</div>
<span style="display: block;">This behaves like block</span>`}</code>
        </pre>
        <p className="text-gray-700">
          This gives flexibility when building layouts.
        </p>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use block elements to group related content (e.g., wrap sections in <code>&lt;section&gt;</code> or <code>&lt;div&gt;</code>).</li>
          <li>Avoid using block-level elements inside inline contexts incorrectly.</li>
          <li>Control spacing and layout with CSS instead of abusing block nesting for visuals.</li>
        </ul>
      </section>

      {/* Accessibility / Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Structure & Accessibility</h2>
        <p className="text-gray-700 mb-2">
          Semantic block elements like <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> help screen readers and search engines understand page structure better.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Block elements start on a new line and span full width by default.</li>
          <li>Inline elements stay in-line; use CSS <code>display</code> to change behavior.</li>
          <li>Use semantic block tags for clearer structure and accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLBlockElements;