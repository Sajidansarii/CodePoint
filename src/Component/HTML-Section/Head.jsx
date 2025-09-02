const HTMLHead = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML &lt;head&gt; Section
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>&lt;head&gt;</code> element contains metadata and resources that are used by the browser, search engines, and tools—but are not directly visible on the page. It sets up the document before the content in <code>&lt;body&gt;</code> is rendered.
      </p>

      {/* Basic Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Structure</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- visible content -->
  </body>
</html>`}</code>
        </pre>
        <p className="text-gray-700">
          Everything inside <code>&lt;head&gt;</code> helps define the document’s settings, identity, and linked assets.
        </p>
      </section>

      {/* Common Elements */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Elements Inside &lt;head&gt;</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <code>&lt;meta charset="UTF-8" /&gt;</code> — Defines character encoding (always put early).
          </li>
          <li>
            <code>&lt;title&gt;</code> — The page title shown in browser tabs and search results.
          </li>
          <li>
            <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code> — Responsive setup for mobile devices.
          </li>
          <li>
            <code>&lt;meta name="description" content="Brief summary of the page" /&gt;</code> — Used by search engines for snippets.
          </li>
          <li>
            <code>&lt;link rel="stylesheet" href="styles.css" /&gt;</code> — External CSS.
          </li>
          <li>
            <code>&lt;link rel="icon" href="/favicon.ico" /&gt;</code> — Browser tab icon.
          </li>
          <li>
            <code>&lt;script src="script.js" defer&gt;&lt;/script&gt;</code> — External JavaScript; <code>defer</code> waits until parsing finishes.
          </li>
          <li>
            Open Graph / social preview meta tags (e.g., <code>og:title</code>, <code>og:description</code>) for link sharing.
          </li>
        </ul>
      </section>

      {/* Example Full Head */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Example &lt;head&gt; Section</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Tutorial - CodePoint</title>
  <meta name="description" content="Learn HTML basics with simple examples on CodePoint." />
  <link rel="stylesheet" href="/css/styles.css" />
  <link rel="icon" href="/favicon.ico" />
  <script src="/js/main.js" defer></script>
</head>`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Include <code>charset</code> early to avoid encoding issues.</li>
          <li>Use a descriptive but concise <code>&lt;title&gt;</code> for SEO and clarity.</li>
          <li>Always include the viewport tag for mobile responsiveness.</li>
          <li>Use <code>defer</code> or <code>async</code> for scripts to avoid blocking rendering.</li>
          <li>Keep metadata (description, open graph) relevant and updated per page.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Omitting the viewport meta on responsive pages.</li>
          <li>Using duplicate or missing <code>&lt;title&gt;</code> tags.</li>
          <li>Forgetting <code>defer</code> and blocking initial page render with heavy scripts.</li>
          <li>Having outdated or misleading meta description content.</li>
          <li>Not specifying <code>lang</code> on the <code>&lt;html&gt;</code> element (affects accessibility/search).</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>The <code>&lt;head&gt;</code> holds metadata and links—not visible directly.</li>
          <li>Essential tags: <code>charset</code>, <code>title</code>, <code>viewport</code>, CSS/JS includes.</li>
          <li>Use <code>defer</code> for scripts and provide clear titles/descriptions.</li>
          <li>Proper metadata improves SEO, accessibility, and responsiveness.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLHead;