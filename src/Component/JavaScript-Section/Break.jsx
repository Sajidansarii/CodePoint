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
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    for (let i = 0; i &lt; 10; i++) {"{"}
    <br />
    &nbsp;&nbsp;if (i === 3) {"{"} break; {"}"}
    <br />
    &nbsp;&nbsp;text += "The number is " + i + "&lt;br&gt;";
    <br />
    {"}"}
  </code>
</pre>

      <h1 className="text-2xl mt-10">Break in a Switch</h1>
      <p className="leading-relaxed mt-3">In a switch, the break stops the program from running other cases after one matches. Without it, the code keeps running into the next cases.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <p className="leading-relaxed mt-3">Get the weekday name from the weekday number.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    switch (new Date().getDay()) {"{"}
    <br />
    &nbsp;&nbsp;case 0:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Sunday";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;break;
    <br /><br />

    &nbsp;&nbsp;case 1:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Monday";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;break;
    <br /><br />

    &nbsp;&nbsp;case 2:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Tuesday";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;break;
    <br /><br />

    &nbsp;&nbsp;case 3:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Wednesday";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;break;
    <br /><br />

    &nbsp;&nbsp;case 4:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Thursday";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;break;
    <br /><br />

    &nbsp;&nbsp;case 5:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Friday";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;break;
    <br /><br />

    &nbsp;&nbsp;case 6:
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;day = "Saturday";
    <br />
    {"}"}
  </code>
</pre>

      <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">break</span> keyword stops the switch from running into the next cases.</p>
      <p className="leading-relaxed mt-3">Without a <span className="text-red-400 bg-gray-50 px-1">break</span>, the code goes on to the following cases, even when they aren’t the right ones.</p>
      
      <h1 className="text-2xl mt-10">JavaScript Labels</h1>
      <p className="leading-relaxed mt-3">A label gives a name to a line or group of lines so the program can jump to them, especially in loops.</p>
      <h1 className="text-xl mt-5 mb-5">Syntax</h1>
      <p>A label is an identifier followed by a colon (:).</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    labelname: statement;
  </code>
</pre>

      <p className="mt-5">A label precedes a statement or a block of code.</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    labelname: {"{"}
    <br />
    &nbsp;&nbsp;statements
    <br />
    {"}"}
  </code>
</pre>

      <h1 className="text-2xl mt-10">Labeled Break</h1>
      <h1 className="text-xl mt-5">Syntax</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    break labelname;
  </code>
</pre>

      <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">break</span> statement makes the program leave the loop and go to the label.</p>
      <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">break</span> statement is useful for leaving any loop in nested loops.</p>
      <h1 className="text-2xl mt-5 mb-3">Example</h1>
      <p>Break to loop1:</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let text = "";
    <br /><br />

    loop1: for (let j = 1; j &lt; 5; j++) {"{"}
    <br />
    &nbsp;&nbsp;loop2: for (let i = 1; i &lt; 5; i++) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;if (i === 3) {"{"} break loop1; {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;text += i;
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

      <h1 className="text-2xl mt-10 mb-5">Example</h1>
      <p>Break to loop2:</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    let text = "";
    <br /><br />

    loop1: for (let j = 1; j &lt; 5; j++) {"{"}
    <br />
    &nbsp;&nbsp;loop2: for (let i = 1; i &lt; 5; i++) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;if (i === 3) {"{"} break loop2; {"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;text += i;
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
  </code>
</pre>

      <p className="leading-relaxed mt-10">The only JavaScript statements that can jump out of a block are <span className="text-red-400 bg-gray-50 px-1">break</span> and <span className="text-red-400 bg-gray-50 px-1">continue</span>.</p>
      <p className="leading-relaxed mt-3">Code between {"{"} and {"}"} is called a code block.</p>
      <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">Break</span> without a label can only exit loops or switch statements.</p>
      <p className="leading-relaxed mt-3">When you use a label, <span className="text-red-400 bg-gray-50 px-1">break</span> can exit any code block.</p>

      <h1 className="text-2xl mt-10 mb-5">Example</h1>
      <p>Break the block after the second car is handled.</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    <br />
    list: {"{"}
    <br />
    &nbsp;&nbsp;text += cars[0] + "&lt;br&gt;";
    <br />
    &nbsp;&nbsp;text += cars[1] + "&lt;br&gt;";
    <br />
    &nbsp;&nbsp;break list;
    <br />
    &nbsp;&nbsp;text += cars[2] + "&lt;br&gt;";
    <br />
    &nbsp;&nbsp;text += cars[3] + "&lt;br&gt;";
    <br />
    {"}"}
  </code>
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