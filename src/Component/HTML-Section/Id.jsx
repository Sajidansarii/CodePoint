const HTMLIdAttribute = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML <code>id</code> Attribute
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>id</code> attribute gives an HTML element a <strong>unique identifier</strong> on the page. It is used to target that single element with CSS, JavaScript, or internal links.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<div id="header">
  <h1>Welcome to CodePoint</h1>
</div>`}</code>
        </pre>
        <p className="text-gray-700">
          Here, the <code>&lt;div&gt;</code> has an <code>id</code> of <code>header</code>. That ID must be unique in the entire HTML document.
        </p>
      </section>

      {/* CSS Selection */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Targeting with CSS</h2>
        <p className="text-gray-700 mb-2">
          Use the <code>#</code> symbol to select an element by its ID in CSS:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`#header {
  background-color: #f0f8ff;
  padding: 10px;
}`}</code>
        </pre>
        <p className="text-gray-700">
          This styles only the element with <code>id="header"</code>.
        </p>
      </section>

      {/* JavaScript Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Using ID in JavaScript</h2>
        <p className="text-gray-700 mb-2">
          JavaScript can grab the element directly by its ID:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`const header = document.getElementById('header');
header.style.border = '2px solid blue';`}</code>
        </pre>
        <p className="text-gray-700">
          Or with query selector:
          <code className="ml-1">{document.querySelector('#header')}</code>
        </p>
      </section>

      {/* ID vs Class */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">ID vs Class</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <strong>ID</strong> must be <em>unique</em> per page; used for a single element. Selected with <code>#</code>.
          </li>
          <li>
            <strong>Class</strong> can be reused on many elements; selected with <code>.</code>.
          </li>
          <li>
            Use <code>id</code> when you need to reference one specific element (e.g., anchor links, JavaScript hooks).
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm">
          <code>{`<!-- ID (unique) -->
<div id="main-title">Hello</div>

<!-- Class (reusable) -->
<p class="highlight">Text A</p>
<p class="highlight">Text B</p>`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Keep IDs meaningful and descriptive (e.g., <code>site-header</code>, <code>user-form</code>).</li>
          <li>Avoid using the same ID more than once; duplicates break uniqueness assumptions.</li>
          <li>Prefer classes for styling multiple elements; use IDs for unique hooks or anchors.</li>
          <li>Use kebab-case or camelCase consistently (e.g., <code>main-footer</code>).</li>
        </ul>
      </section>

      {/* Accessibility / Anchors */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Anchor Links</h2>
        <p className="text-gray-700 mb-2">
          IDs can be used as targets for internal navigation:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<a href="#features">See Features</a>

<section id="features">
  <h2>Features</h2>
  ...
</section>`}</code>
        </pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Using the same ID on multiple elements.</li>
          <li>Including spaces in an ID (invalid; use hyphens or underscores instead).</li>
          <li>Relying on IDs for styling when classes would be more appropriate for reuse.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>id</code> gives a single element a unique identifier.</li>
          <li>Selected in CSS with <code>#</code> and in JS with <code>getElementById</code>.</li>
          <li>IDs must be unique; classes are for reuse.</li>
          <li>Useful for anchor links and JavaScript targeting.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLIdAttribute;