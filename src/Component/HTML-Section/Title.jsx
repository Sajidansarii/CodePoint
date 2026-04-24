const HTMLPageTitle = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-3">
        HTML Page Title
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        The HTML page title is set using the <code>&lt;title&gt;</code> element inside the{" "}
        <code>&lt;head&gt;</code> section of an HTML document. It is displayed on the browser tab,
        used by search engines, and appears as the default name when bookmarking a page.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Basic Syntax</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!DOCTYPE html&gt;</span>
    <br/>

    <span className="text-blue-500">&lt;html&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-blue-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">title&gt;</span>
    <span className="text-gray-500">&gt;</span>
    My First Webpage
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
    Welcome to my website!
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">h1</span>
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
        <p className="leading-relaxed mt-3">
          In this example, <strong>My First Webpage</strong> will appear in the browser tab.
        </p>
      </section>

      {/* Importance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Why the Page Title is Important</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>
            <strong>Browser Tabs:</strong> Helps users identify which page is open.
          </li>
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Search engines display the page title in search results.
          </li>
          <li>
            <strong>Accessibility:</strong> Screen readers announce the page title to help users navigate.
          </li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Best Practices</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Keep it concise — ideally under 60 characters.</li>
          <li>Include relevant keywords naturally for SEO.</li>
          <li>Ensure it accurately describes the page content.</li>
          <li>Avoid using the same title for multiple pages.</li>
        </ul>
      </section>

      {/* Example for CodePoint */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Example for CodePoint</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">title</span>
    <span className="text-gray-500">&gt;</span>
    HTML Tutorial - CodePoint
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">title</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">h1</span>
    <span className="text-gray-500">&gt;</span>
    Learn HTML with CodePoint
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">h1</span>
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
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 text-gray-700">
          <li>The <code>&lt;title&gt;</code> tag sets the page title in the browser.</li>
          <li>Place it inside the <code>&lt;head&gt;</code> section.</li>
          <li>Important for browser tabs, SEO, and accessibility.</li>
          <li>Keep it short, descriptive, and unique per page.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLPageTitle;