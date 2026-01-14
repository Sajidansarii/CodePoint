import React from "react";

const JSComparisonOperators = () => {
  const data = [
    {Operator:'==', Description:'Equal to (compares value only)'},
    {Operator:'===', Description:'Strict equal (compares value and type)'},
    {Operator:'!=', Description:'Not equal (compares value only)'},
    {Operator:'!==', Description:'Strict not equal (compares value and type)'},
    {Operator:'>', Description:'Greater than'},
    {Operator:'<', Description:'Less then'},
    {Operator:'>= ', Description:'Greater than or equal to'},
    {Operator:'<=', Description:'Less than or equal to'}
  ]

  const data1 = [
    {Case:'2 < 12', Value:'true'},
    {Case:'2 < "12"', Value:'true'},
    {Case:'2 < "John"', Value:'false'},
    {Case:'2 > "John"', Value:'false'},
    {Case:'2 == "John"', Value:'false'},
    {Case:'"2" < "12"', Value:'false'},
    {Case:'"2" > "12"', Value:'true'},
    {Case:'"2" == "12"', Value:'false'}
  ]
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Comparison Operators</h1>
      
      <p className="text-gray-700 mb-6">
        <span className="text-red-400">Comparison</span> operators are used to compare two values and return a Boolean result (true or false). 
        They are commonly used in conditional statements.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Comparison Operators</h2>
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-3 border-b border-gray-300 text-gray-700 font-bold">Operator</th>
          <th className="px-4 py-3 border-b border-gray-300 text-gray-700 font-bold">Description</th>
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

      <p className="mt-10">Comparison operators let you compare values in conditional statements and perform actions based on whether the comparison is true or false.</p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-2">String Comparison</h1>
      <p>The comparison operators listed above are also valid for evaluating string values.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
          `}
        </code>
      </pre>

      <p className="mt-5">Keep in mind that string comparisons are performed using alphabetical ordering.</p>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
          `}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mb-5 mt-10">Comparing Different Types</h1>
      <p>In JavaScript, comparing a string with a numeric value triggers type coercion, converting the string into a number. An empty string coerces to 0, whereas a non-numeric string coerces to <span className="text-red-400">NaN</span>, resulting in a comparison that always <span className="text-red-400">false</span>.</p>

       <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-3 border-b border-gray-300 text-gray-700 font-bold">Operator</th>
          <th className="px-4 py-3 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
     <tbody>
      {data1.map((row,index)=>(
        <tr className="cursor-text hover:bg-gray-100">
          <td className="px-4 py-2 border-b border-gray-200">{row.Case}</td>
          <td className="px-4 py-2 border-b border-gray-200">{row.Value}</td>
        </tr>
      ))}
     </tbody>
      </table>

      <p className="mt-10">When you compare two strings, "2" is considered greater than "12".</p>
      <p>For accurate results, variables must be converted to the correct type before comparing.</p>
      <h1 className="text-2xl mt-5">Example</h1>

      <pre className="text-green-400 bg-gray-900 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
          `}
        </code>
      </pre>


                                         
    </div>
  );
};



export default JSComparisonOperators; 