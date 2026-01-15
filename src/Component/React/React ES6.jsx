import React  from "react";

const ES6 = () => {
    return (
        <div className="max-w-4xl mt-10 p-6">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React ES6</h1>
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is ES6?</h2>
            <p>ES6, short for ECMAScript 6, is the sixth version of ECMAScript, a standard created to unify JavaScript. Published in 2015, it is also called ECMAScript 2015.</p>
            
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Why Should I Learn ES6?</h2>
            <p>React uses ES6, so it’s helpful to know some of its new features, such as:</p>
            <ul className="list-[square] mt-5">
                <li>Classes</li>
                <li>Arrow Functions</li>
                <li>Variables (let, const, var)</li>
                <li>Array Methods </li>
                <li>Destructuring</li>
                <li>Modules</li>
                <li>Spread Operator</li>
                <li>Ternary Operator</li>
            </ul>
        
        
        </div>
    )
}

export default ES6;