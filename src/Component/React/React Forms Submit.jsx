import React from "react";

const ReactFormsubmit = () => {
    return (
        <div className="max-w-4xl p-6 mt-10">
            <h1 className="text-3xl text-blue-500 font-semibold mb-3">React Submit Form</h1>
           
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Submitting Forms</h2>
           <p>Handle the form submission by assigning a function to the onSubmit <span className="text-red-400">attribute</span>.</p>
           <h2 className="text-2xl text-gray-800 font-semibold mt-5 mb-3">Example</h2>
           <p>Include a submit button and attach a handler to the form’s <span className="text-red-400">onSubmit</span>.</p>
          <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto text-sm">
  <code className="font-mono text-gray-900">

    <span className="text-purple-700">import</span>{" "}
    {"{"} useState {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react'</span>;
    {"\n"}

    <span className="text-purple-700">import</span>{" "}
    {"{"} createRoot {"}"}{" "}
    <span className="text-purple-700">from</span>{" "}
    <span className="text-yellow-700">'react-dom/client'</span>;
    {"\n\n"}

    <span className="text-purple-700">function</span>{" "}
    <span className="text-green-700">MyForm</span>() {"{"}
    {"\n"}

    {"  "}
    <span className="text-purple-700">const</span> [name, setName] =
    <span className="text-blue-700">useState</span>(
    <span className="text-yellow-700">""</span>
    );
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">function</span>{" "}
    handleChange(e) {"{"}
    {"\n"}

    {"    "}
    setName(e.target.value);
    {"\n"}

    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">function</span>{" "}
    handleSubmit(e) {"{"}
    {"\n"}

    {"    "}
    e.<span className="text-blue-700">preventDefault</span>();
    {"\n"}

    {"    "}
    <span className="text-blue-700">alert</span>(name);
    {"\n"}

    {"  "}
    {"}"}
    {"\n\n"}

    {"  "}
    <span className="text-purple-700">return</span> (
    {"\n"}

    {"    "}
    &lt;<span className="text-red-600">form</span>{" "}
    onSubmit={"{"}handleSubmit{"}"}&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">label</span>&gt;
    Enter your name:
    {"\n"}

    {"        "}
    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"text"</span>{" "}
    value={"{"}name{"}"} onChange={"{"}handleChange{"}"} /&gt;
    {"\n"}

    {"      "}
    &lt;/<span className="text-red-600">label</span>&gt;
    {"\n"}

    {"      "}
    &lt;<span className="text-red-600">input</span>{" "}
    type=<span className="text-yellow-700">"submit"</span> /&gt;
    {"\n"}

    {"    "}
    &lt;/<span className="text-red-600">form</span>&gt;
    {"\n"}

    {"  "}
    );
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-blue-700">createRoot</span>(
    document.getElementById(
    <span className="text-yellow-700">'root'</span>)
    ).render(
    &lt;<span className="text-green-700">MyForm</span> /&gt;
    );

  </code>
</pre>
        
        
        
        </div>
    )
}

export default ReactFormsubmit;