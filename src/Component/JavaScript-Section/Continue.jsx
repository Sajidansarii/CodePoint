import React from "react";

const JSContinue = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript continue Statement</h1>
      
      <p className="mb-6">
        The <span className="text-red-400 bg-gray-50 px-1">continue</span> statement in JavaScript is used to *skip the current iteration of a loop* and continue with the next one. 
        Unlike <span className="text-red-400 bg-gray-50 px-1">break</span>, it does not exit the loop completely—it just moves to the next iteration.
      </p>

      <h1 className="text-2xl mt-10 mb-3">Example</h1>
      <p>Skip the value of 3:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}`}
      </pre>

      <h1 className="text-2xl mt-10">JavaScript Labels</h1>
      <p className="leading-relaxed mt-3">A label gives a name to a line or group of lines so the program can jump to them, especially in loops.</p>
      <p className="text-xl mt-5 mb-3">Syntax</p>
      <p>A label is an identifier followed by a colon (:).</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`labelname: statement;`}
      </pre>

      <p className="mt-5">A label precedes a statement or a block of code.</p>

      <pre className="text-green-400  bg-gray-900 p-4 rounded-lg mt-5">
        {`labelname: {
  statements
}`}
      </pre>

      <h1 className="text-2xl mt-10">Continue to Labelname</h1>
      <h1 className="text-xl mt-5">Syntax</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`continue labelname;`}
      </pre>

      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Continue to loop1:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    text += i;
   }
}`}
      </pre>

      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Continue to loop2:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    text += i;
   }
}`}
      </pre>

      <p>The only JavaScript statements that can jump out of a block are <span className="text-red-400 bg-gray-50 px-1 ">break</span> and <span className="text-red-400 bg-gray-50 px-1">continue</span>.</p>

      <p className="mt-10">
        <span className="font-semibold text-xl">Key points about continue:</span>
        <ul className="list-disc list-inside leading-relaxed mt-2">
          <li>Skips the current iteration and moves to the next loop cycle.</li>
          <li>Does not terminate the loop (unlike <span className="font-semibold">break</span>).</li>
          <li>Works in <span className="font-semibold">for</span>, <span className="font-semibold">while</span>, and <span className="font-semibold">do...while</span> loops.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSContinue;