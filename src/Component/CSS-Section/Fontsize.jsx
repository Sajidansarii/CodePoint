export default function CssFontSize() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Font Size</h1>
      <p className="mb-4">
        The <code>font-size</code> property defines the size of text. You can set it
        in pixels, em, rem, percentages, or viewport units to make text scalable
        and responsive.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p.small</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">12px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.medium</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">1.2em</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.large</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">150%</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p.responsive</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">3vw</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Demo</h2>
      <div className="space-y-2 p-4 border rounded-lg">
        <p className="text-[12px]">This is 12px (small text).</p>
        <p className="text-[1.2em]">This is 1.2em (medium text).</p>
        <p className="text-[150%]">This is 150% (large text).</p>
        <p className="text-[3vw]">This is responsive (3vw).</p>
      </div>
    </div>
  );
}