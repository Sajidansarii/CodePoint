import React from "react";

const HTMLInputTypes = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-medium text-blue-500 mb-4">
        HTML Input Types
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>&lt;input&gt;</code> element can behave in many ways depending on its <code>type</code> attribute. HTML5 introduced specialized types that help with validation, mobile keyboards, and user experience.
      </p>

      {/* Common Input Types */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Input Types</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="text"&gt;</h3>
            <p className="text-gray-700 mb-1">Default single-line text field.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" name="username" placeholder="Your name" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="email"&gt;</h3>
            <p className="text-gray-700 mb-1">Email address with built-in format validation and suitable mobile keyboard.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="email" name="email" required />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="password"&gt;</h3>
            <p className="text-gray-700 mb-1">Masked input for sensitive text like passwords.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="password" name="pwd" minlength="8" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="number"&gt;</h3>
            <p className="text-gray-700 mb-1">Numeric input with optional bounds and step.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="number" name="quantity" min="1" max="10" step="1" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="tel"&gt;</h3>
            <p className="text-gray-700 mb-1">Telephone number; brings up tel-specific keyboard on mobile.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="tel" name="phone" placeholder="+91 98765 43210" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="url"&gt;</h3>
            <p className="text-gray-700 mb-1">URL input with basic validation.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="url" name="website" placeholder="https://example.com" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="search"&gt;</h3>
            <p className="text-gray-700 mb-1">Optimized for search queries; may show clear button in some browsers.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="search" name="query" placeholder="Search..." />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="color"&gt;</h3>
            <p className="text-gray-700 mb-1">Color picker widget.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="color" name="favcolor" value="#ff0000" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="range"&gt;</h3>
            <p className="text-gray-700 mb-1">Slider for numeric selection within a range.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="range" name="volume" min="0" max="100" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="file"&gt;</h3>
            <p className="text-gray-700 mb-1">File upload; supports <code>multiple</code>.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="file" name="avatar" accept="image/*" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="checkbox"&gt; / &lt;input type="radio"&gt;</h3>
            <p className="text-gray-700 mb-1">Toggle (checkbox) and exclusive options (radio).</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<label><input type="checkbox" name="agree" /> I agree</label>
<label><input type="radio" name="plan" value="basic" /> Basic</label>
<label><input type="radio" name="plan" value="pro" /> Pro</label>`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="hidden"&gt;</h3>
            <p className="text-gray-700 mb-1">Hidden data sent with the form but not shown to user.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="hidden" name="token" value="abc123" />'}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="submit"&gt;, <code>reset</code>, <code>button</code></h3>
            <p className="text-gray-700 mb-1">Controls for form actions.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<input type="submit" value="Send" />
<input type="reset" value="Clear" />
<button type="button">Do Something</button>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="date"&gt;, <code>time</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code></h3>
            <p className="text-gray-700 mb-1">Date and time pickers with native UI support in many browsers.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<input type="date" name="birthday" />
<input type="time" name="alarm" />
<input type="datetime-local" name="appointment" />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Attributes & Validation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Attributes & Validation</h2>
        <p className="text-gray-700 mb-2">
          Many input types support helpful attributes for UX and built-in validation:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li><code>required</code> — Must be filled before submission.</li>
          <li><code>placeholder</code> — Hint text.</li>
          <li><code>min</code> / <code>max</code> — Bounds for number, date, range, etc.</li>
          <li><code>step</code> — Increment for numeric/range.</li>
          <li><code>pattern</code> — Regex that the value must match.</li>
          <li><code>multiple</code> — Allow selecting multiple files or emails.</li>
          <li><code>readonly</code> / <code>disabled</code> — Control editability.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
          <code>{`<input type="email" required placeholder="you@example.com" />
<input type="number" min="1" max="5" step="1" />
<input type="text" pattern="[A-Za-z]{3,}" />`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Accessibility Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Always pair inputs with <code>&lt;label&gt;</code> (using <code>for</code> / <code>id</code>).</li>
          <li>Use <code>aria-describedby</code> to link helper text or error messages.</li>
          <li>Provide clear instructions for required formats (e.g., date format).</li>
          <li>Ensure keyboard focus is visible and order is logical.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Using placeholders instead of labels.</li>
          <li>Not validating formats before submission.</li>
          <li>Over-relying on default values without explanation.</li>
          <li>Mixing unrelated input types without grouping.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Input types tailor the control to the data (email, number, date, etc.).</li>
          <li>Use attributes like <code>required</code>, <code>pattern</code>, and <code>min/max</code> for built-in validation.</li>
          <li>Pair with labels and provide accessible hints.</li>
          <li>Group related controls to improve clarity.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLInputTypes;