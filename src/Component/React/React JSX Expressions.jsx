import React from "react";

const ReactExpressons = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React JSX Expressions</h1>
            <p>One of JSX’s strongest features is that you can insert JavaScript expressions right inside your markup.</p>
            
            <h2 className="text-2xl text-ellipsis font-semibold mt-10 mb-3">Expressions</h2>
            <p>You can put any valid JavaScript expression inside JSX by wrapping it in curly braces {'{ }'}, and React will evaluate it and render the result in the DOM.</p>
             
             <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Evaluate 218 times 1.36.</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}`}
                </code>
            </pre>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Variables</h2>
            <p>Variables count as valid JavaScript expressions, and you insert them into JSX by wrapping them in {'{ }'}.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Use a variable inside JSX:</p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
}`}
                </code>
            </pre>

            <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Function Calls</h1>
             <p>You can call functions inside JSX by putting the call in curly braces {'{ }'}, because function calls are valid JavaScript expressions.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Call a JavaScript function inside your JSX code by wrapping it in {'{ }'}. </p>
            <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function kwtohp(kw) {
  return kw * 1.36;
}

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
}`}
                </code>
            </pre>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Object Properties</h2>
           <p>Access properties of an object inside JSX by using dot notation {'(e.g., {user.name})'}.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Access an object’s property inside JSX by referencing it within curly braces.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}`}
            </code>
         </pre>



        </div>
    )
}

export default ReactExpressons;