import React from "react";

const JSDateSet = () => {
  const data = [
    {Method:'setFullYear()', Description:'Sets the full year'},
    {Method:'setMonth()', Description:'Sets the month (0-11, January is 0)'},
    {Method:'setDate()', Description:'Sets the day of the month (1-31)'},
    {Method:'setHours()', Description:'Sets the hours (0-23)'},
    {Method:'setMinutes()', Description:'Sets the minutes (0-59)'},
    {Method:'setSeconds()', Description:'Sets the seconds (0-59)'},
    {Method:'setMilliseconds()', Description:'Sets the milliseconds (0-999)'},
    {Method:'setTime()', Description:'Sets the time in milliseconds since January 1, 1970'}

  ]
    
  
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Date Set Methods</h1>

      <p className="text-gray-700 mb-6">
        JavaScript provides several <span className="text-red-400">set methods</span> to update specific parts of a <code>Date</code> object, such as year, month, day, hours, minutes, and seconds.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10">Set Date Methods</h1>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setFullYear() Method</h1>
     <p>The <span className="text-red-400">setFullYear()</span> method updates the year of a date object — in this case, to 2020.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
        <code>
          {`const d = new Date("January 01, 2025");
d.setFullYear(2020);`}
        </code>
      </pre>

      <p className="mt-5">The <span className="text-red-400">setFullYear()</span> method can also set the month and day if needed.</p>
      <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setMonth() Method</h1>
      <p><span className="text-red-400">The setMonth()</span> method updates the month of a date object using a value from 0 to 11.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 overflow-x-auto rounded-lg p-4 mt-5">
      <code>
        {`const d = new Date("January 01, 2025");
d.setMonth(11);`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setDate() Method</h1>
     <p><span className="text-red-400">Using setDate()</span>, you can set the day of a date object to a value between 1 and 31.</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("January 01, 2025");
d.setDate(15);`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setHours() Method</h1>
     <p>The <span className="text-red-400">setHours()</span> method updates the hour value of a Date object, using a range from 0 to 23.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("January 01, 2025");
d.setHours(22);`}
      </code>
    </pre>

    <p className="mt-5">The <span className="text-red-400">setHours()</span> method updates the hour value of a Date object, using a range from 0 to 23.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("January 01, 2025");
d.setHours(22, 10, 20);`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setMinutes() Method</h1>
    <p>The <span className="text-red-400">setMinutes()</span> method updates the minutes value of a Date object, ranging from 0 to 59.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
      <code>
        {`const d = new Date("January 01, 2025");
d.setMinutes(30);`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The setSeconds() Method</h1>
    <p>The <span className="text-red-400">setSeconds()</span> method updates the seconds value of a Date object, ranging from 0 to 59.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
      <code>
        {`const d = new Date("January 01, 2025");
d.setSeconds(30);`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Compare Dates</h1>
    <p>Dates can easily be compared.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
      <code>
        {`let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}`}
      </code>
    </pre>

      <p className="text-gray-700 mt-10">
        Using these <span className="text-red-400">set methods</span>, you can update specific parts of a date for scheduling, calculations, or formatting in your JavaScript applications.
      </p>
    </div>
  );
};

export default JSDateSet;