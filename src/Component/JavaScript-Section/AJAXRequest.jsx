import React, { useState } from "react";

const JSAJAXRequest = () => {
  const data = [
    {Method:'open(method, url, async)', Description:'Specifies the type of request\nmethod: the type of request: GET or POST\nurl: the server (file) location\nasync: true (asynchronous) or false (synchronous)'},
    {Method:'send()', Description:'Sends the request to the server (used for GET)'},
    {Method:'send(string)', Description:'Sends the request to the server (used for POST)'},
  ]; 

  const data1 = [
    {Method:'setRequestHeader(header, value)', Description:'Adds HTTP headers to the request\nheader: specifies the header name\nvalue: specifies the header value'},
  ];
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX Request in JavaScript</h1>

      <p>
        An <span className="text-red-400">AJAX Request</span> is made using{" "}
        <code>XMLHttpRequest</code> to communicate with a server asynchronously,
        without refreshing the page. This is the foundation of AJAX.
      </p>

      <h1 className="text-gray-800 text-2xl font-semibold mt-10 mb-3">Send a Request To a Server</h1>
      <p>To send a request to a server, we use the open() and send() methods of the <span className="text-red-400">XMLHttpRequest</span> object:</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"ajax_info.txt"</span>,
    true
    );
    <br />
    xhttp.send();
  </code>
</pre>

      <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The url - A File On a Server</h1>
     <p>The <span className="text-red-400">url</span> parameter of the <span className="text-red-400">open()</span> method specifies the address of a file on the server.</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"ajax_test.asp"</span>,
    true
    );
  </code>
</pre>

     <p className="mt-5">The file can be any type, such as .txt, .xml, or server-side scripts like .asp and .php, which can perform server actions before sending a response.</p>
     

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Asynchronous - True or False?</h1>
    <p>Server requests should be sent asynchronously by setting the async parameter of the <span className="text-red-400">open()</span> method to <span className="text-red-400">true</span>.</p>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"ajax_test.asp"</span>,
    true
    );
  </code>
</pre>

    <p className="mt-5">Sending requests asynchronously allows JavaScript to continue running without waiting for a server response, and it can:</p>
    <ul className="list-[square] list-inside mt-5">
      <li>execute other scripts while waiting for server response</li>
      <li>deal with the response after the response is ready</li>
    </ul>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">GET or POST?</h1>
   <p><span className="text-red-400">GET</span> is simpler and faster than <span className="text-red-400">POST</span> and works in most situations. However, POST should always be used when:</p>
   <ul className="list-[square] list-inside mt-5 space-y-1">
    <li>A cached file is not an option (update a file or database on the server).</li>
    <li>Sending a large amount of data to the server (POST has no size limitations).</li>
    <li>Sending user input (which can contain unknown characters), POST is more robust and secure than GET.</li>
   </ul>

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">GET Requests</h1>
    <p>A simple GET request:</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"demo_get.asp"</span>
    );
    <br />
    xhttp.send();
  </code>
</pre>

    <p className="mt-5">The example above can sometimes return cached data. Appending a unique ID to the URL ensures fresh results.</p>
    <h2 className="text-gray-800 text-2xl font-semibold mt-5">Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"demo_get.asp?t="</span> + Math.random()
    );
    <br />
    xhttp.send();
  </code>
</pre>

    <p className="mt-5">When using the GET method, attach the information directly to the URL.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"demo_get2.asp?fname=Henry&amp;lname=Ford"</span>
    );
    <br />
    xhttp.send();
  </code>
</pre>

    <p className="mt-5">Details on the server’s handling of input and its responses to requests are provided in a subsequent chapter.</p>
   

   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">POST Requests</h1>
   <p>A simple POST request:</p>
   <h2 className="text-2xl font-semibold mt-5">Example</h2>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"POST"</span>,
    <span className="text-green-700">"demo_post.asp"</span>
    );
    <br />
    xhttp.send();
  </code>
</pre>

   <p className="mt-5">When posting data as in an HTML form, attach an HTTP header with <span className="text-red-400">setRequestHeader()</span> and provide the data in <span className="text-red-400">send()</span>.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"POST"</span>,
    <span className="text-green-700">"ajax_test.asp"</span>
    );
    <br />

    xhttp.setRequestHeader(
    <span className="text-green-700">"Content-type"</span>,
    <span className="text-green-700">"application/x-www-form-urlencoded"</span>
    );
    <br />

    xhttp.send(
    <span className="text-green-700">"fname=Henry&amp;lname=Ford"</span>
    );
  </code>
</pre>


 <table className="min-w-full border border-gray-300 text-gray-700 text-sm text-left mt-5">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Method</th>
          <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Description</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((row,index)=>(
          <tr className="cursor-text hover:bg-gray-100">
            <td className="px-4 py-2 border-b border-gray-200">{row.Method}</td>
            <td className="px-4 py-2 border-b border-gray-200 whitespace-pre-line">{row.Description}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Synchronous Request</h1>
     <p>To perform a synchronous request, set the third parameter of the <span className="text-red-400">open()</span> method to <span className="text-red-400">false</span>.</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"ajax_info.txt"</span>,
    false
    );
  </code>
</pre>

      <p className="mt-5">Occasionally, <span className="text-red-400">async = false</span> is used for quick tests. Older JavaScript code also contains synchronous requests. Since the code pauses until the server responds, an <span className="text-red-400">onreadystatechange</span> function isn’t needed.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    xhttp.open(
    <span className="text-green-700">"GET"</span>,
    <span className="text-green-700">"ajax_info.txt"</span>,
    false
    );
    <br />

    xhttp.send();
    <br />

    document.getElementById(
    <span className="text-green-700">"demo"</span>
    ).innerHTML = xhttp.responseText;
  </code>
</pre>

    </div>
  );
};

export default JSAJAXRequest;