import React from "react";
 
const SemanticHTML = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        Semantic HTML5 Tags
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Semantic HTML means using HTML elements that clearly describe their meaning both to the browser and to developers. HTML5 introduced several new <strong>semantic tags</strong> that replace generic containers like <code>&lt;div&gt;</code> with meaningful structure.
      </p>

      {/* Why Semantic */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Use Semantic Tags?</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Improves <strong>accessibility</strong> (screen readers can better understand page structure).</li>
          <li>Helps <strong>SEO</strong> because search engines can infer the role of each section.</li>
          <li>Makes code more readable and maintainable for developers.</li>
          <li>Provides meaningful structure instead of generic wrappers.</li>
        </ul>
      </section>

      {/* Common Semantic Tags */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common HTML5 Semantic Tags</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">1. &lt;header&gt;</h3>
          <p className="text-gray-700 mb-1">
            Represents introductory content or navigation (usually at top of a page or section).
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`<header>
  <h1>Site Title</h1>
  <nav>…</nav>
</header>`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">2. &lt;nav&gt;</h3>
          <p className="text-gray-700 mb-1">
            Contains navigation links.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">3. &lt;main&gt;</h3>
          <p className="text-gray-700 mb-1">
            The primary content of the document. There should be only one <code>&lt;main&gt;</code> per page.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">4. &lt;section&gt;</h3>
          <p className="text-gray-700 mb-1">
            Thematic grouping of content, usually with a heading.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`<section>
  <h2>Features</h2>
  <p>Details about features...</p>
</section>`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">5. &lt;article&gt;</h3>
          <p className="text-gray-700 mb-1">
            Self-contained content that makes sense on its own (e.g., blog post, news item).
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">6. &lt;aside&gt;</h3>
          <p className="text-gray-700 mb-1">
            Content related to the main content but separate, like a sidebar or callout.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-1">7. &lt;footer&gt;</h3>
          <p className="text-gray-700 mb-1">
            Footer for a page or section, often contains copyright, links, and contact info.
          </p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`<footer>
  <p>&copy; 2025 CodePoint</p>
</footer>`}</code>
          </pre>
        </div>
      </section>

      {/* Non-semantic vs Semantic */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Semantic vs Non-Semantic</h2>
        <p className="text-gray-700 mb-2">
          Before HTML5, developers often used generic tags like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> for layout. These are called <strong>non-semantic</strong> because they don’t describe their purpose.
        </p>
        <p className="text-gray-700">
          Using semantic tags instead gives meaning:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!-- Non-semantic -->
<div class="header">...</div>
<div class="nav">...</div>

<!-- Semantic -->
<header>...</header>
<nav>...</nav>`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Benefits</h2>
        <p className="text-gray-700 mb-2">
          Screen readers can jump to sections like <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;article&gt;</code>, making navigation easier for users with disabilities.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use one <code>&lt;main&gt;</code> per page.</li>
          <li>Headings inside semantic sections should be hierarchical.</li>
          <li>Don’t skip heading levels to preserve structure.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Semantic HTML uses meaningful tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>.</li>
          <li>Improves accessibility and SEO.</li>
          <li>Replaces generic <code>&lt;div&gt;</code> where appropriate.</li>
          <li>Helps both users and developers understand page structure.</li>
        </ul>
      </div>
    </div>
  );
};

export default SemanticHTML;