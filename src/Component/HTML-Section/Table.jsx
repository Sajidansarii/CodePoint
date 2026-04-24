const HTMLTables = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-3">
        HTML Tables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed mb-3">
        HTML tables are used to display data in rows and columns. The basic
        table structure uses the <code>&lt;table&gt;</code> element along with
        rows (<code>&lt;tr&gt;</code>), header cells (
        <code>&lt;th&gt;</code>), and data cells (<code>&lt;td&gt;</code>).
      </p>

      {/* Basic Syntax */}
      <section className="mb-5">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Basic Table Structure
        </h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">table</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    Name
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    Age
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    Alice
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    25
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    Bob
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    30
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">table</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
        <p className="leading-relaxed">
          <code>&lt;th&gt;</code> defines header cells, and{" "}
          <code>&lt;td&gt;</code> defines data cells.
        </p>
      </section>

      {/* Table Sections */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Table Sections
        </h2>
        <p className="leading-relaxed mb-3">
          For better structure, especially in large tables, use:
        </p>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">table</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">thead</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    Product
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    Price
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">thead</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tbody</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    Apple
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    $1
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    Banana
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    $0.50
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tbod</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tfoot</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td&gt;</span>
    <span className="text-gray-500">&gt;</span>
    Total
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    $1.50
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tfoot</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">table</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre></section>

      {/* Table Attributes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Common Table Attributes
        </h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Colspan & Rowspan Example
        </h2>
       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3 text-sm">
  <code>
    <span className="text-blue-500">&lt;table</span>
    <span className="text-red-500"> border</span>=
    <span className="text-green-600">"1"</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">th</span>
    <span className="text-red-500"> rowspan</span>=
    <span className="text-green-600">"2"</span>
    <span className="text-gray-500">&gt;</span>
    Name
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">th</span>
    <span className="text-red-500"> colspan</span>=
    <span className="text-green-600">"2"</span>
    <span className="text-gray-500">&gt;</span>
    Scores
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-blue-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    Math
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    Science
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">th</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/><br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    Alice
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    90
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    85
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">td</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">tr</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">table</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      </section>

      {/* Accessibility */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Accessibility Tips
        </h2>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed">
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
        <h3 className="text-lg font-semibold text-blue-700 mb-3">Quick Recap:</h3>
        <ul className="list-[square] list-inside space-y-1 leading-relaxed text-sm sm:text-base">
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