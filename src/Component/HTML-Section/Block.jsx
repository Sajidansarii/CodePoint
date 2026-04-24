const HTMLBlockElements = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">Block-level Elements</h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3"><span className="text-red-400 bg-gray-50">Block-level</span> elements create structure by taking the full available width and starting on a new line. They are used for major building blocks of a page like sections, paragraphs, and containers.</p>

      {/* Definition & Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">What is a Block Element?</h2>
        <p className="leading-relaxed mb-3">
          A block-level element always starts on a new line and stretches to fill its container’s width by default. Examples include <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;article&gt;</code>.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
          <code>
            <span className="text-gray-30">&lt;</span>
            <span className="text-blue-500">div</span>
            <span className="text-gray-30">&gt;</span><br></br>
            <span className="text-gray-30">&lt;</span> 
            <span className="text-blue-500">h1</span>
            <span className="text-gray-30">&lt;</span>
            <span className="">Title</span>
            <span className="text-gray-30">&lt;/</span>
            <span className="text-blue-500">h1</span>
            <span className="text-gray-30">&gt;</span><br></br>
            <span className="text-gray-30">&lt;</span>
            <span className="text-blue-500">p</span>
            <span className="text-gray-30">&gt;</span>
            <span className="text-gray-30">This is a paragraph inside a block.</span>
            <span className="text-gray-30">&lt;/</span>
            <span className="text-blue-500">p</span>
            <span className="text-gray-30">&gt;</span><br></br>
            <span className="text-gray-30">&lt;/</span>
            <span className="text-blue-500">div</span>
            <span className="text-gray-30">&gt;</span>
          </code>
        </pre>
      </section>

      {/* Block vs Inline */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Block vs Inline</h2>
        <p className="leading-relaxed mb-3">Understanding the difference helps with layout:</p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-2">
          <li>
            <strong>Block:</strong> Starts on a new line and stretches horizontally (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).
          </li>
          <li>
            <strong>Inline:</strong> Flows inside a line and only takes as much width as needed (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).
          </li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
         <code>
          <span className="text-gray-30">&lt;</span>
          <span className="">!-- Block elements stack vrtically</span>
          <span className="text-gray-30">--&gt;</span><br></br>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">div</span>
          <span className="text-gray-30">&gt;</span>
          <span className="">Block 1</span>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">div</span>
          <span className="text-gray-30">&gt;</span><br></br>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">div</span>
          <span className="text-text-30">&gt;</span>
          <span className="">Block 2</span>
          <span className="text-gray-30">&lt;/</span>
          <span className="text-blue-500">div</span>
          <span className="text-gray-30">&gt;</span><br></br><br></br>
          <span className="text-gray-30">&lt;</span>
          <span className="text-gray-30">!-- Inline elements sit horizontal --</span>
          <span className="text-gray-30">&gt;</span><br></br>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">span</span>
          <span className="">Inline 1</span>
          <span className="text-gray-30">&lt;/</span>
          <span className="text-blue-500">span</span>
          <span className="text-gray-30">&gt;</span><br></br>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">span</span>
          <span className="">Inline 2</span>
          <span className="text-gray-30">&lt;/</span>
          <span className="text-blue-500">span</span>
          <span className="text-gray-30">&gt;</span>
         </code>
        </pre>
      </section>

      {/* Changing Display */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Changing Display Behavior</h2>
        <p className="leading-relaxed mb-3">
          You can override default behavior with CSS using the <code>display</code> property.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
         <code>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">div</span>
          <span className="text-red-500"> style=</span>
          <span className="text-green-600">"display: inline";</span>
          <span className="text-gray-30">&gt;</span>
          <span>This behaves like inline</span>
          <span className="text-gray-30">&lt;/</span>
          <span className="text-blue-500">div</span>
          <span className="text-gray-30">&gt;</span><br></br>
          <span className="text-gray-30">&lt;</span>
          <span className="text-blue-500">span</span>
          <span className="text-red-500"> style=</span>
          <span className="text-green-600">"display: block";</span>
          <span className="text-gray-30">&gt;</span>
          <span className="">This behaves like block</span>
          <span className="text-gray-30">&lt;/</span>
          <span className="text-blue-500">span</span>
          <span className="text-gray-30">&gt;</span>
         </code>

          {/* {`<div style="display: inline;">This behaves like inline</div>
<span style="display: block;">This behaves like block</span>`} */}
       
       
        </pre>


        <p className="leading-relaxed">
          This gives flexibility when building layouts.
        </p>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Use block elements to group related content (e.g., wrap sections in <code>&lt;section&gt;</code> or <code>&lt;div&gt;</code>).</li>
          <li>Avoid using block-level elements inside inline contexts incorrectly.</li>
          <li>Control spacing and layout with CSS instead of abusing block nesting for visuals.</li>
        </ul>
      </section>

      {/* Accessibility / Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Structure & Accessibility</h2>
        <p className="leading-relaxed mb-2">
          Semantic block elements like <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> help screen readers and search engines understand page structure better.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
          <li>Block elements start on a new line and span full width by default.</li>
          <li>Inline elements stay in-line; use CSS <code>display</code> to change behavior.</li>
          <li>Use semantic block tags for clearer structure and accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLBlockElements;