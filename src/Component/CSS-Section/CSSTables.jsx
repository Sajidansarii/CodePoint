export default function CssTables() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">CSS Tables</h1>
      <p className="mb-4">
        Tables are styled using properties like <code>border-collapse</code>,{" "}
        <code>padding</code>, and <code>nth-child()</code> for zebra-striping.
      </p>

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
