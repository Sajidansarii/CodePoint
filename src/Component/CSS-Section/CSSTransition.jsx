import React from "react";

const CssTransition = () => {
  const data = [
    {Property:'transition', Description:'A shorthand property for setting the four transition properties into a single property'},
    {Property:'transition-delay', Description:'Specifies a delay (in seconds) for the transition effect'},
    {Property:'transition-duration', Description:'Specifies how many seconds or milliseconds a transition effect takes to complete'},
    {Property:'transition-property', Description:'Specifies the name of the CSS property the transition effect is for'},
    {Property:'transition-timing-function', Description:'Specifies the speed curve of the transition effect'},

  ];
  return (
    <div className="p-8 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Transitions
      </h1>

      <p>
       CSS transitions create a smooth effect when a property of an element changes (like on hover, focus, active, etc.). They are a simple form of animation that automatically animates property changes.
      </p>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Syntax</h2>
        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`selector {
  transition: property duration timing-function delay;
}`}
        </pre>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>property</strong> → Which CSS property will be animated (for example: background-color, width).
          </li>
          <li>
            <strong>duration</strong> → How long the transition will take to complete (for example: 2s).
          </li>
          <li>
            <strong>timing-function</strong> →"The speed curve of the transition (ease, linear, ease-in, ease-out, ease-in-out).
          </li>
          <li>
            <strong>delay</strong> → How long to wait before the transition starts.
          </li>
        </ul>
      </div>
      <h1 className="text-2xl">The CSS transition Property</h1>
      <p>Creating a transition effect requires specifying which CSS property to animate and how long the transition should last.</p>
      <p>In CSS, <code>transition</code> serves as a shorthand for defining multiple timing and animation-related properties simultaneously.</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50">transition-property</span> (Required)</li>
        <li><span className="text-red-400 bg-gray-50">transition-duration</span> (Required)</li>
        <li><span className="text-red-400 bg-gray-50">transition-timing-function</span></li>
        <li><span className="text-red-400 bg-gray-50">transition-delay</span></li>
      </ul>

      <h1 className="text-2xl">Code Example for Implementing CSS Transitions</h1>
      <p>A {'<div>'} element of size 100px by 100px is demonstrated below, with a defined width transition lasting 2 seconds.</p>

      {/* Example 1: Background Color Transition */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">
          1. Background Color Transition
        </h2>
        <pre className="bg-gray-200  p-4 rounded text-sm overflow-x-auto">
{`div {
  width: 150px;
  height: 150px;
  background-color: blue;
  transition: background-color 1s ease;
}

div:hover {
  background-color: red;
}`}
        </pre>
        <p>
          When the user hovers, the <code>background color</code> will smoothly change from blue to red.
        </p>
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-blue-500 hover:bg-red-600 transition-colors duration-1000"></div>
        </div>
      </div>

      {/* Example 2: Width Transition */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2. Width Transition</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
{`div {
  width: 100px;
  height: 50px;
  background-color: purple;
  transition: width 0.5s ease-in-out;
}

div:hover {
  width: 200px;
}`}
        </pre>
        <p className="text-gray-600">On hover, the width will smoothly increase from <code>100px</code>to <code>200px</code>.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-12 bg-purple-500 hover:w-48 transition-all duration-500"></div>
        </div>
      </div>

      {/* Example 3: Multiple Properties */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3. Multiple Properties</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
{`div {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: width 1s, background-color 2s;
}

div:hover {
  width: 200px;
  background-color: orange;
}`}
        </pre>
        <p className="text-gray-600">Here, the <code>width</code> will increase in 1 second, and the <code>background</code> color will change in 2 seconds.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-500 hover:w-48 hover:bg-orange-500 transition-all duration-1000"></div>
        </div>
      </div>

      <h1 className="text-2xl">CSS Transition Speed Curve</h1>
      <p>It configures the timing algorithm used to calculate the intermediate states of a transitioning property.</p>
      <p>The allowable values for this property include the following:</p>
      <ul className="list-[square] list-inside">
        <li><span className="text-red-400 bg-gray-50">ease</span>- transition will start slow, then go fast, and end slow (this is default)</li>
        <li><span className="text-red-400 bg-gray-50">linear</span> - transition will keep the same speed from start to end</li>
        <li><span className="text-red-400 bg-gray-50">ease-in</span> - transition will start slow</li>
        <li><span className="text-red-400 bg-gray-50">ease-out</span> - transition will end slow</li>
        <li><span className="text-red-400 bg-gray-50">ease-in-out</span> - transition will have a slow start and end</li>
        <li><span className="text-red-400 bg-gray-50">cubic-bezier(n,n,n,n)</span>  - lets you define your own values in a cubic-bezier function</li>
      </ul>
        <p>The example below illustrates several commonly used speed curves for transitions.</p>
        <h1 className="text-2xl">Example</h1>
        <p>Available speed curve variations for transition effects:</p>
        <pre className="bg-gray-200 p-4 rounded-lg">
          <code>
            {`#div1 {transition-timing-function: linear;}
#div2 {transition-timing-function: ease;}
#div3 {transition-timing-function: ease-in;}
#div4 {transition-timing-function: ease-out;}
#div5 {transition-timing-function: ease-in-out;}`}
          </code>
        </pre>

      <h1 className="text-2xl">CSS Transition Delay</h1>
      <p>In CSS, <code>transition-delay</code> allows developers to delay the onset of a transition after the triggering event occurs.</p>
      <p>The transition-delay property accepts time units specified in either seconds (s) or milliseconds (ms).</p>
      <p>The transition in the following example is configured to begin after a 1-second delay.</p>
      <h1 className="text-2xl">Example</h1>
      <p>Add a 1 second delay before starting:</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`div {
  transition-delay: 1s;
}`}
        </code>
      </pre>

      <h1 className="text-2xl">Transition + Transform</h1>
      <p>The following code sample integrates CSS transition and transform properties for a {'<div> '}element.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`div {
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}`}
        </code>
      </pre>

      <h1 className="text-2xl">CSS Transition Properties</h1>
      <p>The subsequent table enumerates all the properties related to CSS transitions.</p>
     <table className="min-w-full border border-gray-300 text-sm rounded-md text-leftmt-10">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Property</th>
          <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">	Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>(
          <tr className="hover:bg-gray-100 cursor-text">
            <td className="px-4 py-2 border-b">{row.Property}</td>
            <td className="px-4 py-2 border-b">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>
    




















    </div>
  );
};

export default CssTransition;