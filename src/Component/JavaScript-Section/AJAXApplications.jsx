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
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">&lt;table</span>{" "}
    <span className="text-red-500">id</span>=
    <span className="text-green-700">"demo"</span>
    <span className="text-red-500">&gt;&lt;/table&gt;</span>

    <br /><br />

    <span className="text-blue-600">&lt;script&gt;</span>
    <br />

    <span className="text-red-500">function</span>{" "}
    loadXMLDoc() {"{"}
    <br />
    &nbsp;&nbsp;<span className="text-red-500">const</span> xhttp = new XMLHttpRequest();
    <br />
    &nbsp;&nbsp;xhttp.onload = function() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">const</span> xmlDoc = xhttp.responseXML;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">const</span> cd = xmlDoc.getElementsByTagName("CD");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;myFunction(cd);
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;xhttp.open("GET", "cd_catalog.xml");
    <br />
    &nbsp;&nbsp;xhttp.send();
    <br />
    {"}"}

    <br /><br />

    <span className="text-red-500">function</span> myFunction(cd) {"{"}
    <br />
    &nbsp;&nbsp;let table = "&lt;tr&gt;&lt;th&gt;Artist&lt;/th&gt;&lt;th&gt;Title&lt;/th&gt;&lt;/tr&gt;";
    <br />

    &nbsp;&nbsp;<span className="text-red-500">for</span> (let i = 0; i &lt; cd.length; i++) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;table += "&lt;tr&gt;&lt;td&gt;" +
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;"&lt;/td&gt;&lt;td&gt;" +
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;"&lt;/td&gt;&lt;/tr&gt;";
    <br />

    &nbsp;&nbsp;{"}"}
    <br />

    &nbsp;&nbsp;document.getElementById("demo").innerHTML = table;
    <br />
    {"}"}
    <br />

    <span className="text-blue-600">&lt;/script&gt;</span>

    <br /><br />

    <span className="text-blue-600">&lt;/body&gt;</span>
    <br />
    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Display the First CD in an HTML div Element</h1>
      <p>This example calls a function to display the first <span className="text-red-400">{'<CD>'}</span> element inside the HTML element with id="showCD".</p>
      <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">const</span> xhttp = new XMLHttpRequest();
    <br />

    xhttp.onload = function() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-red-500">const</span> xmlDoc = xhttp.responseXML;
    <br />

    &nbsp;&nbsp;<span className="text-red-500">const</span> cd = xmlDoc.getElementsByTagName("CD");
    <br />

    &nbsp;&nbsp;myFunction(cd, 0);
    <br />

    {"}"}
    <br /><br />

    xhttp.open("GET", "cd_catalog.xml");
    <br />
    xhttp.send();
    <br /><br />

    <span className="text-red-500">function</span> myFunction(cd, i) {"{"}
    <br />

    &nbsp;&nbsp;document.getElementById("showCD").innerHTML =
    <br />

    &nbsp;&nbsp;"Artist: " +
    <br />

    &nbsp;&nbsp;cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    <br />

    &nbsp;&nbsp;"&lt;br&gt;Title: " +
    <br />

    &nbsp;&nbsp;cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    <br />

    &nbsp;&nbsp;"&lt;br&gt;Year: " +
    <br />

    &nbsp;&nbsp;cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    <br />

    {"}"}
  </code>
</pre>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb3">Navigate Between the CDs</h1>
      <p className="mt-3">Create <span className="text-red-400">next()</span> and <span className="text-red-400">previous()</span> functions to navigate between the CDs in the example.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">function</span> next() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-gray-500">// display the next CD, unless you are on the last CD</span>
    <br />

    &nbsp;&nbsp;<span className="text-red-500">if</span> (i &lt; len - 1) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;i++;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;displayCD(i);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />

    {"}"}

    <br /><br />

    <span className="text-red-500">function</span> previous() {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-gray-500">// display the previous CD, unless you are on the first CD</span>
    <br />

    &nbsp;&nbsp;<span className="text-red-500">if</span> (i &gt; 0) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;i--;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;displayCD(i);
    <br />

    &nbsp;&nbsp;{"}"}
    <br />

    {"}"}
  </code>
</pre>


      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Show Album Information When Clicking On a CD</h1>
      <p>The last example demonstrates how to display album information when a user clicks on a CD.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">function</span> displayCD(i) {"{"}
    <br />

    &nbsp;&nbsp;document.getElementById("showCD").innerHTML =
    <br />

    &nbsp;&nbsp;"Artist: " +
    <br />

    &nbsp;&nbsp;cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    <br />

    &nbsp;&nbsp;"&lt;br&gt;Title: " +
    <br />

    &nbsp;&nbsp;cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    <br />

    &nbsp;&nbsp;"&lt;br&gt;Year: " +
    <br />

    &nbsp;&nbsp;cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    <br />

    {"}"}
  </code>
</pre>

    </div>
  );
};

export default JSAJAXASPApp;