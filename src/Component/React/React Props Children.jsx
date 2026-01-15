import React from "react";

const ReactProchild = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Props Children</h1>
             <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Props Children</h2>
           <p>React allows you to send whatever is inside a component’s opening and closing tags to another component. The target component can then use props.children to access it.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Using the Parent component, forward the content placed between the Son and Daughter components’ tags.</p>
          <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Parent />
);

`}
            </code>
          </pre>
        
        </div>
    )
}

export default ReactProchild;