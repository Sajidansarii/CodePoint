import React from "react";

const CSSFlexItems = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">CSS Flex Items</h1>
      <p className="text-gray-700">
        Jab ek container ko <code>display: flex;</code> dete ho, uske andar ke saare 
        elements automatically <strong>flex items</strong> ban jaate hain. In items par 
        hum alag-alag properties laga kar unka size aur alignment control kar sakte hain.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Flex Items</h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Flex Container */
.container {
  display: flex;
  border: 2px solid black;
  height: 150px;
}

/* Flex Items */
.item1 {
  flex: 1;   /* Equal space lega */
  background: lightcoral;
}
.item2 {
  flex: 2;   /* Double space lega */
  background: lightseagreen;
}
.item3 {
  flex: 1;   /* Equal space lega */
  background: lightskyblue;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border-2 border-black h-40 flex mt-6">
          <div className="bg-red-400 flex-1 flex items-center justify-center text-white font-bold">
            Item 1
          </div>
          <div className="bg-green-500 flex-[2] flex items-center justify-center text-white font-bold">
            Item 2
          </div>
          <div className="bg-blue-400 flex-1 flex items-center justify-center text-white font-bold">
            Item 3
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>flex</code> → Ye shorthand property hai <code>flex-grow</code>,{" "}
            <code>flex-shrink</code>, aur <code>flex-basis</code> ka.
          </li>
          <li>
            <code>flex: 1;</code> → Item ko equal space assign karta hai.
          </li>
          <li>
            <code>flex: 2;</code> → Item ko dusre items ke comparison me double space deta hai.
          </li>
          <li>
            Flex items responsive hote hain aur container ke andar space ko efficiently fill karte hain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexItems;