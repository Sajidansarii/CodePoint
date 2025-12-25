import React from "react";

const ReactOnScroll = () => {
    return(
        <div className="max-w-4xl p-6 mt-10">
         <h1 className="text-3xl text-blue-500 font-semibold mb-3">React onScroll Event</h1>
         <p>The onScroll event in React allows you to monitor scrolling within a specific element and respond to it. It fires whenever the scroll position changes and is commonly used for infinite scrolling, lazy loading, parallax effects, or updating the UI dynamically.</p>
        
         <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`<element onScroll={function}/>`}
            </code>
         </pre>

         <ul className="list-[square] list-inside space-y-1 mt-5">
            <li><span className="font-semibold">Parameter</span>: The onScroll event handler takes a function that defines what should happen when the scroll position <span className="ml-5">changes</span>.</li>
            <li><span className="font-semibold">Return Type</span>: The function doesn’t return anything; it simply performs actions in response to scrolling.</li>
         </ul>

         <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
         <pre className="text-green-400 bg-gray-900 p-4 text-wrap rounded-lg mt-5">
            <code>
                {`// App.js

import React, { useState } from "react";

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = (e) => {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		const position = Math.ceil(
			(scrollTop / (scrollHeight - clientHeight)) * 100
		);
		setScrollPosition(position);
	};

	return (
		<div
			className="scrollable-element"
			style={{
				height: "300px",
				overflowY: "scroll",
				border: "1px solid #ccc",
			}}
			onScroll={handleScroll}
		>
			<h1 style={{ position: "fixed", color: "red" }}>
				Scroll Position: {scrollPosition}px
			</h1>
			<p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum soluta animi harum, similique, sit perspiciatis, numquam repudiandae quisquam iure at dignissimos amet temporibus labore distinctio sequi. Adipisci ullam facilis molestias cum ipsa quae repellendus architecto placeat, fugit nihil dolore, nobis odit dignissimos quas minima! Corrupti architecto voluptatem amet excepturi repudiandae.
			</p>
		</div>
	);
}

export default App;`}
            </code>
         </pre>

         <h2 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Example</h2>
         <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`//App.js

import React, { useState } from "react";

function App() {
	const [backgroundColor, setBackgroundColor] = useState("white");

	const handleScroll = (event) => {
		const { scrollTop, scrollHeight, clientHeight } = event.target;
		const scrollRatio = scrollTop / (scrollHeight - clientHeight);

		if (scrollRatio > 0.5) {
			setBackgroundColor("lightblue");
		} else {
			setBackgroundColor("white");
		}
	};

	return (
		<div
			className="scrollable-section"
			style={{
				height: "300px",
				overflowY: "scroll",
				border: "1px solid #ccc",
				backgroundColor: backgroundColor,
				transition: "background-color 0.5s ease",
			}}
			onScroll={handleScroll}
		>
			<p style={{ paddingTop: "200px", textAlign: "center" }}>
				Scrollable Section
			</p>
			<p style={{ paddingTop: "500px", textAlign: "center" }}>
				Keep scrolling...
			</p>
			<p style={{ paddingTop: "800px", textAlign: "center" }}>
				Background Changes on Scroll
			</p>
		</div>
	);
}

export default App;`}
            </code>
         </pre>
       



        
        
        
        
        
        
        
        
        
        
        </div>
    )
}

export default ReactOnScroll;