import React from "react";

const JSConst = () => {
  const data = [
    {space:'var', 	Scope:'No', Redeclare:'Yes', Reassign:'Yes', Hoisted:'Yes', Bindsthis:'Yes'},
    {space:'let', 	Scope:'Yes', Redeclare:'No', Reassign:'Yes', Hoisted:'No', Bindsthis:'No'},
    {space:'const', 	Scope:'Yes', Redeclare:'No', Reassign:'NO', Hoisted:'No', Bindsthis:'No'},

  ];
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript const Keyword</h1>
      
      <p className="mb-6">
        In JavaScript, <span className="text-red-400">const</span> is used to declare variables that are block-scoped and cannot be reassigned after their initial value is set. 
        This makes <span className="text-red-400">const</span> ideal for defining constants or values that should not change.
      </p>
      <p className="leading-relaxed mt-3">JavaScript introduced the <span className="text-red-400 bg-gray-50 px-1">const</span> keyword in ES6, released in 2015.</p>
      <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">const</span> variables can't be declared more than once.</p>
      <p className="leading-relaxed mt-3">You can't assign a new value to a variable declared with <span className="text-red-400 bg-gray-50 px-1">const</span>.</p>
      <p className="leading-relaxed mt-3">A variable declared with <span className="text-red-400 bg-gray-50 px-1">const</span> is only accessible within its block scope.</p>

      <h1 className="text-2xl mt-10">Cannot be Reassigned</h1>
      <p className="leading-relaxed mt-5">Variables declared using <span className="text-red-400 bg-gray-50 px-1">const</span> are immutable — they can’t be reassigned.</p>
       <h1 className="text-2xl mt-5">Example</h1>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
        {`const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error`}
       </pre>

       <h1 className="text-2xl mt-10">Must be Assigned</h1>
       <p className="leading-relaxed mt-5">You must give a value to a <span className="text-red-400 bg-gray-50 px-1">const</span> variable at the time you declare it.</p>
       <h1 className="text-2xl mt-5">Correct</h1>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`const PI = 3.14159265359;`}
       </pre>

       <h1 className="text-2xl mt-10">Incorrect</h1>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`const PI;
PI = 3.14159265359;`}
       </pre>

       <h1 className="text-2xl mt-10">When to use JavaScript const?</h1>
       <p className="mt-3">If you don’t plan to change a variable’s value, declare it using <span className="text-red-400 bg-gray-50 px-1">const</span>.</p>
       <p className="mt-3">Use <span className="text-red-400 bg-gray-50 px-1">const</span> when you declare:</p>
       <ul className="list-[square] list-inside leading-relaxed mt-5">
        <li>A new Array</li>
        <li>A new Object</li>
        <li>A new Function</li>
        <li>A new RegExp</li>
       </ul>

       <h1 className="text-2xl mt-10">Constant Objects and Arrays</h1>
       <p className="leading-relaxed mt-3"><span className="text-red-400 px-1 bg-gray-50">const</span> can be somewhat confusing in its meaning.</p>
        <p className="leading-relaxed mt-3">"It doesn’t lock the value itself, but rather the reference to that value.</p>
        <p className="mt-3">Because of this you can NOT:</p>
        <ul className="list-[square] list-inside mt-3">
          <li>Reassign a constant value</li>
          <li>Reassign a constant array</li>
          <li>Reassign a constant object</li>
        </ul>

        <p className="mt-5">But you CAN:</p>
        <ul className="list-[square] list-inside mt-3">
          <li>Change the elements of constant array</li>
          <li>Change the properties of constant object</li>
        </ul>

        <h1 className="text-2xl mt-10 mb-3">Constant Arrays</h1>
        <p>The <span className="text-red-400 bg-gray-50 px-1">contents</span> of an array declared with const can still be change.</p>
        <h1 className="text-2xl">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
          {`// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");`}
        </pre>

        <p className="mt-10">While the contents can change, the array itself cannot be reassigned.</p>
        <h1 className="text-2xl mt-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
          {`const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR`}
        </pre>

        <h1 className="text-2xl mt-10 mb-5">Constant Objects</h1>
        <p>Even if an object is declared with const, you can update its properties.</p>
        <h1 className="text-2xl mt-5">Example</h1>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
        {`// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";`}
       </pre>

       <p className="mt-10">But you can NOT reassign the object:</p>
       <h1 className="text-2xl mt-5">Example</h1>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
        {`const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"}    // ERROR`}
       </pre>

       <h1 className="text-2xl mt-10">Difference Between var, let and const</h1>
       <div className="w-full overflow-x-auto">
       <table className="w-full border border-gray-300 text-sm text-left text-gray-700 mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold"></th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Scope</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Redeclare</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Reassign</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Hoisted</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Binds this</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.space}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Scope}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Redeclare}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Reassign}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Hoisted}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Bindsthis}</td>
            </tr>
          ))}
        </tbody>
       </table>
     </div>

       <h1 className="text-2xl mt-10">What is Good?</h1>
       <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> follow block-level scoping rules.</p>
        <p className="leading-relaxed mt-3">Variables declared with <span className="text-red-400 bg-gray-50 px-1">let</span> or <span className="text-red-400 bg-gray-50 px-1">const</span> can’t be redefined in the same scope.</p>
        <p className="leading-relaxed mt-3">You have to declare <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> variables before using them.</p>
        <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> variables are not accessible via the this keyword in the global scope.</p>
        <p className="leading-relaxed mt-3">You must declare <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> variables before using them, as they aren’t accessible during hoisting.</p>
        
        <h1 className="text-2xl mt-10">What is Not Good?</h1>
        <p className="leading-relaxed mt-3">Variables declared with <span className="text-red-400 bg-gray-50 px-1">var</span> can be used before their declaration due to hoisting.</p>
        <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">var</span> is hoisted to the top of the function or global scope.</p>
        <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">var</span> attaches variables to the global this object if declared outside of any function.</p>
       
       <h1 className="text-2xl mt-10">Block Scope</h1>
       <p className="leading-relaxed mt-3">Both <span className="text-red-400 bg-gray-50 px-1">const</span> and <span className="text-red-400 bg-gray-50 px-1">let</span> are block-scoped, meaning they are only accessible within the block they are defined in.</p>
       <p className="leading-relaxed mt-3">The <span className="bg-gray-50 px-1">x</span> declared within the block is scoped locally and does not refer to the x declared outside of it.</p>
       <h1 className="text-2xl mt-5">Example</h1>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            {`const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10`}
          </pre>

          <h1 className="text-2xl mt-10">Redeclaring</h1>
          <p className="leading-relaxed mt-3">JavaScript allows redeclaration of <span className="text-red-400 bg-gray-50 px-1">var</span> variables at any point in the program.</p>
          <h1 className="text-2xl mt-5">Example</h1>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            {`var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed`}
          </pre>

          <p className="mt-10">You cannot redeclare a var or let variable as const within the same scope.</p>
          <h1 className="text-2xl mt-5">Example</h1>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            {`var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}`}
          </pre>

          <p className="mt-10">A <span className="text-red-400 bg-gray-50 px-1">const</span> variable’s value cannot be updated after its initial assignment in the same scope.</p>
         <h1 className="text-2xl mt-5">Example</h1>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}`}
         </pre>

         <p className="mt-10">You can redeclare a <span className="text-red-400 bg-gray-50 px-1">const</span> variable in a different block or scope without any issues.</p>
         <h1 className="text-2xl mt-5">Example</h1>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}`}
         </pre>

         <h1 className="text-2xl mt-10">Hoisting</h1>
         <p className="mt-3 leading-relaxed"><span className="text-red-400 bg-gray-50 px-1">var</span> variables are hoisted to the top of their scope and can be assigned values whenever needed.</p>
         <p className="leading-relaxed mt-3">You can use the variable earlier in the code than its declaration point.</p>
         <h1 className="text-2xl mt-5">Example</h1>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`carName = "Volvo";
var carName;`}
         </pre>
         <p className="leading-relaxed mt-10">Variables defined with <span className="text-red-400 bg-gray-50 px-1">const</span> are also hoisted to the top, but not initialized.</p>
        <p className="leading-relaxed mt-3">Meaning: Using a <span className="text-red-400 bg-gray-50 px-1">const</span> variable before it is declared will result in a <span className="text-red-400 bg-gray-50 px-1">ReferenceError</span>:</p>
        <h1 className="text-2xl mt-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
          {`alert (carName);
const carName = "Volvo";`}
        </pre>

      <div className="mt-10">
        <span className="font-semibold text-2xl">Key points about const:</span>
        <ul className="list-disc list-inside leading-relaxed mt-2">
          <li>Block-scoped, accessible only within the block it is declared.</li>
          <li>Cannot be reassigned after initial declaration.</li>
          <li>Perfect for constants and values that should remain unchanged.</li>
          <li>Cannot be redeclared in the same scope, like <span className="text-red-400 bg-gray-50 px-1">let</span>.</li>
        </ul>
      </div>
    </div>
  );
};

export default JSConst;