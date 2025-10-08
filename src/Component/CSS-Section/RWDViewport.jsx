import React from "react";

const CssRWDViewport = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">Responsive Web Design - Viewport</h1>

      {/* Introduction */}
      <p>
        Viewport is the visible area of a user's device. For desktop screens, the viewport is large, while on mobile screens, it is smaller. If we don't define the viewport, the mobile browser displays a zoomed-out view similar to a desktop.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Viewport is Important?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Without a viewport, the website will appear small and unreadable on mobile.</li>
        <li>Without the viewport tag, responsive design doesn't work properly.</li>
        <li>It tells the website to adjust according to the device's width.</li>
      </ul>

      <h1 className="text-2xl">Setting The Viewport</h1>
      <p>HTML5 provided a way for web designers to control the viewport using the <span className="text-red-400 bg-gray-50 px-1">{'<meta>'}</span> tag.</p>
      <p>You should add the following <span className="text-red-400 bg-gray-50 px-1">{'<meta>'}</span> viewport tag inside the <span className="text-red-400 bg-gray-50 px-1">{'<head>'}</span> section of every web page.</p>
      
  <pre className="border p-2 border-1 border-gray-300">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-orange-500">meta</span> {' '}
    <span className="text-blue-700">name</span>=<span className="text-green-600">"viewport"</span> {' '}
    <span className="text-blue-700">content</span>=<span className="text-green-600">"width=device-width, initial-scale=1.0"</span>{' '}
    <span className="text-gray-500">/&gt;</span>
  </code>
</pre>

   <p>It defines how the browser should scale and display the page on different devices.</p>
      <p>The <span className="text-red-400 bg-gray-50 px-1">width=device-width</span> setting makes the page match the screen width of the device, which changes from one device to another.</p>
     <p>The <span className="text-red-400 bg-gray-50 px-1">initial-scale=1.0</span> defines how much the page should be zoomed in or out when it first loads.</p>
     <p>Below is a comparison between a web page without the viewport meta tag and one that includes it.</p>
     <div className="min-w-full h-screen bg-cover bg-center scale-75 bg-[url('/public/viewport.webp')]"></div>
     
     <h1 className="text-2xl">Size Content to The Viewport</h1>
     <p>Users commonly scroll vertically on websites, whether on desktop or mobile — horizontal scrolling is not typical.</p>
     <p>A good user experience is lost when users have to zoom out or scroll horizontally.</p>
     <p>Here are a few more guidelines to keep in mind:</p>
     <ul className="list-[square] list-inside space-y-2">
      <li><strong>Never use fixed-width content that exceeds the viewport</strong> - This often leads to horizontal scrolling, especially on <span className="ml-6">mobile</span>. Keep all elements responsive and within the visible area.</li>

      <li><strong>Avoid making your content depend on a fixed width</strong> - Devices have different screen sizes, so your layout should work <span className="ml-6">well</span> at any width.</li>

      <li><strong>Use media queries to create adaptive layouts</strong> - Fixed dimensions often don’t fit smaller screens. Instead, use responsive <span className="ml-6">techniques</span> like width: 100% and avoid hard-coded positioning.</li>
     </ul>
   


    

      {/* Explanation */}
      <div className="bg-green-100 p-3">
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>width=device-width</strong> → It makes the layout equal to the screen width of the device.
        </li>
        <li>
          <strong>initial-scale=1.0</strong> → It keeps the zoom level at 100% (won’t apply any default zoom).
        </li>
        <li>
          <strong>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</strong>{" "}
          It tells the browser to set the viewport <span className="ml-6">equal</span> to the device’s width.
        </li>
        <li>
          It allows the website to adjust properly on mobile and tablet devices without zooming.
        </li>
      </ul>
      </div>
    </div>
  );
};

export default CssRWDViewport;