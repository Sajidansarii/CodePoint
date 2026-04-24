import React  from 'react';

const Introduction = () =>{
    return(
         <div className="p-4 sm:p-6 md:p-8 max-w-4xl mt-10">
      <h1 className="text-2xl font-semibold text-blue-500 mb-3">HTML Introduction</h1>

      <p className="text-gray-700 leading-relaxed">
        HTML stands for <span className='text-red-400 bg-gray-50'>HyperText Markup Language</span>. It is the standard language used to create and structure content on the web. Every website you visit is built with HTML at its core.
      </p>

      <p className="text-gray-700 leading-relaxed">
        HTML is not a programming language. It's a markup language that uses <strong>tags</strong> to define the structure of a webpage — such as headings, paragraphs, links, images, lists, forms, and more.
      </p>

      <h2 className="sm:text-2xl text-xl font-semibold text-blue-500 mt-6 mb-2">Basic Structure of an HTML Document</h2>

    <pre className="bg-gray-100 text-sm p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap mb-3">
  <code>
    <span className="text-gray-500">&lt;</span>
    <span className="text-gray-500">!DOCTYPE</span>
    <span className="text-blue-500"> html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;</span>
    <span className="text-blue-500">html</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">title</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">My First HTML Page</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">title</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">head</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">h1</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">Hello, world!</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">h1</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    <span className="text-gray-700">This is a paragraph.</span>
    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">p</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&nbsp;&nbsp;&lt;/</span>
    <span className="text-blue-500">body</span>
    <span className="text-gray-500">&gt;</span>
    <br/>

    <span className="text-gray-500">&lt;/</span>
    <span className="text-blue-500">html</span>
    <span className="text-gray-500">&gt;</span>
  </code>
</pre>
      <h2 className="text-xl font-semibold text-blue-500 mt-6 mb-2">Explanation:</h2>
      <ul className="list-[square] list-inside text-gray-700 space-y-1 mb-3">
        <li><code>&lt;!DOCTYPE html&gt;</code> — Declares the document type (HTML5).</li>
        <li><code>&lt;html&gt;</code> — Root element of the HTML page.</li>
        <li><code>&lt;head&gt;</code> — Contains meta information like title, styles, etc.</li>
        <li><code>&lt;body&gt;</code> — All the visible content goes inside this tag.</li>
        <li><code>&lt;h1&gt;</code> — A top-level heading.</li>
        <li><code>&lt;p&gt;</code> — A paragraph element.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2">Why Learn HTML?</h2>
      <ul className="list-[square] list-inside text-gray-700 space-y-1 mb-3">
        <li>It is the foundation of all web pages.</li>
        <li>Essential for frontend web development.</li>
        <li>Works together with CSS and JavaScript.</li>
        <li>Easy to learn and beginner-friendly.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">Quick Recap</h2>
      <ul className="list-[square] list-inside text-gray-700 space-y-1">
        <li>HTML = HyperText Markup Language</li>
        <li>Used to structure content on the web</li>
        <li>Uses tags like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, etc.</li>
        <li>Every web developer must learn HTML first</li>
      </ul>
    </div>
  
    )
}

export default Introduction