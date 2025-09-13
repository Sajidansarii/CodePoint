import React, { useState } from "react";

const JSAJAXASPApp = () => {
  const [response, setResponse] = useState("Type something to search...");

  // ✅ AJAX request to an ASP application
  const searchData = (query) => {
    if (!query) {
      setResponse("Please type a keyword...");
      return;
    }

    const xhr = new XMLHttpRequest();
    // Example ASP file that searches data
    xhr.open("GET", `https:www.w3schools.com/js/demo_ajax_database.asp?query=${query}`, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        setResponse(xhr.responseText); // Show ASP response
      } else {
        setResponse( `Error: ${xhr.status} - ${xhr.statusText}`);
      }
    };

    xhr.onerror = () => {
      setResponse("⚠ Network error contacting ASP server");
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        AJAX <span className="text-green-600">Applications with ASP</span>
      </h1>

      <p className="text-gray-700">
        AJAX allows JavaScript to interact with <strong>ASP scripts</strong> on the server. 
        This makes real-world applications possible, such as <em>live search</em>, 
        <em>dynamic content loading</em>, and <em>form validation</em> without reloading the page.
      </p>

      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => searchData(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800 overflow-x-auto">
        {response}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">JavaScript Code:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const xhr = new XMLHttpRequest();
xhr.open("GET", "search.asp?query=keyword", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText); // Results from ASP
  }
};

xhr.send();`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">ASP Code (search.asp):</h2>
      <pre className="bg-gray-900 text-yellow-300 p-4 rounded-lg overflow-x-auto">
{`<%
  Dim query, conn, rs, sql
  query = Request.QueryString("query")

  Set conn = Server.CreateObject("ADODB.Connection")
  conn.Open "Provider=SQLOLEDB;Data Source=SERVER;Initial Catalog=DB;User Id=sa;Password=yourpassword;"

  sql = "SELECT name FROM users WHERE name LIKE '%" & query & "%'"
  Set rs = conn.Execute(sql)

  Do Until rs.EOF
    Response.Write(rs("name") & "<br>")
    rs.MoveNext
  Loop

  rs.Close
  conn.Close
%>`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>JavaScript</strong> captures input from the user and sends it to an ASP script.</li>
        <li><strong>ASP</strong> queries the database (like SQL Server) using the provided keyword.</li>
        <li>Results are returned dynamically and displayed without refreshing the page.</li>
        <li>This technique powers <strong>AJAX Applications</strong> such as live search, auto-suggestions, and filtering.</li>
      </ul>
    </div>
  );
};

export default JSAJAXASPApp;