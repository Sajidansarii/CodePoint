import React from 'react';

const DefaultParameterDemo = () => {
  // Basic function with default parameter
  function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
  }

  // Another example with multiple default parameters
  function calculatePrice(price = 10, taxRate = 0.1) {
    const total = price + (price * taxRate);
    return `Total price: $${total.toFixed(2)}`;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded space-y-6">
      <h1 className="text-3xl font-medium text-blue-500"> JavaScript Default Parameters</h1>

      {/* What is it */}
      <section>
        <p className="text-gray-700">
          Default parameters let you define fallback values for function arguments. If a value is
          not passed when the function is called, the default is used.
        </p>
      </section>

      {/* Example 1 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">Example 1: Greet Function</h2>
        <p className="text-gray-600">
          If no name is provided, the default value <code>"Guest"</code> is used.
        </p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
            <code>
    {`function greetUser(name = "Guest") {
      return \`Hello, \${name}!\`;
            }
     greetUser("Alice") → ${greetUser("Alice")}
     greetUser() → ${greetUser()}`}
   </code>
        </pre>
      </section>

      {/* Example 2 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">Example 2: Price Calculation</h2>
        <p className="text-gray-600">
          This function calculates price with a tax. If no arguments are passed, defaults are used.
        </p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
{`function calculatePrice(price = 10, taxRate = 0.1) {
  return price + (price * taxRate);
}

calculatePrice(20, 0.15) → ${calculatePrice(20, 0.15)}
calculatePrice(15) → ${calculatePrice(15)}
calculatePrice() → ${calculatePrice()}`}
        </pre>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">📝 Summary</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Default parameters make your functions more flexible and safer.</li>
          <li>You can use them with any number or type of parameters.</li>
          <li>They are evaluated at call time, not declaration time.</li>
        </ul>
      </section>
    </div>
  );
};

export default DefaultParameterDemo;
