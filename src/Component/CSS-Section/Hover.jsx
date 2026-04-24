export default function CssHover() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Hover</h1>
      <p className="mb-4">
        The <code>:hover</code> selector is used to apply styles when the user
        places their mouse over an element.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">a</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">none</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">black</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">a:hover</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">white</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background-color</span>: <span className="text-green-700">navy</span>;<br />
    <span>{'}'}</span>
  </code>
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