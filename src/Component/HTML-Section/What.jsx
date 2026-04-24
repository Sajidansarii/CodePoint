function WhatIsHTML(){
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      
        <h1 className="text-2xl font-semibold text-blue-500 mb-3">What is HTML?</h1>
        <p className="text-gray-800 mb-4"><span className="text-red-400 bg-gray-50">HTML</span> stands for <span className="text-red-400 bg-gray-50">HyperText Markup Language</span>. It is the standard markup language used to create and structure content on the World Wide Web. </p>

      <section aria-label="Why it is called HyperText Markup Language">
        <h2 className="text-xl text-blue-500 mt-6 mb-2">Why is it called "HyperText Markup Language"?</h2>
        <ul className="list-[square] list-inside space-y-1 mb-5">
          <li>
            <strong>HyperText:</strong> Linking between web pages using <code>&lt;a&gt;</code> tags.
          </li>
          <li>
            <strong>Markup:</strong> Uses tags to define content.
          </li>
        </ul>
      </section>

      <section aria-label="HTML is not programming language">
        <h2 className="text-xl text-blue-500 mt-5 mb-3">HTML is not a Programming Language</h2>
        <p className="mb-3">HTML doesn’t include logic, conditions, or loops. It’s used to <em>structure</em> content, not to build logic like JavaScript does.</p>
      </section>

      <section aria-label="What HTML can do">
        <h2 className="text-xl text-blue-500 mt-6 mb-2">What Can HTML Do?</h2>
        <ul className="list-[square] list-inside space-y-1 mb-4">
          <li>Create headings, paragraphs, and lists</li>
          <li>Add images and videos</li>
          <li>Link pages together</li>
          <li>Embed forms for user interaction</li>
        </ul>
      </section>

      <section aria-label="Example HTML code">
        <h2 className="text-xl  text-blue-500 mt-6 mb-5">Example</h2>
        <div className="relative mb-4">
              <pre className="rounded-lg p-4 bg-gray-100 overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-gray-500">!DOCTYPE </span>
    <span className="text-blue-500">html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">title</span>
    <span className="text-gray-500">&gt;</span>
    <span>My First HTML Page</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">title</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">h1</span>
    <span className="text-gray-500">&gt;</span>
    <span>Welcome to CodePoint!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">h1</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    <span>This page is created using HTML.</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">html</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        </div>
      </section>

      <section aria-label="Summary">
        <h2 className="text-xl sm:text-2xl text-blue-500 mt-6 mb-2">Summary</h2>
        <ul className="list-[square] list-inside space-y-1 mb-4">
          <li>HTML = HyperText Markup Language</li>
          <li>Used to structure content on web pages</li>
          <li>HTML uses tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;a&gt;</code>, etc.</li>
          <li>HTML is not a programming language</li>
        </ul>
      </section>
    </div>
  );
}

export default WhatIsHTML;