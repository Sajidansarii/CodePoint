export default function CssPosition() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-500">CSS Position</h1>
      <p>
        The <code>position</code> property specifies how an element is placed on
        the page. It works with <code>top</code>, <code>left</code>,{" "}
        <code>right</code>, and <code>bottom</code>.
      </p>

      {/* Static */}
      <div className="bg-blue-200 p-4 w-4/5">Static (default position)</div>

      {/* Relative */}
      <div className="relative left-10 top-4 w-4/5 bg-green-300 p-4">
        Relative (moved from normal position)
      </div>

      {/* Absolute */}
      <div className="relative border border-gray-500 h-40">
        <div className="absolute top-4 right-4 bg-red-300 p-4">
          Absolute (inside container)
        </div>
      </div>

      {/* Fixed */}
      <div className="fixed bottom-4 right-4 bg-purple-500 text-white p-4 rounded-lg shadow-md">
        Fixed (sticks to viewport)
      </div>

      {/* Sticky */}
      <div className="h-48 overflow-y-scroll border p-2">
        <div className="sticky top-0 bg-orange-400 p-2">
          Sticky (sticks while scrolling)
        </div>
        <p className="mt-4">
          Scroll down to see how sticky works. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec vehicula, justo nec varius
          imperdiet, purus lacus tempor elit, ut lacinia sem massa eu turpis.
          Morbi eu risus eget massa viverra aliquam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          More content... More content... More content... More content... More
          content...
        </p>
      </div>
    </div>
  );
}