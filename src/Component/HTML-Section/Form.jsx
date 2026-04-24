const HTMLForms = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-3">HTML Forms</h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">HTML forms collect user input and submit it to a server or client-side script. They are essential for user registration, search, feedback, and interactive web applications.</p>

      {/* Basic Structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Basic Form Structure</h2>
        <p className="leading-relaxed mb-3">
          A form wraps input fields and a submit control. It uses the <code>&lt;form&gt;</code> tag with optional <code>action</code> and <code>method</code> attributes.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">form</span>
    <span className="text-red-500"> action</span>=<span className="text-green-600">"/submit"</span>
    <span className="text-red-500"> method</span>=<span className="text-green-600">"POST"</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"name"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Name:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"name"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"name"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">button</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"submit"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Send</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">form</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Common Form Controls */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Form Controls</h2>
        <ul className="list-[square] list-inside space-y-2 leading-relaxed">
          <li>
            <code>&lt;input type="text"&gt;</code> — single-line text.
          </li>
          <li>
            <code>&lt;input type="email"&gt;</code> — email address with basic browser validation.
          </li>
          <li>
            <code>&lt;input type="password"&gt;</code> — hides input for passwords.
          </li>
          <li>
            <code>&lt;input type="checkbox"&gt;</code> / <code>&lt;input type="radio"&gt;</code> — toggles and exclusive choices.
          </li>
          <li>
            <code>&lt;select&gt;</code> — dropdown list.
          </li>
          <li>
            <code>&lt;textarea&gt;</code> — multi-line text input.
          </li>
          <li>
            <code>&lt;button type="submit"&gt;</code> — submits the form.
          </li>
        </ul>
      </section>

      {/* Grouping and Labels */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Grouping & Labels</h2>
        <p className="leading-relaxed mb-3">
          Use <code>&lt;label&gt;</code> to associate text with inputs, and <code>&lt;fieldset&gt;</code> / <code>&lt;legend&gt;</code> to group related controls.
        </p>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">fieldset</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">legend</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Account Info</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">legend</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"email"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Email:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"email"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"pw"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Password:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"password"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"pw"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"password"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">fieldset</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Form Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Important Attributes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>
            <code>action</code> — URL where the form data is sent.
          </li>
          <li>
            <code>method</code> — HTTP method: <code>GET</code> (appends to URL) or <code>POST</code> (hidden in body).
          </li>
          <li>
            <code>name</code> — Identifier for each control; used in submitted data.
          </li>
          <li>
            <code>required</code> — Makes an input mandatory.
          </li>
          <li>
            <code>placeholder</code> — Hint inside input.
          </li>
          <li>
            <code>disabled</code> — Disables a control.
          </li>
          <li>
            <code>autocomplete</code> — Suggests previously entered values.
          </li>
        </ul>
      </section>

      {/* Validation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Validation</h2>
        <p className="leading-relaxed mb-3">
          Browsers provide built-in validation for types like <code>email</code> and attributes like <code>required</code>. You can also add custom validation with JavaScript.
        </p>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">form</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"userEmail"</span>
    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">button</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"submit"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Submit</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">form</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          Use the Constraint Validation API or libraries for more advanced feedback.
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Accessibility</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Always associate <code>&lt;label&gt;</code> with inputs via <code>for</code> / <code>id</code>.</li>
          <li>Use descriptive <code>aria-*</code> attributes when needed (e.g., <code>aria-describedby</code> for error text).</li>
          <li>Provide clear error messages and focus management after validation failure.</li>
          <li>Ensure keyboard navigation works (tab order, visible focus states).</li>
        </ul>
      </section>

      {/* Example Contact Form */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Example: Contact Form</h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-5 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">form</span>
    <span className="text-red-500"> action</span>=<span className="text-green-600">"/send"</span>
    <span className="text-red-500"> method</span>=<span className="text-green-600">"POST"</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"name"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Name:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"name"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"name"</span>
    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span><br/><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"email"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Email:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"email"</span>
    <span className="text-red-500"> required</span>
    <span className="text-gray-500"> /&gt;</span><br/><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">label</span>
    <span className="text-red-500"> for</span>=<span className="text-green-600">"message"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Message:</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">label</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">textarea</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"message"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"message"</span>
    <span className="text-red-500"> rows</span>=<span className="text-green-600">"4"</span>
    <span className="text-red-500"> required</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">textarea</span>
    <span className="text-gray-500">&gt;</span><br/><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">button</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"submit"</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Send Message</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">button</span>
    <span className="text-gray-500">&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">form</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Security Tips */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Security Tips</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Validate input on the server — never trust client-side only.</li>
          <li>Use CSRF protection for POST forms.</li>
          <li>Sanitize user input to prevent injection attacks.</li>
          <li>Use HTTPS to protect data in transit.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Common Mistakes</h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Missing <code>&lt;label&gt;</code> associations (hurts accessibility).</li>
          <li>Relying only on client-side validation.</li>
          <li>Using vague button text like “Submit” instead of descriptive (“Send Message”).</li>
          <li>Not grouping related fields with <code>&lt;fieldset&gt;</code>.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
          <li>Forms collect user input; use <code>&lt;form&gt;</code> with controls like <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;textarea&gt;</code>.</li>
          <li>Use proper labels, validation, and accessibility attributes.</li>
          <li>Secure data with server-side validation, CSRF protection, and HTTPS.</li>
          <li>Group related fields and provide clear feedback.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLForms;