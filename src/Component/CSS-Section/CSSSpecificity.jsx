import React from "react";

const CssSpecificity = () => {
  const data = [
    { selector: '<div style="color: green"></div>', specificity: 1000, calculation: "1000" },
    { selector: "#uniqueId", specificity: 100, calculation: "100" },
    { selector: ".mainClass", specificity: 10, calculation: "10" },
    { selector: "div", specificity: 1, calculation: "1" },
    { selector: "div #uniqueId", specificity: 101, calculation: "100 + 1" },
    { selector: "div .mainClass", specificity: 11, calculation: "10 + 1" },
    { selector: "div .mainClass .navbar", specificity: 21, calculation: "10 + 10 + 1" },
    { selector: "div #uniqueId .navbar", specificity: 111, calculation: "100 + 10 + 1" },
  ];
  return (
    <div className="p-6 space-y-4 font-sans">
      <h1 className="text-3xl font-medium text-blue-500">CSS Specificity Example</h1>
      <p className="mt-10">When a CSS property is declared multiple times using different selectors, the browser uses the concept of specificity to determine which rule takes precedence. Specificity ranks selectors based on their type and importance, ensuring that the most specific rule is applied.</p>
      <p className="mt-10">For example, if an HTML element has both a class selector and an ID selector applied to it, the property defined in the ID selector will take precedence because it has a higher specificity value.</p>

      <img src="https://salehmubashar.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdco9fiuhw%2Fimage%2Fupload%2Fv1696245722%2FSpecificity_in_CSS_Large_gcg11u.webp&w=3840&q=75" alt="img" className="w-11/12" />

      <h1 className="text-2xl">Specificity Hierarchy</h1>
      <p>Every <span className="text-green-700">selectors</span> in CSS have a specificity level. Following are specificity order of CSS selectors.</p>

      
        <li><strong>Inline Styles:</strong> Styles defined directly on an element using the style attribute have the highest priority in the cascade, overriding
        <pre>           both ID and class selectors.</pre></li>
      
      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<h1 style="color: blue;"> Example </h1>`}
        </pre>
      </div>

     
      <li className="mt-5m"><strong>ID selectors:</strong> have higher specificity than class, type, and other basic selectors, giving them greater priority when multiple rules apply to the same element.</li>
      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<style>
   #mainDiv {
        color: blue;
    }
</style>`}
        </pre>
      </div>

      <li><strong>Class selectors, attribute selectors, and pseudo-classes:</strong> Come next in the specificity hierarchy after ID selectors.<br/> Class selectors begin with a ., attribute selectors use square brackets [], and pseudo-classes are prefixed with a : <br/> (such as :hover or :first-child).</li>

      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<style>
   .subDivs {
        color: blue;
    }
</style>`}
        </pre>
      </div>

    <li><strong>Elements and Pseudo-elements:</strong> Element selectors and pseudo-elements have the lowest specificity. Element selectors target HTML tags directly (e.g., div, p), while pseudo-elements are prefixed with :: (such as ::before or ::after).</li>

    <div className="bg-gray-200 p-4 rounded-lg">
      <pre>
        {`<style>
    div {
        color: blue;
    }
</style>`}
      </pre>
    </div>

    <h1>How to Calculate Specificity?</h1>
    <p>To calculate specificity, it's helpful to remember these values:</p>
    <ul className="list-disc">
      <li><strong>Inline styles</strong> have a specificity of <strong>1000</strong></li>
      <li><strong>ID selectors</strong> are worth <strong>100</strong></li>
      <li><strong>Class selectors, attribute selectors,</strong> and <strong>pseudo-classes</strong>each have a value of 10</li>
      <li><strong>Element selectors and pseudo-elements</strong> each count as 1</li>
      <li><strong>Universal selectors (*)</strong> have a specificity of 0, meaning they don’t add any weight in comparisons</li>
    </ul>

     <h2 className="text-2xl font-bold mb-4">CSS Specificity Table</h2>
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Selector</th>
            <th className="border px-4 py-2">Specificity</th>
            <th className="border px-4 py-2">Calculation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2 font-mono">{row.selector}</td>
              <td className="border px-4 py-2 text-center">{row.specificity}</td>
              <td className="border px-4 py-2 text-center">{row.calculation}</td>
            </tr>
          ))}
        </tbody>
      </table>

























































{/* 

      <p className="text-blue-600">This text is styled by element selector (p).</p>
      
      <p className="highlight text-green-600">
        This text is styled by class selector (.highlight).
      </p>
      
      <p id="special" className="text-orange-600 font-semibold">
        This text is styled by ID selector (#special).
      </p>
      
      <p className="text-red-600 font-bold">
        This text is styled with higher specificity and turns RED.
      </p>
      
      <p className="text-purple-600 font-extrabold">
        This text uses !important and overrides all styles.
      </p> */}
    </div>
  );
};

export default CssSpecificity;