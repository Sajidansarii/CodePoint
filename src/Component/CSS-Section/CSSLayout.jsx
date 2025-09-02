import React from "react";

const CssLayout = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">CSS Layout</h1>

      {/* Intro */}
      <p className="text-gray-700">
        CSS Layout techniques web page ke elements ko arrange karne ke liye use
        hote hain. Layout decide karta hai ki header, sidebar, content aur footer
        web page par kaise dikhai denge. Modern CSS me multiple tarike available
        hain jaise Flexbox, Grid, Positioning aur traditional block/inline
        layout.
      </p>

      {/* Block and Inline */}
      <h2 className="text-2xl font-semibold">1. Block aur Inline Layout</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<p style="display: block; background: lightblue;">
  Ye ek block element hai (poori width leta hai).
</p>

<span style="display: inline; background: lightgreen;">
  Ye ek inline element hai (sirf jitni width text ko chahiye utni leta hai).
</span>`}
      </pre>
      <p className="text-gray-700">
        Block elements (jaise <code>&lt;p&gt;</code>) hamesha nayi line par
        aate hain aur poori width occupy karte hain. Inline elements (jaise{" "}
        <code>&lt;span&gt;</code>) same line me rehte hain aur sirf content ki
        width lete hain.
      </p>

      {/* Positioning */}
      <h2 className="text-2xl font-semibold">2. CSS Positioning</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<div style="position: relative; background: lightgray; height: 150px;">
  <div style="position: absolute; top: 20px; left: 20px; background: orange;">
    Absolute Box
  </div>
</div>`}
      </pre>
      <p className="text-gray-700">
        Positioning se elements ko fixed, relative, absolute ya sticky position
        di jaa sakti hai. Upar ke example me orange box parent ke andar{" "}
        <code>absolute</code> position me rakha gaya hai.
      </p>

      {/* Flexbox */}
      <h2 className="text-2xl font-semibold">3. Flexbox Layout</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<div style="display: flex; gap: 10px;">
  <div style="background: lightcoral; flex: 1;">Box 1</div>
  <div style="background: lightseagreen; flex: 1;">Box 2</div>
  <div style="background: lightblue; flex: 1;">Box 3</div>
</div>`}
      </pre>
      <p className="text-gray-700">
        Flexbox ek modern layout system hai jisme elements ko easily horizontally
        ya vertically align kiya jaa sakta hai. Upar ke example me teen boxes{" "}
        equal width ke saath arrange ho rahe hain.
      </p>

      {/* Grid */}
      <h2 className="text-2xl font-semibold">4. CSS Grid Layout</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
  <div style="background: lightpink;">Grid 1</div>
  <div style="background: lightgreen;">Grid 2</div>
  <div style="background: lightblue;">Grid 3</div>
</div>`}
      </pre>
      <p className="text-gray-700">
        Grid layout se rows aur columns me items arrange kiye jaa sakte hain.
        Upar ke example me ek 3-column grid banaya gaya hai jisme har item apne
        cell me dikh raha hai.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
      <p className="text-gray-700">
        CSS Layout web pages ke design aur structure ka foundation hai. Aap
        traditional block/inline, positioning, Flexbox aur Grid ka combination
        use karke powerful aur responsive layouts bana sakte ho.
      </p>
    </div>
  );
};

export default CssLayout;