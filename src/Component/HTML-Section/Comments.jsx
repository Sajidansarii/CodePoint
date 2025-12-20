const HTMLComments = () => {
  return (
    <div className="p-4 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-4">HTML Comments</h1>

      {/* Intro */}
      <p className="leading-relaxed mb-4">
        HTML comments are notes inside the code that browsers ignore. They help developers explain or temporarily disable parts of HTML.
      </p>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Syntax</h2>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto text-sm">
            {'<!-- This is a comment -->'}
        </pre>
        <p className="leading-relaxed mt-3">
          Anything between <code>&lt;!--</code> and <code>--&gt;</code> is ignored by the browser.
        </p>
      </section>

      {/* Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Example</h2>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 overflow-x-auto text-sm">
           {`<!-- Navigation starts here -->
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
  </ul>
</nav>`}
        </pre>
      </section>

      {/* Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Comments look like <code>&lt;!-- comment --&gt;</code>.</li>
          <li>Browsers ignore them; useful for notes or disabling code.</li>
          <li>Don't put secrets inside comments.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLComments;