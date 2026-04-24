export default function CssBoxModel() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Box Model</h1>
      <p className="mb-4">
        The CSS Box Model treats every element on a web page like a box. In this model, each element is made up of four parts:
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">.box</span> <span>{'{'}</span><br />

    <span className="text-red-500">width</span>
    <span>: </span>
    <span className="text-green-700">200px</span>
    <span>;</span><br />

    <span className="text-red-500">height</span>
    <span>: </span>
    <span className="text-green-700">100px</span>
    <span>;</span><br />

    <span className="text-red-500">padding</span>
    <span>: </span>
    <span className="text-green-700">20px</span>
    <span>;</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">5px solid blue</span>
    <span>;</span><br />

    <span className="text-red-500">margin</span>
    <span>: </span>
    <span className="text-green-700">15px</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="flex justify-center mt-6">
        <div className="m-6 border-4 border-blue-500 p-6 bg-yellow-100">
          <div className="bg-white p-4">
            Content
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Box-Sizing</h2>
      <p className="mb-4">
        Use <code>box-sizing: border-box;</code> to include padding and border inside 
        the width and height. Tailwind provides <code>box-border</code> and 
        <code>box-content</code> utilities.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="w-40 h-20 p-6 border-4 border-green-600 box-content bg-gray-100 flex items-center justify-center">
          Content Box
        </div>
        <div className="w-40 h-20 p-6 border-4 border-red-600 box-border bg-gray-100 flex items-center justify-center">
          Border Box
        </div>
      </div>
    </div>
  );
}