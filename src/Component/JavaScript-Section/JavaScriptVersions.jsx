import React from "react";
import FeaturesJavaScript from "./FeaturesofJS";

export default function JavaScriptVersions() {
  const table = [
    {Version:'ES1', OfficialName:'ECMAScript 1', ReleaseYear:'1997', FeaturesAdded:'First release'},
    {Version:'ES2', OfficialName:'ECMAScript 2', ReleaseYear:'1998', FeaturesAdded:'Minor changes'},
    {Version:'ES3', OfficialName:'ECMAScript 3', ReleaseYear:'1999', FeaturesAdded:'Added regular expressions \n Added do-while \n Added switch \n Added try/catch'},
    {Version:'ES5', OfficialName:'ECMAScript 5', ReleaseYear:'2009', FeaturesAdded:'JavaScript strict mode \n Multiline strings \n String.trim() \n Array methods \n Object methods \n Getters and setters \n Trailing commas '},
    {Version:'ES6', OfficialName:'ECMAScript 6', ReleaseYear:'2015', FeaturesAdded:'let and const statements \n Map and set objects \n Arrow functions \n For/of loop \n Some array methods \n Symbol \n Classes \n Promises \n JavaScript Modules \n New Number methods and properties \n For/of loop \n Spread operator'},
    {Version:'ES7', OfficialName:'ECMAScript 7', ReleaseYear:'2016', FeaturesAdded:'Exponential (**) operator \n Array.includes() method'},
    {Version:'ES8', OfficialName:'ECMAScript 8', ReleaseYear:'2017', FeaturesAdded:'Added Async/await \n Added Object.entries() method \n Added Object.values() method \n Added Object.getOwnPropertyDescriptor() method \n Added string padding'},
    {Version:'ES9', OfficialName:'ECMAScript 9', ReleaseYear:'2018', FeaturesAdded:'Rest object properties \n JavaScript shared memory \n Promise.finally() method \n New features of the RegExp() object'},
    {Version:'ES10', OfficialName:'ECMAScript 10', ReleaseYear:'2019', FeaturesAdded:'String trim.start() \n String trim.end() \n Array.flat() \n Revised Array.sort() \n Revised JSON.stringify() / toString() \n Object.fromEntries() method'},
    {Version:'Es11', OfficialName:'ECMAScript 11', ReleaseYear:'2020', FeaturesAdded:'Nullish Coalescing Operator (??) \n BigInt primitive data type'},
    {Version:'ES12', OfficialName:'ECMASrcipt 12', ReleaseYear:'2021', FeaturesAdded:'String.replaceAll() method \n Promise.Any() method'},
    {Version:'ES13', OfficialName:'ECMAScript 13', ReleaseYear:'2022', FeaturesAdded:'The static block inside the class \n New class features \n Top-level await'},
    {Version:'ES14', OfficialName:'ECMAScript 14', ReleaseYear:'2023', FeaturesAdded:'Array findLast() & findLastIndex() \n Hashbang Grammer \n Symbols as WeakMap keys'},
  ];

  const table2 = [
    {Chrome:'Yes', Firefox:'Yes', MicrosoftEdge:'Yes', Opera:'Yes', Safari:'Yes', FirefoxAndroid:'Yes'},
  ];
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl">
        {/* Page Title */}
        <header>
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            JavaScript Versions
          </h1>
          <p className="text-lg text-gray-600">
            From ES1 to ESNext – Understanding how JavaScript has evolved 
          </p>
        </header>

        {/* Intro Section */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="leading-relaxed">
           JavaScript, created by Brendan Eich in 1995, was standardized in 1997 by ECMA International under the name ECMAScript. The foundational versions—ES1, ES2, and ES3—established the core of the language. ES4 was proposed but never released. ES5, published in 2009, introduced key enhancements. ES6, released in 2015, marked a major revision. Post-2015, ECMAScript versions follow an annual release schedule based on the release year.
          </p>
        </section>

        {/* Versions Timeline */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">Major Versions</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold">ES5 (2009):</span> Introduced{" "}
              <code className="bg-gray-100 px-1 rounded">strict mode</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">JSON support</code>, and
              array methods like{" "}
              <code className="bg-gray-100 px-1 rounded">forEach()</code>,{" "}
              <code className="bg-gray-100 px-1 rounded">map()</code>.
            </li>
            <li>
              <span className="font-semibold">ES6 / ES2015:</span> A major update
              with <span className="text-blue-600">let/const</span>, arrow
              functions, classes, template literals, promises, and modules.
            </li>
            <li>
              <span className="font-semibold">ES7+ (2016 onward):</span> Added
              features like <code className="bg-gray-100 px-1 rounded">async/await</code>, 
              spread/rest operators, optional chaining, and modern syntax.
            </li>
            <li>
              <span className="font-semibold">ESNext:</span> Refers to the
              latest ongoing updates to the language. Browsers keep adding new
              features every year.
            </li>
          </ul>
        </section>

        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: ES5 vs ES6
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// ES5 Style
var name = "codepoint";
var greet = function(name) {
  return "Hello " + name;
};
console.log(greet(name));

// ES6 Style
let user = "codepoint";
const greetUser = (user) => \Hello \${user}\;
console.log(greetUser(user));

// ES7+ Feature (Async/Await)
async function fetchData() {
  return "Data fetched successfully!";
}
fetchData().then(console.log);`}</code>
          </pre>
        </section>

        <p className="mt-14">The following table outlines comprehensive information regarding each ECMAScript version.</p>
         <div className="w-full overflow-x-auto">

        <table className="w-full border border-gray-300 text-gray-700 text-left text-sm mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Version</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Official Name</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Release Year</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Features Added</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Version}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.OfficialName}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.ReleaseYear}</td>
                <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.FeaturesAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
         </div>

        <p className="mt-5">Since 2016, early updates have been released annually, each version named after its release year. The update released in June 2023 is referred to as ECMAScript 2023.</p>

        <h1 className="text-2xl mt-10 mb-2">Browser Support</h1>
        <p>All modern browsers offer full support for ECMAScript versions ES1 through ES6. For later versions, developers can utilize polyfills and include supplementary code as needed.</p>
      

          <div className="w-full overflow-x-auto">
          <table className="w-full border border-gray-300 text-gray-700 text-left text-sm mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Chrome</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Firefox</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Microsoft Edge</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">	Opera</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">	Safari</th>
              <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">	Firefox Android</th>
            </tr>
          </thead>
          <tbody>
            {table2.map((row,index)=>(
              <tr className="cursor-text hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">{row.Chrome}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Firefox}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.MicrosoftEdge}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Opera}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Safari}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.FirefoxAndroid}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>


        {/* Explanation Section */}
        <section className="py-6 mt-5">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">ES5:</span> Uses{" "}
              <code className="bg-gray-100 px-1 rounded">var</code> for
              variables and normal functions.
            </li>
            <li>
              <span className="font-semibold">ES6:</span> Introduced{" "}
              <code className="bg-gray-100 px-1 rounded">let</code> &
              <code className="bg-gray-100 px-1 rounded">const</code> for
              block-scoping, and arrow functions{" "}
              <code className="bg-gray-100 px-1 rounded"> {'()=>'} {}</code> for
              shorter syntax. Template literals{" "}
              <code className="bg-gray-100 px-1 rounded"> \` \${} \` </code>{" "}
              allow string interpolation.
            </li>
            <li>
              <span className="font-semibold">ES7+:</span> Added{" "}
              <code className="bg-gray-100 px-1 rounded">async/await</code> for
              easier asynchronous code handling.
            </li>
          </ul>
        </section>

        {/* Key Takeaway */}
        <section className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
          <p className="text-lg">
            Each new version of JavaScript makes development faster,
            cleaner, and more modern. Always try to use the latest ES features
            supported by browsers for better performance and readability.
          </p>
        </section>
      </div>
    </div>
  );
}