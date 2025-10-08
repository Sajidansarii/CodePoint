import React from "react";
    
export default function AnimationShowcase(){
  const data = [
    {property:'animation-composition', Description:'Indicates the composite operation to apply when many animations are having simultaneous effects on the same property.'},
    {property:'animation-delay', Description:'Indicates whether the animation should begin at the beginning of the animation or somewhere along the way, as well as the amount of time that should pass between an element loading and the start of an animation sequence.'},
    {property:'animation-direction', Description:'Indicates if the initial iteration of animation should be forward or backward and if iterations after that should continue in the same direction or change direction each time the sequence is executed.'},
    {property:'animation-duration', Description:'Indicates how long it takes for an animation to finish one cycle.'},
    {property:'animation-fill-mode', Description:'Describes the pre-run and post-run styling that an animation applies to its target.'},
    {property:'animation-iteration-count', Description:'Indicates how many times an animation should recur.'},
    {property:'animation-name', Description:'It gives the name of the @keyframes at-rule that describes the keyframes of an animation.'},
    {property:'animation-play-state', Description:'Indicates whether an animation sequence should be played or paused.'},
    {property:'animation-timing-function', Description:'Describes the acceleration curves that are used to specify the keyframe transitions in an animation.'}
  ];
  return (
    <div className="p-10 space-y-5">
      <h1 className="text-3xl font-medium text-blue-500">CSS Animations</h1>
      <p>CSS animations allow smooth transitions between different styles without the need for JavaScript. For example, changes in an element’s color or position can happen gradually, making the shift visually appealing and noticeable.</p>

      {/* Built-in Tailwind Animations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Built-in Animations</h2>
        <div className="flex space-x-8">
          <div className="w-20 h-20 bg-blue-500 rounded-full animate-bounce flex items-center justify-center text-white text-sm">
            Bounce
          </div>
          <div className="w-20 h-20 bg-green-500 rounded-full animate-spin flex items-center justify-center text-white text-sm">
            Spin
          </div>
          <div className="w-16 h-16 bg-red-500 rounded-full animate-ping flex items-center justify-center text-white text-sm">ping</div>
          <div className="w-20 h-20 bg-yellow-500 rounded-full animate-pulse flex items-center justify-center text-white text-sm">pulse</div>
        </div>
      </section>
      <h1 className="text-2xl font-semibold">What is CSS Animation?</h1>
      <p>In CSS, animations allow dynamic style changes of elements based on time duration, user interaction, or state changes. They are implemented using the @keyframes rule to define the animation and the animation property to apply it to elements.</p>
            <h1 className="text-2xl">List of Contents</h1>
            <ul className="list-[square] list-inside">
              <li>CSS @keyframes Rule</li>
              <li>Animation Delay Property</li>
              <li>Set Animation Iteration Count</li>
              <li>Animation Direction Property</li>
              <li>Animation Timing Function</li>
              <li>Set Animation Fill Modes</li>
              <li>Animation Shorthand Property</li>
              <li>List of CSS Animation Properties</li>
            </ul>

            <h1 className="text-2xl">Understanding the @keyframes Rule</h1>
            <p>The @keyframes rule is used to define keyframes for animation specifying how the animated element looks at various stages of animation. Consider the following code that defines a keyframe rule</p>
            <div className="bg-gray-200 p-4 rounded-lg">
              <pre>
                {`.box{
    animation: colorChange 5s infinite;
}

@keyframes colorChange {
    0% {
        background-color: red;
    }
    50% {
        background-color: green;
    }
    100% {
        background-color: blue;
    }
}`}
              </pre>
            </div>

            <p>This code defines an infinite animation named colorChange for elements with the class .box, running over a duration of 5 seconds.</p>
            <p>The @keyframes rule defines the animation sequence for an animation named colorChange. It’s used to specify how the styles of an element should change over time.</p>

            <ul className="list-[square] list-inside bg-gray-200 p-4 rounded-lg">
              <li>At 0% of total duration of animation( ie, 0 seconds) the background color will be red.</li>
            <li>At 50% of total time( ie, 2.5 seconds) the background color changes to green.</li>
            <li>At 100% of total duration( ie, 5 seconds) color changes to blue.</li>
            </ul>


            <h1 className="text-2xl ">Animation Delay Property</h1>
            <p>We can set a delay before an animation starts using the animation-delay property. Check out the following example — it's simple and effective.</p>
            <p>A negative animation-delay causes the animation to begin as though it has been active for the absolute value of that delay. For example, -2s means the animation starts 2 seconds into its timeline.</p>
            <h1 className="text-2xl">Example</h1>
            <p>In this example ball will start to move left after 2 seconds.</p>

            <div className="bg-gray-200 p-4 rounded-lg">
              <pre>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .ball {
            width: 50px;
            height: 50px;
            background-color: #3498db;
            border-radius: 50%;
            position: absolute;
            left: 0; 

            animation-name: moveRight;
            /* Set duration */
            animation-duration: 2s;
            /* Set delay for animation */
            animation-delay: 2s; 
        }

        @keyframes moveRight {
            to {
                left: calc(100% - 50px);
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="ball"></div>
    </div>
</body>
</html>`}
              </pre>
            </div>
            <h1 className="text-2xl">Set Animation Iteration Count</h1>
            <p>The animation-iteration-count property specifies the number of times an animation cycle should be completed.</p>
            <p>Negative values are invalid for this property per the CSS spec. Acceptable values include positive integers or the infinite keyword to repeat the animation indefinitely.</p>
            <h1 className="text-2xl">Example</h1>
            <p>The animation for the ball in this example uses an animation-iteration-count of infinite, causing it to repeat without end.</p>

            <div className="bg-gray-200 p-4 rounded">
              <pre>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .ball {
            width: 50px;
            height: 50px;
            background-color: #3498db;
            border-radius: 50%;
            position: absolute; 
            left: 0; 

            animation-name: moveRight;
            /* Set duration */
            animation-duration: 2s;
            /* Set number of time animation repeats */
            animation-iteration-count: infinite;
        }

        @keyframes moveRight {
            to {
                left: calc(100% - 50px);
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="ball"></div>
    </div>
</body>
</html>`}
              </pre>
            </div>

            <h1 className="text-2xl">Animation Direction Property</h1>
            <p>The animation-direction property specifies whether the animation should play forwards, backwards, alternate, or alternate-reverse.</p>
            <p>These are the acceptable values defined by CSS for the animation-direction property.</p>
            <ul className="bg-gray-200 p-4 rounded-lg list-[square] list-inside">
             <li>normal: The animation is played as normal (forwards). This is default.</li>
            <li>reverse: The animation is played in reverse direction (backwards).</li>
            <li>alternate: The animation is played forwards first, then backwards.</li>
        <li>alternate-reverse: The animation is played backwards first, then forwards.</li>
            </ul>
            <h1 className="text-2xl">Example</h1>
            <p>In this example, the animation-direction property is assigned via an inline style attribute.</p>
            <div className="bg-gray-200 p-4 rounded-lg">
              <pre>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .ball {
            width: 50px;
            height: 50px;
            background-color: #3498db;
            border-radius: 50%;
            position: relative;
            left:0;
            
            animation-name: moveRight ;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
        @keyframes moveRight {
            to {
                left: calc(100% - 50px);
            }
        }
    </style>
</head>

<body>
    <h2>animation-direction: normal</h2>
    <div class="ball" 
         style="animation-direction: normal; ">
    </div>

    <h2>animation-direction: reverse</h2>
    <div class="ball" 
         style="animation-direction: reverse;">
    </div>

    <h2>animation-direction: alternate</h2>
    <div class="ball" 
         style="animation-direction: alternate;">
    </div>

    <h2>animation-direction: alternate-reverse</h2>
    <div class="ball" 
         style="animation-direction: alternate-reverse;">
    </div>
</body>
</html>`}
              </pre>
            </div>

            <h1 className="text-2xl">Animation Timing Function</h1>
            <p>The CSS animation-timing-function property specifies the pacing of an animation’s progress, and it supports the following values.</p>
            <ul className="bg-gray-200 p-4 rounded-lg list-[square] list-inside">
              <li>ease: The animation will start slow, then fast, then end slowly (The default value)</li>
              <li>linear: Animation with the same speed from start to end.</li>
              <li>ease-in: Animation with a slow start.</li>
              <li>ease-out: Animation with a slow end.</li>
              <li>ease-in-out: Animation with a slow start and end.</li>
              <li>cubic-bezier(n,n,n,n): This lets us to define our own values for speed. To know more check out Cubic Bezier Function article.</li>
            </ul>

            <h1 className="text-2xl">Example</h1>
            <div className="bg-gray-200 p-4 rounded-lg">
              <pre>
                {`<h2>ease-out</h2>
    <div class="ball" 
         style="animation-timing-function: ease-out;">
    </div>
    
    <h2>ease-in-out</h2>
    <div class="ball" 
         style="animation-timing-function: ease-in-out;">
    </div>
    
    <h2>cubic-bezier(0.25, 0.1, 0.25, 1)</h2>
    <div class="ball" 
         style="animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);">
    </div>
</body>
</html>   `}
              </pre>
            </div>
            <h1 className="text-2xl">Set Animation Fill Modes</h1>
            <p>animation-fill-mode determines the styles applied to the target element during the animation’s inactive phases: before it starts, after it ends, or both.</p>
            <p>The animation-fill-mode property can have the following values:</p>
            <ul className="bg-gray-200 p-4 rounded-lg list-[square] list-inside">
              <li>none: The animation will not apply any style before or after it starts. This is default.</li>
              <li>forwards: At end of animation element will keep the style set by the last keyframe rule.</li>
              <li>backwards: At end of animation element will keep the style set by the first keyframe rule.</li>
              <li>both: The animation will follow the rules for both forwards and backwards.</li>
            </ul>
            <p>Check out the output of the following code to better understand.</p>
            <h1 className="text-2xl">Example</h1>
            <div className="bg-gray-200 p-4 rounded-lg">
              <pre>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .box {
            padding: 10px;
            background-color: green;
            color: white;
            font-size: 16px;
            margin: 20px;
            animation-duration: 2s;
            animation-name: changeColor;
        }

        /* Animation Definition */
        @keyframes changeColor {
            0% {
                background-color: blue;
            }
            100% {
                background-color: red ;
            }
        }

        /* Animation Fill Modes */
        .none {
            animation-fill-mode: none;
        }

        .forwards {
            animation-fill-mode: forwards;
        }

        .backwards {
            animation-fill-mode: backwards;
            animation-delay: 2s;
        }

        .both {
            animation-fill-mode: both;
            animation-delay: 2s;
        }
    </style>
</head>

<body>
    <div class="box none">None</div>
    <div class="box forwards">Forwards</div>
    <div class="box backwards">Backwards</div>
    <div class="box both">Both</div>
</body>
</html>`}
              </pre>
            </div>

            <h1 className="text-2xl">Animation Shorthand Property</h1>
            <p>The animation property in CSS combines these properties into one shorthand.</p>
            <ul className="list-[square]">
              <li>animation-name: Sets name for animation.</li>
              <li>animation-duration: Sets duration of animation.</li>
              <li>animation-timing-function: Define speed curve of animation.</li>
              <li>animation-delay: Sets delay before which animation starts.</li>
              <li>animation-iteration-count: Sets number of time animation repeats.</li>
              <li>animation-direction: Defines direction of execution of animation.</li>
              <li>animation-fill-mode: Describes the pre-run and post-run styling.</li>
              <li>animation-play-state: Describes play/pause nature of animation.</li>
            </ul>

            <h1 className="text-2xl">Example</h1>
            <div className="bg-gray-200 p-4 rounded-lg">
              <pre>
                {`<html lang="en">
<head>
    <style>
    .box {
        padding: 20px;
        background-color: #3498db;
        color: white;
        font-size: 16px;
        /* Name, duration, timing function, delay, repeat, direction, fill mode */
        animation: changeColor 2s ease-in-out 1s infinite alternate both;
    }

    /* Animation Definition */
    @keyframes changeColor {
        0% {
            background-color: #3498db;
        }
        100% {
            background-color: #e74c3c;
        }
    }

    </style>
</head>

<body>
    <div class="box">Animate Me!</div>
</body>
</html>`}
              </pre>
            </div>

            <h1 className="text-2xl">List of CSS Animation Properties</h1>
            <p>The animation property includes the following sub-properties:</p>

            <table className="min-w-full border border-gray-300 rounded-md text-sm text-left mt-10">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Property</th>
                  <th className="px-4 py-2 border-b border-gray-300 font-bold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                      {data.map((row,index)=>(
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b border-gray-200">{row.property}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.Description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
  );
}