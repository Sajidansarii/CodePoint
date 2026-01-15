import React from "react";

const Intro = () => {

    return(
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl font-medium text-blue-500 mb-3">React Introduction</h1>
            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What is React?</h2>
            <p className="mb-3">React is a JavaScript library used for front-end development.</p>
            <p className="mb-3">Facebook software engineer Jordan Walke created React.</p>
            <p className="mb-3">React is sometimes called React.js or ReactJS.</p>
            <p>React helps developers create user interface components.</p>

            <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">How does React Work?</h2>
            <p className="mb-3">Rather than changing the browser’s DOM directly, React uses a virtual DOM in memory to perform updates before applying them to the real DOM.</p>
             <p className="mb-3">React detects which parts of the DOM have changed and updates only those parts.</p>
             <p>The rest of this tutorial will explain in detail how React manages this process.</p>
            
            <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What You Should Already Know</h1>
             <p>Make sure you understand the following basics before continuing.</p>
            <ul className="list-[square] list-inside mt-5 mb-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                </ul>   

                <p>If you want to learn these first, go to the tutorials on our Home page.</p>
              
              <h2 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">React.JS History</h2>
               <p className="mb-3">The latest release of React.JS is version 19.0.0 (December 2024).</p>
               <p className="mb-3">Its first public version, 0.3.0, came out in July 2013.</p>
               <p className="mb-3">React.JS was originally used in 2011 for Facebook’s Newsfeed.</p>
               <p>It was created by Facebook engineer Jordan Walke.</p>

          
       </div>
    )

}

export default Intro