const HTMLInputFormAttribute = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        HTML <code>form</code> Attribute in Input
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code>form</code> attribute is used on input elements to associate them with a specific form, even if they are not placed inside that form element.
      </p>

      {/* When to Use */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">
          When to Use the <code>form</code> Attribute
        </h2>
        <p className="text-gray-700">
          This attribute is useful when you want to place input fields outside the <code>&lt;form&gt;</code> tag but still include their values in the form submission.
        </p>
      </div>

      {/* Syntax */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
          <code>{'<input type="text" form="myForm" />'}</code>
        </pre>
      </div>

      {/* Example */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Example</h2>
        <p className="text-gray-700 mb-2">Input field outside the form but still part of it:</p>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mb-2">
          <code>{`
<form id="myForm" action="/submit">
  <input type="submit" value="Submit Form" />
</form>

<!-- Outside the form -->
<input type="text" name="username" form="myForm" placeholder="Enter Username" />
          `}</code>
        </pre>
        <p className="text-gray-600 text-sm italic">
          Even though the input is outside the form, its value will be submitted.
        </p>
      </div>

      {/* Notes */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Important Notes</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>The <code>form</code> attribute must match the <code>id</code> of the target form.</li>
          <li>Can be used with inputs, selects, textareas, buttons, etc.</li>
          <li>Useful for placing form controls in different layout sections.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLInputFormAttribute;