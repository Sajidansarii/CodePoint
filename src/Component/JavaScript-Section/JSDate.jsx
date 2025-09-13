import React from "react";

const JSDate = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        JavaScript <span className="text-green-600">Date Object</span>
      </h1>

      <p className="text-gray-700 mb-6">
        The *Date object* in JavaScript is used to work with *dates and times*. 
        It provides methods to *create, manipulate, and format dates*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating a Date</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`// Current date and time
const now = new Date();
console.log(now);

// Specific date
const birthday = new Date("2000-01-01");
console.log(birthday);

// Using year, month, day, hours, minutes, seconds
const customDate = new Date(2025, 8, 4, 10, 30, 0); // September is month 8 (0-indexed)
console.log(customDate);`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Getting Date and Time Values</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const today = new Date();

console.log(today.getFullYear()); // Year
console.log(today.getMonth());    // Month (0-11)
console.log(today.getDate());     // Day of the month
console.log(today.getDay());      // Day of the week (0=Sunday)
console.log(today.getHours());    // Hours
console.log(today.getMinutes());  // Minutes
console.log(today.getSeconds());  // Seconds`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Setting Date and Time Values</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const myDate = new Date();

// Set year, month, date
myDate.setFullYear(2030);
myDate.setMonth(11); // December
myDate.setDate(25);

console.log(myDate);`}
        </code>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Practical Example</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-green-600">
          {`const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(today.toLocaleDateString('en-US', options));
// Output: Thursday, September 4, 2025 (example)`}
        </code>
      </div>

      <p className="text-gray-700">
        The Date object is essential for *time calculations, scheduling events, and formatting dates* in JavaScript applications.
      </p>
    </div>
  );
};

export default JSDate;