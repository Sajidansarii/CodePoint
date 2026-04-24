import React from "react";

const JSDateGet = () => {
  const data = [ 
    {Method:'getFullYear()', Description:' Returns the year (e.g., 2025)'},
    {Method:'getMonth()', Description:'Returns the month (0-11, January is 0)'},
    {Method:'getDate()',Description:'Returns the day of the month (1-31)'},
    {Method:'getDay()', Description:'Returns the day of the week (0-6, Sunday is 0)'},
    {Method:'getMinutes()', Description:' Returns minutes (0-59)'},
    {Method:'getSeconds()', Description:' Returns seconds (0-59)'},
    {Method:'getMilliseconds()', Description:'Returns milliseconds (0-999)'},
    {Method:'getTime()', Description:'Returns time in milliseconds since January 1, 1970'},
  ]
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Date Get Methods</h1>

      <p className="text-gray-700 mb-6">JavaScript provides several <span className="text-red-400">get methods</span> to retrieve specific parts of a <code>Date</code> object, such as year, month, day, hours, minutes, and seconds.</p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Date Get Methods</h2>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm mt-5 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">Method</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">Description</th>
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

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The new Date() Constructor</h1>
      <p className="mb-3">Date objects in JavaScript are initialized with <span className="text-red-400">new Date()</span>.</p>
      <p><span className="text-red-400">new Date()</span> creates a date object representing the current date and time.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">The Current Time</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const date = new Date();`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getFullYear() Method</h1>
      <p>The getFullYear() method retrieves the year from a date as a four-digit number.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className="bg-gray-200 rounded-lg p-4 mt-5">
        <code>
          {`const d = new Date("2021-03-25");
d.getFullYear();
`}
        </code>
      </pre>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    const d = new Date();
    <br />
    d.getFullYear();
  </code>
</pre>

      <h1 className="text-2xl font-semibold mt-10 mb-3">The getMonth() Method</h1>
      <p>The getMonth() method retrieves the month of a date as a number between 0 and 11.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date("2021-03-25");
d.getMonth();`}
        </code>
      </pre>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date();
d.getMonth();`}
        </code>
      </pre>

      <h1 className="text-2xl font-semibold mt-10 mb-3">The getDate() Method</h1>
      <p>The <span className="text-red-400">getDate()</span> method retrieves the day of the month as a number between 1 and 31.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date("2021-03-25");
d.getDate();`}
        </code>
      </pre>

      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date();
d.getDate();`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getHours() Method</h1>
     <p>The <span className="text-red-400">getHours()</span> method retrieves the hour of a date as a number between 0 and 23.</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2021-03-25");
d.getHours();`}
      </code>
     </pre>

     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date();
d.getHours();`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getMinutes() Method</h1>
     <p>The <span className="text-red-400">getMinutes()</span> method retrieves the minutes of a date as a number between 0 and 59.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2021-03-25");
d.getMinutes();`}
      </code>
    </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date();
d.getMinutes();`}
      </code>
    </pre>

    <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">The getSeconds() Method</h1>
    <p>The <span className="text-red-400">getSeconds()</span> method retrieves the seconds of a date as a number between 0 and 59.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2021-03-25");
d.getSeconds();`}
      </code>
    </pre>

     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date();
d.getSeconds();`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getMilliseconds() Method</h1>
    <p>The <span className="text-red-400">getMilliseconds()</span> method retrieves the milliseconds of a date as a number between 0 and 999.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2021-03-25");
d.getMilliseconds();`}
      </code>
    </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date();
d.getMilliseconds();`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">The getDay() Method</h1>
    <p><span className="text-red-400">The getDay()</span> method retrieves the day of the week as a number between 0 and 6.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2021-03-25");
d.getDay();`}
      </code>
    </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date();
d.getDay();`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The getTime() Method</h1>
    <p><span className="text-red-400">The getTime()</span> method returns the milliseconds elapsed since January 1, 1970.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("1970-01-01");
d.getTime();`}
      </code>
    </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2021-03-25");
d.getTime();`}
      </code>
    </pre>

     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date();
d.getTime();`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Date.now() Method</h1>
    <p><span className="text-red-400">Date.now()</span> returns the milliseconds elapsed since January 1, 1970.</p>
    <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-10 mb-5">
      <code>
        {`let ms = Date.now();`}
      </code>
    </pre>

    <p>Calculate the number of years since 1970/01/01:</p>

    <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);`}
      </code>
    </pre>
    <p className="mt-10 mb-3"><span className="text-red-400">Date.now()</span> is a static method belonging to the Date object.</p>
    <p className="mb-3"><span className="text-red-400">myDate.now()</span> will not work because it’s not a method of a date object.</p>
    <p>The correct syntax is always <span className="text-red-400">Date.now()</span>.</p>
     

    </div>
  );
};

export default JSDateGet;