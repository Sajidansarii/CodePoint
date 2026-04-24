import { FaHome, FaUser, FaSearch } from "react-icons/fa";

export default function CssIcons() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Icons</h1>
      <p className="mb-4">
        Icons can be added in HTML using Unicode, Images, or popular icon
        libraries like <b>Font Awesome</b>.
      </p>
      <p className="text-3xl mb-5">How To Add Icons</p>
      <p>The simplest way to add an icon in your HTML page, is with an icon library, such as Font Awesome.</p>
      <p>Add the name of the specified icon class to any inline HTML element (like {'<i>'} or {'<span>'}).</p>
      <p>All the icons in the icon libraries below, are scalable vectors that can be customized with CSS (size, color, shadow, etc.)</p>


      <h1 className="text-3xl mt-5 mb-5">Font Awesome Icons</h1>
      <p>Use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the {'<head>'} section of your HTML page</p>
     
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
        {'<script src="https://kit.fontawesome.com/5ce9d92c07.js" crossorigin="anonymous"></script>'
          }  
          </code>
          </pre>

      <h2 className="text-2xl mb-5">Example:</h2>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-500">&lt;html&gt;</span><br />
    <span className="text-blue-500">&lt;head&gt;</span><br />

    <span className="text-blue-500">&lt;script</span>
    <span className="text-red-500"> src</span>=
    <span className="text-green-700">"https://kit.fontawesome.com/a076d05399.js"</span>
    <span className="text-red-500"> crossorigin</span>=
    <span className="text-green-700">"anonymous"</span>
    <span className="text-blue-500">&gt;&lt;/script&gt;</span><br />

    <span className="text-blue-500">&lt;/head&gt;</span><br />
    <span className="text-blue-500">&lt;body&gt;</span><br /><br />

    <span className="text-blue-500">&lt;i</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"fas fa-cloud"</span>
    <span className="text-blue-500">&gt;&lt;/i&gt;</span><br />

    <span className="text-blue-500">&lt;i</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"fas fa-heart"</span>
    <span className="text-blue-500">&gt;&lt;/i&gt;</span><br />

    <span className="text-blue-500">&lt;i</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"fas fa-car"</span>
    <span className="text-blue-500">&gt;&lt;/i&gt;</span><br />

    <span className="text-blue-500">&lt;i</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"fas fa-file"</span>
    <span className="text-blue-500">&gt;&lt;/i&gt;</span><br />

    <span className="text-blue-500">&lt;i</span>
    <span className="text-red-500"> class</span>=<span className="text-green-700">"fas fa-bars"</span>
    <span className="text-blue-500">&gt;&lt;/i&gt;</span><br /><br />

    <span className="text-blue-500">&lt;/body&gt;</span><br />
    <span className="text-blue-500">&lt;/html&gt;</span>
  </code>
</pre>

<i class="fas fa-cloud ml-2 mt-5"></i>
<i class="fas fa-heart ml-2"></i>
<i class="fas fa-car ml-2"></i>
<i class="fas fa-file ml-2"></i>
<i class="fas fa-bars ml-2"></i>

      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Examples</h2>
        <p className="mb-2">Before you have to import it on top of code.</p>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>{'import { FaHome, FaUser, FaSearch } from "react-icons/fa";'}</code>
      </pre>

    <pre className="bg-gray-200 p-4 rounded-lg mt-10 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">&lt;div</span>
    <span className="text-red-500"> className</span>=<span className="text-green-700">"space-y-4"</span>
    <span className="text-blue-500">&gt;</span><br /><br />

    <span className="text-blue-500">&lt;p&gt;</span><br />
    &nbsp;&nbsp;Unicode Icon: <span className="text-blue-500">&lt;span</span>
    <span className="text-red-500"> className</span>=<span className="text-green-700">"text-yellow-500"</span>
    <span className="text-blue-500">&gt;</span>&#9733;<span className="text-blue-500">&lt;/span&gt;</span> Star<br />
    <span className="text-blue-500">&lt;/p&gt;</span><br /><br />

    <span className="text-blue-500">&lt;p</span>
    <span className="text-red-500"> className</span>=<span className="text-green-700">"flex items-center space-x-2"</span>
    <span className="text-blue-500">&gt;</span><br />
    &nbsp;&nbsp;FaHome icon + Home<br />
    <span className="text-blue-500">&lt;/p&gt;</span><br /><br />

    <span className="text-blue-500">&lt;p</span>
    <span className="text-red-500"> className</span>=<span className="text-green-700">"flex items-center space-x-2"</span>
    <span className="text-blue-500">&gt;</span><br />
    &nbsp;&nbsp;FaUser icon + Profile<br />
    <span className="text-blue-500">&lt;/p&gt;</span><br /><br />

    <span className="text-blue-500">&lt;p</span>
    <span className="text-red-500"> className</span>=<span className="text-green-700">"flex items-center space-x-2"</span>
    <span className="text-blue-500">&gt;</span><br />
    &nbsp;&nbsp;FaSearch icon + Search<br />
    <span className="text-blue-500">&lt;/p&gt;</span><br /><br />

    <span className="text-blue-500">&lt;/div&gt;</span>
  </code>
</pre>

      <div className="space-y-4">
        <p>
          Unicode Icon: <span className="text-yellow-500">&#9733;</span> Star
        </p>
        <p className="flex items-center space-x-2">
          <FaHome className="text-blue-500" /> <span>Home</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaUser className="text-green-500" /> <span>Profile</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaSearch className="text-purple-500" /> <span>Search</span>
        </p>
      </div>
    </div>
  );
}