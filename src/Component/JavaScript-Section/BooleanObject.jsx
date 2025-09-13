import React from "react";

const BooleanObjectExample = () => {
  /**
   * 🧠 In JavaScript, Boolean values can be:
   * 1. Primitive: true or false
   * 2. Objects: created with new Boolean()
   * 
   * JavaScript treats ALL objects (even Boolean objects wrapping `false`) as truthy.
   * This can cause unexpected behavior if not understood properly.
   */

  // ✅ Primitive boolean
  const primitiveTrue = true;

  // ✅ Boolean object wrapping false
  const objectFalse = new Boolean(false); // ⚠️ This is truthy!

  // ✅ Type checks
  const primitiveType = typeof primitiveTrue; // "boolean"
  const objectType = typeof objectFalse;      // "object"

  // ✅ Testing in conditionals
  const primitiveResult = primitiveTrue ? "✅ true" : "❌ false";
  const objectResult = objectFalse ? "✅ truthy (even though it's false!)" : "❌ falsy";

  // ✅ Using .valueOf() to get the actual primitive value from the object
  const unwrappedValue = objectFalse.valueOf(); // false

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        🔁 Boolean Object in JavaScript
      </h1>

      <p className="text-gray-700 mb-6">
        JavaScript has both <strong>boolean primitives</strong> and the <strong>Boolean object</strong>.
        While they seem similar, they behave differently — especially in conditionals.
      </p>

      <div className="bg-gray-50 text-sm font-mono text-gray-800 p-4 rounded-md space-y-4">

        {/* Primitive boolean */}
        <div>
          <span className="text-blue-600 font-semibold">// Primitive Boolean</span><br />
          <code>{`const primitiveTrue = true;`}</code><br />
          <code>{`typeof primitiveTrue`}</code> → <span className="text-green-700">{primitiveType}</span><br />
          <code>{`primitiveTrue ? "✅" : "❌"`}</code> → <span className="text-green-700">{primitiveResult}</span>
        </div>

        {/* Boolean Object */}
        <div>
          <span className="text-blue-600 font-semibold">// Boolean Object</span><br />
          <code>{`const objectFalse = new Boolean(false);`}</code><br />
          <code>{`typeof objectFalse`}</code> → <span className="text-green-700">{objectType}</span><br />
          <code>{`objectFalse ? "✅" : "❌"`}</code> → <span className="text-yellow-600">{objectResult}</span><br />
          <span className="text-gray-500">// ⚠️ Even though it wraps 'false', it's still truthy!</span>
        </div>

        {/* .valueOf() to get primitive value */}
        <div>
          <span className="text-blue-600 font-semibold">// Unwrapping Boolean Object</span><br />
          <code>{`objectFalse.valueOf()`}</code> → <span className="text-green-700">{unwrappedValue.toString()}</span><br />
          <span className="text-gray-500">// This gives us the actual false value</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6 italic">
        ⚠️ Best Practice: Avoid using <code>new Boolean()</code>. Use primitive <code>true</code> or <code>false</code> instead to avoid confusion.
      </p>
    </div>
  );
};

export default BooleanObjectExample;
