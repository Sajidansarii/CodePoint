const HTMLInputAttributes = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML Input Attributes
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        Input attributes in HTML define the behavior, appearance, and validation of form inputs. They help improve usability, accessibility, and control over user input.
      </p>

      {/* Common Attributes */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Commonly Used Attributes
        </h2>
        <div className="space-y-4">

          {/* type */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>type</code>
            </h3>
            <p className="leading-relaxed mb-3">Specifies the type of input field.</p>
            <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* name */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>name</code>
            </h3>
            <p className="leading-relaxed mb-3">Used to identify form data after submission.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;input</span>
    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"email"</span>
    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"userEmail"</span>
    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* value */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>value</code>
            </h3>
            <p className="leading-relaxed mb-3">Predefines the input’s value.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"John Doe"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* placeholder */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>placeholder</code>
            </h3>
            <p className="leading-relaxed mb-3">Displays hint text inside the input.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> placeholder</span>=
    <span className="text-green-600">"Enter your name"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* required */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>required</code>
            </h3>
            <p className="leading-relaxed mb-3">Makes input mandatory before form submission.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> required</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* disabled */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>disabled</code>
            </h3>
            <p className="leading-relaxed mb-3">Disables the input field (grayed out & uneditable).</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> disabled</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"Can't edit this"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* readonly */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>readonly</code>
            </h3>
            <p className="leading-relaxed mb-3">Field can’t be changed but is selectable.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> readonly</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"Read-only text"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* maxlength & minlength */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>maxlength</code> / <code>minlength</code>
            </h3>
            <p className="leading-relaxed mb-3">Defines length limits for text input.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> minlength</span>=
    <span className="text-green-600">"5"</span>

    <span className="text-red-500"> maxlength</span>=
    <span className="text-green-600">"10"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* pattern */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>pattern</code>
            </h3>
            <p className="leading-relaxed mb-3">Validates input with a regular expression.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> pattern</span>=
    <span className="text-green-600">"[A-Za-z]&#123;3,&#125;"</span>

    <span className="text-red-500"> title</span>=
    <span className="text-green-600">"At least 3 letters"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* autofocus */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>autofocus</code>
            </h3>
            <p className="leading-relaxed mb-3">Automatically focuses input on page load.</p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> autofocus</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* autocomplete */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>autocomplete</code>
            </h3>
            <p className="leading-relaxed mb-3">Toggles browser autocomplete for the field.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> autocomplete</span>=
    <span className="text-green-600">"on"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          {/* step, min, max */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>min</code>, <code>max</code>, <code>step</code>
            </h3>
            <p className="leading-relaxed mb-3">Used with <code>number</code>, <code>date</code>, <code>range</code> to set boundaries.</p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"number"</span>

    <span className="text-red-500"> min</span>=
    <span className="text-green-600">"1"</span>

    <span className="text-red-500"> max</span>=
    <span className="text-green-600">"5"</span>

    <span className="text-red-500"> step</span>=
    <span className="text-green-600">"0.5"</span>

    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

        </div>
      </section>

      {/* Summary */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap</h3>
        <ul className="list-[square] list-inside leading-relaxed space-y-1">
          <li><code>required</code> → ensures the field must be filled</li>
          <li><code>placeholder</code> → hint text inside field</li>
          <li><code>pattern</code> → custom validation rules</li>
          <li><code>readonly</code> & <code>disabled</code> → control interactivity</li>
          <li><code>autocomplete</code> → enable/disable browser autofill</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLInputAttributes;