const HTMLJavaScript = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Main Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML JavaScript
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed mb-3">
        JavaScript is a programming language that makes web pages interactive.
        HTML provides the structure, CSS handles the styling, and JavaScript
        adds dynamic behavior like form validation, animations, and data
        manipulation.
      </p>

      {/* Adding JavaScript to HTML */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          How to Add JavaScript in HTML
        </h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
          <li>
            <strong>Internal:</strong> Inside a <code>&lt;script&gt;</code> tag
            in the HTML file.
          </li>
          <li>
            <strong>External:</strong> Linking to a separate <code>.js</code>{" "}
            file.
          </li>
          <li>
            <strong>Inline:</strong> Adding JS directly to an HTML element’s
            event attribute (not recommended for maintainability).
          </li>
        </ul>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- Internal JavaScript --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script&gt;</span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;alert('Hello from JavaScript!');</span>
    <br/>

    <span className="text-gray-500">&lt;/script&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;!-- External JavaScript --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"script.js"</span>
    <span className="text-gray-500">&gt;&lt;/script&gt;</span>
  </code>
</pre>
      </section>

      {/* Example */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Example: Button Click
        </h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!DOCTYPE html&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;html&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;body&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;button</span>
    <span className="text-red-500"> onclick</span>=
    <span className="text-green-600">"showMessage()"</span>
    <span className="text-gray-500">&gt;</span>
    Click Me
    <span className="text-gray-500">&lt;/button&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&gt;</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function showMessage() </span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert('Button clicked!');</span>
    <br/>

    <span className="text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/script&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/body&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/html&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          Here, clicking the button runs the{" "}
          <code>showMessage()</code> function.
        </p>
      </section>

      {/* Best Practices */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Best Practices
        </h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
          <li>Place <code>&lt;script&gt;</code> tags before the closing <code>&lt;/body&gt;</code> for faster page load.</li>
          <li>Keep JavaScript in separate files for easier maintenance.</li>
          <li>Use modern JS practices and avoid inline event handlers.</li>
        </ul>
      </section>

      {/* External JS Example */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          External JavaScript Example
        </h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;!-- index.html --&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;!DOCTYPE html&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;html&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;head&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;</span>
    <span className="text-gray-700">External JS Example</span>
    <span className="text-gray-500">&lt;/title&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/head&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;body&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;button</span>
    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"myBtn"</span>
    <span className="text-gray-500">&gt;</span>
    Click Me
    <span className="text-gray-500">&lt;/button&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-600">"script.js"</span>
    <span className="text-gray-500">&gt;&lt;/script&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/body&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/html&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;!-- script.js --&gt;</span>
    <br/>

    <span className="text-blue-600">document.getElementById('myBtn').addEventListener('click', () =&gt; </span>
    <br/>

    <span className="text-gray-700">&nbsp;&nbsp;alert('Hello from external JS!');</span>
    <br/>

    <span className="text-blue-600">);</span>
  </code>
</pre></section>

      {/* Accessibility Note */}
      <section className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h2 className="text-xl font-semibold text-yellow-700 mb-3">
          Accessibility Tip
        </h2>
        <p className="leading-relaxed mb-3">
          Ensure that JavaScript functionality is accessible to keyboard users
          and does not block core content if JS is disabled.
        </p>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
          <li>JavaScript makes HTML pages interactive.</li>
          <li>Can be added inline, internally, or externally.</li>
          <li>Best to keep JS in separate files and load at the bottom of the body.</li>
          <li>Use event listeners instead of inline <code>onclick</code> attributes.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLJavaScript;