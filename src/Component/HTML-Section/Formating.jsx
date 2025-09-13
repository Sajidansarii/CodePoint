const HTMLTextFormatting = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Text Formatting
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML provides several tags to format text and give it meaning or emphasis. These tags help with readability, semantics, and accessibility—not just visual styling.
      </p>

      {/* Common Formatting Tags */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Formatting Tags</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;strong&gt; / &lt;b&gt;</h3>
          <p className="text-gray-700 mb-1">
            <code>&lt;strong&gt;</code> indicates important text (semantic), while <code>&lt;b&gt;</code> makes text bold without extra meaning.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{<p>This is <strong>important</strong> and this is <b>bold</b>.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;em&gt; / &lt;i&gt;</h3>
          <p className="text-gray-700 mb-1">
            <code>&lt;em&gt;</code> adds emphasis (semantic), and <code>&lt;i&gt;</code> italicizes text without semantic emphasis.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{<p>This is <em>emphasized</em> and this is <i>italic</i>.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;small&gt;</h3>
          <p className="text-gray-700 mb-1">
            Renders text smaller, often used for fine print or disclaimers.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{<p>Terms and conditions <small>apply</small>.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;mark&gt;</h3>
          <p className="text-gray-700 mb-1">
            Highlights text as if marked with a highlighter.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{<p>Please read the <mark>important</mark> note.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;code&gt;</h3>
          <p className="text-gray-700 mb-1">
            Displays inline code or code-like text in a monospace font.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{<p>Use <code>console.log()</code> to print to console.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;sub&gt; / &lt;sup&gt;</h3>
          <p className="text-gray-700 mb-1">
            <code>&lt;sub&gt;</code> is subscript and <code>&lt;sup&gt;</code> is superscript (used in formulas, footnotes).
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{<p>H<sub>2</sub>O is water, E = mc<sup>2</sup>.</p>}</code>
          </pre>
        </div>
      </section>

      {/* Semantic vs Styling */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Semantic vs Pure Styling</h2>
        <p className="text-gray-700 mb-2">
          Use semantic tags when meaning matters (<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>). Avoid using them solely to achieve visual effects—use CSS for that (e.g., <code>font-weight</code>, <code>font-style</code>).
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            Screen readers treat <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> differently, so use them to convey importance or emphasis, not just visual style.
          </li>
          <li>
            Avoid overusing formatting; too many <code>&lt;strong&gt;</code> or <code>&lt;em&gt;</code> can dilute meaning.
          </li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Using <code>&lt;b&gt;</code> or <code>&lt;i&gt;</code> when semantic meaning is intended; prefer <code>&lt;strong&gt;</code> / <code>&lt;em&gt;</code>.</li>
          <li>Using formatting tags for layout instead of CSS.</li>
          <li>Mixing inline block-level semantics improperly in a way that confuses screen readers.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;strong&gt;</code> for important text, <code>&lt;b&gt;</code> only for bold styling.</li>
          <li><code>&lt;em&gt;</code> for emphasis, <code>&lt;i&gt;</code> for italic look.</li>
          <li><code>&lt;code&gt;</code> displays code, <code>&lt;mark&gt;</code> highlights.</li>
          <li>Use semantic tags when meaning matters; use CSS for pure visual effect.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLTextFormatting;