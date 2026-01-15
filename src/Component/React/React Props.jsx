import React from "react";

const ReactProps = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Props</h1>
            <p>Props are values supplied to React components and are sent using HTML-like attributes.</p>
            
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Include a brand prop when rendering the Car component.</p>
           <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);`}
            </code>
           </pre>

           <p className="mt-5">The component gets the argument through a props <span className="text-red-400">object</span>.</p>
          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <p>Access the <span className="text-red-400">brand</span> prop inside the <span className="text-red-400">Car</span> component.</p>
         <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}`}
            </code>
         </pre>

         <p className="mt-5">The object is usually called props, but you can name it whatever you like.</p>
         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>You can name the props object <span className="text-red-400">myobj</span> instead of <span className="text-red-400">props</span>.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}

`}
            </code>
        </pre>


        <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Pass Multiple Properties</h1>
        <p>Each attribute becomes a property of the object received by the Car component.</p>
        <h1 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h1>
        <p>Provide multiple attributes to the <span className="text-red-400">Car</span> component.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);`}
            </code>
        </pre>

        <p className="mt-5">The Car component gets all its attributes through the <span className="text-red-400">props</span> object.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Access and utilize the props inside the Car component.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}`}
            </code>
        </pre>


        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Different Data Types</h2>
        <p>You can pass strings as quoted values, while numbers, objects, and variables must be wrapped in curly braces.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Wrap numbers in curly braces so React treats them as numeric values.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`createRoot(document.getElementById('root')).render(
  <Car year={1969} />
);`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Wrap variables in curly braces when sending them as props.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`let x = "Ford";

createRoot(document.getElementById('root')).render(
  <Car brand={x} />
);`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
        <p>Wrap objects and arrays in {'{}'} to pass them as props in React.</p>
        <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);`}
            </code>
        </pre>

        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Object Props</h2>
       <p>React components recognize objects as objects, allowing property access via dot notation.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Access an object’s properties using the . <span className="text-red-400">operator</span>.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);

`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Array Props</h2>
       <p>Array values passed as props can be retrieved via indices.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Access elements of an array using their index numbers.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo = ["Ford", "Mustang"];

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Pass Props from Component to Component</h2>
       <p>You can send data between components using attributes as parameters.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Pass the brand prop from the Garage component to Car.</p>
       <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);`}
        </code>
       </pre>

        </div>
    )
}

export default ReactProps;