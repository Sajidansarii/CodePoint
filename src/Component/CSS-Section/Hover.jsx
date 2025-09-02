export default function CssHover() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">CSS Hover</h1>
      <p className="mb-4">
        The <code>:hover</code> selector is used to apply styles when the user
        places their mouse over an element.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: white;
  background-color: navy;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-x-4 mt-4">
        <a
          href="#"
          className="px-4 py-2 rounded border border-gray-400 text-black hover:bg-blue-600 hover:text-white transition"
        >
          Hover Me
        </a>
        <button className="px-4 py-2 rounded bg-gray-300 hover:bg-green-500 hover:text-white transition">
          Hover Button
        </button>
        <img
          src="https://via.placeholder.com/100"
          alt="demo"
          className="inline-block mt-4 hover:scale-110 transition-transform duration-300 rounded-lg"
        />
      </div>
    </div>
  );
}