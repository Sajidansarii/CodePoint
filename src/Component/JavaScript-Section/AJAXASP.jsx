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
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`<p>Start typing a name in the input field below:</p>
<p>Suggestions: <span id="txtHint"></span></p>

<form>
First name: <input type="text" onkeyup="showHint(this.value)">
</form>

<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  xmlhttp.open("GET", "gethint.asp?q=" + str);
  xmlhttp.send();
  }
}
</script>`}
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
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
        <code>
          {`<%
response.expires=-1
dim a(30)
'Fill up array with names
a(1)="Anna"
a(2)="Brittany"
a(3)="Cinderella"
a(4)="Diana"
a(5)="Eva"
a(6)="Fiona"
a(7)="Gunda"
a(8)="Hege"
a(9)="Inga"
a(10)="Johanna"
a(11)="Kitty"
a(12)="Linda"
a(13)="Nina"
a(14)="Ophelia"
a(15)="Petunia"
a(16)="Amanda"
a(17)="Raquel"
a(18)="Cindy"
a(19)="Doris"
a(20)="Eve"
a(21)="Evita"
a(22)="Sunniva"
a(23)="Tove"
a(24)="Unni"
a(25)="Violet"
a(26)="Liza"
a(27)="Elizabeth"
a(28)="Ellen"
a(29)="Wenche"
a(30)="Vicky"

'get the q parameter from URL
q=ucase(request.querystring("q"))

'lookup all hints from array if length of q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Output "no suggestion" if no hint were found
'or output the correct values
if hint="" then
  response.write("no suggestion")
else
  response.write(hint)
end if
%>`}
        </code>
      </pre>




    </div>
  );
};

export default JSAJAXASP;