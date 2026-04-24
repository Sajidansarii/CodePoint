const HTMLIdAttribute = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML <code>id</code> Attribute
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        The <code>id</code> attribute gives an HTML element a <strong>unique identifier</strong> on the page. It is used to target that single element with CSS, JavaScript, or internal links.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">div</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"header"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">h1</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Welcome to CodePoint</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">h1</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mt-3">
          Here, the <code>&lt;div&gt;</code> has an <code>id</code> of <code>header</code>. That ID must be unique in the entire HTML document.
        </p>
      </section>

      {/* CSS Selection */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Targeting with CSS</h2>
        <p className="leading-relaxed mb-3">
          Use the <code>#</code> symbol to select an element by its ID in CSS:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-purple-600">#header</span>
    <span className="text-gray-500"> &#123;</span>
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;background-color</span>:
    <span className="text-green-600"> #f0f8ff</span>;
    <br/>

    <span className="text-red-500">&nbsp;&nbsp;padding</span>:
    <span className="text-blue-600"> 10px</span>;
    <br/>

    <span className="text-gray-500">&#125;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          This styles only the element with <code>id="header"</code>.
        </p>
      </section>

      {/* JavaScript Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Using ID in JavaScript</h2>
        <p className="leading-relaxed mb-3">
          JavaScript can grab the element directly by its ID:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-purple-600">const</span>
    <span className="text-orange-600"> header</span>
    <span className="text-gray-500"> = </span>
    <span className="text-blue-600">document</span>.
    <span className="text-blue-600">getElementById</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">'header'</span>
    <span className="text-gray-500">);</span>
    <br/>

    <span className="text-orange-600">header</span>.
    <span className="text-blue-600">style</span>.
    <span className="text-blue-600">border</span>
    <span className="text-gray-500"> = </span>
    <span className="text-green-600">'2px solid blue'</span>
    <span className="text-gray-500">;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          Or with query selector:
          <code className="ml-1">{document.querySelector('#header')}</code>
        </p>
      </section>

      {/* ID vs Class */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">ID vs Class</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mt-3 text-sm">
  <code>
    <span className="text-gray-400">&lt;!-- ID (unique) --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">div</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"main-title"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Hello</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span>
    <br/>
    <br/>

    <span className="text-gray-400">&lt;!-- Class (reusable) --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>

    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"highlight"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Text A</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>

    <span className="text-red-500"> class</span>=
    <span className="text-green-600">"highlight"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Text B</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Keep IDs meaningful and descriptive (e.g., <code>site-header</code>, <code>user-form</code>).</li>
          <li>Avoid using the same ID more than once; duplicates break uniqueness assumptions.</li>
          <li>Prefer classes for styling multiple elements; use IDs for unique hooks or anchors.</li>
          <li>Use kebab-case or camelCase consistently (e.g., <code>main-footer</code>).</li>
        </ul>
      </section>

      {/* Accessibility / Anchors */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Anchor Links</h2>
        <p className="leading-relaxed mb-3">
          IDs can be used as targets for internal navigation:
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">a</span>

    <span className="text-red-500"> href</span>=
    <span className="text-green-600">"#features"</span>

    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">See Features</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">a</span>
    <span className="text-gray-500">&gt;</span>
    <br/>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">section</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"features"</span>

    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">h2</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Features</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">h2</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;...</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">section</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Using the same ID on multiple elements.</li>
          <li>Including spaces in an ID (invalid; use hyphens or underscores instead).</li>
          <li>Relying on IDs for styling when classes would be more appropriate for reuse.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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