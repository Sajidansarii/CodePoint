const HTMLLists = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML Lists
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML lists let you group related items together. They help organize content in a readable way. There are three main types of lists: unordered, ordered, and definition lists.
      </p>

      {/* Unordered List */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Unordered List</h2>
        <p className="text-gray-700 mb-2">
          An unordered list displays items with bullets. Use the <code>&lt;ul&gt;</code> tag with nested <code>&lt;li&gt;</code> items.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>`}</code>
        </pre>
        <p className="text-gray-700">
          Output: • Apple, • Banana, • Cherry
        </p>
      </section>

      {/* Ordered List */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. Ordered List</h2>
        <p className="text-gray-700 mb-2">
          An ordered list shows items in sequence using numbers. Use the <code>&lt;ol&gt;</code> tag.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`}</code>
        </pre>
        <p className="text-gray-700">
          Output: 1. First step, 2. Second step, 3. Third step
        </p>
      </section>

      {/* Definition List */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">3. Definition List</h2>
        <p className="text-gray-700 mb-2">
          A definition list pairs terms and descriptions using <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> (term), and <code>&lt;dd&gt;</code> (description).
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}</code>
        </pre>
      </section>

      {/* Nested Lists */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">4. Nested Lists</h2>
        <p className="text-gray-700 mb-2">
          Lists can be nested inside other list items to create hierarchy.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>`}</code>
        </pre>
      </section>

      {/* Attributes & Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">5. Tips & Common Attributes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li>
            Use <code>&lt;li&gt;</code> only inside <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, or <code>&lt;menu&gt;</code>.
          </li>
          <li>
            You can change numbering style with CSS (e.g., decimal, roman, letters).
          </li>
          <li>
            Nested lists inherit indentation; keep structure clean for readability.
          </li>
        </ul>
        <p className="text-gray-700">
          Example of customizing start value in ordered list:
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<ol start="5">
  <li>Item five</li>
  <li>Item six</li>
</ol>`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">6. Accessibility Notes</h2>
        <p className="text-gray-700 mb-2">
          Well-structured lists help screen readers and users navigate content more easily.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use semantic list tags (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;dl&gt;</code>) instead of styling non-list elements to look like lists.</li>
          <li>Ensure nested lists are properly indented in markup (not just visually with CSS).</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li><strong>Unordered lists</strong> use bullets (<code>&lt;ul&gt;</code>).</li>
          <li><strong>Ordered lists</strong> use numbers (<code>&lt;ol&gt;</code>).</li>
          <li><strong>Definition lists</strong> pair terms with descriptions (<code>&lt;dl&gt;</code>).</li>
          <li>Lists can be nested for sub-items.</li>
          <li>Semantic markup improves accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLLists;