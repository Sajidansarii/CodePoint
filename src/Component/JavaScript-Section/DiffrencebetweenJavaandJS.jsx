import React from "react";
import JavaScriptSyntax from "./SyntaxofJS";

export default function JavaVsJavaScript() {
  const data = [
    {Sr:'1', Key:'Language Type', Java:'Java is primarily an object-oriented programming language that requires a virtual machine platform for its execution.', JavaScript:'JavaScript is a lightweight programming language("scripting language") and is used to make web pages that do not require such a virtual environment for their execution.'},
    {Sr:'2', Key:'Syntax and semantics', Java:'Java is a type of language where the compiler reports exceptions in case the syntax does not meet the requirement, or we can say that type and code semantics are checked at compile time.', JavaScript:'On the other hand, JavaScript is a weakly typed language and has more relaxed syntax and rules.'},
    {Sr:'3', Key:'Oops Concept', Java:'Java is a pure object-oriented programming language.', JavaScript:'JavaScript, on the other hand, is an object-based scripting language.'},
    {Sr:'4', Key:'JVM requirement', Java:'Java requires a JVM in order to create a virtual environment for its code execution.', JavaScript:'On the other hand code of JavaScript runs on the browser only, so no such JVM is required for code execution.'},
    {Sr:'5', Key:'File extension',  Java:'One difference between them is that the extension of the file in which Java code is saved is ".java".', JavaScript:'While the code of JavaScript gets saved in a file which has an extension of ".js"'},
    {Sr:'6', Key:'Performance and memory consumption', Java:'As we know, Java requires a JVM, which makes it consume more memory and slower in the performance of code execution. Each time we need to deploy the code to reflect the code change in Java.', JavaScript:'On the other hand, JavaScript code gets compiled and runs on the browser only and thus consumes less memory and is faster in performance. Each time we do not need to deploy the code to reflect the code change in JavaScript.' },
  ];
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl space-y-8">
        {/* Page Title */}
        <header>
          <h1 className="text-3xl font-medium text-blue-500 mb-2">
            Difference Between Java and JavaScript
          </h1>
          <p className="text-lg text-gray-600">
            Same name, but two completely different programming languages 
          </p>
        </header>

        {/* Intro Section */}
        <section className="py-6">
          <p className="leading-relaxed">
           Java and JavaScript are used in application development, but they are quite different. The key differences are discussed below.
          </p>
          <h1 className="text-2xl mt-5 mb-2">Java</h1>
          <p>Java is a high-level, platform-independent programming language widely used in the development of web applications, mobile apps, games, and more. It is statically typed, meaning the code is checked for errors at compile time before execution.</p>
          <h1 className="text-2xl mt-5 mb-2">JavaScript</h1>
          <p>In contrast, JavaScript is a dynamically typed language, meaning errors are detected during runtime. It is both a client-side and server-side language, enabling developers to write code that runs in the browser as well as on the server. JavaScript is primarily used to create interactive and dynamic web pages. Below are the key differences between Java and JavaScript.</p>
        </section>

        {/* Comparison Table */}
          <h2 className="text-2xl font-semibold">Key Differences</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full border border-gray-300 text-gray-700 text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Sr. No.</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Key</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Java</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">JavaScript</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row,index)=>(
                  <tr className="cursor-text hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-200">{row.Sr}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.Key}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.Java}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{row.JavaScript}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            <p>The following are the key differences between Java and JavaScript.</p>
            <h1 className="text-2xl">Example</h1>
            <p>To better understand the difference between Java and JavaScript, consider the following example.</p>

          

        {/* Code Example */}
          <h2 className="text-xl font-semibold mb-4">Example: Java vs JavaScript </h2>
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
        <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    // Java Code Example
    <br />
    public class HelloWorld {"{"}
    <br />
    &nbsp;&nbsp;public static void main(String[] args) {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello from Java!");
    <br />
    &nbsp;&nbsp;{"}"}
    <br />
    {"}"}
    <br /><br />

    // JavaScript Code Example
    <br />
    let name = "World";
    <br />
    function greet(user) {"{"}
    <br />
    &nbsp;&nbsp;return \`Hello from JavaScript, \${user}!\`;
    <br />
    {"}"}
    <br />
    console.log(greet(name));
  </code>
</pre>
        </section>

        {/* Explanation Section */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Java Code:</span> Must be compiled
              into bytecode and runs inside the{" "}
              <span className="font-semibold">Java Virtual Machine (JVM)</span>.
              It’s strongly typed and requires a full class structure.
            </li>
            <li>
              <span className="font-semibold">JavaScript Code:</span> Runs
              directly in the browser or Node.js, doesn’t need compilation, and
              is loosely typed.
            </li>
            <li>
              Both can print “Hello World”, but the way they execute is
              completely different.
            </li>
          </ul>
        </section>

        {/* Takeaway */}
        <section className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
          <p className="text-lg">
            Java and JavaScript share a similar name but serve different
            purposes. Java is a compiled, general-purpose language, while
            JavaScript is an interpreted scripting language mainly for web
            development.
          </p>
        </section>
      </div>
    </div>
  );
}