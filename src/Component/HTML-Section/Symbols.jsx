const HTMLSymbols = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML Symbols
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Symbols are special characters that are not easily typed or that have reserved meaning in HTML (like &lt; or &amp;). To display them correctly, HTML uses <strong>entities</strong>—either named or numeric—so the browser shows the symbol instead of interpreting it as code.
      </p>

      {/* Basic Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Displaying Symbols</h2>
        <p className="text-gray-700 mb-2">
          Use HTML entities to show symbols. There are two types:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li>
            <strong>Named:</strong> easier to read, e.g., <code>&amp;copy;</code> for ©.
          </li>
          <li>
            <strong>Numeric:</strong> code point, e.g., <code>&amp;#169;</code> or hexadecimal <code>&amp;#xA9;</code>.
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`&amp;copy;  → ©
&amp;#169; → ©
&amp;#x2665; → ♥
&amp;le; → ≤`}</code>
        </pre>
      </section>

      {/* Common Symbol Categories */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Symbols</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">1. Currency</h3>
          <p className="text-gray-700 mb-1">
            Examples: dollar, euro, rupee, pound
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`&amp;#36; → $
&amp;euro; → €
&amp;#8377; → ₹
&amp;pound; → £`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">2. Mathematical</h3>
          <p className="text-gray-700 mb-1">
            Symbols used in math and logic.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`&amp;le; → ≤
&amp;ge; → ≥
&amp;times; → ×
&amp;divide; → ÷`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">3. Arrows</h3>
          <p className="text-gray-700 mb-1">
            Directional indicators.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`&amp;rarr; → →
&amp;larr; → ←
&amp;uarr; → ↑
&amp;darr; → ↓`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">4. Miscellaneous</h3>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`&amp;hearts; → ♥
&amp;star; → ★ (some use &#9733;)
&amp;bull; → •
&amp;mdash; → —`}</code>
          </pre>
        </div>
      </section>

      {/* Reserved Character Escaping */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Escaping Reserved Characters</h2>
        <p className="text-gray-700 mb-2">
          Some characters have special meaning in HTML and must be escaped to display literally.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`&amp;lt; → <
&amp;gt; → >
&amp;amp; → &
&amp;quot; → " 
&amp;#39; → '`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility</h2>
        <p className="text-gray-700 mb-2">
          Symbols can be ambiguous; if the meaning isn’t clear, provide a text explanation or use <code>aria-label</code>.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{'<span aria-label="warning">⚠</span> <span>Be careful!</span>'}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use named entities for readability when available (e.g., <code>&amp;copy;</code> instead of <code>&amp;#169;</code>).</li>
          <li>Escape reserved HTML characters to avoid broken markup.</li>
          <li>Provide context for symbolic content for accessibility.</li>
          <li>Prefer Unicode characters directly when safe and supported, but fallback to entities if encoding issues arise.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>HTML symbols often require entities to display correctly.</li>
          <li>Named (e.g., <code>&amp;copy;</code>) and numeric (e.g., <code>&amp;#169;</code>) formats exist.</li>
          <li>Escape reserved characters like &lt;, &gt;, &amp; to avoid parsing issues.</li>
          <li>Use <code>aria-label</code> if symbol meaning isn’t obvious.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLSymbols;