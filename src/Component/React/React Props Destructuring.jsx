import React  from "react";

const ReactProDestructuring  = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Props Destructuring</h1>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Destructuring Props</h2>
            <p>Destructuring allows you to pick only the props you need in a component.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Since the component only requires the color prop, it declares just that in the function parameters.</p>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);`}
                </code>
            </pre>

            <p className="mt-5">By destructuring within the component, you can access just the properties required, even though all props are received.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>All props are passed in, but destructuring ensures only selected properties are accessed inside the component.</p>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);`}
                </code>
            </pre>

            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Destructuring ...rest</h2>
            <p className="mb-3">If the number of properties is unknown, you can collect them using the ...rest operator.</p>
            <p>You can extract only the properties you need and store all other props in a separate object.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>The component picks the color and brand props, while the remaining properties, such as {'{ model: "Mustang", year: 1969 }'}, are collected into an object.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);`}
            </code>
           </pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Default Values</h2>
           <p>Using destructuring, you can assign default values to props so that if a prop isn’t provided, the default will be applied.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Set the default color value to "blue":</p>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Car({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);`}
            </code>
          </pre>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    )
}

export default ReactProDestructuring;