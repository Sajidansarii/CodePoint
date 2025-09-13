import React from 'react';

const FunctionParametersDemo = () => {
  // 1. Basic Parameters
  function greet(name) {
    return `Hello, ${name}!`;
  }

  // 2. Default Parameters
  function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
  }

  // 3. Rest Parameters
  function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  // 4. Destructuring Parameters (object)
  function printUser({ name, age }) {
    return `User ${name} is ${age} years old.`;
  }

  // 5. Destructuring Parameters (array)
  function describeColors([first, second]) {
    return `First color is ${first}, second is ${second}.`;
  }

  // Sample data
  const user = { name: "Alice", age: 30 };
  const colors = ["red", "blue"];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">JavaScript Function Parameters</h1>

      {/* 1. Basic Parameters */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">1. Basic Parameters</h2>
        <p className="text-gray-600">Functions receive arguments to operate on.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`function greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\ngreet("John") → ${greet("John")}`}
        </pre>
      </section>

      {/* 2. Default Parameters */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">2. Default Parameters</h2>
        <p className="text-gray-600">Use default values when arguments are missing.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`function welcome(name = "Guest") {\n  return \`Welcome, \${name}!\`;\n}\n\nwelcome() → ${welcome()}`}
        </pre>
      </section>

      {/* 3. Rest Parameters */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">3. Rest Parameters</h2>
        <p className="text-gray-600">Collect all remaining arguments into an array.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2">
          {`function sumAll(...numbers) {\n  return numbers.reduce((a, b) => a + b);\n}\n\nsumAll(1, 2, 3, 4) → ${sumAll(1, 2, 3, 4)}`}
        </pre>
      </section>

      {/* 4. Object Destructuring */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">4. Parameter Destructuring (Object)</h2>
        <p className="text-gray-600">Unpack object properties directly in the parameter list.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
          {`function printUser({ name, age }) {\n  return \`User \${name} is \${age} years old.\`;\n}\n\nprintUser({ name: "Alice", age: 30 }) → ${printUser(user)}`}
        </pre>
      </section>

      {/* 5. Array Destructuring */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">5. Parameter Destructuring (Array)</h2>
        <p className="text-gray-600">Destructure arrays to access elements directly.</p>
        <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
          {`function describeColors([first, second]) {\n  return \`First color is \${first}, second is \${second}.\`;\n}\n\ndescribeColors(["red", "blue"]) → ${describeColors(colors)}`}
        </pre>
      </section>
    </div>
  );
};

export default FunctionParametersDemo;
