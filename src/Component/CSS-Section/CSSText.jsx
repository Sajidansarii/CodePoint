export default function CssText() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Text</h1>
      <p className="mb-4">
        CSS provides a variety of <b>text properties</b> that let you control 
        alignment, decoration, spacing, capitalization, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5">
  <code>
    <span className="text-blue-600">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-decoration</span>: <span className="text-green-700">underline</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-transform</span>: <span className="text-green-700">capitalize</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">letter-spacing</span>: <span className="text-green-700">2px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">word-spacing</span>: <span className="text-green-700">10px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">line-height</span>: <span className="text-green-700">1.8</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-4">
        <p className="text-blue-500 text-center underline capitalize tracking-wider">
          this is an example of styled text
        </p>
        <p className="text-red-500 line-through text-right">
          This text is right aligned and struck-through
        </p>
        <p className="text-green-600 uppercase whitespace-nowrap">
          this text is uppercase and nowrap
        </p>
      </div>
    </div>
  );
}