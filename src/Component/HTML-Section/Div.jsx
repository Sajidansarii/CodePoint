const HTMLDivElement = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML &lt;div&gt; Element
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-4">
        The <code>&lt;div&gt;</code> element is a block-level container used to group and
        structure HTML content. It does not have any inherent meaning but is widely
        used for layout and styling purposes with CSS.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`<div>
  <h2>Title</h2>
  <p>This is some text inside a div.</p>
</div>`}</code>
        </pre>
        <p className="text-gray-700">
          In this example, the heading and paragraph are grouped together inside a
          <code> &lt;div&gt;</code>.
        </p>
      </section>

      {/* Purpose */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Use &lt;div&gt;?</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>To group related HTML elements together.</li>
          <li>To apply styles or layout rules to multiple elements at once.</li>
          <li>To use as a container for positioning content with CSS.</li>
        </ul>
      </section>

      {/* Styling Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Styling a &lt;div&gt; with CSS</h2>
        <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto text-sm">
          <code>{`<div style="background-color: lightblue; padding: 10px;">
  <h3>Welcome!</h3>
  <p>This div has a light blue background and padding.</p>
</div>`}</code>
        </pre>
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-semibold text-lg">Welcome!</h3>
          <p>This div has a light blue background and padding.</p>
        </div>
      </section>

      {/* Div vs Semantic Elements */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          &lt;div&gt; vs Semantic Elements
        </h2>
        <p className="text-gray-700 mb-2">
          While <code>&lt;div&gt;</code> is useful for grouping, HTML5 introduced
          semantic elements like <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,
          and <code>&lt;aside&gt;</code> that describe the purpose of the content.
          Use <code>&lt;div&gt;</code> only when no semantic element fits.
        </p>
      </section>

      {/* Accessibility Note */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tip</h2>
        <p className="text-gray-700">
          Overusing <code>&lt;div&gt;</code> without semantic meaning can make it
          harder for assistive technologies to interpret the structure of a page.
          Prefer semantic tags when possible.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><code>&lt;div&gt;</code> is a block-level container for grouping content.</li>
          <li>Commonly used for styling and layout purposes.</li>
          <li>Does not carry semantic meaning—use semantic tags when applicable.</li>
          <li>Can be styled using CSS for design and positioning.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLDivElement;