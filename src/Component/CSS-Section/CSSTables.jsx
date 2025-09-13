export default function CssTables() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Tables</h1>
      <p className="mb-4">
        Tables are styled using properties like <code>border-collapse</code>,{" "}
        <code>padding</code>, and <code>nth-child()</code> for zebra-striping.
      </p>

      <p className="mb-5">Styling tables in a webpage involves using CSS properties to customize the appearance of tables. CSS properties such as border-collapse, border-spacing, and caption-side can be applied to tables to control the borders, spacing, and alignment of the table and its cells.</p>
      
      <p className="mb-5">This chapter discusses how to set different properties of an HTML table using CSS.</p>
      
      <h1 className="text-2xl">CSS Table Border Styling</h1>
      <p>To style table borders, we use CSS properties like border and border-radius. You can set the border's width, color, and style with border property on the table, rows, or individual cells.</p>
      <ul className="list-disc ml-5">
        <li><span className="text-red-400">border</span>: CSS border property sets the width, style, and color of all four sides of the table border (e.g., border: 1px solid black;).</li>
        <li><span className="text-red-400">border-radius</span>: CSS border-radius property rounds the corners of the table border (e.g., border-radius: 5px|50%).</li>
      </ul>
      <p className="mt-10 text-xl">Example</p>
      <p>In this example, we will create a table using CSS property.</p>

      <div className="bg-gray-200 p-4 rounded-lg mt-5 mb-10">
        <pre>
          <code>
            {`.table-container {
  overflow-x: auto;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
}

.styled-table th,
.styled-table td {
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem; 
  text-align: left;
}

.table-header {
  background-color: #4f46e5; 
  color: white;
}

.table-row-alt {
  background-color: #f9fafb; 
}
`}
          </code>
        </pre>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">John Doe</td>
              <td className="border border-gray-300 px-4 py-2">Developer</td>
              <td className="border border-gray-300 px-4 py-2">USA</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
              <td className="border border-gray-300 px-4 py-2">Designer</td>
              <td className="border border-gray-300 px-4 py-2">UK</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Ali Khan</td>
              <td className="border border-gray-300 px-4 py-2">Manager</td>
              <td className="border border-gray-300 px-4 py-2">India</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
