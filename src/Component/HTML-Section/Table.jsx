const HTMLTables = () => {
  return (
    <div className="p-4 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center sm:text-left">
        HTML Tables
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        HTML tables are used to display data in rows and columns. The basic
        table structure uses the <code>&lt;table&gt;</code> element along with
        rows (<code>&lt;tr&gt;</code>), header cells (
        <code>&lt;th&gt;</code>), and data cells (<code>&lt;td&gt;</code>).
      </p>

      {/* Basic Syntax */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Basic Table Structure
        </h2>
        <pre className="bg-gray-100 p-3 rounded mb-2 overflow-x-auto text-sm">
          <code>{`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
  </tr>
</table>`}</code>
        </pre>
        <p className="text-gray-700">
          <code>&lt;th&gt;</code> defines header cells, and{" "}
          <code>&lt;td&gt;</code> defines data cells.
        </p>
      </section>

      {/* Table Sections */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Table Sections
        </h2>
        <p className="text-gray-700 mb-2">
          For better structure, especially in large tables, use:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <code>&lt;thead&gt;</code> — Groups the header rows.
          </li>
          <li>
            <code>&lt;tbody&gt;</code> — Groups the main body rows.
          </li>
          <li>
            <code>&lt;tfoot&gt;</code> — Groups the footer rows.
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm">
          <code>{`<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.50</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$1.50</td>
    </tr>
  </tfoot>
</table>`}</code>
        </pre>
      </section>

      {/* Table Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Common Table Attributes
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <code>border</code> — Adds border around table cells (use CSS for
            styling in modern HTML).
          </li>
          <li>
            <code>cellpadding</code> — Space between cell content and border.
          </li>
          <li>
            <code>cellspacing</code> — Space between cells.
          </li>
          <li>
            <code>colspan</code> — Makes a cell span multiple columns.
          </li>
          <li>
            <code>rowspan</code> — Makes a cell span multiple rows.
          </li>
        </ul>
      </section>

      {/* Example with Colspan & Rowspan */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Colspan & Rowspan Example
        </h2>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
          <code>{`<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <th colspan="2">Scores</th>
  </tr>
  <tr>
    <th>Math</th>
    <th>Science</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>90</td>
    <td>85</td>
  </tr>
</table>`}</code>
        </pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          Accessibility Tips
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            Use <code>&lt;th scope="col"&gt;</code> or{" "}
            <code>&lt;th scope="row"&gt;</code> to help screen readers.
          </li>
          <li>
            Include a <code>&lt;caption&gt;</code> to describe the table’s
            purpose.
          </li>
          <li>
            Avoid using tables for layout—use them only for tabular data.
          </li>
        </ul>
      </section>

      {/* Quick Recap */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Recap:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          <li>
            <code>&lt;table&gt;</code> contains rows (<code>&lt;tr&gt;</code>)
            with header cells (<code>&lt;th&gt;</code>) and data cells (
            <code>&lt;td&gt;</code>).
          </li>
          <li>
            Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
            <code>&lt;tfoot&gt;</code> for structure.
          </li>
          <li>
            Use <code>colspan</code> and <code>rowspan</code> to merge cells.
          </li>
          <li>
            Add captions and scope attributes for accessibility.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLTables;