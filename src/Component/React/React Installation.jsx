import React from "react";

const ReactInstallation = () =>{
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Installation</h1>
            <p>This chapter explains how to install React and its tools. Before installing, we need to verify prerequisites. React’s CLI tools, which rely on Node.js, speed up building and deploying React apps. Assuming Node.js is installed, we can check it with the following command:</p>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`node --version`}
                </code>
            </pre>

            <p className="mt-5">The installed Node.js version can be viewed, and on my machine it appears as shown below.</p>
            <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
                <code>
                    {`v24.11.0`}
                </code>
            </pre>

            <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Toolchain</h1>
            <p>If you want to add small features like form validation or modal dialogs, you can include React in your web page using a CDN, just like jQuery. But for bigger applications, it’s better to split your code into multiple files and use a bundler like Webpack, Parcel, or Rollup to combine everything before deployment.
            The React toolchain makes it easier to create, run, build, and deploy your app. It gives you a starter template with all the basic code needed to get started.</p>
      
           <ul className="list-[square] list-inside mt-5">
            <li><strong>Create React App </strong>− SPA oriented toolchain</li>
            <li><strong>Next.js</strong> − server-side rendering oriented toolchain</li>
            <li><strong>Gatsby</strong> − Static content oriented toolchain</li>
           </ul>

           <p>Tools needed to develop a React application:</p>
           <ul className="list-[square] list-inside mt-5">
            <li>The serve, a static server to serve our application during development</li>
            <li>Babel compiler</li>
            <li>Create React App CLI</li>
           </ul>

           <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The serve static server</h1>
           <p>serve is a lightweight web server that delivers static sites and single-page applications. It loads quickly and uses minimal memory, making it suitable for serving a React application. Let’s install it on our system using the npm package manager.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`npm install serve -g
added 86 packages in 6s`}
            </code>
           </pre>

           <p className="mt-5">Let’s create a simple static site and serve it using the serve app. Open a command prompt and navigate to your workspace.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`cd /go/to/your/workspace`}
            </code>
           </pre>

           <p className="mt-5">Next, execute the serve command.</p>
           <pre className="text-green-400 bg-gray-900 p-4 4ounded-lg mt-5">
            <code>
                {`serve .`}
            </code>
           </pre>

           <p className="mt-5">We can serve a single file, such as index.html, instead of the entire folder.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-10  mb-3">
            <code>
                {`serve ./index.html`}
            </code>
           </pre>

           <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Create React App toolchain</h1>
           <p>Create React App is a modern CLI tool for building single-page React applications. Supported by the React community, it also manages the Babel compiler. Let’s install Create React App on our local system.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`> npm install -g create-react-app
added 64 packages in 3s`}
            </code>
           </pre>

           <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Updating the toolchain</h1>
           <p>The Create React App toolchain relies on the react-scripts package to build and run applications. After starting your project, you can update react-scripts to the latest version anytime using npm.</p>
           <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
            <code>
                {`npm install react-scripts@latest
added 1330 packages in 42s`}
            </code>
           </pre>
       

      
        </div>
    )
}

export default ReactInstallation;