import { useState } from "react";

const HTMLWebWorker = () => {
  const [count, setCount] = useState(0);
  const [worker, setWorker] = useState(null);

  const startWorker = () => {
    if (window.Worker) {
      const newWorker = new Worker(new URL("./worker.js", import.meta.url));
      newWorker.onmessage = (e) => {
        setCount(e.data);
      };
      setWorker(newWorker);
    } else {
      alert("Web Workers are not supported in this browser.");
    }
  };

  const stopWorker = () => {
    if (worker) {
      worker.terminate();
      setWorker(null);
    }
  };

  return (
    <div className="p-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">HTML Web Workers</h1>

      <p className="text-gray-700 mb-4">
        A <strong>Web Worker</strong> is a JavaScript script that runs in the background, separate from the main browser thread. It helps perform heavy calculations without freezing the UI.
      </p>

      {/* Features */}
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Runs JavaScript in a background thread.</li>
        <li>Improves UI responsiveness.</li>
        <li>Communicates via <code>postMessage</code>.</li>
      </ul>

      {/* Demo */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-500">Web Worker Counter</h2>
        <p className="text-lg text-green-600 font-semibold">Count: {count}</p>
        <div className="mt-3 space-x-2">
          <button
            onClick={startWorker}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Start Worker
          </button>
          <button
            onClick={stopWorker}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Stop Worker
          </button>
        </div>
      </div>

      {/* JavaScript Code */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-blue-500 mb-2">worker.js (Background Script)</h3>
        <pre className="bg-gray-200 p-3 text-sm rounded overflow-x-auto">
{`let i = 0;
function timedCount() {
  i += 1;
  postMessage(i);
  setTimeout(timedCount, 1000);
}
timedCount();`}
        </pre>
      </div>

      {/* Notes */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="text-lg font-semibold text-yellow-700 mb-2">📝 Important Notes</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Web workers run in separate files (like <code>worker.js</code>).</li>
          <li>They don’t have access to the DOM.</li>
          <li>Use <code>postMessage()</code> to send/receive data.</li>
          <li>Use <code>terminate()</code> to stop a worker.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLWebWorker;