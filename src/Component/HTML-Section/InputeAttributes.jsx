const HTMLInputAttributes = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        HTML Input Attributes
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Input attributes in HTML define the behavior, appearance, and validation of form inputs. They help improve usability, accessibility, and control over user input.
      </p>

      {/* Common Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Commonly Used Attributes
        </h2>
        <div className="space-y-4">

          {/* type */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>type</code>
            </h3>
            <p className="text-gray-700 mb-1">Specifies the type of input field.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" />'}</code>
            </pre>
          </div>

          {/* name */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>name</code>
            </h3>
            <p className="text-gray-700 mb-1">Used to identify form data after submission.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="email" name="userEmail" />'}</code>
            </pre>
          </div>

          {/* value */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>value</code>
            </h3>
            <p className="text-gray-700 mb-1">Predefines the input’s value.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" value="John Doe" />'}</code>
            </pre>
          </div>

          {/* placeholder */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>placeholder</code>
            </h3>
            <p className="text-gray-700 mb-1">Displays hint text inside the input.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" placeholder="Enter your name" />'}</code>
            </pre>
          </div>

          {/* required */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>required</code>
            </h3>
            <p className="text-gray-700 mb-1">Makes input mandatory before form submission.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="email" required />'}</code>
            </pre>
          </div>

          {/* disabled */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>disabled</code>
            </h3>
            <p className="text-gray-700 mb-1">Disables the input field (grayed out & uneditable).</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{`<input type="text" disabled value="Can't edit this" />`}</code>
            </pre>
          </div>

          {/* readonly */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>readonly</code>
            </h3>
            <p className="text-gray-700 mb-1">Field can’t be changed but is selectable.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" readonly value="Read-only text" />'}</code>
            </pre>
          </div>

          {/* maxlength & minlength */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>maxlength</code> / <code>minlength</code>
            </h3>
            <p className="text-gray-700 mb-1">Defines length limits for text input.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" minlength="5" maxlength="10" />'}</code>
            </pre>
          </div>

          {/* pattern */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>pattern</code>
            </h3>
            <p className="text-gray-700 mb-1">Validates input with a regular expression.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters" />'}</code>
            </pre>
          </div>

          {/* autofocus */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>autofocus</code>
            </h3>
            <p className="text-gray-700 mb-1">Automatically focuses input on page load.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="text" autofocus />'}</code>
            </pre>
          </div>

          {/* autocomplete */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>autocomplete</code>
            </h3>
            <p className="text-gray-700 mb-1">Toggles browser autocomplete for the field.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="email" autocomplete="on" />'}</code>
            </pre>
          </div>

          {/* step, min, max */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              <code>min</code>, <code>max</code>, <code>step</code>
            </h3>
            <p className="text-gray-700 mb-1">Used with <code>number</code>, <code>date</code>, <code>range</code> to set boundaries.</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              <code>{'<input type="number" min="1" max="5" step="0.5" />'}</code>
            </pre>
          </div>

        </div>
      </section>

      {/* Summary */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
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