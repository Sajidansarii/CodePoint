import React from "react";

export default function KeyframesDemo() {
  const data = [
    {value:'animation-name', description:'It specifies the name of the keyframe within which lies the animation code. Required.'},
    {value:'key-frame-selector', description:'It specifies the percentage of the animation duration. Valid values include: 0% to 100% / from (0%) - to(100%).'},
    {value:'css-styles', description:'It specifies the CSS style properties that have to undergo changes during the animation.'},
  ];
  return (
    <div className="flex flex-col  min-h-screen p-4 space-y-6">
      <h1 className="text-3xl sm:text-3xl font-medium text-blue-500">
        CSS @keyframes with Tailwind
      </h1>
      <p>CSS @keyframes defines animations by mapping styles to specific points in the animation timeline. Each keyframe represents a state at a percentage of the total duration, from 0% to 100%, enabling smooth transitions between styles.</p>
      <h1 className="text-2xl">Syntax</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`@keyframes animation-name {keyframes-selector {css-styles;}}`}
        </pre>
      </div>
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
       <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<!DOCTYPE html>
<html>
<head>

   <style>
      .container {
         height: 400px;
         width: 100%;
         background-color: lightgray;
      }
      .container >div{
         position: relative;
         height: 60px;
         border: 3px solid gray;
         animation: colorchange 6s infinite;
         text-align: center;
         font-size: 36px;
         font-weight: bold;
      }
      @keyframes colorchange{
         0%   {top: 0px;  background-color: red; color: white;}
         25%  {top: 75px;  background-color: white; color: black;}
         50%  {top: 150px;  background-color: lightblue; color: brown;}
         75%  {top: 225px;  background-color: #457b9d; color: orange;}
         100% {top: 300px;  background-color: darkblue; color: yellow;}
      }

   </style>
</head>
<body>
   <h2>
      CSS @keyframes rule
   </h2>
   <h4>
      Changing color example
   </h4>
   <div class="container">
      <div>
         TutorialsPoint
      </div>
   </div>
</body>
</html>`}
        </pre>
       </div>
       <h1 className="text-2xl">Motion Example using @Keyframes</h1>
       <p>The following example features a @keyframes animation named motion, defined at 0%, 50%, and 100%. It animates horizontal movement by changing the translateX transform property.</p>
       <h1 className="text-2xl">Example</h1>
       <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          {`<!DOCTYPE html>
<html>

<head>

   <style>
      .container {
         height: 200px;
         width: 100%;
         background-color: lightgray;
         border-bottom: 10px solid orange;
      }

      .container>div {
         position: relative;
         height: 80px;
         width: 80px;
         border-radius: 50%;
         border: 3px solid gray;
         animation: motion 6s infinite;
         top: 117px;
         background-color: black;
      }

      .inner {
         position: relative;
         height: 45px;
         width: 45px;
         border-radius: 50%;
         background-color: lightgray;
         top: 16px;
         left: 17px;
      }

      @keyframes motion {
         0% {
               transform: translateX(0px);
         }
         50% {
               transform: translateX(475px);
         }
         100% {
               transform: translateX(0px);
         }
      }
   </style>
</head>

<body>
   <h2>
      CSS @keyframes rule
   </h2>
   <h4>
      motion example
   </h4>
   <div class="container">
      <div>
         <div class="inner">
         </div>
      </div>
   </div>
</body>

</html>`}
        </pre>
       </div>
       

    </div>
  );
}