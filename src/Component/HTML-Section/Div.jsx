const HTMLDivElement = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Main Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML &lt;div&gt; Element</h1>

      {/* Introduction */}
      <p className="leading-relaxed mb-3">
        The <code>&lt;div&gt;</code> element is a block-level container used to group and
        structure HTML content. It does not have any inherent meaning but is widely
        used for layout and styling purposes with CSS.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Basic Syntax</h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">h2</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Title</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">h2</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">This is some text inside a div.</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

        <p className="leading-relaxed">In this example, the heading and paragraph are grouped together inside a<code> &lt;div&gt;</code>.</p>
      </section>

      {/* Purpose */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Why Use &lt;div&gt;?</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>To group related HTML elements together.</li>
          <li>To apply styles or layout rules to multiple elements at once.</li>
          <li>To use as a container for positioning content with CSS.</li>
        </ul>
      </section>

      {/* Styling Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Styling a &lt;div&gt; with CSS</h2>
        <pre className="bg-gray-200 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-700"> style="background-color: lightblue; padding: 10px;"</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">h3</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Welcome!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">h3</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">This div has a light blue background and padding.</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">p</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">div</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>

        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-semibold text-lg">Welcome!</h3>
          <p>This div has a light blue background and padding.</p>
        </div>
      </section>

      {/* Div vs Semantic Elements */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">&lt;div&gt; vs Semantic Elements</h2>
        <p className="leading-relaxed mb-3">
          While <code>&lt;div&gt;</code> is useful for grouping, HTML5 introduced
          semantic elements like <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,
          and <code>&lt;aside&gt;</code> that describe the purpose of the content.
          Use <code>&lt;div&gt;</code> only when no semantic element fits.
        </p>
      </section>

      {/* Accessibility Note */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility Tip</h2>
        <p className="leading-relaxed mb-3">
          Overusing <code>&lt;div&gt;</code> without semantic meaning can make it
          harder for assistive technologies to interpret the structure of a page.
          Prefer semantic tags when possible.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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