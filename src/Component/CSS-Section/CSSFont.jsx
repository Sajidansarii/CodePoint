export default function CssFonts() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Fonts</h1>
      <p className="mb-4">
        Fonts in CSS define how text appears on a webpage. You can control font
        family, size, weight, style, and line spacing using different CSS font
        properties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Common Font Properties</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><code>font-family</code> – Defines the font style.</li>
        <li><code>font-size</code> – Defines the text size.</li>
        <li><code>font-weight</code> – Defines thickness (normal, bold).</li>
        <li><code>font-style</code> – Normal, italic, oblique.</li>
        <li><code>line-height</code> – Spacing between lines.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">p</span> <span>{'{'}</span><br />

    <span className="text-red-500">font-family</span>
    <span>: </span>
    <span className="text-green-700">"Arial", sans-serif</span>
    <span>;</span><br />

    <span className="text-red-500">font-size</span>
    <span>: </span>
    <span className="text-green-700">18px</span>
    <span>;</span><br />

    <span className="text-red-500">font-weight</span>
    <span>: </span>
    <span className="text-green-700">bold</span>
    <span>;</span><br />

    <span className="text-red-500">font-style</span>
    <span>: </span>
    <span className="text-green-700">italic</span>
    <span>;</span><br />

    <span className="text-red-500">line-height</span>
    <span>: </span>
    <span className="text-green-700">1.6</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Google Fonts Example</h2>
      <p className="mb-2">You can import custom fonts from Google Fonts:</p>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">&lt;link</span>
    <span className="text-red-500"> href</span>=<span className="text-green-700">"https://fonts.googleapis.com/css2?family=Poppins&display=swap"</span>
    <span className="text-red-500"> rel</span>=<span className="text-green-700">"stylesheet"</span>
    <span className="text-blue-500">&gt;</span>
    <br /><br />

    <span className="text-blue-500">body</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-family</span>: <span className="text-green-700">"Poppins", sans-serif</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>
    </div>
  );
}