import React from "react";

const CssAttrSelectors = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CSS Attribute Selectors</h1>
      <p className="mb-4">
        Attribute selectors let you style elements based on their HTML attributes.
      </p>

      <div className="space-y-3">
        <input type="text" placeholder="Type here" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <a href="https://google.com" className="block text-blue-600 underline">
          Secure Link (https)
        </a>
        <a href="http://example.com" className="block text-blue-600 underline">
          Insecure Link (http)
        </a>
        <img src="profile.png" alt="Profile" className="w-16 h-16" />
        <img src="photo.jpg" alt="Photo" className="w-16 h-16" />
      </div>

      {/* CSS */}
      <style>{`
        /* Style input[type="text"] */
        input[type="text"] {
          border: 2px solid green;
        }

        /* Style input[type="password"] */
        input[type="password"] {
          border: 2px solid red;
        }

        /* Links starting with https */
        a[href^="https"] {
          color: green;
        }

        /* Links starting with http */
        a[href^="http:"] {
          color: red;
        }

        /* Images ending with .png */
        img[src$=".png"] {
          border: 2px solid purple;
        }

        /* Images ending with .jpg */
        img[src$=".jpg"] {
          border: 2px solid orange;
        }
      `}</style>
    </div>
  );
};

export default CssAttrSelectors;