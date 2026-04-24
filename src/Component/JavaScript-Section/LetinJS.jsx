import React from "react";

const JSLet = () => {
  const data  = [
    {space:'var', Scope:'No', Redeclare:'Yes', Reassign:'Yes', Hoisted:'Yes', Bindsthis:'Yes'},
    {space:'let', Scope:'Yes', Redeclare:'No', Reassign:'Yes', Hoisted:'No', Bindsthis:'No'},
    {space:'const', Scope:'Yes', Redeclare:'No', Reassign:'No', Hoisted:'No', Bindsthis:'No'},
  ];
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript let Keyword</h1>
      <p>The let keyword was introduced in ES6 (2015)</p>
      <p className="mt-1 leading-relaxed">
        In JavaScript, <span className="text-red-400">let</span> is used to declare a variable that is block-scoped, meaning it is accessible only within the block, statement, or expression where it is defined. 
        Unlike <span className="text-red-400">var</span>, it cannot be redeclared in the same scope.
      </p>

      <h1 className="text-2xl mt-10 mb-3">Block Scope</h1>
      <p className="leading-relaxed">Block-level scoping was not available in JavaScript before the introduction of ES6 in 2015.</p>
      <p className="leading-relaxed">Prior to ES6, JavaScript variables could exist in either the global scope or the function scope—block scope was not supported.</p>
      <p className="leading-relaxed">The ES6 update introduced let and const as modern alternatives to var for variable declaration in JavaScript.</p>
      <p className="leading-relaxed">let and const introduced in ES6 allow variables to be scoped to the block in which they are declared, unlike var.</p>

      <h1 className="text-2xl mt-10 mb-3">Example</h1>
        <p> Variables declared inside a block <span className="bg-gray-50 px-1">{ }</span>are limited to block scope and cannot be accessed externally.</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5">
          {`{
  let x = 2;
}
// x can NOT be used here`}
        </pre>

        <h1 className="text-2xl mt-10">Global Scope</h1>
        <p className="leading-relaxed mt-5">Variables declared using <span className="bg-gray-50 px-1">var</span> are function-scoped. If declared outside of a function, they become globally scoped.</p>
        <p className="leading-relaxed">Declarations with var are function-scoped or globally scoped, but never block-scoped.</p>
        <h1 className="text-2xl mt-10">Example</h1>
        <p className="leading-relaxed mb-5"><span className="bg-gray-50 px-1">var</span> declarations inside blocks do not have block scope and are accessible outside the block, following function or global scope rules.</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`{
  var x = 2;
}
// x CAN be used here`}
        </pre>

        <h1 className="text-2xl mt-10">Cannot be Redeclared</h1>
        <p className="leading-relaxed mt-3"><span className="bg-gray-50 px-1">let</span> variables are block-scoped and cannot be redeclared in the same scope.</p>
        <p className="leading-relaxed"> Using <span className="bg-gray-50 px-1">let</span> ensures that variables cannot be unintentionally redeclared in the same block scope.</p>
       <p className="mt-2 mb-5">Here’s something you can’t do with <span className="text-red-400 bg-gray-50 px-1">let</span>:</p>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`let x = "John Doe";
let x = 0;`}
       </pre>
       <p className="mt-10">With var, you’re allowed to declare the same variable more than once.</p>
       <p><span className="bg-gray-50 px-1">var</span> allows the following behavior:</p>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`var x = "John Doe";

var x = 0;`}
       </pre>

       <h1 className="text-2xl mt-10">Redeclaring Variables</h1>
       <p className="leading-relaxed mt-3 mb-1">Redeclaring variables with <span className="bg-gray-50 px-1">var</span> can result in unexpected behavior or bugs.</p>
       <p className="leading-relaxed"><span className="bg-gray-50 px-1">var</span> declarations are function-scoped; thus, redeclaring a variable inside a block affects the variable in the enclosing scope.</p>
       <h1 className="text-2xl mt-5 mb-5">Example</h1>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2`}
       </pre>

       <p className="mt-10 leading-relaxed">The <span className="text-red-400 bg-gray-50 px-1">let</span> keyword restricts redeclaration within the same block scope, effectively solving this problem.</p>
       <p className="leading-relaxed mt-2">Redeclaring a variable inside a block with let or const creates a new variable scoped to that block, leaving the outer variable unchanged.</p>
       <h1 className="text-2xl mt-10 mb-5">Example</h1>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10`}
       </pre>

       <h1 className="mt-10 text-2xl">Difference Between var, let and const</h1>
       <div className="w-full overflow-x-auto">
       <table className="w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
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

       <h1 className="text-2xl mb-2 mt-10">What is Good?</h1>
       <p className="leading-relaxed mt-3">Both <span className="bg-gray-50 px-1 text-red-400">let</span> and <span className="bg-gray-50 px-1 text-red-400">const</span> are block-scoped.</p>
       <p className="leading-relaxed mt-3">You cannot redeclare variables declared with <span className="bg-gray-50 px-1 text-red-400">let</span> or <span className="bg-gray-50 px-1 text-red-400">const</span>.</p>
       <p className="leading-relaxed mt-3">You have to declare <span className="bg-gray-50 px-1 text-red-400">let</span> and <span className="bg-gray-50 px-1 text-red-400">const</span> variables before using them.</p>
       <p className="leading-relaxed mt-3"><span className="bg-gray-50 px-1 text-red-400">let</span> and <span className="bg-gray-50 px-1 text-red-400">const</span> do not bind to the this keyword.</p>
       <p className="leading-relaxed mt-3"><span className="bg-gray-50 px-1 text-red-400">let</span> and <span className="bg-gray-50 px-1 text-red-400">const</span> appear not to be hoisted because they can’t be used before they’re declared.</p>
       
        <h1 className="text-2xl mt-10 mb-3">What is Not Good?</h1>
        <p className="leading-relaxed mt-3">In non-strict mode, you can use a variable without declaring it with <span className="text-red-400 bg-gray-50 px-1">var</span>, though it's not recommended.</p>
        <p className="leading-relaxed mt-3">Variables declared with <span className="text-red-400 bg-gray-50 px-1">var</span> are hoisted to the top of their scope.</p>
        <p className="leading-relaxed mt-3">In the global scope, variables declared with <span className="text-red-400 bg-gray-50 px-1">var</span> are attached to the this object.</p>
        
        <h1 className="text-2xl mt-10">Redeclaring</h1>
        <p className="leading-relaxed mt-1">It’s true that JavaScript lets you redeclare a variable using <span className="text-red-400 bg-gray-50 px-1">var</span> anywhere in the program.</p>
        <h1 className="text-2xl mt-5">Example</h1>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`var x = 2;
// Now x is 2

var x = 3;
// Now x is 3`}
        </pre>

        <p className="mt-10">Just like some other strict rules in JavaScript, <span className="text-red-400 bg-gray-50 px-1">let</span> does not allow variable redeclaration in the same block.</p>
        <h1 className="text-2xl mt-10">Example</h1>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}`}
        </pre>

        <p className="mt-10">With <span className="text-red-400 bg-gray-50 px-1">let</span>, redeclaring a variable in another block is allowed too.</p>
        <h1 className="text-2xl mt-10">Example</h1>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}`}
        </pre>

        <h1 className="text-2xl mt-10">Let Hoisting</h1>
        <p className="leading-relaxed mt-3">Variables declared with <span className="text-red-400 bg-gray-50 px-1">var</span> are hoisted to the top of their scope and can be initialized whenever needed.</p>
       <p className="leading-relaxed mt-3">A variable can be accessed even before its declaration appears in the code.</p>
       <h1 className="text-2xl mt-5">Example</h1>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`carName = "Volvo";
var carName;`}
       </pre>
       <p  className="leading-relaxed mt-10">Variables defined with <span className="text-red-400 bg-gray-50 px-1">let</span> are also hoisted to the top of the block, but not initialized.</p>
        <p  className="leading-relaxed mt-3">Using a <span className="text-red-400 bg-gray-50 px-1">let</span> variable before it is declared will result in a <span className="text-red-400 bg-gray-50 px-1">ReferenceError</span>:</p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
          {`carName = "Saab";
let carName = "Volvo";`}
        </pre>

     

      <div className="mt-10">
        <h1 className="font-semibold text-2xl mb-3">Key points about let:</h1>
        <ul className="list-disc list-inside leading-relaxed">
          <li>Block-scoped, accessible only within the block it is declared.</li>
          <li>Can be updated but cannot be redeclared in the same scope.</li>
          <li>In modern JavaScript, let is preferred over var because it has safer scoping rules.</li>
        </ul>
      </div>
    </div>
  );
};

export default JSLet;