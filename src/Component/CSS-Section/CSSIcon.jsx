import { FaHome, FaUser, FaSearch } from "react-icons/fa";

export default function CssIcons() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">CSS Icons</h1>
      <p className="mb-4">
        Icons can be added in HTML using Unicode, Images, or popular icon
        libraries like <b>Font Awesome</b> and <b>React Icons</b>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Examples</h2>
      <div className="space-y-4">
        <p>
          Unicode Icon: <span className="text-yellow-500">&#9733;</span> Star
        </p>
        <p>
          Image Icon:{" "}
          <img
            src="https://via.placeholder.com/20"
            alt="Demo Icon"
            className="inline-block"
          />{" "}
          Placeholder
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