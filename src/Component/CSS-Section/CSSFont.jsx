export default function CssFonts() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">CSS Fonts</h1>
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
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`p {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  line-height: 1.6;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Google Fonts Example</h2>
      <p className="mb-2">You can import custom fonts from Google Fonts:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

body {
  font-family: "Poppins", sans-serif;
}`}</code>
      </pre>
    </div>
  );
}