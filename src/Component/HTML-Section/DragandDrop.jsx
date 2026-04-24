import { useState } from "react";

const HTMLDragAndDrop = () => {
  const [dropped, setDropped] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(data);
    e.target.appendChild(droppedElement);
    setDropped(true);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">HTML Drag and Drop</h1>

      <p className="leading-relaxed mb-3">
        The <strong>Drag and Drop API</strong> allows users to drag elements and drop them into other parts of the web page. This feature is commonly used in image uploaders, to-do lists, file explorers, and more.
      </p>

      {/* Features */}
      <ul className="list-[square] list-inside leading-relaxed mb-3">
        <li>Draggable elements must have <code>draggable="true"</code></li>
        <li>Use events: <code>onDragStart</code>, <code>onDragOver</code>, <code>onDrop</code></li>
        <li>Uses the <code>dataTransfer</code> object to pass information</li>
      </ul>

      {/* Code Example */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-3">Drag & Drop Demo</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Draggable */}
          {!dropped && (
            <div
              id="draggable-box"
              draggable="true"
              onDragStart={handleDragStart}
              className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center rounded cursor-move"
            >
              Drag me
            </div>
          )}

          {/* Drop Target */}
          <div
            id="drop-target"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-40 h-40 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-600 rounded"
          >
            Drop here
          </div>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-500 mb-3">JavaScript Example</h3>
 <pre className="bg-gray-200 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap text-sm">
  <code>
    <span className="text-gray-700">element</span>.
    <span className="text-blue-600">addEventListener</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"dragstart"</span>,
    <span className="text-gray-500">(</span>
    <span className="text-orange-600">event</span>
    <span className="text-gray-500">)</span>
    <span className="text-gray-500"> =&gt; &#123;</span><br/>

    &nbsp;&nbsp;<span className="text-orange-600">event</span>.
    <span className="text-blue-600">dataTransfer</span>.
    <span className="text-blue-600">setData</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"text"</span>,
    <span className="text-orange-600">event</span>.
    <span className="text-blue-600">target</span>.
    <span className="text-blue-600">id</span>
    <span className="text-gray-500">);</span><br/>

    <span className="text-gray-500">&#125;);</span><br/><br/>

    <span className="text-gray-700">target</span>.
    <span className="text-blue-600">addEventListener</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"dragover"</span>,
    <span className="text-gray-500">(</span>
    <span className="text-orange-600">event</span>
    <span className="text-gray-500">)</span>
    <span className="text-gray-500"> =&gt; &#123;</span><br/>

    &nbsp;&nbsp;<span className="text-orange-600">event</span>.
    <span className="text-blue-600">preventDefault</span>
    <span className="text-gray-500">();</span><br/>

    <span className="text-gray-500">&#125;);</span><br/><br/>

    <span className="text-gray-700">target</span>.
    <span className="text-blue-600">addEventListener</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"drop"</span>,
    <span className="text-gray-500">(</span>
    <span className="text-orange-600">event</span>
    <span className="text-gray-500">)</span>
    <span className="text-gray-500"> =&gt; &#123;</span><br/>

    &nbsp;&nbsp;<span className="text-orange-600">event</span>.
    <span className="text-blue-600">dataTransfer</span>.
    <span className="text-blue-600">getData</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"text"</span>
    <span className="text-gray-500">);</span><br/>

    &nbsp;&nbsp;<span className="text-gray-700">const</span>
    <span className="text-blue-600"> id </span>=
    <span className="text-orange-600">event</span>.
    <span className="text-blue-600">dataTransfer</span>.
    <span className="text-blue-600">getData</span>
    <span className="text-gray-500">(</span>
    <span className="text-green-600">"text"</span>
    <span className="text-gray-500">);</span><br/>

    &nbsp;&nbsp;<span className="text-gray-700">const</span>
    <span className="text-blue-600"> draggedElement </span>=
    <span className="text-gray-700">document</span>.
    <span className="text-blue-600">getElementById</span>
    <span className="text-gray-500">(</span>
    <span className="text-blue-600">id</span>
    <span className="text-gray-500">);</span><br/>

    &nbsp;&nbsp;<span className="text-orange-600">event</span>.
    <span className="text-blue-600">target</span>.
    <span className="text-blue-600">appendChild</span>
    <span className="text-gray-500">(</span>
    <span className="text-blue-600">draggedElement</span>
    <span className="text-gray-500">);</span><br/>

    <span className="text-gray-500">&#125;);</span>
  </code>
</pre>
      </div>

      {/* Note */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Important Notes</h3>
        <ul className="list-[square] list-inside text-gray-700 space-y-1">
          <li>Draggable elements need <code>draggable="true"</code> to work.</li>
          <li>Always call <code>e.preventDefault()</code> in <code>onDragOver</code> to allow dropping.</li>
          <li>You can style the drag effect using CSS or custom JS animations.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLDragAndDrop;