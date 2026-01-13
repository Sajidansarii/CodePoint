const HTMLTextFormatting = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML Text Formatting</h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">HTML provides several tags to format text and give it meaning or emphasis. These tags help with readability, semantics, and accessibility—not just visual styling.</p>

      {/* Common Formatting Tags */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Formatting Tags</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;strong&gt; / &lt;b&gt;</h3>
          <p className="leading-relaxed mb-1">
            <code>&lt;strong&gt;</code> indicates important text (semantic), while <code>&lt;b&gt;</code> makes text bold without extra meaning.
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
            {<p>This is <strong>important</strong> and this is <b>bold</b>.</p>}\
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">&lt;em&gt; / &lt;i&gt;</h3>
          <p className="leading-relaxed mb-3">
            <code>&lt;em&gt;</code> adds emphasis (semantic), and <code>&lt;i&gt;</code> italicizes text without semantic emphasis.
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
            <code>{<p>This is <em>emphasized</em> and this is <i>italic</i>.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">&lt;small&gt;</h3>
          <p className="leading-relaxed mb-3">
            Renders text smaller, often used for fine print or disclaimers.
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
            {<p>Terms and conditions <small>apply</small>.</p>}
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">&lt;mark&gt;</h3>
          <p className="leading-relaxed mb-3">
            Highlights text as if marked with a highlighter.
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
            {<p>Please read the <mark>important</mark> note.</p>}
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">&lt;code&gt;</h3>
          <p className="leading-relaxed mb-3">
            Displays inline code or code-like text in a monospace font.
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
            <code>{<p>Use <code>console.log()</code> to print to console.</p>}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">&lt;sub&gt; / &lt;sup&gt;</h3>
          <p className="leading-relaxed mb-3">
            <code>&lt;sub&gt;</code> is subscript and <code>&lt;sup&gt;</code> is superscript (used in formulas, footnotes).
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
            {<p>H<sub>2</sub>O is water, E = mc<sup>2</sup>.</p>}
          </pre>
        </div>
      </section>

      {/* Semantic vs Styling */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Semantic vs Pure Styling</h2>
        <p className="leading-relaxed mb-3">
          Use semantic tags when meaning matters (<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>). Avoid using them solely to achieve visual effects—use CSS for that (e.g., <code>font-weight</code>, <code>font-style</code>).
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility Tips</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Using <code>&lt;b&gt;</code> or <code>&lt;i&gt;</code> when semantic meaning is intended; prefer <code>&lt;strong&gt;</code> / <code>&lt;em&gt;</code>.</li>
          <li>Using formatting tags for layout instead of CSS.</li>
          <li>Mixing inline block-level semantics improperly in a way that confuses screen readers.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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