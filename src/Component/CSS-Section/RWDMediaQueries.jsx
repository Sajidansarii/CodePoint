import React from "react";

const CssRWDMediaQueries = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">Responsive Web Design - Media Queries</h1>

      {/* Intro */}
      <p className="text-gray-700">
        Media Queries are a CSS feature used to apply different styles for various devices like mobile, tablet, and desktop. They form the backbone of Responsive Web Design (RWD), helping websites look good on any screen size.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl font-semibold">Why Media Queries?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Setting different styles for various screen sizes is possible.</li>
        <li>It makes the website compatible with mobile and tablet devices.</li>
        <li>Developers can implement responsive design in a single CSS file using this.</li>
      </ul>
      <p>The <span className="text-red-400 bg-gray-50 px-1">@media</span> rule is used to apply a block of CSS only when specific conditions are met.</p>

     <h1 className="text-2xl">Example</h1>
     <p>If the viewport width is 600 pixels or below, the background becomes lightblue.</p>
     <pre className="text-green-400 bg-black p-4 rounded-lg">
      {`@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
     </pre>

     <h1 className="text-2xl">Add a Breakpoint</h1>
     <p>In a previous step, we built a responsive page layout with rows and columns, but it didn’t look great on small devices.</p>
     <p>Media queries solve this by allowing us to set breakpoints where the design changes its behavior based on screen size.</p>
     <div className="bg-[url('/public/size.jpg')] min-w-full h-96 bg-cover bg-right"></div>
     <h1 className="text-2xl">Example</h1>
     <p>In this example, we use a media query to set a breakpoint at 600px.</p>
     <pre className="text-green-400 bg-black p-4 rounded-lg">
      {`@media only screen and (max-width: 600px) {
  .item1 {grid-area: 1 / span 6;}
  .item2 {grid-area: 2 / span 6;}
  .item3 {grid-area: 3 / span 6;}
  .item4 {grid-area: 4 / span 6;}
  .item5 {grid-area: 5 / span 6;}
}`}
     </pre>
     <h1 className="text-2xl">Another Breakpoint</h1>
     <p>There’s no limit to how many breakpoints you can use</p>
     <p>"A breakpoint will also be placed to separate tablet and mobile layouts.</p>
     <h1 className="text-2xl">Example</h1>
     <p>Here, breakpoints are added using media queries for screens up to 600px, and starting from 600px and 768px.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`@media only screen and (max-width: 600px) {
  .item1 {grid-area: 1 / span 6;}
  .item2 {grid-area: 2 / span 6;}
  .item3 {grid-area: 3 / span 6;}
  .item4 {grid-area: 4 / span 6;}
  .item5 {grid-area: 5 / span 6;}
}

@media only screen and (min-width: 600px) {
  .item1 {grid-area: 1 / span 6;}
  .item2 {grid-area: 2 / span 1;}
  .item3 {grid-area: 2 / span 4;}
  .item4 {grid-area: 3 / span 6;}
  .item5 {grid-area: 4 / span 6;}
}

@media only screen and (min-width: 768px) {
  .item1 {grid-area: 1 / span 6;}
  .item2 {grid-area: 2 / span 1;}
  .item3 {grid-area: 2 / span 4;}
  .item4 {grid-area: 2 / span 1;}
  .item5 {grid-area: 3 / span 6;}
}
`}
     </pre>

     <h1 className="text-2xl">Typical Device Breakpoints</h1>
     <p>There’s a vast number of devices with different screen sizes, so creating breakpoints for each is complicated. For simplicity, you might consider five groups:</p>
     <h1 className="text-2xl">Example</h1>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}`}
     </pre>

     <h1 className="text-2xl">Orientation: Portrait / Landscape</h1>
     <p>Media queries allow layout changes according to the orientation of the device or browser.</p>
     <p>CSS properties can be set to activate only when the browser is in landscape mode, meaning wider than it is high.</p>
     <h1 className="text-2xl">Example</h1>
     <p>The background of the web page will turn light blue when in landscape orientation.</p>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
      {`@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}`}
     </pre>

     <h1 className="text-2xl">Hide Elements With Media Queries</h1>
     <p>Media queries are frequently employed to conditionally hide or display elements at different breakpoints.</p>
     <div className="bg-blue-500 p-2 sm:bg-green-600 lg:bg-yellow-400">Colour would be changed when on small screens</div>
      <h1 className="text-2xl">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`/* If the screen size is 600px wide or less, hide the element */
@media only screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}`}
      </pre>

      <h1 className="text-2xl">Change Font Size With Media Queries</h1>
      <p>Media queries can be used to adjust an element’s font size based on the screen size.</p>
      <p className="bg-gray-300 text-center p-5 text-xl">Font Size</p>
      <h1 className="text-2xl">Example</h1>
      <pre className="text-green-400 bg-gray-900 p-4 rounded-lg">
        {`/* If the screen size is 601px or more, set the font-size of <div> to 80px */
@media only screen and (min-width: 601px) {
  div.example {
    font-size: 80px;
  }
}

/* If the screen size is 600px or less, set the font-size of <div> to 30px */
@media only screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}`}
      </pre>

      






















      {/* Explanation */}
      <h2 className="text-2xl font-semibold">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Default view (desktop): background lightblue aur heading normal size.
        </li>
        <li>
          <code>@media (max-width: 768px)</code> → Tablet screens par background lightgreen ho jata hai aur font chhota ho jata hai.
        </li>
        <li>
          <code>@media (max-width: 480px)</code> → Mobile screens par background lightcoral ho jata hai aur heading aur chhoti ho jati hai.
        </li>
      </ul>
    </div>
  );
};

export default CssRWDMediaQueries;