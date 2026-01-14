import React from "react";

const JSBreak = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript break Statement</h1>
      
      <p className="mb-6">
        The <span className="text-red-400 bg-gray-50 px-1">break</span> statement in JavaScript is used to *exit a loop or switch statement immediately* before it naturally finishes. 
        This is useful when a certain condition is met, and you want to stop further iterations or checks.
      </p>

      <h1 className="text-2xl mt-10">Break in Loops</h1>
      <p className="leading-relaxed mt-3">Using <span className="text-red-400 bg-gray-50 -x-1">break</span> in a loop causes it to exit instantly.</p>
      <p className="leading-relaxed mt-3">When the loop stops, the program keeps going with the rest of the code.</p>
      <p className="leading-relaxed mt-3">No more steps in the loop are done.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <p>When i becomes 3, exit the loop.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}`}
      </pre>

      <h1 className="text-2xl mt-10">Break in a Switch</h1>
      <p className="leading-relaxed mt-3">In a switch, the break stops the program from running other cases after one matches. Without it, the code keeps running into the next cases.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <p className="leading-relaxed mt-3">Get the weekday name from the weekday number.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}`}
      </pre>
      <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">break</span> keyword stops the switch from running into the next cases.</p>
      <p className="leading-relaxed mt-3">Without a <span className="text-red-400 bg-gray-50 px-1">break</span>, the code goes on to the following cases, even when they aren’t the right ones.</p>
      
      <h1 className="text-2xl mt-10">JavaScript Labels</h1>
      <p className="leading-relaxed mt-3">A label gives a name to a line or group of lines so the program can jump to them, especially in loops.</p>
      <h1 className="text-xl mt-5 mb-5">Syntax</h1>
      <p>A label is an identifier followed by a colon (:).</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`labelname: statement;`}
      </pre>
      <p className="mt-5">A label precedes a statement or a block of code.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`labelname: {
  statements
}`}
      </pre>

      <h1 className="text-2xl mt-10">Labeled Break</h1>
      <h1 className="text-xl mt-5">Syntax</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        {`break labelname;`}
      </pre>
      <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">break</span> statement makes the program leave the loop and go to the label.</p>
      <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">break</span> statement is useful for leaving any loop in nested loops.</p>
      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Break to loop1:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    text += i;
   }
}`}
      </pre>

      <h1 className="text-2xl mt-10 mb-5">Example</h1>
      <p>Break to loop2:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop2; }
    text += i;
   }
}`}
      </pre>
      <p className="leading-relaxed mt-10">The only JavaScript statements that can jump out of a block are <span className="text-red-400 bg-gray-50 px-1">break</span> and <span className="text-red-400 bg-gray-50 px-1">continue</span>.</p>
      <p className="leading-relaxed mt-3">Code between {"{"} and {"}"} is called a code block.</p>
      <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">Break</span> without a label can only exit loops or switch statements.</p>
      <p className="leading-relaxed mt-3">When you use a label, <span className="text-red-400 bg-gray-50 px-1">break</span> can exit any code block.</p>

      <h1 className="text-2xl mt-10 mb-5">Example</h1>
      <p>Break the block after the second car is handled.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto mt-5">
        {`const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}`}
      </pre>

      <p className="mt-10">
        <span className="font-semibold text-xl">Key points about break:</span>
        <ul className="list-[square] list-inside mt-2">
          <li>Immediately stops the execution of a loop or switch statement.</li>
          <li>Commonly used to exit a loop based on a condition.</li>
          <li>Works in <span className="font-semibold">for</span>, <span className="font-semibold">while</span>, <span className="font-semibold">do...while</span> loops, and <span className="font-semibold">switch</span> statements.</li>
        </ul>
      </p>
    </div>
  );
};

export default JSBreak;