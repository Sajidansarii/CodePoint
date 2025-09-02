import React from "react";

const CSSShadows = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">CSS Shadows</h1>
      <p className="text-gray-700">
        CSS me shadows ka use elements aur text ko depth aur highlight dene ke liye hota hai.
        Hum mostly <code>text-shadow</code> aur <code>box-shadow</code> properties ka use karte hain.
      </p>

      {/* Example 1: Text Shadow */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">1. Text Shadow</h2>
        <p className="text-gray-700">
          <code>text-shadow</code> property text ke peeche shadow banati hai.
          Syntax: <code>text-shadow: x-offset y-offset blur-radius color;</code>
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  text-shadow: 2px 2px 5px gray;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1 style={{ textShadow: "2px 2px 5px gray" }} className="text-2xl font-bold">
            Text Shadow Example
          </h1>
        </div>
      </div>

      {/* Example 2: Box Shadow */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Box Shadow</h2>
        <p className="text-gray-700">
          <code>box-shadow</code> property kisi element ke box ke around shadow banati hai.  
          Syntax: <code>box-shadow: x-offset y-offset blur-radius color;</code>
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`div {
  width: 150px;
  height: 100px;
  box-shadow: 5px 5px 15px gray;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center flex justify-center">
          <div
            style={{ boxShadow: "5px 5px 15px gray" }}
            className="w-40 h-24 bg-white flex items-center justify-center"
          >
            Box Shadow
          </div>
        </div>
      </div>

      {/* Example 3: Multiple Shadows */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Multiple Shadows</h2>
        <p className="text-gray-700">
          Hum ek hi element par multiple shadows add kar sakte hain, unhe comma (,) se separate karte hain.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`div {
  width: 150px;
  height: 100px;
  box-shadow: 2px 2px 5px red, -2px -2px 5px blue;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center flex justify-center">
          <div
            style={{ boxShadow: "2px 2px 5px red, -2px -2px 5px blue" }}
            className="w-40 h-24 bg-white flex items-center justify-center"
          >
            Multiple Shadows
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSShadows;