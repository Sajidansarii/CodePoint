export default function CssLists() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">CSS Lists</h1>
      <p className="mb-4">
        Lists can be styled in CSS using <code>list-style-type</code>,{" "}
        <code>list-style-position</code>, and <code>list-style-image</code>.
      </p>

      {/* Unordered List */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Unordered List</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      {/* Ordered List */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Ordered List</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
      </ol>

      {/* Custom Style */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Custom Style</h2>
      <ul className="list-[square] list-inside space-y-1">
        <li>React</li>
        <li>Tailwind</li>
        <li>Next.js</li>
      </ul>

      {/* No List Style */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">No List Style</h2>
      <ul className="list-none space-y-1">
        <li className="p-2 bg-indigo-100 rounded">Python</li>
        <li className="p-2 bg-indigo-200 rounded">Django</li>
        <li className="p-2 bg-indigo-300 rounded">Flask</li>
      </ul>
    </div>
  );
}