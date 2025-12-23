import React  from "react";

const Reactcomponent = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
        <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Components</h1>
        <p className="mb-3">React components are self‑contained units (either functions or classes) that help build the interface; they accept props as input and return UI elements.</p>
        <p>React applications are built from components, which are self‑contained, reusable units written as functions or classes that take inputs (props) and return the UI elements to display; there are two types (Class and Function components), but we’ll concentrate on function components here.</p>
        
        <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create Your First Component</h2>
        <p>When defining a React component, its name must begin with an uppercase letter so that JSX recognizes it as a custom component rather than a built‑in HTML element, and the component returns JSX (which looks like HTML) describing what should be displayed in the UI.</p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2> 
        <p>Define a function component named Car. </p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Rendering a Component</h2>
       <p>Now your React app includes a component named Car that returns an <span className="text-red-400">{'<h2>'}</span> element. To render it in your app, you reference it like a normal HTML tag using <span className="text-red-400">{'<Car/>'}</span>.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
       <p>Render the Car component inside the element with the id "root". </p>
       <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`createRoot(document.getElementById('root')).render(
  <Car />
)`}
        </code>
       </pre>

       <h2 className="text-2xl text-gray-800 font-semibold mt-5">Props</h2>
       <p>Props (properties) let you send values into a React component, and you pass them the same way you set HTML attributes on an element.</p>
       <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
      <p>Specify a color attribute when rendering Car, and then use that prop in the component to affect the rendered content or style.</p>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car color="red"/>
);`}
        </code>
      </pre>


      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Components in Components</h2>
      <p>Components in React can render other components within them.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
     <p>Include the Car component within the JSX of the Garage component.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);

`}
        </code>
     </pre>


     <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Rendering a Component Twice</h2>
    <p>You can render the same component more than once in your UI.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Place two instances of the Car component inside the Garage component’s JSX.</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <Car />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);`}
        </code>
    </pre>

    <p className="mt-5">The previous example might seem trivial, but if we make the Car component dynamic by passing data (props) into it, it becomes much more useful.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>Display two instances of the Car component, passing different attributes so each car appears uniquely.</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      <Car brand="BMW" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);`}
        </code>
    </pre>


    <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Components in Files</h2>
    <p>React lets you organize components in their own files to improve readability and reuse; just add a .jsx file inside the src folder and move the component code into it.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>This is our newly created file, called <span className="text-red-400">Vehicle.jsx</span>.</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

export default Car;`}
        </code>
    </pre>

    <p className="mt-5">You must import the Car component by bringing in the Vehicle.jsx file before you can render it in your React application.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
   <p>After importing the Vehicle.jsx file into your app, you can use the Car component just like any component defined in the same file.</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
            {`import { createRoot } from 'react-dom/client'
import Car from './Vehicle.jsx';

createRoot(document.getElementById('root')).render(
  <Car />
);`}
        </code>
    </pre>





    
    </div>

    
    )
}

export default  Reactcomponent;