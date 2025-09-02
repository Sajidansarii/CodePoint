const HTMLParagraphs = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML Paragraphs
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Paragraphs are the basic building blocks for text content in HTML. They are defined using the <code>&lt;p&gt;</code> tag and help separate blocks of text for readability.
      </p>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Usage</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>`}</code>
        </pre>
        <p className="text-gray-700">
          Each <code>&lt;p&gt;</code> creates a separate block of text with default spacing before and after.
        </p>
      </section>

      {/* Advanced */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Spacing & Nesting</h2>
        <p className="text-gray-700 mb-2">
          Browsers automatically add some margin around paragraphs. You can customize spacing with CSS. Avoid nesting block-level elements like another <code>&lt;p&gt;</code> inside a paragraph.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- Wrong -->
<p>This is <p>nested</p> paragraph.</p>

<!-- Correct -->
<p>This is a paragraph with <strong>inline</strong> formatting.</p>`}</code>
        </pre>
      </section>

      {/* Attributes & Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Tips & Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use paragraphs to logically separate ideas.</li>
          <li>Don't use <code>&lt;p&gt;</code> purely for spacing; control layout with CSS when needed.</li>
          <li>Inline elements like <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, or <code>&lt;a&gt;</code> can go inside paragraphs.</li>
          <li>Keep content clear and concise; break long text into multiple paragraphs.</li>
        </ul>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Notes</h2>
        <p className="text-gray-700 mb-2">
          Proper use of paragraphs improves readability for everyone, including screen reader users. Avoid using line breaks (<code>&lt;br&gt;</code>) excessively instead of real paragraphs.
        </p>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Using paragraphs to style spacing instead of CSS.</li>
          <li>Nesting block elements (like another <code>&lt;p&gt;</code>) inside a paragraph.</li>
          <li>Overloading a single paragraph with too much content; break into multiple for clarity.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
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