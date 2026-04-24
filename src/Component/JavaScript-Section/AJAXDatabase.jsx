import React, { useState } from "react";

const JSAJAXDatabase = () => {
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX with Database in JavaScript</h1>

      <p>
        AJAX allows JavaScript to send a request to the server, where a backend script 
        (like <strong>PHP</strong> or <strong>ASP</strong>) communicates with a 
        <span className="text-red-400"> database</span> (like MySQL) and sends the result back without reloading 
        the page.
      </p>

      <p className="mt-5">The onchange event triggers the showCustomer() function when a user selects a customer from the dropdown.</p>
     
     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">showCustomer</h1>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">function</span> showCustomer(str) {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-red-500">if</span> (str == <span className="text-green-700">""</span>) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById(
    <span className="text-green-700">"txtHint"</span>
    ).innerHTML = <span className="text-green-700">""</span>;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span>;
    <br />

    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;<span className="text-red-500">const</span> xhttp = new XMLHttpRequest();
    <br />

    &nbsp;&nbsp;xhttp.onload = function() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById(
    <span className="text-green-700">"txtHint"</span>
    ).innerHTML = this.responseText;
    <br />

    &nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"getcustomer.php?q="</span> + str
    );
    <br />

    &nbsp;&nbsp;xhttp.send();
    <br />

    {"}"}
  </code>
</pre>

     <p className="mt-10">Here’s what the <span className="text-red-400">showCustomer()</span> function does:</p>
     <ul className="list-[square] list-inside mt-5 space-y-1">
      <li>Check if a customer is selected</li>
      <li>Create an XMLHttpRequest object</li>
      <li>Create the function to be executed when the server response is ready</li>
      <li>Send the request off to a file on the server</li>
      <li>Notice that a parameter (q) is added to the URL (with the content of the dropdown list)</li>
     </ul>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The AJAX Server Page</h1>
    <p>The JavaScript above calls a server page named <span className="text-red-400">getcustomer.php</span>, which executes a database query and returns the result in an HTML table.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;?php</span>
    <br />

    $mysqli = new mysqli(
    <span className="text-green-700">"servername"</span>,
    <span className="text-green-700">"username"</span>,
    <span className="text-green-700">"password"</span>,
    <span className="text-green-700">"dbname"</span>
    );
    <br />

    <span className="text-red-500">if</span> ($mysqli-&gt;connect_error) {"{"}
    <br />

    &nbsp;&nbsp;exit(<span className="text-green-700">'Could not connect'</span>);
    <br />

    {"}"}

    <br /><br />

    $sql = <span className="text-green-700">"SELECT customerid, companyname, contactname, address, city, postalcode, country FROM customers WHERE customerid = ?"</span>;
    <br /><br />

    $stmt = $mysqli-&gt;prepare($sql);
    <br />
    $stmt-&gt;bind_param(<span className="text-green-700">"s"</span>, $_GET[<span className="text-green-700">'q'</span>]);
    <br />
    $stmt-&gt;execute();
    <br />
    $stmt-&gt;store_result();
    <br />
    $stmt-&gt;bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
    <br />
    $stmt-&gt;fetch();
    <br />
    $stmt-&gt;close();

    <br /><br />

    echo <span className="text-green-700">"&lt;table&gt;"</span>;
    <br />
    echo <span className="text-green-700">"&lt;tr&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;CustomerID&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $cid . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;CompanyName&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $cname . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;ContactName&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $name . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;Address&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $adr . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;City&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $city . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;PostalCode&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $pcode . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;th&gt;Country&lt;/th&gt;"</span>;
    echo <span className="text-green-700">"&lt;td&gt;"</span> . $country . <span className="text-green-700">"&lt;/td&gt;"</span>;
    <br />

    echo <span className="text-green-700">"&lt;/tr&gt;"</span>;
    echo <span className="text-green-700">"&lt;/table&gt;"</span>;

    <br />

    <span className="text-blue-600">?&gt;</span>
  </code>
</pre>

    </div>
  );
};

export default JSAJAXDatabase;