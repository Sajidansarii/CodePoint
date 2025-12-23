import React from "react";

const ReactList = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold  mb-3">React List</h1>
            <p>React lets you render lists by looping through data, with JavaScript’s <span className="text-red-400">map()</span> method being the preferred approach.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
            <p>Let’s make a simple list with the <span className="text-red-400">map()</span> method.</p>
             <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);`}
                </code>
             </pre>

             <p className="mt-5">The code will function in React, yet a warning appears since no key is provided for the list elements.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Keys in React Lists</h2>
            <p>React uses keys to identify elements, allowing individual items to re-render when updated or removed instead of the full list, and each key must be unique among siblings but not globally.</p>
            <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
            <p>Here’s the previous example, now using keys.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function MyCars() {
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);`}
            </code>
           </pre>

           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Using Array Index as Keys</h2>
           <p>While the array index may serve as a key, this practice is generally discouraged except under particular circumstances.</p>
          <ul className="list-[square] list-inside mt-5">
            <li>The list is static (won't change)</li>
            <li>The list will never be reordered or filtered</li>
            <li>The items in the list have no IDs</li>
          </ul>

          <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
          <p>You can use the index of an array as a key, but it’s not a good idea for lists that update.</p>
          <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);`}
            </code>
          </pre>

          













        </div>
    )
}

export default ReactList;