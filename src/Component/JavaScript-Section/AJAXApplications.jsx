import React, { useState } from "react";

const JSAJAXASPApp = () => {
  
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX Applications with ASP</h1>

      <p>
        AJAX allows JavaScript to interact with <span className="text-red-400">ASP scripts</span> on the server. 
        This makes real-world applications possible, such as <em>live search</em>, 
        <em>dynamic content loading</em>, and <em>form validation</em> without reloading the page.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Display XML Data in an HTML Table</h1>
      <p>This example iterates over each <span className="text-red-400">{'<CD>'}</span> element and shows the <span className="text-red-400">{'<ARTIST>'}</span> and <span className="text-red-400">{'<TITLE>'}</span> values in an HTML table.</p>
       <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`<table id="demo"></table>

<script>
function loadXMLDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const xmlDoc = xhttp.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");
    myFunction(cd);
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}

function myFunction(cd) {
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) {
    table += "<tr><td>" +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
</script>

</body>
</html>`}
        </code>
      </pre>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Display the First CD in an HTML div Element</h1>
      <p>This example calls a function to display the first <span className="text-red-400">{'<CD>'}</span> element inside the HTML element with id="showCD".</p>
      <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = xhttp.responseXML;
  const cd = xmlDoc.getElementsByTagName("CD");
  myFunction(cd, 0);
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function myFunction(cd, i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " +
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}`}
        </code>
      </pre>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb3">Navigate Between the CDs</h1>
      <p className="mt-3">Create <span className="text-red-400">next()</span> and <span className="text-red-400">previous()</span> functions to navigate between the CDs in the example.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`function next() {
  // display the next CD, unless you are on the last CD
  if (i < len-1) {
    i++;
    displayCD(i);
  }
}

function previous() {
  // display the previous CD, unless you are on the first CD
  if (i > 0) {
    i--;
    displayCD(i);
  }
}`}
        </code>
      </pre>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Show Album Information When Clicking On a CD</h1>
      <p>The last example demonstrates how to display album information when a user clicks on a CD.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`function displayCD(i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " +
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}`}
        </code>
      </pre>


    </div>
  );
};

export default JSAJAXASPApp;