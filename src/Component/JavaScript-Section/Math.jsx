import React from "react";

const JSMath = () => {
  const data = [
    {method:'Math.round(x)', Description:'Returns x rounded to its nearest integer'},
    {method:'Math.ceil(x)', Description:'Returns x rounded up to its nearest integer'},
    {method:'Math.floor(x)', Description:'Returns x rounded down to its nearest integer'},
    {method:'Math.trunc(x)', Description:'Returns the integer part of x (new in ES6)'},
  ];
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Math Object</h1>
      
      <p className="mb-6">
        The JavaScript <span className="text-red-400 bg-gray-50 px-1">Math</span> object provides *properties and methods* for performing mathematical tasks such as rounding numbers, generating random numbers, finding minimum or maximum values, and more. 
        Note that <span className="font-semibold">Math</span> is not a constructor, so you cannot create instances of it.
      </p>

      <h1 className="text-2xl mt-10">Math Properties (Constants)</h1>
      <p className="leading-relaxed mt-3">In JavaScript, <span className="text-red-400 bg-gray-50 px-1">Math</span> properties are accessed using dot notation, like this: <span className="text-red-400 bg-gray-50 px-1">Math.property</span>.</p>
      <p className="leading-relaxed mt-3">JavaScript offers eight predefined mathematical constants, accessible via the properties of the <span className="text-red-400 bg-gray-50 px-1">Math</span> object.</p>
      <h1 className="text-2xl mt-5">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        {`Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E`}
      </pre>

      <h1 className="text-2xl mt-10 mb-3">Math Methods</h1>
      <p>In JavaScript, Math methods are called using this format: <span className="text-red-400 bg-gray-50 px-1">Math.method(number)</span>.</p>
     <h1 className="text-2xl mt-10 mb-3">Number to Integer</h1>
     <p>There are four commonly used methods to round a number to the nearest integer.</p>
     <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Desciption</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.method}</td>
            <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <h1 className="text-2xl mt-10">Math.round()</h1>
     <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">Math.round(x)</span> returns the nearest integer:</p>
     <h1 className="text-2xl mt-5">Example</h1>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.round(4.6);`}
     </pre>

     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.round(4.5);`}
     </pre>

     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.round(4.4);`}
     </pre>

     <h1 className="text-2xl mt-10">Math.ceil()</h1>
     <p className="leading-relaxed mt-5">In JavaScript, <span className="text-red-400 bg-gray-50 px-1">Math.ceil(x)</span> returns x rounded up to the closest integer, regardless of the decimal.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);`}
    </pre>

    <h1 className="text-2xl mt-10">Math.floor()</h1>
    <p className="leading-relaxed mt-5">In JavaScript, <span className="text-red-400 bg-gray-50 px-1">Math.floor(x)</span> returns x rounded down to the nearest integer, ignoring the decimal part.</p>
    <h1 className="txet-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);`}
    </pre>

    <h1 className="text-2xl mt-10">Math.trunc()</h1>
    <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">Math.trunc(x)</span> method returns the integer portion of x, discarding any fractional digits.</p>
    <h1 className="txet-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);`}
    </pre>

    <h1 className="text-2xl mt-10">Math.sign()</h1>
    <p className="leading-relaxed mt-5">Use <span className="text-red-400 bg-gray-50 px-1">Math.sign(x)</span> to find out if a number is positive, negative, or zero—it gives you a quick answer.</p>
    <ul className="list-[square] list-inside mt-3 leading-relaxed">
      <li>If x is positive it returns 1</li>
      <li>If x is negative it returns -1</li>
      <li>If x is zero, it returns 0</li>
    </ul>

    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      <code>
      {`Math.sign(-4);
Math.sign(0);
Math.sign(4);`}
</code>
    </pre>

    <h1 className="text-2xl mt-10">Math.pow()</h1>
    <p className="leading-relaxed mt-5">The <span className="text-red-400 bg-gray-50 px-1">Math.pow(x, y)</span> method computes the result of x raised to the exponent y.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.pow(8, 2);`}
    </pre>



    <h1 className="text-2xl mt-10">Math.sqrt()</h1>
    <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">The Math.sqrt(x)</span> method calculates and returns the square root of the given number x.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.sqrt(64);`}
    </pre>


    <h1 className="text-2xl mt-10">Math.abs()</h1>
    <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">Math.abs(x)</span> turns any number into its positive version.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.abs(-4.7);`}
    </pre>


    <h1 className="text-2xl mt-10">Math.sin()</h1>
     <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">Math.sin(x)</span> gives you the sine of angle x (in radians), which is always a number between -1 and 1.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)`}
    </pre>

    <h1 className="text-2xl mt-10">Math.cos()</h1>
    <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">The Math.cos(x)</span> method computes the cosine of the angle x, with x specified in radians. The result will always fall between -1 and 1.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)`}
    </pre>

    <h1 className="text-2xl mt-10">Math.min() and Math.max()</h1>
    <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">The Math.min()</span> and <span className="text-red-400 bg-gray-50 px-1">Math.max()</span> methods are used to determine the minimum and maximum values, respectively, from a set of numeric arguments.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.min(0, 150, 30, 20, -8, -200);`}
    </pre>

    <h1 className="text-2xl mt-10">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.max(0, 150, 30, 20, -8, -200);`}
    </pre>

    <h1 className="text-2xl mt-10">Math.random()</h1>
    <p className="leading-relaxed mt-5"><span className="text-red-400 bg-gray-50 px-1">The Math.random()</span> method generates a pseudo-random floating-point number in the range [0, 1), meaning 0 is inclusive and 1 is exclusive.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.random();`}
    </pre>

    <h1 className="text-2xl mt-10">The Math.log() Method</h1>
    <p className="leading-relaxed mt-5 mb-3"><span className="text-red-400 bg-gray-50 px-1">The Math.log(x)</span> method calculates the natural logarithm of a number x, which is the logarithm to the base e.</p>
    <p>The natural logarithm represents the time required for a quantity to grow to a specific level at a constant continuous growth rate.</p>
    <h1 className="text-2xl mt-5">Example</h1>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.log(1);`}
    </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.log(2);`}
    </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.log(3);`}
    </pre>

    <p className="mt-10">Math.E and Math.log() are twins.</p>
    <p className="mt-2 leading-relaxed">How many times should we multiply Math.E to reach 10?</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.log(10);`}
    </pre>

    <h1 className="text-2xl mt-10">The Math.log2() Method</h1>
    <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">The Math.log2(x)</span> method calculates the base-2 logarithm of the number x.</p>
    <p className="leading-relaxed mt-3">If you keep multiplying 2 by itself, how many times will it take to get 8?</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.log2(8);`}
    </pre>


    <h1 className="text-2xl mt-10">The Math.log10() Method</h1>
    <p className="leading-relaxed mt-3"><span className="text-red-400 bg-gray-50 px-1">The Math.log10(x)</span> method calculates the base-10 logarithm of the number x.</p>
    <p className="leading-relaxed mt-3">How many times should we multiply 10 to reach 1000?</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
      {`Math.log10(1000);`}
    </pre>











    
      <p className="mt-20">
        <span className="font-semibold">Math.random()</span> generates a decimal number between 0 (inclusive) and 1 (exclusive). 
        You can scale and round it to get random integers in a desired range.
      </p>
    </div>
  );
};

export default JSMath;