import React, { useState } from "react";

const JSWorkerAPI = () => {
  const [result, setResult] = useState("Click the button to start worker...");

  // ✅ Start Web Worker
  const startWorker = () => {
    if (window.Worker) {
      // Create a new worker using a Blob
      const workerCode = `
        self.onmessage = function(e) {
          let num = e.data;
          let result = 0;
          for (let i = 0; i < 1000000000; i++) {
            result += i % 2 === 0 ? 1 : -1; // simulate heavy calculation
          }
          self.postMessage("✅ Worker finished processing number: " + num);
        };
      `;

      const blob = new Blob([workerCode], { type: "application/javascript" });
      const worker = new Worker(URL.createObjectURL(blob));

      setResult("⏳ Worker started... Performing heavy task...");

      // Send data to worker
      worker.postMessage(5);

      // Listen for worker response
      worker.onmessage = (e) => {
        setResult(e.data);
        worker.terminate(); // stop worker after task
      };
    } else {
      setResult("❌ Sorry, your browser does not support Web Workers.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Worker API in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>Worker API</strong> allows running JavaScript in the background 
        on a separate thread, without blocking the main browser UI. 
        It is useful for heavy computations or background tasks.
      </p>

      <button
        onClick={startWorker}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Worker
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {result}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Worker script (runs in background)
self.onmessage = function(e) {
  let num = e.data;
  let result = num * 2; 
  self.postMessage("Result: " + result);
};

// In main JS file
const worker = new Worker("worker.js");
worker.postMessage(5);

worker.onmessage = function(e) {
  console.log(e.data); // Result: 10
};`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>Worker()</code> → Creates a new background worker thread.
        </li>
        <li>
          <code>worker.postMessage(data)</code> → Sends data to the worker.
        </li>
        <li>
          <code>worker.onmessage</code> → Receives messages from the worker.
        </li>
        <li>
          Workers run in the background and *do not block the UI*.
        </li>
        <li>
          Useful for *heavy tasks* like image processing, data calculations, etc.
        </li>
      </ul>
    </div>
  );
};

export default JSWorkerAPI;