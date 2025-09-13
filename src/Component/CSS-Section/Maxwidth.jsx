export default function CssMaxWidth() {
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS max-width</h1>
      <p className="mb-4">
        The <code>max-width</code> property defines the maximum width of an
        element. It is useful for making layouts responsive.
      </p>

      {/* Fixed Width */}
      <h2 className="text-xl font-semibold mt-4">Without max-width</h2>
      <div className="w-[600px] bg-red-400 text-white p-4 mb-4">
        This box is fixed at 600px wide.
      </div>

      {/* With Max Width */}
      <h2 className="text-xl font-semibold mt-4">With max-width</h2>
      <div className="max-w-[600px] bg-teal-500 text-white p-4 mb-4">
        This box has a max-width of 600px and will shrink on smaller screens.
      </div>

      {/* Responsive Image */}
      <h2 className="text-xl font-semibold mt-4">Responsive Image</h2>
      <img
        src="https://placehold.co/800x400"
        alt="Example"
        className="max-w-full h-auto border rounded-lg shadow-md"
      />
    </div>
  );
}