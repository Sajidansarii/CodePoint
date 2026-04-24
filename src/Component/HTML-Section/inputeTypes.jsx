import React from "react";

const HTMLInputTypes = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML Input Types
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        The <code>&lt;input&gt;</code> element can behave in many ways depending on its <code>type</code> attribute. HTML5 introduced specialized types that help with validation, mobile keyboards, and user experience.
      </p>

      {/* Common Input Types */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Input Types</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="text"&gt;</h3>
            <p className="leading-relaxed mb-3">Default single-line text field.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"username"</span>

    <span className="text-red-500"> placeholder</span>=
    <span className="text-green-600">"Your name"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="email"&gt;</h3>
            <p className="leading-relaxed mb-1">Email address with built-in format validation and suitable mobile keyboard.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> required</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="password"&gt;</h3>
            <p className="leading-relaxed mb-3">Masked input for sensitive text like passwords.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"password"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"pwd"</span>

    <span className="text-red-500"> minlength</span>=
    <span className="text-green-600">"8"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="number"&gt;</h3>
            <p className="leading-relaxed mb-3">Numeric input with optional bounds and step.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"number"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"quantity"</span>

    <span className="text-red-500"> min</span>=
    <span className="text-green-600">"1"</span>

    <span className="text-red-500"> max</span>=
    <span className="text-green-600">"10"</span>

    <span className="text-red-500"> step</span>=
    <span className="text-green-600">"1"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="tel"&gt;</h3>
            <p className="leading-relaxed mb-3">Telephone number; brings up tel-specific keyboard on mobile.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"tel"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"phone"</span>

    <span className="text-red-500"> placeholder</span>=
    <span className="text-green-600">"+91 98765 43210"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="url"&gt;</h3>
            <p className="leading-relaxed mb-3">URL input with basic validation.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"url"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"website"</span>

    <span className="text-red-500"> placeholder</span>=
    <span className="text-green-600">"https://example.com"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="search"&gt;</h3>
            <p className="leading-relaxed mb-3">Optimized for search queries; may show clear button in some browsers.</p>
         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"search"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"query"</span>

    <span className="text-red-500"> placeholder</span>=
    <span className="text-green-600">"Search..."</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="color"&gt;</h3>
            <p className="leading-relaxed mb-3">Color picker widget.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"color"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"favcolor"</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"#ff0000"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="range"&gt;</h3>
            <p className="leading-relaxed mb-3">Slider for numeric selection within a range.</p>
         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"range"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"volume"</span>

    <span className="text-red-500"> min</span>=
    <span className="text-green-600">"0"</span>

    <span className="text-red-500"> max</span>=
    <span className="text-green-600">"100"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="file"&gt;</h3>
            <p className="leading-relaxed mb-3">File upload; supports <code>multiple</code>.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"file"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"avatar"</span>

    <span className="text-red-500"> accept</span>=
    <span className="text-green-600">"image/*"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="checkbox"&gt; / &lt;input type="radio"&gt;</h3>
            <p className="leading-relaxed mb-3">Toggle (checkbox) and exclusive options (radio).</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;label&gt;</span>
    <span className="text-gray-500">&lt;input</span>
    <span className="text-blue-600"> type</span>=
    <span className="text-green-600">"checkbox"</span>
    <span className="text-blue-600"> name</span>=
    <span className="text-green-600">"agree"</span>
    <span className="text-gray-500"> /&gt;</span>
    <span className="text-gray-700"> I agree</span>
    <span className="text-gray-500">&lt;/label&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;label&gt;</span>
    <span className="text-gray-500">&lt;input</span>
    <span className="text-blue-600"> type</span>=
    <span className="text-green-600">"radio"</span>
    <span className="text-blue-600"> name</span>=
    <span className="text-green-600">"plan"</span>
    <span className="text-blue-600"> value</span>=
    <span className="text-green-600">"basic"</span>
    <span className="text-gray-500"> /&gt;</span>
    <span className="text-gray-700"> Basic</span>
    <span className="text-gray-500">&lt;/label&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;label&gt;</span>
    <span className="text-gray-500">&lt;input</span>
    <span className="text-blue-600"> type</span>=
    <span className="text-green-600">"radio"</span>
    <span className="text-blue-600"> name</span>=
    <span className="text-green-600">"plan"</span>
    <span className="text-blue-600"> value</span>=
    <span className="text-green-600">"pro"</span>
    <span className="text-gray-500"> /&gt;</span>
    <span className="text-gray-700"> Pro</span>
    <span className="text-gray-500">&lt;/label&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="hidden"&gt;</h3>
            <p className="leading-relaxed mb-3">Hidden data sent with the form but not shown to user.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"hidden"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"token"</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"abc123"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="submit"&gt;, <code>reset</code>, <code>button</code></h3>
            <p className="leading-relaxed mb-3">Controls for form actions.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"submit"</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"Send"</span>

    <span className="text-gray-500"> /&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"reset"</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"Clear"</span>

    <span className="text-gray-500"> /&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">button</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"button"</span>

    <span className="text-gray-700">Do Something</span>

    <span className="text-gray-500">&lt;/button&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="date"&gt;, <code>time</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code></h3>
            <p className="leading-relaxed mb-3">Date and time pickers with native UI support in many browsers.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"date"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"birthday"</span>

    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"time"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"alarm"</span>

    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"datetime-local"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"appointment"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>
        </div>
      </section>

      {/* Attributes & Validation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Attributes & Validation</h2>
        <p className="leading-relaxed mb-3">
          Many input types support helpful attributes for UX and built-in validation:
        </p>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed mb-3">
          <li><code>required</code> — Must be filled before submission.</li>
          <li><code>placeholder</code> — Hint text.</li>
          <li><code>min</code> / <code>max</code> — Bounds for number, date, range, etc.</li>
          <li><code>step</code> — Increment for numeric/range.</li>
          <li><code>pattern</code> — Regex that the value must match.</li>
          <li><code>multiple</code> — Allow selecting multiple files or emails.</li>
          <li><code>readonly</code> / <code>disabled</code> — Control editability.</li>
        </ul>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> required</span>

    <span className="text-red-500"> placeholder</span>=
    <span className="text-green-600">"you@example.com"</span>

    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"number"</span>

    <span className="text-red-500"> min</span>=
    <span className="text-green-600">"1"</span>

    <span className="text-red-500"> max</span>=
    <span className="text-green-600">"5"</span>

    <span className="text-red-500"> step</span>=
    <span className="text-green-600">"1"</span>

    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> pattern</span>=
    <span className="text-green-600">"[A-Za-z]{3}"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility Tips</h2>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
          <li>Always pair inputs with <code>&lt;label&gt;</code> (using <code>for</code> / <code>id</code>).</li>
          <li>Use <code>aria-describedby</code> to link helper text or error messages.</li>
          <li>Provide clear instructions for required formats (e.g., date format).</li>
          <li>Ensure keyboard focus is visible and order is logical.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Using placeholders instead of labels.</li>
          <li>Not validating formats before submission.</li>
          <li>Over-relying on default values without explanation.</li>
          <li>Mixing unrelated input types without grouping.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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