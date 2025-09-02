import React from "react";

export default function JavaVsJavaScript() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Page Title */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            Difference Between Java and JavaScript
          </h1>
          <p className="text-lg text-gray-600">
            Same name, but two completely different programming languages ⚡
          </p>
        </header>

        {/* Intro Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Despite having similar names,{" "}
            <span className="font-semibold text-blue-600">Java</span> and{" "}
            <span className="font-semibold text-yellow-600">JavaScript</span>{" "}
            are very different in purpose, design, and usage. Java is a{" "}
            <span className="font-semibold">general-purpose, object-oriented</span>{" "}
            programming language, while JavaScript is primarily a{" "}
            <span className="font-semibold">scripting language for the web</span>.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="bg-blue-50 shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-3 border">Aspect</th>
                  <th className="p-3 border">Java</th>
                  <th className="p-3 border">JavaScript</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Type</td>
                  <td className="p-3 border">Object-Oriented, Compiled</td>
                  <td className="p-3 border">Scripting, Interpreted</td>
                </tr>
                <tr>
                  <td className="p-3 border">Platform</td>
                  <td className="p-3 border">Runs on JVM, cross-platform</td>
                  <td className="p-3 border">Runs in browser or Node.js</td>
                </tr>
                <tr>
                  <td className="p-3 border">Use Case</td>
                  <td className="p-3 border">Desktop, Mobile, Backend (Spring, Android)</td>
                  <td className="p-3 border">Frontend interactivity, Backend (Node.js)</td>
                </tr>
                <tr>
                  <td className="p-3 border">Syntax</td>
                  <td className="p-3 border">Strictly typed, class-based</td>
                  <td className="p-3 border">Loosely typed, prototype-based</td>
                </tr>
                <tr>
                  <td className="p-3 border">Execution</td>
                  <td className="p-3 border">Compiled into bytecode</td>
                  <td className="p-3 border">Executed directly by browser</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example */}
        <section className="bg-gray-900 text-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Example: Java vs JavaScript
          </h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{`// Java Code Example
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}

// JavaScript Code Example
let name = "World";
function greet(user) {
    return \Hello from JavaScript, \${user}!\;
}
console.log(greet(name));`}</code>
          </pre>
        </section>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-2xl p-6">
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
            ✅ Java and JavaScript share a similar name but serve different
            purposes. Java is a compiled, general-purpose language, while
            JavaScript is an interpreted scripting language mainly for web
            development.
          </p>
        </section>
      </div>
    </div>
  );
}