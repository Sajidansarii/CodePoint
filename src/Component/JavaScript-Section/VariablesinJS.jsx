import React from "react";

const JSVariables = () => {
  return (
    <div className="max-w-4xl p-6 ">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">JavaScript Variables</h1>
      <p className="mb-6">
        In JavaScript, variables are used to store data that can be referenced and manipulated later in your code. 
        You can declare variables using <span className="font-semibold">var</span>, <span className="font-semibold">let</span>, or <span className="font-semibold">const</span>.
      </p>
      <p className="font-semibold mb-10 text-xl">Variables = Data Containers</p>
      <p>A variable in JavaScript holds data like numbers, text, or other values you want to use in your code.</p>
      <p>JavaScript provides four different methods for declaring variables.</p>

      <div className="flex flex-row space-x-10 mt-5">
        <div className="space-y-2">
        <p className="text-xl">Modern JavaScript</p>
        <ul className="list-[square] list-inside">
          <li>Using <span className="text-red-400 bg-gray-50 px-1">let</span></li>
          <li>Using <span className="text-red-400 bg-gray-50 px-1">const</span></li>
        </ul>
        </div>

        <div className="space-y-2">
          <p className="text-xl">Older JavaScript</p>
        <ul className="list-[square] list-inside">
          <li>Using <span className="text-red-400 bg-gray-50 px-1">var</span> (Not Recommended)</li>
          <li>Automatically (Not Recommended)</li>
        </ul>
        </div>
      </div>

      <h1 className="text-2xl mt-10 mb-2">Example using let</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`let x = 5;
let y = 6;
let z = x + y;`}
      </pre>

      <h1 className="text-2xl mt-10 mb-2">Example using const</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`const x = 5;
const y = 6;
const z = x + y;`}
      </pre>
      <p className="mt-5 mb-5">The examples make it easy to understand.</p>
      <ul className="list-[square] list-inside">
        <li>x contains (or stores) the value 5</li>
        <li>y contains (or stores) the value 6</li>
        <li>z contains (or stores) the value 11</li>
      </ul>
      <p className="mt-10">Variables store data that your program can use and modify.</p>

      <h1 className="text-2xl mt-12 mb-2">JavaScript Identifiers</h1>
      <p className="mt-2">Variables wear names all their own, called identifiers, etched in code</p>
      <p className="mt-2">Names can be short like x, y, z.</p>
      <p className="mt-2">Names can be descriptive age, sum, carName.</p>
      <p className="mt-2">Identifier naming must follow these specific rules:</p>
      <ul className="list-[square] list-inside mt-5">
        <li>Names can contain letters, digits, underscores, and dollar signs.</li>
        <li>Names must begin with a letter, a $ sign or an underscore (_).</li>
        <li>Names are case sensitive (X is different from x).</li>
        <li>Reserved words (JavaScript keywords) cannot be used as names.</li>
      </ul>

      <h1 className="text-2xl mt-10">JavaScript Underscore (_)</h1>
      <p className="mt-2">The underscore (_) is recognized as a valid character for identifiers in JavaScript, similar to letters.</p>
      <p className="mt-2">An identifier containing an underscore (_) is syntactically valid in JavaScript variable naming.</p>
      <h1 className="text-2xl mt-5 mb-5">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`let _lastName = "Johnson";
let _x = 2;
let _100 = 5;`}
      </pre>

      <p className="mt-10">In practice, many developers use a leading underscore in variable names to imply the variable is private or for internal use.</p>
      
      <h1 className="text-2xl mt-10">JavaScript Dollar Sign $</h1>
      <p className="mt-2">In JavaScript, the $ symbol is treated as a valid character in identifiers, just like letters and underscores.</p>
      <p className="mt-2">The $ character is permitted in JavaScript identifiers, making such variable names valid.</p>
      <h1 className="text-2xl mt-5 mb-5">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;`}
      </pre>
      <p className="mt-5">While $ isn’t widely used in native JavaScript code, it is commonly adopted by developers as an alias for primary functions in frameworks and libraries like jQuery.</p>

      <h1 className="text-2xl mt-10">Declaring JavaScript Variables</h1>
      <p className="mt-2">When you make a variable in JavaScript, that’s what we call “declaring” it.</p>
      <p className="mt-2">Variables in JavaScript are declared using the <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> keywords to define mutable and immutable bindings, respectively.</p>

      <h1 className="text-2xl mt-10 mb-5">Declaring a Variable Using let</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`let carName;`}
      </pre>
      <p className="mt-5">Once declared, a variable doesn’t have a value—it’s undefined.</p>
      <p className="mt-5">The assignment operator (=) is used to set a value to a variable:</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-10 mb-5">
        {`carName = "Volvo";`}
      </pre>
      <p>Most of the time, you’ll set a value for a variable as soon as you declare it:</p>
     <h1 className="text-2xl mt-10 mb-5">Example</h1>
     <p className="mb-5">Define a variable carName and assign "Volvo" as its initial value.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`let carName = "Volvo";`}
     </pre>

     <h1 className="text-2xl mt-10">Declaring a Variable Using const</h1>
     <p className="mt-5 mb-5">Use the <span className="text-red-400 bg-gray-50 px-1">const</span> keyword to define variables with immutable values.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`const carName = "Volvo";`}
     </pre>

     <h1 className="text-2xl mt-10 mb-5">A Mixed Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`const price1 = 5;
