import React from "react";

const JSArithmeticOperators = () => {
  const data = [
    {Operator:'+', Description:'Addition'},
    {Operator:'-', Description:'Subtraction'},
    {Operator:'*', Description:'Multiplication'},
    {Operator:'/', Description:'Division'},
    {Operator:'%', Description:'Modulus (remainder)'},
    {Operator:'**', Description:'Exponentiation'},
    {Operator:'++', Description:'Increment'},
    {Operator:'--', Description:'Decrement'}
  ]
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Arithmetic Operators</h1>
      
      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Arithmetic</span> operators are used to perform mathematical operations on numbers in JavaScript. They include addition, subtraction, multiplication, division, modulus, and exponentiation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Arithmetic Operators</h2>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Operator</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Operator}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Basic Arithmetic Operations</h2>
      <pre className="bg-gray-900 text-green-400 pl-5 pb-5 rounded-lg mb-5">
        <code>
          {`
let a = 10 + 20;
`}
        </code>
      </pre>

      <p className="text-xl mb-5">With variables</p>
      <pre className="text-green-400 bg-gray-900 pl-5 rounded-lg nt-5">
        <code>
          {`
let a = x + y;
          `}
        </code>
      </pre>

     
      <p className="text-gray-700 mt-5">
        <span className="text-red-400">Arithmetic</span> operators are essential for *calculations, algorithms, and numeric data manipulation* in JavaScript. They can be used directly on variables, literals, or inside functions.
      </p>

      <h1 className="mt-10 text-2xl mb-3">Adding</h1>
      <p>The + operator is used to add numbers.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let y = 2;
let z = x + y;
          `}
        </code>
      </pre>

      <h1 className="mt-10 text-2xl mb-3">Subtracting</h1>
      <p>The − operator is used to subtract numbers.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let y = 2;
let z = x - y;

          `}
        </code>
      </pre>

      <h1 className="mt-10 text-2xl mb-3">Multiplying</h1>
      <p>The * operator is used to multiply numbers.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let y = 2;
let z = x * y;
          `}
        </code>
      </pre>

      <h1 className="text-2xl mt-10 mb-3">Dividing</h1>
      <p>The division operator (/) divides numbers.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let y = 2;
let z = x / y;
          `}
        </code>
      </pre>

      <h1 className="text-2xl mt-10 mb-3">Remainder</h1>
      <p>The % operator returns the remainder after division.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let y = 2;
let z = x % y;
          `}
        </code>
      </pre>

      <h1 className="text-2xl mt-10 mb-3">Incrementing</h1>
      <p>The ++ operator increases a number by one.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
x++;
let z = x;
          `}
        </code>
      </pre>

      <h1 className="text-2xl mt-10 mb-3">Decrementing</h1>
      <p>The -- operator decreases a number by one.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
x--;
let z = x;
          `}
        </code>
      </pre>

      <h1 className="text-2xl mt-10 mb-3">Exponentiation</h1>
      <p>The ** operator raises the first value to the power of the second.</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let z = x ** 2;
          `}
        </code>
      </pre>

      <p className="mt-10">x ** y gives the same result as Math.pow(x, y).</p>
      <h2 className="text-2xl mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let x = 5;
let z = Math.pow(x,2);
          `}
        </code>
      </pre>
      <p className="mt-10">When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:</p>










    </div>
  );
};

export default JSArithmeticOperators;