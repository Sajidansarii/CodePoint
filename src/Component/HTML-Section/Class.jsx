const HTMLClassAttribute = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Main Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML <code>class</code> Attribute</h1>

      {/* Introduction */}
      <p className="leading-relaxed mb-3">
        The <span className="text-red-400 bg-gray-50">class</span> attribute is used to assign one or more class names to an HTML element. 
        Classes are primarily used to apply CSS styles or target elements with JavaScript.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-5">Syntax</h2>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
          <code>{<p class="highlight">This is highlighted text.</p>}</code>
        </pre>
        <p className="leading-relaxed mb-3">
       Here, the paragraph element is assigned a class named <code>highlight</code>. 
          You can style it in CSS like this:
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
          <code>
            <span className="text-gray-30">.</span>
            <span className="text-blue-500">highlight</span>
            <span className="text-gray-30">&#123;</span><br></br>
            <span className="text-red-500">background-color</span>
            <span className="text-gray-30">:</span>
            <span className="text-green-600"> yellow</span>
            <span className="text-gray-30">;</span><br></br>
            <span className="text-red-500">font-weight</span>
            <span className="text-gray-30">:</span>
            <span className="text-green-600"> bold</span>
            <span className="text-gray-30">;</span><br></br>
            <span className="text-gray-30">&#125;</span>
         </code>
        </pre>
      </section>

      {/* Multiple Classes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Multiple Classes</h2>
        <p className="leading-relaxed mb-3">
          You can assign multiple classes to an element by separating them with spaces. 
          Each class can have its own CSS rules.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
          <code>{<p class="highlight large-text">This text is highlighted and large.</p>}</code>
        </pre>

        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-10">
          <code>
            <span className="text-gray-30">.</span>
            <span className="text-blue-500">large-text</span>
            <span className="text-gray-30">&#123;</span><br></br>
            <span className="text-red-500">font-size</span>
            <span className="text-gray-30">:</span>
            <span className="text-green-600"> 20px</span>
            <span className="text-gray-30">;</span><br></br>
            <span className="text-gray-30">&#125;</span> 
         </code>
        </pre>
      </section>

      {/* JavaScript Usage */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Using Classes in JavaScript</h2>
        <p className="leading-relaxed mb-2">
          JavaScript can select and manipulate elements by their class name:
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
          <code>
            <span className="text-blue-500">document</span>
            <span className="text-gray-30">.</span>
            <span className="text-red-500">querySelectorAll</span>
            <span className="text-gray-30">&#40;</span>
            <span className="text-green-600">'.highlight'</span>
            <span className="text-gray-30">&#41;</span>
            <span className="text-gray-30">.</span>
            <span className="text-blue-500">forEach</span>
            <span className="text-gray-30">&#40;</span>
            <span className="text-red-500">el =&gt; el.style.color = </span>
            <span className="text-green-600">'red'</span>
            <span className="text-gray-30">&#41;</span>
            <span className="text-gray-30">;</span>   
         </code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>Use meaningful class names that describe the content or purpose, not the style (e.g., <code>btn-primary</code> instead of <code>blue-btn</code>).</li>
          <li>Keep class names lowercase, using hyphens to separate words (kebab-case).</li>
          <li>Avoid spaces within a single class name—spaces indicate multiple classes.</li>
        </ul>
      </section>

      {/* Accessibility Note */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Note</h2>
        <p className="leading-relaxed ">
          While classes themselves don’t affect accessibility, using semantic HTML along 
          with class-based styling helps ensure your site is usable by everyone.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
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