const price2 = 6;
let total = price1 + price2;`}
     </pre>
     <p className="mt-5">Variables <span className="text-red-400 bg-gray-50 px-1 ">price1</span> and <span className="text-red-400 bg-gray-50 px-1">price2</span> are defined as constants using the const keyword.</p>
     <p className="mt-2"><span className="text-red-400 bg-gray-50 px-1">price1</span> and <span className="text-red-400 bg-gray-50 px-1">price2</span> hold constant values that cannot be reassigned.</p>
     <p className="mt-2">total is a variable declared using the let keyword to allow reassignment.</p>
     <p className="mt-2">You can change the value of total.</p>

     <h1 className="text-2xl mt-10">Declaring a Variable Automatically</h1>
     <p className="mt-2">If a variable isn’t declared, it gets declared automatically the first time you use it.</p>
     <h1 className="text-2xl mt-5 mb-5">Example (Not Recommended)</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`x = 5;
y = 6;
z = x + y;`}
     </pre>

     <h1 className="text-2xl mt-10">Declaring a Variable Using var</h1>
     <p className="mt-2">Before 2015, all JavaScript code used the <span className="text-red-400 bg-gray-50 px-1">var</span> keyword.</p>
     <p className="mt-2">The <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> keywords were introduced in JavaScript in 2015.</p>
     
     <h1 className="text-2xl mt-5 mb-5">Using var (Not Recommended)</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`var x = 5;
var y = 6;
var z = x + y;`}
     </pre>

     <h1 className="text-2xl mt-5 mb-5">When to Use var, let, or const?</h1>
     <ul className="list-[square] list-inside leading-relaxed">
      <li>Always declare variables</li>
      <li>Always declare variables with <span className="text-red-400 bg-gray-50 px-1">const</span> when their values must remain constant.</li>
      <li>The <span className="text-red-400 bg-gray-50 px-1">const</span> keyword should be used when the variable's reference type (arrays or objects) must remain constant.</li>
      <li><span className="text-red-400 bg-gray-50 px-1">let</span> should be reserved for variables requiring reassignment when <span className="text-red-400 bg-gray-50 px-1">const</span> is insufficient.</li>
      <li>Prefer <span className="text-red-400 bg-gray-50 px-1">let</span> and <span className="text-red-400 bg-gray-50 px-1">const</span> over var due to their improved scoping rules.</li>
     </ul>

     <h1 className="text-2xl mt-10 mb-5">JavaScript Data Types</h1>
     <p className="mt-2">JavaScript variables can hold eight types of data, but for now, just keep numbers and strings in mind.</p>
     <p className="mt-2"><strong>Strings</strong> are words or phrases <strong>wrapped in quotes</strong>, ready to be used in your code.</p>
     <p className="mt-2"><strong>Numbers</strong> stand on their own in JavaScript <strong>no quotes</strong> required to define them.</p>
     <p className="mt-2">Quoting a number converts it into a string data type in JavaScript, affecting how it behaves in operations.</p>
     <h1 className="text-2xl mt-5 mb-5">Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';`}
     </pre>

     <h1 className="text-2xl mt-10 mb-2">One Statement, Many Variables</h1>
     <p>avaScript allows multiple variable declarations in a single statement using commas.</p>
     <p className="mt-2">Use <span className="text-red-400 bg-gray-50 px-1">let</span> or <span className="text-red-400 bg-gray-50 px-1">const</span> to begin the declaration, and separate each variable with a comma within the same statement.</p>
     <h1 className="text-2xl mt-5 mb-5">Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`let person = "John Doe", carName = "Volvo", price = 200;`}
     </pre>
     <p className="mt-5">A declaration can span multiple lines:</p>
     
     <h1 className="text-2xl mt-10 mb-5">Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`let person = "John Doe",
carName = "Volvo",
price = 200;`}
     </pre>

     <h1 className="text-2xl mt-10">The Assignment Operator</h1>
     <p className="mt-2">In JavaScript, <span className="bg-gray-50 px-1">=</span> assigns a value to a variable. It should not be confused with <span className="bg-gray-50 px-1">==</span> or <span className="bg-gray-50 px-1">===</span>, which are used for comparisons.</p>
        <p className="mb-5">JavaScript plays by different rules than algebra. The next example would puzzle a math teacher:</p>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg ">
          {`x = x + 5`}
        </pre>

        <p className="mt-5 mb-2">JavaScript treats this as an assignment operation, updating the value of x by adding 5 to its current value.</p>
        <p>(The expression evaluates x + 5, then reassigns the resulting value to x, updating its value by 5.)</p>

        <h1 className="text-2xl mt-10">JavaScript Arithmetic</h1>
        <p className="mt-2 mb-5">JavaScript supports arithmetic operations on variables, employing operators such as the assignment operator (=) and the addition operator (+):</p>
        <h1 className="text-2xl mb-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
          {`let x = 5 + 2 + 3;`}
        </pre>
        <p className="mt-5">Adding strings concatenates them, combining their contents rather than performing numeric addition.</p>
        <h1 className="text-2xl mt-10 mb-5">Example</h1>
        <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
          {`let x = "John" + " " + "Doe";`}
        </pre>
        <p className="mt-5">If a numeric value is stringified by quotes, subsequent numeric additions will be treated as string concatenations.</p>
        <h1 className="text-2xl mt-5 mb-5">Example</h1>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mb-10">
            {`let x = "5" + 2 + 3;`}
          </pre>

          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
            {`let x = 2 + 3 + "5";`}
          </pre>
      <p className="mt-5">
        <span className="font-semibold">var:</span> Older way to declare variables, function-scoped. <br/>
        <span className="font-semibold">let:</span> Block-scoped variable, can be updated. <br/>
        <span className="font-semibold">const:</span> Block-scoped, cannot be reassigned, ideal for constants.
      </p>
    </div>
  );
};

export default JSVariables;