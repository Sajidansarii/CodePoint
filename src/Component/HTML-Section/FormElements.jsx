const HTMLFormElements = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-3">HTML Form Elements</h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">HTML provides a variety of form elements to collect different types of user input. Below are the most common controls, how to use them, and accessibility tips.</p>

      {/* Basic Form Controls */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">1. Basic Controls</h2>
        <p className="leading-relaxed mb-3">Common input-based elements:</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">&lt;input type="text"&gt;</h3>
            <p className="leading-relaxed mb-3">
              Single-line text input.
            </p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"name"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Name:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"name"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"name"</span>
    <span className="text-red-500"> placeholder</span>=<span className="text-green-600">"Your name"</span>
    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="email"&gt;</h3>
            <p className="leading-relaxed mb-3">
              Email address; browser validates format.
            </p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"email"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Email:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="password"&gt;</h3>
            <p className="leading-relaxed mb-3">
              Masked input for passwords.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;input type="checkbox"&gt; / &lt;input type="radio"&gt;</h3>
            <p className="leading-relaxed mb-3">
              Toggle (checkbox) and exclusive choices (radio).
            </p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"checkbox"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"subscribe"</span>
    <span className="text-gray-500"> /&gt;</span>
    <span className="text-gray-700"> Subscribe</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"radio"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"gender"</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"male"</span>
    <span className="text-gray-500"> /&gt;</span>
    <span className="text-gray-700"> Male</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"radio"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"gender"</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"female"</span>
    <span className="text-gray-500"> /&gt;</span>
    <span className="text-gray-700"> Female</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;textarea&gt;</h3>
            <p className="leading-relaxed mb-3">
              Multi-line text input.
            </p>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"message"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Message:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">textarea</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"message"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"message"</span>
    <span className="text-red-500"> rows</span>=<span className="text-green-600">"4"</span>
    <span className="text-red-500"> placeholder</span>=<span className="text-green-600">"Type here..."</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">textarea</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;select&gt; with &lt;option&gt;</h3>
            <p className="leading-relaxed mb-3">
              Dropdown selection.
            </p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"country"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Country:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">select</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"country"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"country"</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">option</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">""</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Choose...</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">option</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">option</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"in"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">India</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">option</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">option</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"us"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">United States</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">option</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">select</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-1">&lt;button&gt; / submit/reset</h3>
            <p className="leading-relaxed mb-3">
              Submit or reset form data.
            </p>
           <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">button</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"submit"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Send</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">button</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"reset"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Clear</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
          </div>
        </div>
      </section>

      {/* Specialized Inputs */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">2. Specialized Input Types</h2>
        <p className="leading-relaxed mb-3">
          HTML5 introduced input types that improve data entry and validation:
        </p>
        <ul className="list-[square] list-inside space-y-2 leading-relaxed">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">3. Grouping & Semantics</h2>
        <p className="leading-relaxed mb-3">
          Structure related controls with:
        </p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
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
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">fieldset</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">legend</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Payment</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">legend</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"card"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Card number:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"card"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"card"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">fieldset</span>
    <span className="text-gray-500">&gt;</span><br/><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"browser"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Choose browser:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> list</span>=<span className="text-green-600">"browsers"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"browser"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"browser"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">datalist</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"browsers"</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">option</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"Chrome"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">option</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"Firefox"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">option</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"Safari"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">datalist</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Validation & Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">4. Validation & Helpful Attributes</h2>
        <p className="leading-relaxed mb-3">
          Built-in HTML validation and attributes help guide users:
        </p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed mb-3">
          <li><code>required</code> — Field must be filled.</li>
          <li><code>pattern</code> — Regex the value must match.</li>
          <li><code>min</code> / <code>max</code> — Bounds for number/date/range.</li>
          <li><code>step</code> — Increment for numeric controls.</li>
          <li><code>placeholder</code> — Hint text.</li>
          <li><code>readonly</code> / <code>disabled</code> — Non-editable or inactive.</li>
          <li><code>autocomplete</code> — Suggest previously entered values.</li>
        </ul>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"username"</span>
    <span className="text-red-500"> required</span>
    <span className="text-red-500"> pattern</span>=<span className="text-green-600">"[A-Za-z0-9]{4}"</span>
    <span className="text-red-500"> placeholder</span>=<span className="text-green-600">"4+ alphanumeric"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"number"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"age"</span>
    <span className="text-red-500"> min</span>=<span className="text-green-600">"1"</span>
    <span className="text-red-500"> max</span>=<span className="text-green-600">"120"</span>
    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">5. Accessibility</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Always associate <code>&lt;label&gt;</code> with its control.</li>
          <li>Use <code>aria-describedby</code> for extra instructions or error messages.</li>
          <li>Ensure focus order is logical and visible.</li>
          <li>Provide meaningful error feedback; avoid vague messages.</li>
        </ul>
      </section>

      {/* Example Combined Form */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">6. Combined Example</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">form</span>

    <span className="text-red-500"> action</span>=
    <span className="text-green-600">"/submit"</span>

    <span className="text-red-500"> method</span>=
    <span className="text-green-600">"POST"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">fieldset</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    {/* Legend */}
    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">legend</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Profile</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">legend</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    {/* Name */}
    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=
    <span className="text-green-600">"name"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Name:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"text"</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"name"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"name"</span>

    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/><br/>

    {/* Email */}
    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=
    <span className="text-green-600">"email"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Email:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"email"</span>

    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/><br/>

    {/* Color */}
    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=
    <span className="text-green-600">"color"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Favorite Color:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"color"</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"color"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"color"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/><br/>

    {/* Browser */}
    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=
    <span className="text-green-600">"browser"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Browser:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">input</span>

    <span className="text-red-500"> list</span>=
    <span className="text-green-600">"browsers"</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"browser"</span>

    <span className="text-red-500"> name</span>=
    <span className="text-green-600">"browser"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">datalist</span>

    <span className="text-red-500"> id</span>=
    <span className="text-green-600">"browsers"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">option</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"Chrome"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">option</span>

    <span className="text-red-500"> value</span>=
    <span className="text-green-600">"Firefox"</span>
    <span className="text-gray-500"> /&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-600">datalist</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    {/* Button */}
    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-600">button</span>

    <span className="text-red-500"> type</span>=
    <span className="text-green-600">"submit"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Save</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-600">fieldset</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">form</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Missing <code>&lt;label&gt;</code> associations.</li>
          <li>Using placeholders as replacements for labels.</li>
          <li>Not providing fallback or indication for required fields.</li>
          <li>Over-relying on client-side validation without server-side checks.</li>
          <li>Poor keyboard navigation/order.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
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