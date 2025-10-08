import React from "react";

const CssRWDImages = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">Responsive Web Design - Images</h1>

      {/* Intro */}
      <p>
      Responsive images are those that adjust according to the width of their container. If we use normal fixed-size images, they may get cut off on smaller screens. That’s why using responsive images is important in responsive web design (RWD).
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Responsive Images?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Images automatically adjust according to the screen size.</li>
        <li>Small devices par layout break hone se bachata hai.</li>
        <li>Prevents the layout from breaking on small devices.</li>
      </ul>

      <h1 className="text-2xl">Using The width Property</h1>
      <p>Using a percentage-based width and <span className="text-red-400 bg-gray-50 px-1">'auto'</span> for height ensures the image resizes responsively with the container.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">img</span>{" "}
        <span className="text-gray-400">{'{'}</span><br/>{"      "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">auto</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{'}'}</span>
      </pre>

      <p>Allowing an image to upscale may affect quality. Using <span className="text-red-400 bg-gray-50 px-1">max-width</span> is a more controlled, responsive solution.</p>

      <h1 className="text-2xl">Using The max-width Property</h1>
      <p>Using <span className="text-red-400 bg-gray-50 px-1">max-width:</span> 100% ensures the image can reduce in size responsively without enlarging beyond its original size.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">img</span>{" "}
        <span className="text-gray-400">{'{'}</span><br/>{"      "}
        <span className="text-red-400">max-width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">auto</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{'}'}</span>
      </pre>

      <h1 className="text-2xl">Add an Image to The Example Web Page</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">img</span>{" "}
        <span className="text-gray-400">{'{'}</span><br/>{"      "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">auto</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{'}'}</span>
      </pre>

      <h1 className="text-2xl">Background Images</h1>
      <p>Background images are also capable of adapting to changes in screen size.</p>
      <p>Here are three ways to achieve this:</p>
      <p> If the <span className="text-red-400 bg-gray-50 px-1">background-size</span> property is set to "contain", the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height):</p>
      <div className="min-w-full h-96 bg-[url('/public/nature.jpg')] bg-no-repeat border border-1 border-red-600 bg-contain"></div>


      <h1 className="text-2xl">Example</h1>
      <p>Here's the styling used:</p>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">div</span>{" "}
        <span className="text-gray-400">{'{'}</span><br/>{"      "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">400px</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-repeat</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">no-repeat</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-size</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">contain</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">border</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">1px solid red</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{'}'}</span>
      </pre>

      <p>Applying background-size: 100% 100% forces the image to stretch across the full width and height of the content box.</p>
      <div className="min-w-full h-96 bg-[url('/public/nature.jpg')] bg-[size:100%_100%] border border-1 border-red-600"></div>
      <p>Here's the CSS you'll use:</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">div</span>{" "}
        <span className="text-gray-400">{'{'}</span><br/>{"      "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">400px</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-repeat</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">no-repeat</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-size</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100% 100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">border</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">1px solid red</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{'}'}</span>
      </pre>

      <p>Setting <span className="text-red-400 bg-gray-50 px-1">background-size</span> to <span className="text-red-400 bg-gray-50 px-1">cover</span> makes the image scale to fill the entire content area while preserving its aspect ratio. This may cause parts of the image to be cropped.</p>
      <div className="min-w-full h-96 bg-[url('/public/nature.jpg')] bg-cover border border-1 border-red-600"></div>
      <p>Here's the CSS you'll use:</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">div</span>{" "}
        <span className="text-gray-400">{'{'}</span><br/>{"      "}
        <span className="text-red-400">width</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">100%</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">height</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">400px</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-repeat</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">no-repeat</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">background-size</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">cover</span>
        <span className="text-gray-400">;</span><br/>{"      "}
        <span className="text-red-400">border</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">1px solid red</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{'}'}</span>
      </pre>

      <h1 className="text-2xl">Different Images for Different Devices</h1>
      <p>While a large image looks great on desktops, it may not be suitable for smaller screens. Instead of loading and scaling it down, you can use media queries to serve different images based on device size, improving performance.</p>
      <p>Below are two images — a large one for desktops and a smaller one for smaller screens.</p>
      <div className="min-w-52 h-60 bg-[url('/public/nature.jpg')] bg-no-repeat"></div>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">body</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{"}"}</span><br/><br/>
        <span className="text-red-700">@media only screen and (min-width: 400px)</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>
        <span className="text-red-700">body</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>{"  "}
        <span className="text-gray-400">{"}"}</span><br/>
        <span className="text-gray-400">{"}"}</span>
      </pre>

      <p>Instead of min-width, you can use <span className="text-red-400 bg-gray-50 px-1">min-device-width</span>, which targets the actual device’s screen width, not the browser window size. This way, the image won’t change if the browser is resized.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
        <span className="text-red-700">body</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>
        <span className="text-gray-400">{"}"}</span><br/><br/>
        <span className="text-red-700">@media only screen and (min-device-width: 400px)</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>
        <span className="text-red-700">body</span>{" "}
        <span className="text-gray-400">{"{"}</span><br/>{"   "}
        <span className="text-red-400">background-image</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-blue-400">url('image/nature.jpg')</span>
        <span className="text-gray-400">;</span><br/>{"  "}
        <span className="text-gray-400">{"}"}</span><br/>
        <span className="text-gray-400">{"}"}</span>
      </pre>

      <h1 className="text-2xl">The HTML<span className="text-red-400 bg-gray-50 px-1">{'<picture>'}</span> Element</h1>
      <p>Using the HTML <span className="text-red-400 bg-gray-50 px-1">{"<picture>"}</span> tag, developers can define multiple image sources for different scenarios.</p>
      <p>In responsive layouts, the <span className="text-red-400 bg-gray-50 px-1">{"<picture>"}</span> tag allows you to load different images for different screen widths, offering a better fit than simply resizing one image.</p>
      <p>The <span className="text-red-400 bg-gray-50 px-1">{"<picture>"}</span> tag functions similarly to <span className="text-red-400 bg-gray-50 px-1">{"<video>"}</span> and <span className="text-red-400 bg-gray-50 px-1">{"<audio>"}</span> —you list several sources, and the browser uses the first one that meets the criteria.</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="bg-gray-900 p-4 rounded-lg">
         <span className="text-gray-500">&lt;</span>
         <span className="text-red-700">picture</span>
         <span className="text-gray-500">&gt;</span><br/>{"  "}
         <span className="text-gray-400">&lt;</span>
         <span className="text-red-700">source</span>{" "}
         <span className="text-green-400">srcset</span>
         <span className="text-blue-400">="url('image/nature.jpg')"</span>{" "}
        <span className="text-green-400">media</span>
        <span className="text-blue-400">="(max-width: 400px)"</span>
        <span className="text-gray-400">&gt;</span><br/>{"  "}
        <span className="text-gray-400">&lt;</span>
        <span className="text-red-700">source</span>{" "}
        <span className="text-green-400">srcset</span>
        <span className="text-blue-400">="url('image/nature.jpg')"</span>
        <span className="text-gray-400">&gt;</span><br/>{"  "}
        <span className="text-gray-400">&lt;</span>
        <span className="text-red-700">img</span>{" "}
        <span className="text-green-400">src</span>
        <span className="text-blue-400">="url('image/nature.jpg')"</span>{" "}
        <span className="text-green-400">alt</span>
        <span className="text-blue-400">="nature"</span>
        <span className="text-gray-400">&gt;</span><br/>
        <span className="text-gray-400">&lt;/</span>
        <span className="text-red-700">picture</span>
        <span className="text-gray-400">&gt;</span>
      </pre>
      <p><span className="text-red-400 bg-gray-50 px-1">srcset</span> is a required attribute that specifies which image file should be used.</p>
      <p>You can optionally use the media attribute to define conditions using media queries, similar to CSS <span className="text-red-400 bg-gray-50 px-1">@media</span>.</p>
      <p>To ensure compatibility, always add an <span className="text-red-400 bg-gray-50 px-1">{"<img>"}</span> element in case the browser doesn’t recognize <span className="text-red-400 bg-gray-50 px-1">{"<picture>"}</span>.</p>



































      {/* Explanation */}
      <div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold mb-2">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>max-width: 100%</strong> → The image will not go outside its container.
        </li>
        <li>
          <strong>height: auto</strong> →The image’s aspect ratio (width vs. height) is automatically maintained.
        </li>
        <li>
         If the browser is resized, the image also resizes automatically.
        </li>
      </ul>
      </div>

     <p>Here, the <span className="text-red-400 bg-gray-50 px-1">{"<picture>"}</span> tag is used to load different images for different screen sizes. This saves bandwidth and displays optimized images for mobile devices.</p>
     

    </div>
  );
};

export default CssRWDImages;