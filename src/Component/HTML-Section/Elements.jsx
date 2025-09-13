const HTMLElements = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Elements
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        An <strong>HTML element</strong> is the building block of a webpage. It consists of a start tag, content (sometimes), and an end tag. Elements define structure and meaning: headings, paragraphs, links, images, and more.
      </p>

      {/* Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Structure of an Element</h2>
        <p className="text-gray-700 mb-2">
          Most HTML elements follow this pattern:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{<p>This is a paragraph.</p>}</code>
        </pre>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>Start tag:</strong> <code>&lt;p&gt;</code>
          </li>
          <li>
            <strong>Content:</strong> This is a paragraph.
          </li>
          <li>
            <strong>End tag:</strong> <code>&lt;/p&gt;</code>
          </li>
        </ul>
      </section>

      {/* Types */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Types of HTML Elements</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">1. Block-level Elements</h3>
          <p className="text-gray-700 mb-2">
            These take the full available width and begin on a new line. They are used for larger structural pieces.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Examples:</strong> <code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;article&gt;</code>
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">2. Inline Elements</h3>
          <p className="text-gray-700 mb-2">
            These only take as much width as required and do not start on a new line. They are used inside block elements.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Examples:</strong> <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">3. Self-closing Elements</h3>
          <p className="text-gray-700 mb-2">
            These do not have an end tag. They are complete in themselves.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Examples:</strong> <code>&lt;img src="logo.png" alt="Logo" /&gt;</code>, <code>&lt;br /&gt;</code>, <code>&lt;hr /&gt;</code>
          </p>
        </div>
      </section>

      {/* Common Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Attributes</h2>
        <p className="text-gray-700 mb-3">
          Attributes provide extra information about elements. They go inside the start tag.
        </p>

        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{<a href="https://codepoint.com" target="_blank">Visit CodePoint</a>}</code>
        </pre>

        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <code>href</code> — Used in links to specify the destination URL.
          </li>
          <li>
            <code>src</code> — Used in <code>&lt;img&gt;</code> to specify image source.
          </li>
          <li>
            <code>alt</code> — Alternative text for images (important for accessibility).
          </li>
          <li>
            <code>target</code> — Controls where a link opens (e.g., <code>_blank</code> opens in new tab).
          </li>
          <li>
            <code>class</code> — Used to apply CSS styles.
          </li>
        </ul>
      </section>

      {/* Nesting & Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Nesting & Best Practices</h2>
        <p className="text-gray-700 mb-2">
          You can put elements inside other elements. This is called <strong>nesting</strong>. Always make sure your tags are properly closed and nested to avoid rendering problems.
        </p>

        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div>
  <h2>Title</h2>
  <p>This is a <strong>nested</strong> paragraph.</p>
</div>`}</code>
        </pre>

        <p className="text-gray-700 mb-2">
          <strong>Good:</strong> Block inside block, inline inside block.  
          <strong>Bad:</strong> Putting block-level tags inside inline tags inappropriately.
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tips</h2>
        <p className="text-gray-700 mb-2">
          Writing semantic and well-structured HTML helps people using screen readers and improves SEO.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Use heading tags in order: <code>&lt;h1&gt;</code> then <code>&lt;h2&gt;</code>, etc.</li>
          <li>Provide <code>alt</code> text for images.</li>
          <li>Use meaningful link text instead of "click here".</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>HTML elements are made of tags and content.</li>
          <li>Block vs inline vs self-closing elements behave differently.</li>
          <li>Attributes add extra info to elements (like <code>href</code>, <code>src</code>, <code>alt</code>).</li>
          <li>Proper nesting and semantics improve accessibility and structure.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLElements;