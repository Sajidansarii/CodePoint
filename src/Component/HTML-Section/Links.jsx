const HTMLLinks = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML Links
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Links (anchors) let users navigate between pages, sections, or external resources. They are created using the <code>&lt;a&gt;</code> tag and are one of the most fundamental parts of the web.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <p className="leading-relaxed">
          The <code>href</code> attribute specifies the destination URL. The text between the tags is clickable.
        </p>
      </section>

      {/* Common Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Attributes</h2>
        <ul className="list-[square] list-inside space-y-1 text-gray-700">
          <li>
            <code>href</code> — Destination URL or fragment (e.g., <code>#section</code>).
          </li>
          <li>
            <code>target="_blank"</code> — Opens the link in a new tab/window. Use with <code>rel="noopener noreferrer"</code> for security.
          </li>
          <li>
            <code>rel</code> — Relationship between current page and linked resource. Common values: <code>noopener</code>, <code>noreferrer</code>, <code>nofollow</code>.
          </li>
          <li>
            <code>title</code> — Additional info shown on hover.
          </li>
          <li>
            <code>download</code> — Suggests the browser download the linked resource instead of navigating to it.
          </li>
        </ul>
      </section>

      {/* Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Examples</h2>

        <div className="mb-4">
          <p className="leading-relaxed mb-1">
            External link opening in new tab:
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
            {`<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Example
</a>`}
          </pre>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 mb-1">
            Internal anchor to a section:
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
            {`<!-- Link -->
<a href="#features">See Features</a>

<!-- Target -->
<h2 id="features">Features</h2>`}
          </pre>
        </div>

        <div className="mb-4">
          <p className="leading-relaxed mb-3">
            Download link:
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-3">
            {<a href="/files/ebook.pdf" download>Download eBook</a>}
          </pre>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility Tips</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Use clear, descriptive link text (avoid “click here”).</li>
          <li>Indicate if a link opens in a new tab (e.g., with an icon or text) so users aren’t surprised.</li>
          <li>Provide keyboard focus styles (handled in CSS) so users navigating with keyboard can see active link.</li>
          <li>Ensure links are distinguishable from plain text (color + underline or other visual cue).</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Using vague link text like “here” or “read more” without context.</li>
          <li>Opening external links in new tabs without using <code>rel="noopener noreferrer"</code>.</li>
          <li>Forgetting to include <code>href</code> on a clickable element and using JavaScript without fallback.</li>
          <li>Styling links so they are not visually distinct from regular text.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
          <li><code>&lt;a&gt;</code> creates a link; <code>href</code> is required to point to a destination.</li>
          <li><code>target="_blank"</code> opens in new tab—pair with <code>rel="noopener noreferrer"</code>.</li>
          <li>Use descriptive text and make links accessible.</li>
          <li>Internal anchors use hashes (<code>#id</code>).</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLLinks;