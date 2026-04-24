const HTMLInputFormAttribute = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML <code>form</code> Attribute in Input</h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">The <code>form</code> attribute is used on input elements to associate them with a specific form, even if they are not placed inside that form element.</p>

      {/* When to Use */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">When to Use the <code>form</code> Attribute</h2>
        <p className="leading-relaxed">
          This attribute is useful when you want to place input fields outside the <code>&lt;form&gt;</code> tag but still include their values in the form submission.
        </p>
      </div>

      {/* Syntax */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">Syntax</h2>
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> form</span>=<span className="text-green-600">"myForm"</span>
    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
      </div>

      {/* Example */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">Example</h2>
        <p className="leading-relaxed mb-3">Input field outside the form but still part of it:</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">form</span>
    <span className="text-red-500"> id</span>=<span className="text-green-600">"myForm"</span>
    <span className="text-red-500"> action</span>=<span className="text-green-600">"/submit"</span>
    <span className="text-gray-500">&gt;</span><br/>

    &nbsp;&nbsp;<span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"submit"</span>
    <span className="text-red-500"> value</span>=<span className="text-green-600">"Submit Form"</span>
    <span className="text-gray-500"> /&gt;</span><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-600">form</span>
    <span className="text-gray-500">&gt;</span><br/><br/>

    <span className="text-gray-500">&lt;!--</span>
    <span className="text-gray-700"> Outside the form </span>
    <span className="text-gray-500">--&gt;</span><br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-600">input</span>
    <span className="text-red-500"> type</span>=<span className="text-green-600">"text"</span>
    <span className="text-red-500"> name</span>=<span className="text-green-600">"username"</span>
    <span className="text-red-500"> form</span>=<span className="text-green-600">"myForm"</span>
    <span className="text-red-500"> placeholder</span>=<span className="text-green-600">"Enter Username"</span>
    <span className="text-gray-500"> /&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed mb-3">
          Even though the input is outside the form, its value will be submitted.
        </p>
      </div>

      {/* Notes */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Important Notes</h3>
        <ul className="list-[square] list-inside leading-relaxed space-y-1">
          <li>The <code>form</code> attribute must match the <code>id</code> of the target form.</li>
          <li>Can be used with inputs, selects, textareas, buttons, etc.</li>
          <li>Useful for placing form controls in different layout sections.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLInputFormAttribute;