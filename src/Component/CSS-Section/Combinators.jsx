import React from "react";

const CssCombinators = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Combinators
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        CSS <strong>Combinators</strong> ka use karke hum specify karte hain ki
        ek element dusre element ke relation me kaise select hoga.  
        4 main types ke combinators hote hain:
        <strong> Descendant, Child, Adjacent Sibling, General Sibling</strong>.
      </p>

      {/* Example 1: Descendant Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">1. Descendant Selector (space)</h2>
        <p className="text-gray-600">
          Ye selector ek element ke andar ke kisi bhi nested element ko target
          karta hai.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div p {
  color: blue;
}`}
        </pre>

        <div className="border p-4">
          <p>Ye direct paragraph hai (apply hoga ✅)</p>
          <div>
            <p>Ye nested div ke andar ka paragraph hai (apply hoga ✅)</p>
          </div>
        </div>
      </div>

      {/* Example 2: Child Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">2. Child Selector ({'>'})</h2>
        <p className="text-gray-600">
          Ye sirf direct child element ko select karta hai, nested ko nahi.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`div > p {
  color: red;
}`}
        </pre>

        <div className="border p-4">
          <p>Ye direct child paragraph hai (apply hoga ✅)</p>
          <div>
            <p>Ye nested paragraph hai (apply nahi hoga ❌)</p>
          </div>
        </div>
      </div>

      {/* Example 3: Adjacent Sibling Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">
          3. Adjacent Sibling Selector (+)
        </h2>
        <p className="text-gray-600">
          Ye ek element ke turant baad aane wale sibling element ko select
          karta hai.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`h2 + p {
  color: green;
}`}
        </pre>

        <div className="border p-4">
          <h2>Heading</h2>
          <p>Ye h2 ke turant baad wala paragraph hai (apply hoga ✅)</p>
          <p>Ye dusra paragraph hai (apply nahi hoga ❌)</p>
        </div>
      </div>

      {/* Example 4: General Sibling Selector */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-xl">4. General Sibling Selector (~)</h2>
        <p className="text-gray-600">
          Ye ek element ke baad aane wale sabhi sibling elements ko select
          karta hai.
        </p>

        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
{`h2 ~ p {
  color: purple;
}`}
        </pre>

        <div className="border p-4">
          <h2>Heading</h2>
          <p>Ye paragraph sibling hai (apply hoga ✅)</p>
          <p>Ye bhi paragraph sibling hai (apply hoga ✅)</p>
        </div>
      </div>
    </div>
  );
};

export default CssCombinators;