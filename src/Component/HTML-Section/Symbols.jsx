const HTMLSymbols = () => {
  return (
    <div className="p-4 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Symbols
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Symbols are special characters that are not easily typed or that have reserved meaning in HTML (like &lt; or &amp;). To display them correctly, HTML uses <strong>entities</strong>—either named or numeric—so the browser shows the symbol instead of interpreting it as code.
      </p>

      {/* Basic Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Displaying Symbols</h2>
        <p className="leading-relaxed mb-3">
          Use HTML entities to show symbols. There are two types:
        </p>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed mb-3">
          <li>
            <strong>Named:</strong> easier to read, e.g., <code>&amp;copy;</code> for ©.
          </li>
          <li>
            <strong>Numeric:</strong> code point, e.g., <code>&amp;#169;</code> or hexadecimal <code>&amp;#xA9;</code>.
          </li>
        </ul>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&amp;copy;</span> → ©
    <br/>

    <span className="text-gray-500">&amp;#169;</span> → ©
    <br/>

    <span className="text-gray-500">&amp;#x2665;</span> → ♥
    <br/>

    <span className="text-gray-500">&amp;le;</span> → ≤
  </code>
</pre>
      </section>

      {/* Common Symbol Categories */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Symbols</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">1. Currency</h3>
          <p className="leading-relaxed mb-3">
            Examples: dollar, euro, rupee, pound
          </p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&amp;#36;</span> → $
    <br/>

    <span className="text-gray-500">&amp;euro;</span> → €
    <br/>

    <span className="text-gray-500">&amp;#8377;</span> → ₹
    <br/>

    <span className="text-gray-500">&amp;pound;</span> → £
  </code>
</pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">2. Mathematical</h3>
          <p className="leading-relaxed mb-3">
            Symbols used in math and logic.
          </p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&amp;le;</span> → ≤
    <br/>

    <span className="text-gray-500">&amp;ge;</span> → ≥
    <br/>

    <span className="text-gray-500">&amp;times;</span> → ×
    <br/>

    <span className="text-gray-500">&amp;divide;</span> → ÷
  </code>
</pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">3. Arrows</h3>
          <p className="leading-relaxed mb-3">
            Directional indicators.
          </p>
         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&amp;rarr;</span> → →
    <br/>

    <span className="text-gray-500">&amp;larr;</span> → ←
    <br/>

    <span className="text-gray-500">&amp;uarr;</span> → ↑
    <br/>

    <span className="text-gray-500">&amp;darr;</span> → ↓
  </code>
</pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">4. Miscellaneous</h3>
         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&amp;hearts;</span> → ♥
    <br/>

    <span className="text-gray-500">&amp;star;</span> → ★ (some use &#9733;)
    <br/>

    <span className="text-gray-500">&amp;bull;</span> → •
    <br/>

    <span className="text-gray-500">&amp;mdash;</span> → —
  </code>
</pre>
        </div>
      </section>

      {/* Reserved Character Escaping */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Escaping Reserved Characters</h2>
        <p className="leading-relaxed mb-3">
          Some characters have special meaning in HTML and must be escaped to display literally.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&amp;lt;</span> → &lt;
    <br/>

    <span className="text-gray-500">&amp;gt;</span> → &gt;
    <br/>

    <span className="text-gray-500">&amp;amp;</span> → &amp;
    <br/>

    <span className="text-gray-500">&amp;quot;</span> → "
    <br/>

    <span className="text-gray-500">&amp;#39;</span> → '
  </code>
</pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility</h2>
        <p className="leading-relaxed mb-3">
          Symbols can be ambiguous; if the meaning isn’t clear, provide a text explanation or use <code>aria-label</code>.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;span</span>
    <span className="text-red-500"> aria-label</span>=
    <span className="text-green-600">"warning"</span>
    <span className="text-gray-500">&gt;</span>
    ⚠
    <span className="text-gray-500">&lt;/span&gt;</span>
    {' '}
    <span className="text-gray-500">&lt;span&gt;</span>
    Be careful!
    <span className="text-gray-500">&lt;/span&gt;</span>
  </code>
</pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Use named entities for readability when available (e.g., <code>&amp;copy;</code> instead of <code>&amp;#169;</code>).</li>
          <li>Escape reserved HTML characters to avoid broken markup.</li>
          <li>Provide context for symbolic content for accessibility.</li>
          <li>Prefer Unicode characters directly when safe and supported, but fallback to entities if encoding issues arise.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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