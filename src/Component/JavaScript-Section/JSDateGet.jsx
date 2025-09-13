import React from "react";

const JSDateGet = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript <span className="text-green-600">Date Get Methods</span>
      </h1>

      <p className="text-gray-700 mb-6">
        JavaScript provides several <strong>get methods</strong> to retrieve specific parts of a <code>Date</code> object, such as year, month, day, hours, minutes, and seconds.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Date Get Methods</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><code>getFullYear()</code> – Returns the year (e.g., 2025)</li>
        <li><code>getMonth()</code> – Returns the month (0-11, January is 0)</li>
        <li><code>getDate()</code> – Returns the day of the month (1-31)</li>
        <li><code>getDay()</code> – Returns the day of the week (0-6, Sunday is 0)</li>
        <li><code>getHours()</code> – Returns the hour (0-23)</li>
        <li><code>getMinutes()</code> – Returns minutes (0-59)</li>
        <li><code>getSeconds()</code> – Returns seconds (0-59)</li>
        <li><code>getMilliseconds()</code> – Returns milliseconds (0-999)</li>
        <li><code>getTime()</code> – Returns time in milliseconds since January 1, 1970</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Using Date Get Methods</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
         <code className="text-green-600">
          {`const now = new Date();

console.log(now.getFullYear());    // Output: 2025
console.log(now.getMonth());       // Output: 8 (September, 0-indexed)
console.log(now.getDate());        // Output: 4
console.log(now.getDay());         // Output: 4 (Thursday, 0=Sunday)
console.log(now.getHours());       // Output: 10
console.log(now.getMinutes());     // Output: 30
console.log(now.getSeconds());     // Output: 15
console.log(now.getMilliseconds());// Output: 500
console.log(now.getTime());        // Output: 1730770215500 (milliseconds since Jan 1, 1970)`}
        </code> 
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Practical Example: Display Current Date and Time</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
         <code className="text-green-600">
          {/* {`const today = new Date();
           const formattedDate = ${today.getDate()} ${today.getMonth()+1}
           ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:
           ${today.getSeconds()};
         console.log(formattedDate);
         Output: 4/9/2025 10:30:15 (example)`} */}
        </code>
      </div>

      <p className="text-gray-700">
        Using these <strong>get methods</strong>, you can extract specific parts of a date to *display, calculate, or manipulate* dates in your JavaScript applications.
      </p>
    </div>
  );
};

export default JSDateGet;