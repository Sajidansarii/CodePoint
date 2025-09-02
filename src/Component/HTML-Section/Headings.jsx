const HTMLHeadings = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML Headings
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Headings define the structure and hierarchy of content on a webpage. HTML provides six levels of headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, where <code>&lt;h1&gt;</code> is the most important and largest, and <code>&lt;h6&gt;</code> is the least.
      </p>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Usage</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>`}</code>
        </pre>
        <p className="text-gray-700">
          These tags help both users and search engines understand the hierarchy of your content.
        </p>
      </section>

      {/* Semantic Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Semantic Structure & Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use exactly one <code>&lt;h1&gt;</code> per page for the main topic/title.</li>
          <li>Use heading levels in order: e.g., don’t jump from <code>&lt;h1&gt;</code> to <code>&lt;h4&gt;</code> without intermediate context.</li>
          <li>Headings should be descriptive and concise.</li>
          <li>Don’t use headings purely for styling; use CSS if you need visual size changes.</li>
        </ul>
      </section>

      {/* Accessibility & SEO */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility & SEO</h2>
        <p className="text-gray-700 mb-2">
          Proper heading structure improves screen reader navigation and helps search engines index your content better.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Screen readers use headings to let users jump between sections.</li>
          <li>Logical heading order (no skipping) preserves document outline.</li>
          <li>Include relevant keywords naturally in headings for SEO.</li>
        </ul>
      </section>

      {/* Nested Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Nested Example</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<article>
  <h1>Blog Title</h1>
  <section>
    <h2>Introduction</h2>
    <p>...</p>
  </section>
  <section>
    <h2>Main Topic</h2>
    <h3>Subtopic A</h3>
    <h3>Subtopic B</h3>
  </section>
</article>`}</code>
        </pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Using multiple <code>&lt;h1&gt;</code> elements for styling instead of structure.</li>
          <li>Skipping heading levels arbitrarily (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h5&gt;</code>).</li>
          <li>Putting non-title content inside heading tags just to make it bold or large.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Headings range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code>.</li>
          <li>Use one <code>&lt;h1&gt;</code> per page and preserve logical order.</li>
          <li>Improves accessibility and SEO when structured correctly.</li>
          <li>Avoid using headings just for visual styling.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLHeadings;