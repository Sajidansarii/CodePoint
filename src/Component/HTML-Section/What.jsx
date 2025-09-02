import React, { useCallback } from "react";

const WhatIsHTML = () => {
  const codeString = `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to CodePoint!</h1>
    <p>This page is created using HTML.</p>
  </body>
</html>`;

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(codeString).catch(() => {
      // fallback if clipboard API fails
      const textarea = document.createElement("textarea");
      textarea.value = codeString;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(textarea);
    });
  }, [codeString]);

  return (
    <article className="p-4 sm:p-6 md:p-8 max-w-3xl prose prose-sm sm:prose-base dark:prose-invert bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
      <header>
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
          What is HTML?
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>. It is the standard markup language used to create and structure content on the World Wide Web.
        </p>
      </header>

      <section aria-label="Why it is called HyperText Markup Language">
        <h2 className="text-xl sm:text-2xl text-blue-500 mt-6 mb-2">
          Why is it called "HyperText Markup Language"?
        </h2>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>HyperText:</strong> Linking between web pages using <code>&lt;a&gt;</code> tags.
          </li>
          <li>
            <strong>Markup:</strong> Uses tags to define content.
          </li>
        </ul>
      </section>

      <section aria-label="HTML is not programming language">
        <h2 className="text-xl sm:text-2xl text-blue-500 mt-6 mb-2">
          HTML is not a Programming Language
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          HTML doesn’t include logic, conditions, or loops. It’s used to <em>structure</em> content, not to build logic like JavaScript does.
        </p>
      </section>

      <section aria-label="What HTML can do">
        <h2 className="text-xl sm:text-2xl text-blue-500 mt-6 mb-2">
          What Can HTML Do?
        </h2>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Create headings, paragraphs, and lists</li>
          <li>Add images and videos</li>
          <li>Link pages together</li>
          <li>Embed forms for user interaction</li>
        </ul>
      </section>

      <section aria-label="Example HTML code">
        <h2 className="text-xl sm:text-2xl text-blue-500 mt-6 mb-2">
          Example
        </h2>
        <div className="relative mb-4">
          <details className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto">
            <summary className="cursor-pointer font-semibold mb-2">
              View HTML code
            </summary>
            <div className="mt-2">
              <pre className="overflow-x-auto rounded text-sm sm:text-base">
                <code className="block whitespace-pre-wrap break-words">{codeString}</code>
              </pre>
              <button
                onClick={copyCode}
                aria-label="Copy HTML example code"
                className="mt-2 inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 transition"
              >
                Copy code
              </button>
            </div>
          </details>
        </div>
      </section>

      <section aria-label="Summary">
        <h2 className="text-xl sm:text-2xl text-blue-500 mt-6 mb-2">Summary</h2>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>HTML = HyperText Markup Language</li>
          <li>Used to structure content on web pages</li>
          <li>HTML uses tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;a&gt;</code>, etc.</li>
          <li>HTML is not a programming language</li>
        </ul>
      </section>
    </article>
  );
};

export default WhatIsHTML;