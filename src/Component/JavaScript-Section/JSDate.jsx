import React from "react";

const JSDate = () => {
  const data = [ 
    {Type:'ISO Date', Example:'"2015-03-25" (The International Standard)'},
    {Type:'Short Date', Example:'"03/25/2015"'},
    {Type:'Long Date', Example:'"Mar 25 2015" or "25 Mar 2015"'}
  ]
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Date Object</h1>

      <p className="text-gray-700 mb-6">
        The <span className="text-red-400">Date</span> object in JavaScript is used to work with dates and times. 
        It provides methods to create, manipulate, and format dates.
      </p>

      <p>JavaScript typically supports three main date input formats.</p>
      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Type</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Example</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr className="cursor-text hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">{row.Type}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.Example}</td>
            </tr>
            
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Date Output</h1>
      <p>No matter which format you use for input, JavaScript (by default) outputs dates as full text strings.</p>
      <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
        <code>
          {`Mon Dec 08 2025 11:01:14 GMT+0530 (India Standard Time)`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript ISO Dates</h1>
      <p className="mb-3">The ISO 8601 format serves as the international guideline for representing dates and times.</p>
      <p>JavaScript also prefers the ISO 8601 date format (YYYY-MM-DD).</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className=" bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date("2015-03-25");`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">ISO Dates (Year and Month)</h1>
      <p>SO dates may also be written without the day, using the format YYYY-MM.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date("2015-03");`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">ISO Dates (Only Year)</h1>
      <p>ISO dates can also be written using only the year, in the format YYYY.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
      <pre className=" bg-gray-200 p-4 rounded-lg mt-5">
        <code>
          {`const d = new Date("2015");`}
        </code>
      </pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">ISO Dates (Date-Time)</h1>
      <p>ISO dates can include time information—hours, minutes, and seconds—using the format YYYY-MM-DDTHH:MM:SSZ.</p>
      <h1 className="text-2xl text-gray-800 font-semibold">Example</h1>
      <pre className=" bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
        <code>
          {`const d = new Date("2015-03-25T12:00:00Z");`}
        </code>
      </pre>

      <p className="mt-10 mb-3">The date and time are separated by a capital “T.”</p>
      <p className="mb-3">UTC time is indicated by a capital “Z.”</p>
      <p>If you need to adjust the time zone, remove the Z and use an offset like +HH:MM or -HH:MM.</p>
      <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("2015-03-25T12:00:00-06:30");`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Time Zones</h1>
     <p className="mb-3">If you set a date without a time zone, JavaScript uses the browser’s default time zone.</p>
     <p>That is, a GMT date/time will automatically adjust to Central US Daylight Time for users in that region.</p>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Short Dates.</h1>
     <p>Short dates use the format "MM/DD/YYYY," for example:</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-3">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("03/25/2015");`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Long Dates.</h1>
     <p>Long dates are typically written in the "MMM DD YYYY" format, for example:</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("Mar 25 2015");`}
      </code>
     </pre>

     <p className="mt-10">Month and day can be in any order:</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("25 Mar 2015");`}
      </code>
     </pre>

     <p className="mt-10">And, month can be written in full (January), or abbreviated (Jan):</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className=" bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`const d = new Date("January 25 2015");`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
      <code>
        {`const d = new Date("JANUARY, 25, 2015");`}
      </code>
     </pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Date Input - Parsing Dates</h1>
     <p className="mb-3">If the date string is valid, you can convert it to milliseconds using <span className="text-red-400">Date.parse()</span>.</p>
     <p><span className="text-red-400">Date.parse()</span> gives the number of milliseconds elapsed since January 1, 1970.</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 overflow-x-auto rounded-lg mt-5">
      <code>
        {`let msec = Date.parse("March 21, 2012");`}
      </code>
     </pre>

     <p className="mt-10">You can use the milliseconds value to create a Date object.</p>
     <h1 className="text-2xl text-gray-800 font-semibold mt-5">Example</h1>
     <pre className="bg-gray-200 overflow-x-auto p-4 rounded-lg mt-5">
      <code>
        {`let msec = Date.parse("March 21, 2012");
const d = new Date(msec);`}
      </code>
     </pre>   
      <p className="text-gray-700 mt-5">
        The Date object is essential for time calculations, scheduling events, and formatting dates  in JavaScript applications.
      </p>
    </div>
  );
};

export default JSDate;