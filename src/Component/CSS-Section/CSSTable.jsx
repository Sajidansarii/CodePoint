import React from "react";

const CssTable = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">CSS Tables</h1>

      {/* Intro */}
      <p className="text-gray-700">
        Tables ka use data ko rows aur columns ke form me organize karne ke liye
        hota hai. CSS ke through tables ko easily style aur customize kiya ja
        sakta hai jaise borders, spacing, background colors aur hover effects.
      </p>

      {/* Basic Table */}
      <h2 className="text-2xl font-semibold">1. Basic Table</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>USA</td>
  </tr>
  <tr>
    <td>Alice</td>
    <td>30</td>
    <td>UK</td>
  </tr>
</table>`}
      </pre>
      <p className="text-gray-700">
        Yahaan ek simple table hai jisme <code>&lt;tr&gt;</code> rows banata hai,
        <code>&lt;th&gt;</code> table headings ke liye hota hai aur{" "}
        <code>&lt;td&gt;</code> table data ke liye use hota hai.
      </p>

      {/* Table with CSS Styling */}
      <h2 className="text-2xl font-semibold">2. Styled Table</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  th {
    background-color: lightblue;
  }
  tr:hover {
    background-color: #f1f1f1;
  }
</style>

<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Phone</td>
    <td>$500</td>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$1000</td>
  </tr>
</table>`}
      </pre>
      <p className="text-gray-700">
        Is example me CSS use karke table ko style kiya gaya hai:
        <ul className="list-disc ml-6">
          <li><code>border-collapse</code> se double borders hat jaate hain.</li>
          <li><code>padding</code> se table cells ke andar spacing aati hai.</li>
          <li><code>tr:hover</code> row par hover karne par background color change karta hai.</li>
        </ul>
      </p>

      {/* Table with Zebra Stripes */}
      <h2 className="text-2xl font-semibold">3. Zebra Striped Table</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>

<table>
  <tr>
    <th>Language</th>
    <th>Creator</th>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>Brendan Eich</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>Guido van Rossum</td>
  </tr>
</table>`}
      </pre>
      <p className="text-gray-700">
        Yahaan <code>nth-child(even)</code> use karke alternate rows ka background
        change kiya gaya hai, jise <b>zebra striping</b> kehte hain.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold">Conclusion</h2>
      <p className="text-gray-700">
        CSS ke saath tables ko visually attractive aur readable banaya jaa sakta
        hai. Aap hover effects, zebra stripes aur custom borders ka use karke apne
        data tables ko professional look de sakte ho.
      </p>
    </div>
  );
};

export default CssTable;