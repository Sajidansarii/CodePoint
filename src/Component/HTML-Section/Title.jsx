const HTMLPageTitle = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Page Title
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The HTML page title is set using the <code>&lt;title&gt;</code> element inside the{" "}
        <code>&lt;head&gt;</code> section of an HTML document. It is displayed on the browser tab,
        used by search engines, and appears as the default name when bookmarking a page.
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>`}</code>
        </pre>
        <p className="text-gray-700">
          In this example, <strong>My First Webpage</strong> will appear in the browser tab.
        </p>
      </section>

      {/* Importance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why the Page Title is Important</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Keep it concise — ideally under 60 characters.</li>
          <li>Include relevant keywords naturally for SEO.</li>
          <li>Ensure it accurately describes the page content.</li>
          <li>Avoid using the same title for multiple pages.</li>
        </ul>
      </section>

      {/* Example for CodePoint */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Example for CodePoint</h2>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`<html>
  <head>
    <title>HTML Tutorial - CodePoint</title>
  </head>
  <body>
    <h1>Learn HTML with CodePoint</h1>
  </body>
</html>`}</code>
        </pre>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
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