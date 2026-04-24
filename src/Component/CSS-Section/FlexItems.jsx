import React from "react";

const CSSFlexItems = () => {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Flex Items</h1>
      <p>
        When a container is given display: flex;, all the elements inside it automatically become flex items. We can apply different properties to these items to control their size and alignment.
      </p>

      <h1 className="text-2xl">Example</h1>
      <p>The children that are directly inside a flex container are flex items by default.</p>
      <div className=" border-2 border-black flex flex-wrap items-center mt-6">
        <div className="bg-red-400 px-4 py-2 m-2">Item 1</div>
        <div className="bg-red-400 px-4 py-2 m-2">Item 2</div>
        <div className="bg-red-400 px-4 py-2 m-2">Item 3</div>
        <div className="bg-red-400 px-4 py-2 m-2">Item 4</div>
      </div>
      <p>The layout above consists of a grey flex container with four blue items inside.</p>
      <h1 className="text-2xl">Example</h1>
    <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

      <h1 className="text-2xl">CSS order Property</h1>
      <p>The order value decides how flex items are positioned relative to one another.</p>
      <p>The first item in the markup can appear later in the layout, depending on its order value.</p>
     <p>The order property takes a numeric value—0 is used if no value is specified.</p>

    <div className="border-2 border-black flex flex-wrap items-center mt-6">
      <div className="bg-red-400 px-4 py-2 m-2 order-3">Item 1</div>
      <div className="bg-red-400 px-4 py-2 m-2 order-2">Item 2</div>
      <div className="bg-red-400 px-4 py-2 m-2 order-4">Item 3</div>
      <div className="bg-red-400 px-4 py-2 m-2 order-1">Item 4</div>
    </div>

    <h1 className="text-2xl">Example</h1>
    <p>With the order property, you can change the layout order of items without altering the markup.</p>
  <pre className="bg-gray-200 rounded-lg p-4 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"order: 3"</span><span className="text-blue-600">&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"order: 2"</span><span className="text-blue-600">&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"order: 4"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"order: 1"</span><span className="text-blue-600">&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

    <h1 className="text-2xl">CSS flex-grow Property</h1>
     <p>When there's extra space, flex-grow decides how much of it each item should receive.</p>
     <div className="border-2 border-black flex flex-wrap items-center mt-6">
      <div className="bg-red-400 px-20 py-5 m-2">Item1</div>
      <div className="bg-red-400 px-20 py-5 m-2">Item2</div>
      <div className="bg-red-400 px-32 py-5 m-2">Item3</div>
     </div>
     <p>This property accepts a numeric value, with a default of 0.</p>
     <h1 className="text-2xl">Example</h1>
     <p>The third flex item should grow eight times faster compared to its siblings.</p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"flex-grow: 1"</span><span className="text-blue-600">&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"flex-grow: 1"</span><span className="text-blue-600">&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"flex-grow: 8"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>
     <h1 className="text-2xl">CSS flex-shrink Property</h1>
     <p>This property determines how much a flex item will reduce its size in relation to other flex items.</p>
     <div className="border-2 border-black flex flex-wrap items-center mt-6">
      <div className="bg-red-400 px-3 py-5 m-2">Item1</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item2</div>
      <div className="bg-red-400 px-10 py-5 m-2">Item3</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item4</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item5</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item6</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item7</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item8</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item9</div>
      <div className="bg-red-400 px-3 py-5 m-2">Item10</div>
     </div>
     <p>The default value is 1, and the value must be a number.</p>
     <h1 className="text-2xl">Example</h1>
     <p>The third flex item should shrink less than the other items.</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"flex-shrink: 0"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>5<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>6<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>7<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>8<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>9<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>10<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

     <h1 className="text-2xl">CSS flex-basis Property</h1>
     <p>The flex-basis value specifies the base size of a flex item.</p>
     <div className="border-2 border-black flex flex-wrap items-center mt-6">
      <div className="bg-red-400 px-4 py-5 m-2">Item1</div>
      <div className="bg-red-400 px-4 py-5 m-2">Item1</div>
      <div className="bg-red-400 px-10 py-5 m-2">Item1</div>
      <div className="bg-red-400 px-4 py-5 m-2">Item1</div>
     </div>

     <h1 className="text-2xl">Example</h1>
     <p>Set the flex-basis of the third item to 200 pixels.</p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"flex-basis: 200px"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

     <h1 className="text-2xl">CSS flex Property</h1>
     <p>The flex property is a shorthand for flex-grow, flex-shrink, and flex-basis.</p>
     <h1 className="text-2xl">Example</h1>
     <p>Make the third flex item fixed at 200px by setting flex-grow and flex-shrink to 0.</p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"flex: 0 0 200px"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

     <h1 className="text-2xl">CSS align-self Property</h1>
     <p>The align-self property sets how a specific flex item is aligned within the flex container.</p>
     <p>This property overrides the alignment set by the container’s align-items property.</p>
     <div className="border-2 border-black flex flex-wrap justify-center p-4 items-center mt-6">
      <div className="bg-red-400 px-4 py-12 m-2">Item1</div>
      <div className="bg-red-400 px-4 py-12 m-2">Item2</div>
      <div className="bg-red-400 px-4 py-8  m-2">Item3</div>
      <div className="bg-red-400 px-4 py-12 m-2">Item4</div>
      <div className="bg-red-400 px-4 py-12 m-2">Item5</div>
     </div>
     <p>These examples use a container with a height of 200 pixels to clearly show how the align-self property works.</p>
     <h1 className="text-2xl">Example</h1>
     <p>Align the third flex item in the middle of the container:</p>
   <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"align-self: center"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>

     <h1 className="text-2xl">Example</h1>
     <p>Align the second item to the container’s top and the third item to its bottom.</p>
   <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;div</span> <span className="text-red-500">class</span>=<span className="text-green-700">"flex-container"</span><span className="text-blue-600">&gt;</span><br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>1<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"align-self: flex-start"</span><span className="text-blue-600">&gt;</span>2<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div</span> <span className="text-red-500">style</span>=<span className="text-green-700">"align-self: flex-end"</span><span className="text-blue-600">&gt;</span>3<span className="text-blue-600">&lt;/div&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;div&gt;</span>4<span className="text-blue-600">&lt;/div&gt;</span><br />

    <span className="text-blue-600">&lt;/div&gt;</span>
  </code>
</pre>


      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Flex Items</h2>

       <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-gray-500">/* Flex Container */</span><br />

    <span className="text-blue-600">.container</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">display</span>: <span className="text-green-700">flex</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">border</span>: <span className="text-green-700">2px solid black</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">height</span>: <span className="text-green-700">150px</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* Flex Items */</span><br />

    <span className="text-blue-600">.item1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">flex</span>: <span className="text-green-700">1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">lightcoral</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.item2</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">flex</span>: <span className="text-green-700">2</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">lightseagreen</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">.item3</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">flex</span>: <span className="text-green-700">1</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">lightskyblue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

        {/* Live Demo */}
        <div className="border-2 border-black h-40 flex mt-6">
          <div className="bg-red-400 flex-1 flex items-center justify-center text-white font-bold">
            Item 1
          </div>
          <div className="bg-green-500 flex-[2] flex items-center justify-center text-white font-bold">
            Item 2
          </div>
          <div className="bg-blue-400 flex-1 flex items-center justify-center text-white font-bold">
            Item 3
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-green-100 p-3 border">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>flex</code> → This is the shorthand property for flex-grow, flex-shrink, and flex-basis.
          </li>
          <li>
            <code>flex: 1;</code> → It assigns equal space to the item.
          </li>
          <li>
            <code>flex: 2;</code> → It gives the item double the space compared to the other items.
          </li>
          <li>
            Flex items are responsive and efficiently fill the space inside the container.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSFlexItems;