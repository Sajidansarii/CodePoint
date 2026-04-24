import React from "react";

export default function KeyframesDemo() {
  const data = [
    {value:'animation-name', description:'It specifies the name of the keyframe within which lies the animation code. Required.'},
    {value:'key-frame-selector', description:'It specifies the percentage of the animation duration. Valid values include: 0% to 100% / from (0%) - to(100%).'},
    {value:'css-styles', description:'It specifies the CSS style properties that have to undergo changes during the animation.'},
  ];
  return (
    <div className="flex flex-col  max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl sm:text-3xl font-medium text-blue-500">
        CSS @keyframes with Tailwind
      </h1>
      <p>CSS @keyframes defines animations by mapping styles to specific points in the animation timeline. Each keyframe represents a state at a percentage of the total duration, from 0% to 100%, enabling smooth transitions between styles.</p>
      <h1 className="text-2xl">Syntax</h1>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">@keyframes</span> <span className="text-green-700">animation-name</span> <span>{'{'}</span>
    <span className="text-green-700">keyframes-selector</span> <span>{'{'}</span>
    <span className="text-red-500">css-styles</span>;
    <span>{'}'}</span>
    <span>{'}'}</span>
  </code>
</pre>

      <h1 className="text-2xl">Property Values</h1>

      <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Value</th>
            <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>(
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">{row.value}</td>
              <td className="px-4 py-2 border-b border-gray-200">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl">Examples of CSS Keyframe Rule</h1>
      <p>The following examples explain the @keyframe rule with different examples.</p>
       <h1 className="text-2xl">Color Changing Animation using @Keyframe</h1>
       <p>The example below features a @keyframes animation named colorchange, which transitions through keyframes at 0%, 25%, 50%, 75%, and 100%. It animates changes in the background-color, color, and top CSS properties.</p>
       <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-500">&lt;html&gt;</span><br /><br />

    <span className="text-blue-500">&lt;head&gt;</span><br />
    <span className="text-blue-500">&lt;style&gt;</span><br /><br />

    <span className="text-blue-500">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">400px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">100%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightgray</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.container &gt; div</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">60px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">3px solid gray</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">animation</span>: <span className="text-green-700">colorchange 6s infinite</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">36px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">@keyframes</span> <span className="text-green-700">colorchange</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">0%</span> <span>{'{'}</span>
    <span className="text-red-500">top</span>: <span className="text-green-700">0px</span>;
    <span className="text-red-500">background-color</span>: <span className="text-green-700">red</span>;
    <span className="text-red-500">color</span>: <span className="text-green-700">white</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">25%</span> <span>{'{'}</span>
    <span className="text-red-500">top</span>: <span className="text-green-700">75px</span>;
    <span className="text-red-500">background-color</span>: <span className="text-green-700">white</span>;
    <span className="text-red-500">color</span>: <span className="text-green-700">black</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">50%</span> <span>{'{'}</span>
    <span className="text-red-500">top</span>: <span className="text-green-700">150px</span>;
    <span className="text-red-500">background-color</span>: <span className="text-green-700">lightblue</span>;
    <span className="text-red-500">color</span>: <span className="text-green-700">brown</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">75%</span> <span>{'{'}</span>
    <span className="text-red-500">top</span>: <span className="text-green-700">225px</span>;
    <span className="text-red-500">background-color</span>: <span className="text-green-700">#457b9d</span>;
    <span className="text-red-500">color</span>: <span className="text-green-700">orange</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">100%</span> <span>{'{'}</span>
    <span className="text-red-500">top</span>: <span className="text-green-700">300px</span>;
    <span className="text-red-500">background-color</span>: <span className="text-green-700">darkblue</span>;
    <span className="text-red-500">color</span>: <span className="text-green-700">yellow</span>;
    <span>{'}'}</span><br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">&lt;/style&gt;</span><br />
    <span className="text-blue-500">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-500">&lt;body&gt;</span><br /><br />

    <span className="text-blue-500">&lt;h2&gt;</span>CSS @keyframes rule<span className="text-blue-500">&lt;/h2&gt;</span><br />
    <span className="text-blue-500">&lt;h4&gt;</span>Changing color example<span className="text-blue-500">&lt;/h4&gt;</span><br /><br />

    <span className="text-blue-500">&lt;div</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"container"</span>
    <span className="text-blue-500">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">&lt;div&gt;</span>TutorialsPoint<span className="text-blue-500">&lt;/div&gt;</span><br />

    <span className="text-blue-500">&lt;/div&gt;</span><br /><br />

    <span className="text-blue-500">&lt;/body&gt;</span><br />
    <span className="text-blue-500">&lt;/html&gt;</span>
  </code>
</pre>

       <h1 className="text-2xl">Motion Example using @Keyframes</h1>
       <p>The following example features a @keyframes animation named motion, defined at 0%, 50%, and 100%. It animates horizontal movement by changing the translateX transform property.</p>
       <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-500">&lt;html&gt;</span><br /><br />

    <span className="text-blue-500">&lt;head&gt;</span><br />
    <span className="text-blue-500">&lt;style&gt;</span><br /><br />

    <span className="text-blue-500">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">200px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">100%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightgray</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-bottom</span>: <span className="text-green-700">10px solid orange</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.container &gt; div</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">80px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">80px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">3px solid gray</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">animation</span>: <span className="text-green-700">motion 6s infinite</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">top</span>: <span className="text-green-700">117px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">black</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">.inner</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">position</span>: <span className="text-green-700">relative</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">45px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">width</span>: <span className="text-green-700">45px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border-radius</span>: <span className="text-green-700">50%</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">lightgray</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">top</span>: <span className="text-green-700">16px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">left</span>: <span className="text-green-700">17px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">@keyframes</span> <span className="text-green-700">motion</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-green-700">0%</span> <span>{'{'}</span>
    <span className="text-red-500">transform</span>: <span className="text-green-700">translateX(0px)</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">50%</span> <span>{'{'}</span>
    <span className="text-red-500">transform</span>: <span className="text-green-700">translateX(475px)</span>;
    <span>{'}'}</span><br />

    &nbsp;&nbsp;<span className="text-green-700">100%</span> <span>{'{'}</span>
    <span className="text-red-500">transform</span>: <span className="text-green-700">translateX(0px)</span>;
    <span>{'}'}</span><br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">&lt;/style&gt;</span><br />
    <span className="text-blue-500">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-500">&lt;body&gt;</span><br /><br />

    <span className="text-blue-500">&lt;h2&gt;</span>CSS @keyframes rule<span className="text-blue-500">&lt;/h2&gt;</span><br />
    <span className="text-blue-500">&lt;h4&gt;</span>motion example<span className="text-blue-500">&lt;/h4&gt;</span><br /><br />

    <span className="text-blue-500">&lt;div</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"container"</span>
    <span className="text-blue-500">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-500">&lt;div&gt;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">&lt;div</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"inner"</span>
    <span className="text-blue-500">&gt;&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-500">&lt;/div&gt;</span><br />

    <span className="text-blue-500">&lt;/div&gt;</span><br /><br />

    <span className="text-blue-500">&lt;/body&gt;</span><br />
    <span className="text-blue-500">&lt;/html&gt;</span>
  </code>
</pre>
</div>
  );
}