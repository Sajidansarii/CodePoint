import React from "react";

const JSAssignmentOperators = () => {
  const data = [
    {Operator:'=', Description:'Assigns a value to a variable'},
    {Operator:'+=', Description:'Adds and assigns the result to the variable'},
    {Operator:'-=', Description:'Subtracts and assigns the result to the variable'},
    {Operator:'*=', Description:'Multiplies and assigns the result to the variable'},
    {Operator:'/=', Description:'Divides and assigns the result to the variable'},
    {Operator:'%=', Description:'Modulus and assigns the remainder to the variable'}
  ]

const data1 = [
  {Operator:'&&' , Description:'Logical AND – returns true if both operands are true'},
  {Operator:'||', Description:'Logical OR – returns true if at least one operand is true'},
  {Operator:'!', Description:'Logical NOT – inverts the Boolean value'},

]
const data2 = [
  {Operator:'??', Description:'The ternary operator is a shorthand way to write an if...else statement.'}
]

  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Assignment Operators</h1>
      
      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Assignment </span>operators are used to assign values to variables. 
        They can also combine arithmetic operations with assignment.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Assignment Operators</h2>
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

  <h1 className="text-2xl mt-10 font-semibold text-gray-800">Logical Assignment Operators</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Operator</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Operator}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1 className="text-2xl mt-10 font-semibold text-gray-800">Conditional (Ternary) Operator</h1>
  <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Operator</th>
        <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
      </tr>
    </thead>
    <tbody>
      {data2.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Operator}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
        </tr>
      ))}
    </tbody>
  </table>



      <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The = Operator</h1>
      <p>The simple assignment operator sets a variable to a given value.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10; &nbsp;&nbsp;// Assign 10 to x
    <br />
    let y = 5; &nbsp;&nbsp;// Assign 5 to y
  </code>
</pre>

      <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The += Operator</h1>
      <p>The addition assignment operator (+=) increases a variable by a given value.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10;
    <br />
    x += 5;
  </code>
</pre>

      <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The -= Operator</h1>
      <p>The subtraction assignment operator (-=) decreases a variable by a specified value.</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10;
    <br />
    x -= 5;
  </code>
</pre>

      <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The *= Operator</h1>
     <p>The multiplication assignment operator (*=) multiplies a variable by a specified value.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10;
    <br />
    x *= 5;
  </code>
</pre>

     <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The **= Operator</h1>
     <p>The exponentiation assignment operator (**=) raises a variable to the power of a specified value.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10;
    <br />
    x **= 5;
  </code>
</pre>

     <h1 className="text-2xl text-gray-800 mt-10 font-semibold mb-2">The /= Operator</h1>
     <p>The division assignment operator (/=) divides a variable by a specified value.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10;
    <br />
    x /= 5;
  </code>
</pre>

     <h1 className="text-2xl text-gray-800 mt-10 font-semibold mb-2">The %= Operator</h1>
     <p>The remainder assignment operator (%=) assigns the remainder of a division to a variable.</p>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = 10;
    <br />
    x %= 5;
  </code>
</pre>

     <h1 className="text-2xl text-gray-800 mt-10 font-semibold mb-2">The &&= Operator</h1>
     <p>The logical AND assignment operator (&&=) is applied between two values.</p>
     <p>If the first value is truthy, the second value gets assigned.</p>
     <h2 className="text-2xl mt-5 font-semibold text-gray-800">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = true;
    <br />
    let y = x &amp;&amp;= 10;
    <br /><br />

    let x = null;
    <br />
    let y = x &amp;&amp;= 10;
    <br /><br />

    let x = undefined;
    <br />
    let y = x &amp;&amp;= 10;
  </code>
</pre>


     <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The ||= Operator</h1>
     <p>The logical OR assignment operator (||=) is applied between two values.</p>
     <p>If the any condition is true, the value is assigned</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x = true;
    <br />
    let y = x ||= 10;
    <br /><br />

    let x = null;
    <br />
    let y = x ||= 10;
    <br /><br />

    let x = undefined;
    <br />
    let y = x ||= 10;
  </code>
</pre>

     <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-2">The ??= Operator</h1>
     <p className="mb-2">The nullish coalescing assignment operator (??=) is applied between two values.</p>
     <p>If the first value is null or undefined, the second value gets assigned.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let x;
    <br />
    x ??= 10;
    <br /><br />

    let x = 0;
    <br />
    x ??= 10;
    <br /><br />

    let x = null;
    <br />
    x ??= 10;
    <br /><br />

    let x = undefined;
    <br />
    x ??= 10;
  </code>
</pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Conditional (Ternary) Operator</h1>
     <p>The Nullish Coalescing Operator (??) returns the right-hand side value if the left-hand side is null or undefined. It is useful for providing default values when a variable might be null or undefined.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let name = null;
    <br />
    let defaultName = "Guest";
    <br />
    let displayName = name ?? defaultName;
    <br />
    console.log(displayName); &nbsp;&nbsp;// Output: Guest
  </code>
</pre>

    <h1 className="text-2xl font-semibold text-gray-800 mt-10">With Undefine</h1>
    <h2 className="text-2xl font-semibold text-gray-800 mt-5">Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let age;
    <br />
    let defaultAge = 18;
    <br />
    let userAge = age ?? defaultAge;
    <br />
    console.log(userAge); &nbsp;&nbsp;// Output: 18
  </code>
</pre>
   
    </div>
  );
};

export default JSAssignmentOperators;