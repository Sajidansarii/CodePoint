import React from "react";

const JSDateSet = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        JavaScript <span className="text-green-600">Date Set Methods</span>
      </h1>

      <p className="text-gray-700 mb-6">
        JavaScript provides several <strong>set methods</strong> to update specific parts of a <code>Date</code> object, such as year, month, day, hours, minutes, and seconds.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Common Date Set Methods</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><code>setFullYear(year)</code> – Sets the full year</li>
        <li><code>setMonth(month)</code> – Sets the month (0-11, January is 0)</li>
        <li><code>setDate(day)</code> – Sets the day of the month (1-31)</li>
        <li><code>setHours(hours)</code> – Sets the hours (0-23)</li>
        <li><code>setMinutes(minutes)</code> – Sets the minutes (0-59)</li>
        <li><code>setSeconds(seconds)</code> – Sets the seconds (0-59)</li>
        <li><code>setMilliseconds(ms)</code> – Sets the milliseconds (0-999)</li>
        <li><code>setTime(milliseconds)</code> – Sets the time in milliseconds since January 1, 1970</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example: Using Date Set Methods</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const myDate = new Date("2025-09-04T10:30:00");

// Update the year, month, and day
myDate.setFullYear(2030);
myDate.setMonth(11); // December (0-indexed)
myDate.setDate(25);

// Update hours, minutes, seconds
myDate.setHours(15);
myDate.setMinutes(45);
myDate.setSeconds(30);

console.log(myDate);
// Output: Thu Dec 25 2030 15:45:30 GMT+0000 (Coordinated Universal Time)`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Practical Example: Schedule Event</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 7); // Set event 7 days from today
console.log("Event Date:", eventDate);`}
        </code>
      </div>

      <p className="text-gray-700">
        Using these <strong>set methods</strong>, you can *update specific parts of a date* for scheduling, calculations, or formatting in your JavaScript applications.
      </p>
    </div>
  );
};

export default JSDateSet;