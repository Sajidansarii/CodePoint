import React from "react";

const Conditional = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Conditional</h1>
            <p>React allows you to render components conditionally.You can do this using several different approaches.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3"><span className="text-red-400">if</span> Statement</h2>
            <p>A JavaScript if condition can be used to determine which component is displayed.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>We will use the two components shown below.</p>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}`}
            </code>
          </pre>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <p>Next, we will create a component that selects which component to render depending on a condition.</p>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);`}
            </code>
          </pre>

          <p className="mt-5">Set the isGoal attribute to true and observe the result.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`createRoot(document.getElementById('root')).render(
  <Goal isGoal={true} />
);`}
            </code>
           </pre>


           <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Logical && Operator</h2>
           <p className="mb-3">You can also use the && operator to conditionally render components in React.</p>
           <p>The heading in the example will render only when the <span className="text-red-400">props.brand</span> property has a value.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>With the && operator, the right side will render only if the left side evaluates to true.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);`}
                </code>
            </pre>

            <p className="mt-5">If props.brand evaluates to true, the expression following && will be rendered.Try emptying the brand property to see the change.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`createRoot(document.getElementById('root')).render(
  <Car />
);`}
                </code>
            </pre>


            <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">Ternary Operator</h2>
            <p>Conditional rendering can be achieved through the use of a ternary{' (? :)'} operator.</p>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`condition ? true : false`}
                </code>
            </pre>

            <p className="mt-5">Now, we’re going back to the goal example.</p>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Show the <span className="text-red-400">MadeGoal</span> component if <span className="text-red-400">isGoal</span> is true; otherwise, show the <span className="text-red-400">MissedGoal</span> component.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);`}
            </code>
           </pre>


           











        </div>
    )
}

export default Conditional;