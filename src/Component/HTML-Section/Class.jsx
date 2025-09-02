const HTMLClassAttribute = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML <code>class</code> Attribute
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        The <code>class</code> attribute is used to assign one or more class names to an HTML element. 
        Classes are primarily used to apply CSS styles or target elements with JavaScript.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{<p class="highlight">This is highlighted text.</p>}</code>
        </pre>
        <p className="text-gray-700">
          Here, the paragraph element is assigned a class named <code>highlight</code>. 
          You can style it in CSS like this:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`.highlight {
  background-color: yellow;
  font-weight: bold;
}`}</code>
        </pre>
      </section>

      {/* Multiple Classes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Multiple Classes</h2>
        <p className="text-gray-700 mb-2">
          You can assign multiple classes to an element by separating them with spaces. 
          Each class can have its own CSS rules.
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{<p class="highlight large-text">This text is highlighted and large.</p>}</code>
        </pre>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mt-2">
          <code>{`.large-text {
  font-size: 20px;
}`}</code>
        </pre>
      </section>

      {/* JavaScript Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Using Classes in JavaScript</h2>
        <p className="text-gray-700 mb-2">
          JavaScript can select and manipulate elements by their class name:
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`document.querySelectorAll('.highlight')
  .forEach(el => el.style.color = 'red');`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use meaningful class names that describe the content or purpose, not the style (e.g., <code>btn-primary</code> instead of <code>blue-btn</code>).</li>
          <li>Keep class names lowercase, using hyphens to separate words (kebab-case).</li>
          <li>Avoid spaces within a single class name—spaces indicate multiple classes.</li>
        </ul>
      </section>

      {/* Accessibility Note */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Note</h2>
        <p className="text-gray-700">
          While classes themselves don’t affect accessibility, using semantic HTML along 
          with class-based styling helps ensure your site is usable by everyone.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>The <code>class</code> attribute assigns one or more class names to an element.</li>
          <li>Classes are mainly used for CSS styling and JavaScript manipulation.</li>
          <li>Separate multiple class names with spaces.</li>
          <li>Use descriptive, consistent naming for maintainability.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLClassAttribute;