import React, { useState } from "react";

const JSCookies = () => {

   const [cookieInfo, setCookieInfo] = useState("No cookies deleted yet.");
  
    // ✅ Set a cookie for demonstration
    const setCookie = () => {
      document.cookie = "username=CodePoint; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
      setCookieInfo("✅ Cookie 'username' has been set!");
    };
  
    // ✅ Delete the cookie
    const deleteCookie = () => {
      // Set the cookie expiration date to a past date
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      setCookieInfo("✅ Cookie 'username' has been deleted!");
    };
  
    // ✅ Read cookies
    const getCookies = () => {
      const cookies = document.cookie;
      setCookieInfo(`cookies ? Cookies: ${cookies} : "No cookies found."`);
    };
  


  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Cookies in JavaScript</h1>

      <p>
        Cookies are small pieces of data stored in the browser. They are used to store user preferences,
        session information, and other data that needs to persist across page reloads.
      </p>

      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">What are Cookies?</h1>
      <p className="mb-3">Cookies store data in tiny text files on your computer. After a web server delivers a page, the connection is closed, and the server forgets the user.</p>
      <p>Cookies were created to solve the problem of remembering information about users.</p>
      <ul className="list-[square] list-inside mt-5">
        <li>When a user visits a web page, his/her name can be stored in a cookie.</li>
        <li>Next time the user visits the page, the cookie "remembers" his/her name.</li>
      </ul>
      <p className="mt-5">Cookies are stored as name-value pairs, for example:</p>
     
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`username = John Doe`}
      </code>
     </pre>

     <p className="mt-5">Cookies associated with a page are included in the browser’s request, so the server can retain information about the user.</p>
     
     <h1 className="lg:text-2xl text-xl text-gray-800 font-semibold mt-10 mb-3">Create a Cookie with JavaScript</h1>
     <p>JavaScript can manage cookies—creating, reading, and deleting them—using the <span className="text-red-400">document.cookie</span> property. A cookie can be created like this:</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.cookie = "username=John Doe";`}
      </code>
     </pre>

     <p className="mt-5">You can set an expiry date in UTC; otherwise, the cookie is removed when the browser closes.</p>
     <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";`}
      </code>
     </pre>

     <p className="mt-5">The path parameter lets you define which path the cookie belongs to, otherwise it defaults to the current page.</p>
    <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`}
      </code>
    </pre>

    <h1 className="lg:text-2xl text-xl text-gray-800 font-semibold mt-10 mb-3">Read a Cookie with JavaScript</h1>
    <p>Using JavaScript, you can read cookies like this:</p>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`let x = document.cookie;`}
      </code>
    </pre>

    <h1 className="lg:text-2xl text-xl mt-5 mb-3">Change a Cookie with JavaScript</h1>
  <p>Cookies can be updated in JavaScript just like they are created.</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`}
    </code>
  </pre>
  <p className="mt-3">The existing cookie is replaced.</p>
  

  <h1 className="lg:text-2xl text-xl text-gray-800 font-semibold mt-10 mb-3">Delete a Cookie with JavaScript</h1>
  <p>Deleting a cookie is easy. You don’t need to provide a value; just set its expires parameter to a past date.</p>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
    <code>
      {`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}
    </code>
  </pre>

  
      <div className="space-x-2 mt-5 mb-5">
        <button
          onClick={setCookie}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Set Cookie
        </button>
        <button
          onClick={getCookies}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Get Cookies
        </button>
        <button
          onClick={deleteCookie}
          className="px-4 py-2 lg:mt-0 mt-5 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete Cookie
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800 whitespace-pre-line">
        {cookieInfo}
      </div>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">The Cookie String</h1>
  <p className="mb-3">The <span className="text-red-400">document.cookie</span> property appears as a regular text string, but it isn’t. Writing a full cookie string only allows you to read back the name-value pair.</p>
  <p>Setting a new cookie does not overwrite older ones. It’s added to document.cookie, so reading it again might show something like:</p>
   <p>cookie1 = value; cookie2 = value;</p>
   <p className="mt-5">Finding a particular cookie’s value requires writing a JavaScript function that looks for it in the cookie string.</p>
  
  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">JavaScript Cookie Example</h1>
  <p className="mb-3">The following example demonstrates how to store a visitor’s name in a cookie. Upon the first visit, the user is asked to provide their name, which gets stored.</p>
  <p>When the visitor returns to the same page, a welcome message will be displayed. The example uses three JavaScript functions.</p>
  <ul className="list-[square] list-inside mt-5">
    <li>A function to set a cookie value</li>
    <li>A function to check a cookie value</li>
    <li>A function to get a cookie value</li>
  </ul>

  <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">A Function to Set a Cookie</h1>
  <p>First, we define a function that saves the visitor’s name in a cookie.</p>
  <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
  <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-5">
    <code>
      {`function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}`}
    </code>
  </pre>

  <p>The function receives three arguments: cname for the cookie name, cvalue for the value, and exdays for the expiry period. It sets the cookie by joining the name, value, and expiration string.</p>


<h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">A Function to Get a Cookie</h1>
 <p>After that, we write a function to get the value of a particular cookie.</p>
 <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
 <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5 mb-5">
  <code>
    {`function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}`}
  </code>
 </pre>

 <p className="mt-3">The function takes the cookie name (cname) as a parameter, then creates a variable (name) with the text to search for (cname + "="). It decodes the cookie string to handle special characters, like $, and splits it by semicolons into an array (ca = decodedCookie.split(';')). The function then loops through the array (for i = 0; i {'<'} ca.length; i++) to read each cookie (c = ca[i]). If the cookie is found (c.indexOf(name) == 0), it returns the cookie’s value (c.substring(name.length, c.length)); otherwise, it returns an empty string ("").</p>



 <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">A Function to Check a Cookie</h1>
 <p className="mb-3">Finally, we define a function to check whether a cookie exists. If it does, a greeting is displayed.</p>
 <p>If the cookie doesn’t exist, a prompt box appears asking for the user’s name, and the setCookie function saves it for 365 days.</p>
 <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
 <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {`function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}`}
  </code>
 </pre>

 <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">All Together Now</h1>
 <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
 <pre className="text-green-400 overflow-x-auto bg-gray-900 p-4 rounded-lg mt-5">
  <code>
    {`function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}`}
  </code>
 </pre>

 <p className="mt-5">The <span className="text-red-400">checkCookie()</span> function is run as soon as the page loads in the example above.</p>


    </div>
  );
};

export default JSCookies;