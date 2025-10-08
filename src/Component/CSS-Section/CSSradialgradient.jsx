import React from "react";

const RadialGradientDemo = () => {
  return (
    <div className="p-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Radial Gradient 
      </h1>
      <p>CSS provides the <span className="text-red-500">radial-gradient( )</span> function to produce radial (center-outward) gradient effects.</p>
     <p>Radial gradients define color shifts that radiate from a central point to the edges.</p>
     <p>To create a radial gradient, you must specify at least two color stops—these define the colors that blend smoothly together.</p>

     <h1 className="text-2xl">Syntax</h1>
     <p className="border p-2">background-image: radial-gradient(shape size at position, start-color, ..., last-color);</p>
      <p>Radial gradients use ellipse as the default shape, place the center in the middle, and extend to the farthest corner by default.</p>

      <div className="h-40 w-full rounded-lg bg-[radial-gradient(circle,#facc15,#f97316)] flex items-center justify-center text-white font-bold transform transition-transform duration-500">
        Simple Radial Gradient
      </div>

     <h2 className="text-2xl">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
          {`.radial-gradient-box {
  background: radial-gradient(circle,yellow, orange); 
  }
`}
        </code>
      </pre>

      <h1 className="text-2xl">Radial Gradient - Differently Spaced Color Stops</h1>
      <p>The following illustration showcases a radial gradient with color stops set at different positions.</p>

      <div className="h-40 w-full rounded-lg bg-[radial-gradient(circle,#3b82f6,#10b981,_#f43f5e)] flex items-center justify-center text-white font-bold transform transition duration-500 hover:brightness-125">
        Multi-color Radial Gradient
      </div>
      <h2 className="text-2xl">Example:</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
        <code>
          {`.radial-gradient-box{
          hover:scale-(1.25);
          background-color:radial-gradient(circle,blue,Teal green,red ,);
          }
`}
        </code>
      </pre>

      <h1 className="text-2xl">Radial Gradient - Set Shape</h1>
      <p>The shape parameter determines the form of the gradient. It accepts one of the following values:</p>
      <ul className="list-[square] list-inside">
        <li> <strong>ellipse</strong> (this is default)</li>
        <li><strong>circle</strong></li>
      </ul>
      <p>The example below demonstrates a radial gradient with a circular shape.</p>
      <div className="h-80 w-96 rounded-lg bg-[radial-gradient(circle,#10b981,#FFFF00,#FF0000_)] flex items-center justify-center text-white font-bold transform transition duration-500 hover:brightness-125">
        Circle
      </div>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`.radial-gradient-box{
          hover:scale-(1.25);
          background-color:radial-gradient(circle,green,yellow,red);
          }`}
        </code>
      </pre>

      <h1 className="text-2xl">Radial Gradient - The size Parameter</h1>
      <p>The size parameter specifies the overall scale of the gradient. The valid values include:</p>
      <ul className="list-[square] list-inside">
        <li> <strong> closest-side</strong></li>
        <li> <strong>farthest-side</strong></li>
        <li> <strong>closest-corner</strong></li>
        <li> <strong>farthest-corner</strong> (this is default)</li>
      </ul>
      <h1 className="text-2xl">Example</h1>
      <p>A radial gradient with different size keywords:</p>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`.radial-gradient-box{
  background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
}

.radial-gradient-box{
  background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
}`}
        </code>
      </pre>
     

     <h1 className="text-2xl">CSS repeating-radial-gradient() Function</h1>
     <p>CSS provides the repeating-radial-gradient() function to generate radial gradients that repeat indefinitely.</p>

     <div className="h-80 w-full rounded-lg bg-[repeating-radial-gradient(red,yellow_10%,green_15%)] flex items-center justify-center text-white font-bold transform transition duration-500 hover:brightness-125">
        Circle
      </div>
      <pre className="bg-gray-200 p-4 rounded-lg">
        <code>
          {`.radial-gradient-box{
          background-color: repeating-radial-gradient(red,yellow 10%,green 15%);
          hover:scale-(1.25);
          }`}
        </code>
      </pre>














      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use 2–3 colors for smooth blending.</li>
          <li>Combine with transparency to overlay on images.</li>
          <li>Add hover effects like <code>scale</code> or <code>brightness</code> for interactivity.</li>
          <li>Use <code>animate-pulse</code> or <code>animate-[custom]</code> for subtle gradient motion.</li>
        </ul>
      </p>
    </div>
  );
};

export default RadialGradientDemo;