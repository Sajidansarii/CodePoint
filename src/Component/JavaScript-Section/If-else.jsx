import React from "react";

const IfElseInJS = () => {
  return (
    <div className="p-6 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript if-else Statement
      </h1>

      {/* Introduction */}
      <p className="mb-4 leading-relaxed">
        The <span className="text-red-400 bg-gray-50 px-1 rounded">if-else</span> statement is used to execute a block of code
        based on a condition. If the condition evaluates to{" "}
        <span className="font-semibold">true</span>, the <code>if</code> block
        runs. Otherwise, the <code>else</code> block runs. This is one of the
        most common decision-making statements in JavaScript. 
      </p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    if (condition) {"{"}
    <br />
    &nbsp;&nbsp;// block of code to be executed if the condition is true
    <br />
    {"}"} else {"{"}
    <br />
    &nbsp;&nbsp;// block of code to be executed if the condition is false
    <br />
    {"}"}
  </code>
</pre>

      <h1 className="text-2xl mt-10">Example</h1>
      <p className="mt-3">If the time is earlier than 6 PM, display “Good day”; otherwise, show “Good evening.”</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    if (hour &lt; 6) {"{"}
    <br />
    &nbsp;&nbsp;greeting = "Good day";
    <br />
    {"}"} else {"{"}
    <br />
    &nbsp;&nbsp;greeting = "Good evening";
    <br />
    {"}"}
  </code>
</pre>

      <h1 className="text-2xl mt-10 mb-2">The else if Statement</h1>
      <p>Apply else if to add a new condition that runs only if the initial if fails.</p>
      <h1 className="mt-3 text-2xl">Syntax</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    if (condition1) {"{"}
    <br />
    &nbsp;&nbsp;// block of code to be executed if condition1 is true
    <br />
    {"}"} else if (condition2) {"{"}
    <br />
    &nbsp;&nbsp;// block of code to be executed if the condition1 is false and condition2 is true
    <br />
    {"}"} else {"{"}
    <br />
    &nbsp;&nbsp;// block of code to be executed if the condition1 is false and condition2 is false
    <br />
    {"}"}
  </code>
</pre>

      <h1 className="text-2xl mt-10">Example</h1>
      <p className="mt-3">If the time is earlier than 11:00, show “Good morning.” If it’s not, but still before 09:00, show “Good day.” Otherwise, show “Good evening.”</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    if (time &lt; 11) {"{"}
    <br />
    &nbsp;&nbsp;greeting = "Good morning";
    <br />
    {"}"} else if (time &lt; 9) {"{"}
    <br />
    &nbsp;&nbsp;greeting = "Good day";
    <br />
    {"}"} else {"{"}
    <br />
    &nbsp;&nbsp;greeting = "Good evening";
    <br />
    {"}"}
  </code>
</pre>

    </div>
  );
};

export default IfElseInJS;