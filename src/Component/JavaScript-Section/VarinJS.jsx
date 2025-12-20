import React from "react";

const JSVar = () => {
  const data = [ 
    {Parameter:'name', Description:'Required. \n The name of the variable. \n Variable names must follow these rules: \n  Must begin with a letter, or $, or _ \n Names are case sensitive (y and Y are different) \n Reserved JavaScript words cannot be used as names'},
    {Parameter:'value', Description:'Optional. \n A value to be assigned to the variable.'}
  ];
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript var Keyword</h1>
      
      <p className="mb-6">
        In JavaScript, <span className="text-red-400">var</span> is used to declare a variable. 
        Variables declared with <span className="text-red-400">var</span> are *function-scoped*, meaning they are accessible within the function they are declared in. 
        If declared outside a function, they become global.
      </p>
      <p>JavaScript variables function as data containers capable of storing various data types, including strings, numbers, booleans, objects, and others.</p>

      <h1 className="text-2xl mt-10 mb-2">Syntax</h1>
      <p className="mb-5">The <span className="text-red-400 bg-gray-50 px-1">var</span> keyword is used to declare a variable. Follow the syntax shown below.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`var identifier;
var identifier = value;`}
      </pre>
      <p className="mt-5">Here, the identifier should be a valid variable name. We've already gone over the rules for valid identifiers in the JavaScript – Variables chapter.</p>
      <p className="mt-2">With var in JavaScript, you can declare a variable with or without giving it a value right away.</p>

      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Parameter</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Parameter}</td>
              <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>






      <h2 className="text-2xl font-semibold text-gray-800 mt-10">Example:</h2>
      <p className="leading-relaxed mt-2 mb-2">This example shows the declaration of three variables using <span className="text-red-400 bg-gray-50 px-1">var</span>:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50 px-1">num1</span> holds a number,</li>
        <li><span className="text-red-400 bg-gray-50 px-1">str1</span> holds a string,</li>
        <li>and <span className="text-red-400 bg-gray-50 px-1">bool</span> holds a boolean.</li>
      </ul> 
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-10">
          {`<html>
<body>
   <div id = "output1"> </div>
   <div id = "output2"> </div>
   <div id = "output3"> </div>
   <script>
      var num1 = 30;
      var str1 = "Hello World!";
      var bool = true;
      document.getElementById('output1').innerHTML = num1;
      document.getElementById('output2').innerHTML = str1;
      document.getElementById('output3').innerHTML = bool;
  </script>
</body>
</html>`}
        </pre>
        <h1 className="text-xl mt-5 mb-2">Output</h1>
        <pre className="rounded-lg p-4 bg-gray-200">
          {`30
Hello World!
true`}
        </pre>
        
        <p className="mt-10 mb-5">Use let to assign 5 to x and 6 to y, and display x + y:</p>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`let x = 5;
let y = 6;
document.getElementById("demo").innerHTML = x + y;`}
        </pre>

         <p className="mt-10">Declare many variables in one statement.</p>
         <p>Start the statement with var and separate the variables by comma:</p>
         <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-5">
          {`var lastName = "Doe",
age = 30,
job = "carpenter";`}
        </pre>

        
        <p className="mt-10">Declare many variables in one statement.</p>
        <p>Start the statement with let and separate the variables by comma:</p>
         <pre className="text-green-400 bg-gray-900 rounded-lg p-4 mt-5">
          {`let lastName = "Doe",
age = 30,
job = "carpenter";`}
        </pre>

        <p className="mt-10">Using var in a loop:</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {` let text = "";
for (var i = 0; i < 5; i++) {
  text += i + "<br>";
}`}
        </pre>

        <p className="mt-10">Using let in a loop:</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`let text = "";
for (let i = 0; i < 5; i++) {
  text += i + "<br>";
}`}
        </pre>
























      <p className="text-gray-700 mt-10">
        <span className="font-semibold">Key points about var:</span>
        <ul className="list-disc list-inside mt-2">
          <li>Function-scoped, not block-scoped.</li>
          <li>Can be redeclared and updated.</li>
          <li>Less preferred in modern JavaScript due to scoping issues; <span className="font-semibold">let</span> and <span className="font-semibold">const</span> are recommended.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSVar;