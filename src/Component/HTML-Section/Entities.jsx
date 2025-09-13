import React from "react";

const HTMLEntities = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4 text-center sm:text-left">
        HTML Entities
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML entities are special codes used to represent characters that either have special meaning in HTML or are not easily typed. They ensure those characters display correctly in the browser.
      </p>

      {/* Why Use Entities */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Use HTML Entities?</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>To display characters like <code>&lt;</code> and <code>&gt;</code> that would otherwise be interpreted as tags.</li>
          <li>To include special symbols or accented letters not on the keyboard.</li>
          <li>To prevent breaking of layout or injection when reserved characters are used directly.</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Examples</h2>

        <div className="mb-4">
          <p className="font-medium text-gray-800 mb-1">Reserved characters:</p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{'&lt;div&gt;This is not a tag&lt;/div&gt;'}</code>
          </pre>
          <p className="text-gray-700">
            Displays: <code>&lt;div&gt;This is not a tag&lt;/div&gt;</code> instead of being interpreted as actual HTML.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-medium text-gray-800 mb-1">Special symbols:</p>
          <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
            <code>{`&amp;  → &  
&copy; → ©  
&reg; → ®  
&amp;#169; → © (numeric)  
&ndash; → –  
&nbsp; → (non-breaking space)`}</code>
          </pre>
          <p className="text-gray-700">
            Example: <code>Company &copy; 2025</code> shows © correctly.
          </p>
        </div>
      </section>

      {/* Named vs Numeric */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Named vs Numeric Entities</h2>
        <p className="text-gray-700 mb-2">
          There are two formats:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li>
            <strong>Named:</strong> <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>
          </li>
          <li>
            <strong>Numeric:</strong> uses code points, e.g., <code>&amp;#60;</code> for <code>&lt;</code>, <code>&amp;#169;</code> for ©
          </li>
        </ul>
        <p className="text-gray-700">
          Both produce the same visible character; numeric is sometimes used when a named version doesn't exist.
        </p>
      </section>

      {/* Use Cases & Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Use Cases & Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Escape HTML in user-generated content to avoid injection: convert <code>&lt;</code> to <code>&amp;lt;</code>.</li>
          <li>Use <code>&amp;nbsp;</code> to prevent unwanted line breaks (non-breaking space).</li>
          <li>Use entities for symbols like arrows (<code>&rarr;</code> → →) or fractions (<code>&frac12;</code> → ½) when appropriate.</li>
          <li>Avoid overusing entities where plain characters are safe—modern editors and UTF-8 usually handle most characters directly.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Forgetting the leading ampersand (<code>&amp;</code>) or trailing semicolon (<code>;</code>) so the entity doesn’t render.</li>
          <li>Using plain reserved characters in HTML (like <code>&lt;</code>) which break markup.</li>
          <li>Mixing up similar entities (e.g., using <code>&amp;ndash;</code> vs <code>&amp;mdash;</code> for dashes).</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>HTML entities represent special characters so they display correctly.</li>
          <li>Use <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code> to escape reserved symbols.</li>
          <li>Named (<code>&amp;copy;</code>) and numeric (<code>&amp;#169;</code>) both work.</li>
          <li><code>&amp;nbsp;</code> prevents line breaks; useful for spacing control.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLEntities;