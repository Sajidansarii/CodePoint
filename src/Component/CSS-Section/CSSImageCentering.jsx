import React from "react";

const ImageCenteringTutorial = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Image Centering</h1>
      <p>
        Centering an image is a common task in web design. CSS provides different 
        ways to align and center images both <b>horizontally</b> and <b>vertically</b>.
      </p>

      <h1 className="text-2xl">Center an Image Horizontally</h1>
      <p>To center an image horizontally, you can either apply <span className="text-red-400 bg-gray-100 rounded px-1">margin:auto;</span> or use <span className="text-red-400 bg-gray-100 rounded px-1">display:flex;</span> for alignment.</p>
    <h1 className="text-2xl">1.Using margin: auto</h1>
    <p>A simple way to center an image horizontally on a page is by using <span className="text-red-400 bg-gray-100 rounded px-1">margin: auto</span>.</p>
    <p>Since {'<img>'} elements are inline by default, automatic horizontal margins have no effect. To center an image using <span className="text-red-400 rounded px-1 bg-gray-100">margin: auto</span>, you need to convert it to a block element by applying <span className="text-red-400 rounded px-1 bg-gray-100">display: block</span>.</p>
     <p>You’ll also need to set a width for the image, making sure it’s not wider than its container or the page itself.</p>
    <p>Below is an example of an image that has been horizontally centered with <span className="text-red-400 bg-gray-100 rounded px-1">margin: auto</span>.</p> 
    <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Centered with text-align"
            className="mx-auto h-80 w-80"
          />
        </div>
    <h1 className="text-2xl">Example</h1>
    <p>Horizontally centered image using margin: auto:</p>
    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
      {`img {
  display: block;
  margin: auto;
  width: 50%;
}`}
    </pre>


      {/* Example 2 */}
      <div className="space-y-6">
        <h2 className="text-2xl mt-20">2. Using text-align: center;</h2>
        <p>An alternative method for horizontally centering an image is to use <span className="text-red-400 bg-gray-100 rounded px-1">text-align: center</span> on the parent container.</p>
        <p>In this setup, the {'<img>'} element is placed inside a {'<div>'} container to allow for text-based alignment.</p>
        <p>Optionally, you can assign a width to the image, making sure it’s smaller than the container or page width for better layout control.</p>
        <p>We apply the following CSS to the container:</p>
        <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Centered with text-align"
            className="h-80 w-80 inline-block"
          />
        </div>
        <p className="text-gray-700 mt-2">
          By applying <code>text-align: center;</code> to the parent element, the inline 
          image will be horizontally centered.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`.container {
  text-align: center;
}

img {
  display: inline-block;
}`}
        </pre>
      </div>

          {/* Example 3 */}
          <div className="space-y-6">
          <h1 className="text-2xl mt-20">3.Using display: flex</h1>
          <p>An alternative approach to horizontally centering an image involves using Flexbox by applying <span className="text-red-400 bg-gray-100 rounded px-1">display: flex</span> to the parent container.</p>
          <p>In this setup, the image is nested within a {'<div>'} container to facilitate styling.</p>
          <p>The following CSS rules are applied to the div container:</p>
          <ul className="list-[square] list-inside">
            <li><span className="text-red-400 bg-gray-100 rounded px-1">display: flex</span></li>
            <li><span className="text-red-400 bg-gray-100 rounded px-1">justify-content: center</span> (centers the image horizontally in the div container)</li>
          </ul>
          <p>After that, assign a width to the image that is smaller than the overall page width.</p>
          <p>Below is an example of an image centered horizontally with <span className="text-red-400 bg-gray-100 px-1 rounded">display: flex:</span></p>
           <div className="border p-4 bg-gray-100 text-center">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Centered with flex-box"
            className="h-80 w-80 inline-block"
          />
        </div>         
        <h1 className="text-2xl">Example</h1>
        <p>Horizontally centered image using display: flex:</p>
        <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
          {`div {
  display: flex;
  justify-content: center;
}

img {
  width: 320px;
  height 320px;
}`}
        </pre>
        </div>

       

        <div className="space-y-6">
        <h1 className="text-2xl mt-20">Vertical and Horizontal Centering</h1>
        <p>To center an image both vertically and horizontally, you can use either Flexbox (<span className="text-red-400 bg-gray-100 rounded px-1">display: flex</span>) or CSS Grid (<span className="text-red-400 bg-gray-100 px-1 rounded">display: grid</span>).</p>
        <h1 className="text-2xl">1.Using display: flex</h1>
        <p>To center an image both vertically and horizontally using Flexbox, apply the following styles to the container:</p>
        <ul className="list-[square] list-inside">
          <li><span className="text-red-400 bg-gray-100 rounded px-1">display: flex;</span></li>
          <li><span className="text-red-400 bg-gray-100 rounded px-1">justify-content: center;</span> (centers the image horizontally in the container)</li>
          <li><span className="text-red-400 bg-gray-100 rounded px-1">align-items: center;</span> (centers the image vertically in the container)</li>
          <li><span className="text-red-400 bg-gray-100 rounded px-1">height: 600px;</span> (the height of the container)</li>
        </ul>
        <p>The {'<img>'} element is placed inside a {'<div>'} container.</p>
        <p>We then specify a width for the image that is less than the width of the container.</p>
        <p>Using Flexbox, we’ve aligned the image to the center of the container in both directions.</p>

        <div className="border p-4 bg-gray-100 flex content-center items-center">
          <img
            src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
            alt="Centered with flex"
            className="h-80 w-80 md:ml-5"
          />
        </div>
        <h1 className="text-2xl">Example</h1>
        <p>True centering using display: flex:</p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  border: 1px solid black;
}

img {
  width: 320px;
  height: 320px;
}`}
        </pre>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl">2.Using display: grid</h1>
        <p>To position an image in the exact center with CSS Grid, we apply these properties together:</p>
        <ul className="list-[square] list-inside">
          <li><span className="text-red-400 bg-gray-100 rounded px-1">display: grid;</span></li>
          <li><span className="text-red-400 bg-gray-100 rounded px-1">place-items: center;</span> (centers the image horizontally and vertically in the container)</li>
          <li><span className="text-red-400 bg-gray-100 rounded px-1">height: 600px;</span> (the height of the container)</li>
        </ul>
        <p>We’ve also wrapped the image inside a {'<div>'} container here.</p>
        <p>Next, we define the image's width so that it remains smaller than its container.</p>
        <p>This example shows an image perfectly centered in both directions using Grid layout.</p>
       <div className="border p-4 bg-gray-100 grid place-items-center h-[600px]">
        <img src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain" alt="centered wib th grid" 
        className="h-80 w-80"/>
       </div>
       <h1 className="text-2xl">Example</h1>
       <p>Using Grid for true vertical and horizontal centering</p>
       <pre className="text-green-400 bg-gray-900 rounded-lg p-4">
        {`div {
  display: grid;
  place-items: center;
  height: 600px;
  border: 1px solid black;
}

img {
  width: 320px;
  height:320px;
}`}
       </pre>
      </div>
        </div>
  );
};

export default ImageCenteringTutorial;