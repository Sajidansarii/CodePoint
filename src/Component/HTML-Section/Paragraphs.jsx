const HTMLParagraphs = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML Paragraphs
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Paragraphs are the basic building blocks for text content in HTML. They are defined using the <code>&lt;p&gt;</code> tag and help separate blocks of text for readability.
      </p>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Basic Usage</h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    This is the first paragraph.
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    This is the second paragraph.
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          Each <code>&lt;p&gt;</code> creates a separate block of text with default spacing before and after.
        </p>
      </section>

      {/* Advanced */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Spacing & Nesting</h2>
        <p className="leading-relaxed mb-3">
          Browsers automatically add some margin around paragraphs. You can customize spacing with CSS. Avoid nesting block-level elements like another <code>&lt;p&gt;</code> inside a paragraph.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- Wrong --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    This is
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    nested
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    paragraph.
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;!-- Correct --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    This is a paragraph with
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">strong</span>
    <span className="text-gray-500">&gt;</span>
    inline
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">strong</span>
    <span className="text-gray-500">&gt;</span>
    formatting.
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Attributes & Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Tips & Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Use paragraphs to logically separate ideas.</li>
          <li>Don't use <code>&lt;p&gt;</code> purely for spacing; control layout with CSS when needed.</li>
          <li>Inline elements like <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, or <code>&lt;a&gt;</code> can go inside paragraphs.</li>
          <li>Keep content clear and concise; break long text into multiple paragraphs.</li>
        </ul>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility Notes</h2>
        <p className="leading-relaxed mb-3">
          Proper use of paragraphs improves readability for everyone, including screen reader users. Avoid using line breaks (<code>&lt;br&gt;</code>) excessively instead of real paragraphs.
        </p>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Using paragraphs to style spacing instead of CSS.</li>
          <li>Nesting block elements (like another <code>&lt;p&gt;</code>) inside a paragraph.</li>
          <li>Overloading a single paragraph with too much content; break into multiple for clarity.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li><code>&lt;p&gt;</code> defines a paragraph.</li>
          <li>Paragraphs separate ideas and improve readability.</li>
          <li>Inline formatting is allowed inside paragraphs.</li>
          <li>Avoid nesting block-level elements inside a paragraph.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLParagraphs;