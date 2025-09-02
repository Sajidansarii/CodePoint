const HTMLAttributes = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
        HTML Form Attributes
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Attributes provide additional information about HTML elements. They appear inside the opening tag and control behavior, identity, accessibility, styling hooks, and more. Some are <strong>global</strong> (usable on most elements), and others are element-specific (like form controls).
      </p>

      {/* Global Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Global Attributes</h2>
        <p className="text-gray-700 mb-2">
          These can be used on nearly any HTML element:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li><code>id</code> — Unique identifier for an element (used in CSS/JS and anchors).</li>
          <li><code>class</code> — One or more class names for styling or selection.</li>
          <li><code>style</code> — Inline CSS styles.</li>
          <li><code>title</code> — Advisory text shown on hover.</li>
          <li><code>data-*</code> — Custom data attributes (e.g., <code>data-user="123"</code>).</li>
          <li><code>hidden</code> — Hides the element from rendering.</li>
          <li><code>tabindex</code> — Controls keyboard focus order.</li>
          <li><code>aria-*</code> — Accessibility attributes (e.g., <code>aria-label</code>, <code>aria-describedby</code>).</li>
          <li><code>role</code> — Defines the semantic role for assistive tech.</li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`<div id="hero" class="bg-blue-100" title="Main banner" data-section="top">
  Welcome!
</div>`}</code>
        </pre>
      </section>

      {/* Form-related Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Common Form Control Attributes</h2>
        <p className="text-gray-700 mb-2">
          These are frequently used on inputs, selects, and textareas:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li><code>type</code> — For <code>&lt;input&gt;</code>, defines kind (text, email, password, checkbox, etc.).</li>
          <li><code>name</code> — Key used when form data is submitted.</li>
          <li><code>value</code> — Current value of the control.</li>
          <li><code>placeholder</code> — Hint shown when field is empty.</li>
          <li><code>required</code> — Marks field as mandatory.</li>
          <li><code>disabled</code> — Makes control inactive/unusable.</li>
          <li><code>readonly</code> — User cannot modify the value, but it’s submitted.</li>
          <li><code>maxlength</code> / <code>minlength</code> — Limits length of text.</li>
          <li><code>pattern</code> — Regex the value must match for validation.</li>
          <li><code>autocomplete</code> — Suggests previously entered values.</li>
          <li><code>checked</code> — Preselects checkbox/radio.</li>
          <li><code>multiple</code> — Allows selecting multiple values (e.g., in <code>&lt;select&gt;</code> or file inputs).</li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`<form>
  <label for="email">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="userEmail" 
    placeholder="you@example.com" 
    required 
    autocomplete="email" 
  />

  <label for="bio">Bio:</label>
  <textarea id="bio" name="bio" maxlength="200"></textarea>

  <button type="submit">Submit</button>
</form>`}</code>
        </pre>
      </section>

      {/* Boolean vs Key-Value */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Boolean vs Key-Value Attributes</h2>
        <p className="text-gray-700 mb-2">
          Some attributes don’t need a value; their presence alone enables the feature. Others require explicit values.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
          <li><code>required</code>, <code>disabled</code>, <code>checked</code> — Boolean (just include them).</li>
          <li><code>type="text"</code>, <code>placeholder="Name"</code> — Key-value pairs.</li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`<input type="checkbox" checked />
<input type="text" placeholder="Your name" required />`}</code>
        </pre>
      </section>

      {/* Data & ARIA Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Custom Data & Accessibility Example</h2>
        <p className="text-gray-700 mb-2">
          Combine custom data attributes with ARIA for semantics and scripting:
        </p>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`<button 
  data-tracking="signup-btn" 
  aria-label="Sign up now"
>
  Sign Up
</button>`}</code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Use meaningful names for <code>id</code> and <code>class</code> for clarity.</li>
          <li>Prefer <code>aria-*</code> to improve accessibility when native semantics aren’t enough.</li>
          <li>Use <code>data-*</code> for storing extra info without polluting semantics.</li>
          <li>Don’t mix presentation with behavior—avoid using <code>style</code> inline unless necessary.</li>
          <li>Validate form attributes like <code>pattern</code> and <code>required</code> to guide users before submission.</li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>Attributes customize HTML elements; some are global, others are specific.</li>
          <li>Boolean attributes like <code>required</code> work by presence; key-value need values.</li>
          <li>Use ARIA for accessibility and <code>data-*</code> for custom data.</li>
          <li>Keep attribute usage semantic, clear, and consistent.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLAttributes;