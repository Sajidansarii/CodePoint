export default function CssLists() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Lists</h1>
      <p className="mb-4">
        Lists can be styled in CSS using <code>list-style-type</code>,{" "}
        <code>list-style-position</code>, and <code>list-style-image</code>.
      </p>
      <p className="text-xl">In HTML, there are two main types of lists:</p>
      <p>{'<ul>'} - unordered lists (list items are marked with bullets)</p>
      <p>{'<ol>'} - ordered lists (list items are marked with numbers or letters)</p>

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

      <h2 className="text-2xl mt-10 mb-2">CSS list-style properties </h2>
      <ul>
        <li>lsit-style-type</li>
        <li>lsit-style-position</li>
        <li>lsit-style-Image</li>
      </ul>

      <h2 className="text-xl mt-10">Unordered list values:</h2>
      <ul>
        <li>disc</li>
        <li>None</li>
        <li>Circle</li>
        <li>Square</li>
      </ul>

        <h2 className="text-xl mt-10">Ordered list values:</h2>
      <ul>
        <li>upper-Alpha</li>
        <li>upper-roman</li>
        <li>lower-roman</li>
        <li>lower-Aplha</li>
        <li>decimal</li>
        <li></li>
      </ul>


      <div className="bg-gray-200 p-4 rounded-lg mt-12">
        <h2>Example:</h2>
        <pre className="mt-10">
          <code>
            {`             .ul{list-style-type:disc;}
             .red{background-color:red;}
             .blue{background-color:blue;}
             .orange{background-color:orange}
             
             
             .ol{list-style-type:decimal;}
             .red{background-color:red;}
             .blue{background-color:blue;}
             .orange{background-color:orange}`}
          </code>
        </pre>
      </div>




      <ul className="mt-10 list-disc">
        <li className="bg-red-500">Red</li>
        <li className="bg-blue-500">Blue</li>
        <li className="bg-orange-500">Orange</li>
      </ul>

      <ol className="mt-10 list-decimal">
        <li className="bg-red-500">Red</li>
        <li className="bg-blue-500">Blue</li>
        <li className="bg-orange-500">Orange</li>
      </ol>

    </div>
  );
}