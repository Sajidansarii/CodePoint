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
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`<!-- Internal JavaScript -->
<script>
  alert('Hello from JavaScript!');
</script>

<!-- External JavaScript -->
<script src="script.js"></script>`}</code>
        </pre>
      </section>

      {/* Example */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Example: Button Click
        </h2>
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`<!DOCTYPE html>
<html>
  <body>
    <button onclick="showMessage()">Click Me</button>

    <script>
      function showMessage() {
        alert('Button clicked!');
      }
    </script>
  </body>
</html>`}</code>
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
        <pre className="bg-gray-900 p-4 rounded-lg text-green-400 mb-3">
          <code>{`<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>External JS Example</title>
  </head>
  <body>
    <button id="myBtn">Click Me</button>
    <script src="script.js"></script>
  </body>
</html>

<!-- script.js -->
document.getElementById('myBtn').addEventListener('click', () => {
  alert('Hello from external JS!');
});`}</code>
        </pre>
      </section>

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