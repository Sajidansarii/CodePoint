export default function CssDisplay() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">CSS Display</h1>
      <p className="mb-4">
        The <code>display</code> property defines how elements are displayed on
        the page. Common values include <code>block</code>, <code>inline</code>,{" "}
        <code>inline-block</code>, <code>flex</code>, and <code>none</code>.
      </p>

      {/* Block vs Inline */}
      <h2 className="text-xl font-semibold mt-4">Block vs Inline</h2>
      <p className="bg-blue-200 block my-1 p-2">Block Element 1</p>
      <p className="bg-blue-200 block my-1 p-2">Block Element 2</p>
      <span className="bg-green-200 inline-block mx-1 p-2">Inline 1</span>
      <span className="bg-green-200 inline-block mx-1 p-2">Inline 2</span>

      {/* Inline Block */}
      <h2 className="text-xl font-semibold mt-6">Inline-Block</h2>
      <div className="inline-block w-24 h-12 bg-orange-300 m-2 text-center">
        Box 1
      </div>
      <div className="inline-block w-24 h-12 bg-orange-300 m-2 text-center">
        Box 2
      </div>
      <div className="inline-block w-24 h-12 bg-orange-300 m-2 text-center">
        Box 3
      </div>

      {/* Display None */}
      <h2 className="text-xl font-semibold mt-6">Display None</h2>
      <p>This text is visible</p>
      <p className="hidden">This text is hidden</p>
    </div>
  );
}