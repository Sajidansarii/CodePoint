import React from "react";

const CssSpecificity = () => {
  return (
    <div className="p-6 space-y-4 font-sans">
      <h1 className="text-2xl font-bold">CSS Specificity Example</h1>
      
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
      </p>
    </div>
  );
};

export default CssSpecificity;