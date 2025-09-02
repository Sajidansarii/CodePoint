const HTMLFormElements = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
        HTML Form Elements
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML provides a variety of form elements to collect different types of user input. Below are the most common controls, how to use them, and accessibility tips.
      </p>

      {/* Basic Form Controls */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Basic Controls</h2>
        <p className="text-gray-700 mb-2">Common input-based elements:</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="text"&gt;</h3>
            <p className="text-gray-700 mb-1">
              Single-line text input.
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<label for="name">Name:</label>
<input type="text" id="name" name="name" placeholder="Your name" required />`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="email"&gt;</h3>
            <p className="text-gray-700 mb-1">
              Email address; browser validates format.
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<label for="email">Email:</label>
<input type="email" id="email" name="email" required />`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="password"&gt;</h3>
            <p className="text-gray-700 mb-1">
              Masked input for passwords.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="checkbox"&gt; / &lt;input type="radio"&gt;</h3>
            <p className="text-gray-700 mb-1">
              Toggle (checkbox) and exclusive choices (radio).
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<label><input type="checkbox" name="subscribe" /> Subscribe</label>

<label><input type="radio" name="gender" value="male" /> Male</label>
<label><input type="radio" name="gender" value="female" /> Female</label>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;textarea&gt;</h3>
            <p className="text-gray-700 mb-1">
              Multi-line text input.
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" placeholder="Type here..."></textarea>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;select&gt; with &lt;option&gt;</h3>
            <p className="text-gray-700 mb-1">
              Dropdown selection.
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">Choose...</option>
  <option value="in">India</option>
  <option value="us">United States</option>
</select>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;button&gt; / submit/reset</h3>
            <p className="text-gray-700 mb-1">
              Submit or reset form data.
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<button type="submit">Send</button>
<button type="reset">Clear</button>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Specialized Inputs */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. Specialized Input Types</h2>
        <p className="text-gray-700 mb-2">
          HTML5 introduced input types that improve data entry and validation:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <code>type="number"</code> — Numeric spinner. <code>{<input type="number" min="0" max="10" />}</code>
          </li>
          <li>
            <code>type="url"</code> — URL validation. <code>{<input type="url" />}</code>
          </li>
          <li>
            <code>type="tel"</code> — Telephone number input. <code>{<input type="tel" />}</code>
          </li>
          <li>
            <code>type="date"</code> / <code>time</code> / <code>datetime-local</code> — Date/time pickers.
          </li>
          <li>
            <code>type="color"</code> — Color picker.
          </li>
          <li>
            <code>type="range"</code> — Slider control.
          </li>
          <li>
            <code>type="file"</code> — File uploads; supports <code>multiple</code>.
          </li>
        </ul>
      </section>

      {/* Grouping & Semantic */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">3. Grouping & Semantics</h2>
        <p className="text-gray-700 mb-2">
          Structure related controls with:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li>
            <code>&lt;label&gt;</code> — Associates text with a control (use <code>for</code>/<code>id</code> or wrap input).
          </li>
          <li>
            <code>&lt;fieldset&gt;</code> — Groups related form fields.
          </li>
          <li>
            <code>&lt;legend&gt;</code> — Title for a fieldset.
          </li>
          <li>
            <code>&lt;datalist&gt;</code> — Suggests predefined options for an input.
          </li>
          <li>
            <code>&lt;output&gt;</code> — Displays the result of a calculation.
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
          <code>{`<fieldset>
  <legend>Payment</legend>
  <label for="card">Card number:</label>
  <input type="text" id="card" name="card" />
</fieldset>

<label for="browser">Choose browser:</label>
<input list="browsers" id="browser" name="browser" />
<datalist id="browsers">
  <option value="Chrome" />
  <option value="Firefox" />
  <option value="Safari" />
</datalist>`}</code>
        </pre>
      </section>

      {/* Validation & Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">4. Validation & Helpful Attributes</h2>
        <p className="text-gray-700 mb-2">
          Built-in HTML validation and attributes help guide users:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li><code>required</code> — Field must be filled.</li>
          <li><code>pattern</code> — Regex the value must match.</li>
          <li><code>min</code> / <code>max</code> — Bounds for number/date/range.</li>
          <li><code>step</code> — Increment for numeric controls.</li>
          <li><code>placeholder</code> — Hint text.</li>
          <li><code>readonly</code> / <code>disabled</code> — Non-editable or inactive.</li>
          <li><code>autocomplete</code> — Suggest previously entered values.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
          <code>{`<input type="text" name="username" required pattern="[A-Za-z0-9]{4,}" placeholder="4+ alphanumeric" />
<input type="number" name="age" min="1" max="120" />`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">5. Accessibility</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Always associate <code>&lt;label&gt;</code> with its control.</li>
          <li>Use <code>aria-describedby</code> for extra instructions or error messages.</li>
          <li>Ensure focus order is logical and visible.</li>
          <li>Provide meaningful error feedback; avoid vague messages.</li>
        </ul>
      </section>

      {/* Example Combined Form */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">6. Combined Example</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
          <code>{`<form action="/submit" method="POST">
  <fieldset>
    <legend>Profile</legend>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="color">Favorite Color:</label>
    <input type="color" id="color" name="color" />

    <label for="browser">Browser:</label>
    <input list="browsers" id="browser" name="browser" />
    <datalist id="browsers">
      <option value="Chrome" />
      <option value="Firefox" />
    </datalist>

    <button type="submit">Save</button>
  </fieldset>
</form>`}</code>
        </pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Missing <code>&lt;label&gt;</code> associations.</li>
          <li>Using placeholders as replacements for labels.</li>
          <li>Not providing fallback or indication for required fields.</li>
          <li>Over-relying on client-side validation without server-side checks.</li>
          <li>Poor keyboard navigation/order.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Use appropriate form elements for different data types.</li>
          <li>Group related inputs with <code>&lt;fieldset&gt;</code> and label everything.</li>
          <li>Leverage HTML5 input types and validation attributes.</li>
          <li>Ensure accessibility with labels, ARIA, and clear error feedback.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLFormElements;