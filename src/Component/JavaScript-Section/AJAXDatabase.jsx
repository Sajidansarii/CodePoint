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
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`function showCustomer(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getcustomer.php?q="+str);
  xhttp.send();
}`}
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
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`<?php
$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>PostalCode</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";
?>
`}
      </code>
    </pre>





















    </div>
  );
};

export default JSAJAXDatabase;