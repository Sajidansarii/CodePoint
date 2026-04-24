import React, { useState } from "react";

const JSCookieAttributes = () => {
  
  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Cookies Attributes in JavaScript</h1>

      <p>
        Cookies can have various <span className="text-red-400">attributes</span> that define their behavior and scope:
        <code>expires</code>, <code>path</code>, <code>Secure</code>, <code>SameSite</code>, and more.
      </p>


    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Cookie HttpOnly Attribute</h1>
    <p>The HttpOnly attribute prevents JavaScript from accessing the cookie via document.cookie. It can only be used by the server, not JavaScript.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    Set-Cookie: username=abcd; HttpOnly; Path=/
  </code>
</pre>

    <p className="mb-3">JavaScript cannot read this cookie; it’s only sent in HTTP requests to the server.</p>
    <p>This attribute improves security by protecting cookies from XSS attacks.</p>
     

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Cookie SameSite Attribute</h1>
    <p>The <span className="text-red-400">SameSite</span> attribute restricts how cookies are sent with cross-site requests, helping prevent CSRF attacks.</p>
     <ul className="list-[square] list-inside mt-5">
      <li><span className="text-red-400">Strict</span> – Cookie is sent only for same-site requests.</li>
      <li><span className="text-red-400">Lax</span> – Cookie is sent for same-site requests and some safe cross-site requests (like GET).</li>
      <li><span className="text-red-400">None</span> – Cookie is sent in all requests (must be Secure as well).</li>
     </ul>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    document.cookie = "name=value; SameSite=Strict";
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    &lt;html&gt;
    <br />
    &lt;body&gt;
    <br />
    &nbsp;&nbsp;&lt;p id="output"&gt;&lt;/p&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick="setCookies()"&gt;Set Cookie&lt;/button&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick="readCookies()"&gt;Read Cookies&lt;/button&gt;
    <br /><br />

    &nbsp;&nbsp;&lt;script&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;const output = document.getElementById("output");
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;function setCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.cookie = "username=abcd; SameSite=Strict";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;function readCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const allCookies = document.cookie.split("; ");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML = "The cookie is : &lt;br&gt;";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (const cookie of allCookies) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const [key, value] = cookie.split("=");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (key == "username") {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML += \`\${key} : \${decodeURIComponent(value)} &lt;br&gt;\`;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&lt;/script&gt;
    <br />
    &lt;/body&gt;
    <br />
    &lt;/html&gt;
  </code>
</pre>

      <p className="mt-5">For cross-site cookies, use SameSite=None; Secure together.</p>
    

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Cookie Secure Attribute</h1>
    <p>The <span className="text-red-400">Secure</span> attribute ensures that the cookie is sent only over HTTPS connections, protecting it from being sent over unencrypted HTTP.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    document.cookie = "name=value; secure";
  </code>
</pre>

      <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    &lt;html&gt;
    <br />
    &lt;body&gt;
    <br />
    &nbsp;&nbsp;&lt;p id="output"&gt;&lt;/p&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick="setCookies()"&gt;Set Cookie&lt;/button&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick="readCookies()"&gt;Read Cookies&lt;/button&gt;
    <br /><br />

    &nbsp;&nbsp;&lt;script&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;const output = document.getElementById("output");
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;function setCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.cookie = "username=abcd; secure";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;function readCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const allCookies = document.cookie.split("; ");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML = "The cookie is : &lt;br&gt;";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (const cookie of allCookies) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const [key, value] = cookie.split("=");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (key == "username") {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML += \`\${key} : \${decodeURIComponent(value)} &lt;br&gt;\`;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&lt;/script&gt;
    <br />
    &lt;/body&gt;
    <br />
    &lt;/html&gt;
  </code>
</pre>

     <p className="mt-5">The Secure attribute works only on HTTPS pages. On HTTP pages, the cookie will not be sent.</p>


   <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Cookie Domain Attribute</h1>
   <p>The <span className="text-red-400">domain</span> attribute defines which domain a cookie is valid for. By default, it uses the domain that made the request, but it can be set to include subdomains.</p>
   <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
   <p>Use the following syntax to assign a value to the domain attribute of a cookie.</p>
 <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    document.cookie = "name=value;domain:domain_name ";
  </code>
</pre>

  <p className="mt-5">In this syntax, substitute domain_name with the actual domain, such as example.com.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>The following code assigns tutorialspoint.com as the domain for the cookie.</p>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    &lt;html&gt;
    <br />
    &lt;body&gt;
    <br />
    &nbsp;&nbsp;&lt;p id = "output"&gt; &lt;/p&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick = "setCookies()"&gt; Set Cookie &lt;/button&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick = "readCookies()"&gt; Read Cookies &lt;/button&gt;
    <br />
    &nbsp;&nbsp;&lt;script&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;const output = document.getElementById("output");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;function setCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.cookie = "username=abcd;domain:tutorialspoint.com";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;function readCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const allCookies = document.cookie.split("; ");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML = "The cookie is : &lt;br&gt;";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (const cookie of allCookies) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const [key, value] = cookie.split("=");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (key == "username") {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML += \`\${key} : \${decodeURIComponent(value)} &lt;br&gt;\`;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&lt;/script&gt;
    <br />
    &lt;/body&gt;
    <br />
    &lt;/html&gt;
  </code>
</pre>

     <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Cookie's maxAge Attribute</h1>
     <p>The <span className="text-red-400">maxAge</span> attribute is an alternative to expires and defines how long a cookie should last in seconds; once the time ends, the cookie is automatically deleted.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Syntax</h2>
    <p>Follow the syntax given below to set the <span className="text-red-400">maxAge</span> attribute for a cookie.</p>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    document.cookie = "name=value;max-ge=age;";
  </code>
</pre>

    <p className="mt-5">You must substitute age with the number of seconds in the given syntax.</p>
    
    <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
    <p>The following code assigns maxAge a value equal to 10 days in seconds. You can test the behavior by setting the cookie lifetime to 1 second and checking it afterward.</p>
  <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    &lt;html&gt;
    <br />
    &lt;body&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick = "setCookies()"&gt; Set Cookie &lt;/button&gt;
    <br />
    &nbsp;&nbsp;&lt;button onclick = "readCookies()"&gt; Read Cookies &lt;/button&gt;
    <br />
    &nbsp;&nbsp;&lt;p id = "output"&gt; &lt;/p&gt;
    <br />
    &nbsp;&nbsp;&lt;script&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;const output = document.getElementById("output");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;function setCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.cookie = "token=1234wfijdn;max-age=864000";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;function readCookies() {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const allCookies = document.cookie.split("; ");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML = "The cookie is : &lt;br&gt;";
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (const cookie of allCookies) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const [key, value] = cookie.split("=");
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (key == "token") {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.innerHTML += \`\${key} : \${decodeURIComponent(value)} &lt;br&gt;\`;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
    <br />
    &nbsp;&nbsp;&lt;/script&gt;
    <br />
    &lt;/body&gt;
    <br />
    &lt;/html&gt;
  </code>
</pre>
    
    
    </div>
  );
};

export default JSCookieAttributes;