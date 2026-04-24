import React, { useState } from "react";

const JSAJAXASP = () => {
 
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">AJAX with ASP in JavaScript</h1>

      <p>
        AJAX can be used with <span className="text-red-400">ASP</span> just like PHP. The JavaScript code
        sends a request to an ASP file, which processes it on the server and returns a
        response without reloading the page.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">AJAX ASP</h1>
      <p>The <span className="text-red-400">showHint()</span> function runs whenever the user presses a key in the input field, triggered by the onkeyup event.</p>
      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-red-500">&lt;p&gt;</span>Start typing a name in the input field below:
    <span className="text-red-500">&lt;/p&gt;</span>
    <br />

    <span className="text-red-500">&lt;p&gt;</span>
    Suggestions: <span className="text-red-500">&lt;span</span>{" "}
    <span className="text-red-500">id</span>=
    <span className="text-green-700">"txtHint"</span>
    <span className="text-red-500">&gt;&lt;/span&gt;</span>
    <span className="text-red-500">&lt;/p&gt;</span>

    <br /><br />

    <span className="text-red-500">&lt;form&gt;</span>
    <br />

    First name:{" "}
    <span className="text-red-500">&lt;input</span>{" "}
    <span className="text-red-500">type</span>=
    <span className="text-green-700">"text"</span>{" "}
    <span className="text-red-500">onkeyup</span>=
    <span className="text-green-700">"showHint(this.value)"</span>
    <span className="text-red-500"> /&gt;</span>
    <br />

    <span className="text-red-500">&lt;/form&gt;</span>

    <br /><br />

    <span className="text-blue-600">&lt;script&gt;</span>
    <br />

    <span className="text-red-500">function</span> showHint(str) {"{"}
    <br />

    &nbsp;&nbsp;<span className="text-red-500">if</span> (str.length == 0) {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById(
    <span className="text-green-700">"txtHint"</span>
    ).innerHTML = <span className="text-green-700">""</span>;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">return</span>;
    <br />

    &nbsp;&nbsp;{"}"} <span className="text-red-500">else</span> {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">const</span> xmlhttp = new XMLHttpRequest();
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;xmlhttp.onload = function() {"{"}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById(
    <span className="text-green-700">"txtHint"</span>
    ).innerHTML = this.responseText;
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />

    &nbsp;&nbsp;xmlhttp.open("GET", "gethint.asp?q=" + str);
    <br />

    &nbsp;&nbsp;xmlhttp.send();
    <br />

    &nbsp;&nbsp;{"}"}
    <br />

    {"}"}
    <br />

    <span className="text-blue-600">&lt;/script&gt;</span>
  </code>
</pre>

      <p className="mt-5 mb-3">Verify if the input field is blank <span className="text-red-400">(str.length == 0)</span>. If it is, erase the content of <span className="text-red-400">txtHint</span> and exit the function.</p>
      <p>When the input field has content, execute the following:</p>
      <ul className="list-[square] list-inside mt-5">
        <li>Create an XMLHttpRequest object</li>
        <li>Create the function to be executed when the server response is ready</li>
        <li>Send the request off to an ASP file (gethint.asp) on the server</li>
        <li>Notice that q parameter is added gethint.asp?q="+str</li>
        <li>The str variable holds the content of the input field</li>
      </ul>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The ASP File - "gethint.asp"</h1>
      <p>The ASP file queries an array of names and outputs the matching name(s) to the browser.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-green-700">&lt;%</span>
    <br />

    response.expires = -1
    <br />
    dim a(30)
    <br /><br />

    <span className="text-gray-500">'Fill up array with names</span>
    <br />

    a(1) = <span className="text-green-700">"Anna"</span>
    <br />
    a(2) = <span className="text-green-700">"Brittany"</span>
    <br />
    a(3) = <span className="text-green-700">"Cinderella"</span>
    <br />
    a(4) = <span className="text-green-700">"Diana"</span>
    <br />
    a(5) = <span className="text-green-700">"Eva"</span>
    <br />
    a(6) = <span className="text-green-700">"Fiona"</span>
    <br />
    a(7) = <span className="text-green-700">"Gunda"</span>
    <br />
    a(8) = <span className="text-green-700">"Hege"</span>
    <br />
    a(9) = <span className="text-green-700">"Inga"</span>
    <br />
    a(10) = <span className="text-green-700">"Johanna"</span>
    <br />
    a(11) = <span className="text-green-700">"Kitty"</span>
    <br />
    a(12) = <span className="text-green-700">"Linda"</span>
    <br />
    a(13) = <span className="text-green-700">"Nina"</span>
    <br />
    a(14) = <span className="text-green-700">"Ophelia"</span>
    <br />
    a(15) = <span className="text-green-700">"Petunia"</span>
    <br />
    a(16) = <span className="text-green-700">"Amanda"</span>
    <br />
    a(17) = <span className="text-green-700">"Raquel"</span>
    <br />
    a(18) = <span className="text-green-700">"Cindy"</span>
    <br />
    a(19) = <span className="text-green-700">"Doris"</span>
    <br />
    a(20) = <span className="text-green-700">"Eve"</span>
    <br />
    a(21) = <span className="text-green-700">"Evita"</span>
    <br />
    a(22) = <span className="text-green-700">"Sunniva"</span>
    <br />
    a(23) = <span className="text-green-700">"Tove"</span>
    <br />
    a(24) = <span className="text-green-700">"Unni"</span>
    <br />
    a(25) = <span className="text-green-700">"Violet"</span>
    <br />
    a(26) = <span className="text-green-700">"Liza"</span>
    <br />
    a(27) = <span className="text-green-700">"Elizabeth"</span>
    <br />
    a(28) = <span className="text-green-700">"Ellen"</span>
    <br />
    a(29) = <span className="text-green-700">"Wenche"</span>
    <br />
    a(30) = <span className="text-green-700">"Vicky"</span>

    <br /><br />

    <span className="text-gray-500">'get the q parameter from URL</span>
    <br />

    q = ucase(request.querystring(<span className="text-green-700">"q"</span>))
    <br /><br />

    <span className="text-gray-500">'lookup all hints from array if length of q&gt;0</span>
    <br />

    if len(q) &gt; 0 then
    <br />
    &nbsp;&nbsp;hint = <span className="text-green-700">""</span>
    <br />

    &nbsp;&nbsp;for i = 1 to 30
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;if q = ucase(mid(a(i), 1, len(q))) then
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if hint = <span className="text-green-700">""</span> then
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hint = a(i)
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hint = hint & <span className="text-green-700">" , "</span> & a(i)
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;end if
    <br />

    &nbsp;&nbsp;next
    <br />
    end if

    <br /><br />

    <span className="text-gray-500">'Output "no suggestion" if no hint were found</span>
    <br />

    if hint = <span className="text-green-700">""</span> then
    <br />
    &nbsp;&nbsp;response.write(<span className="text-green-700">"no suggestion"</span>)
    <br />
    else
    <br />
    &nbsp;&nbsp;response.write(hint)
    <br />
    end if

    <br />

    <span className="text-green-700">%&gt;</span>
  </code>
</pre>



    </div>
  );
};

export default JSAJAXASP;