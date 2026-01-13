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
     
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
        {'<script src="https://kit.fontawesome.com/5ce9d92c07.js" crossorigin="anonymous"></script>'
          }  
          </code>
          </pre>

      <h2 className="text-2xl mb-5">Example:</h2>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
        {`<!DOCTYPE html>
<html>
<head>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>

</body>
</html>
`}
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

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-10 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>{`
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
    
        `}</code>
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