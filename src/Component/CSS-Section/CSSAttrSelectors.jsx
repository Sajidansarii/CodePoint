import React from "react";

const CssAttrSelectors = () => {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS Attribute Selectors</h1>
      <p className="mb-4">CSS Attribute Selectors is used to select HTML elements with specific attribute or value for attribute. Attribute selectors are enclosed in square brackets [ ] and can take various forms.
      </p>
      <p>As below you can see how to select an HTML element based on attribute in CSS.</p>

        <div className="bg-gray-200 p-4 rounded-lg mt-5">
          <pre>
            <code>
              {`       a[href]{
               background-color:Blue;
                }`}
            </code>
          </pre>
        </div>

        <p className="mt-10">Attribute selector is type of selector in CSS. To know all the selector in CSS</p>
        <p className="text-2xl mt-5 mb-3">CSS [attribute="value"] Selector</p>
        <p>The [attribute="value"] selector is used to select elements with a specific attribute with an exact value.</p>
        <p>The following example selects all {'<a>'} elements with a target="_blank" attribute:</p>

        <div className="bg-gray-200 p-4 rounded-lg mt-3">
          <pre>
            <code>
              {`          a[target="_blank"]{
                              background-color:red;
                              }`}
            </code>
          </pre>
        </div>

     <p className="text-2xl mt-10">example:</p>
      <div className="space-y-3">
        <input type="text" placeholder="Type here" className="border border-green-500 p-2" />
        <input type="password" placeholder="Password" className="border border-red-400 p-2" />
        <a href="https://google.com" className="block text-green-500 underline">
          Secure Link (https)
        </a>
        <a href="http://example.com" className="block text-red-500 underline">
          Insecure Link (http)
        </a>
        <img src="" style={{backgroundImage: "url('https://picsum.photos/400/200')"}} className="w-96 h-16 border border-purple-500"/>
        <img src="" style={{backgroundImage: "url('https://picsum.photos/400/200')"}} className="w-96 h-16 border border-orange-500"/>
      </div>

      CSS
      <div className="bg-gray-200 p-4 rounded-lg">
        <pre>
          <code>
            {`
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
      `}
          </code>
        </pre>
      </div>
      <p className="text-2xl mt-10">All CSS Attribute Selectors</p>
      <div className=" border">
        <p className="text-xl bg-gray-100">[attribute]</p>
        <p className="text-xl">[attribute=value]</p>
        <p className="text-xl bg-gray-100">[attribute~=value]</p>
        <p className="text-xl">[attribute|=value]</p>
        <p className="text-xl bg-gray-100">[attribute^=value]</p>
        <p className="text-xl">[attribute$=value]</p>
        <p className="text-xl bg-gray-100">[attribute*=value]</p>
      </div>
    </div>
  );
};

export default CssAttrSelectors;