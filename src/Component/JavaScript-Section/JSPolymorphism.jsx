import React, { useState } from "react";

const JSPolymorphism = () => {
  const [output, setOutput] = useState("");

  // ✅ Base class
  class Animal {
    speak() {
      return "Animal makes a sound";
    }
  }

  // ✅ Derived class - overriding method
  class Dog extends Animal {
    speak() {
      return "Dog says Woof 🐶";
    }
  }

  class Cat extends Animal {
    speak() {
      return "Cat says Meow 🐱";
    }
  }

  const handleExample = () => {
    const animals = [new Animal(), new Dog(), new Cat()];

    const results = animals.map((a) => a.speak()).join("\n");
    setOutput(results);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Polymorphism in <span className="text-green-600">JavaScript OOP</span>
      </h1>

      <p className="text-gray-700">
        <strong>Polymorphism</strong> allows objects of different classes to
        be treated as objects of a common base class. It often involves{" "}
        <strong>method overriding</strong> so that the same method behaves
        differently depending on the object.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Polymorphism Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Base class
class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

// Derived classes with overridden methods
class Dog extends Animal {
  speak() {
    return "Dog says Woof 🐶";
  }
}

class Cat extends Animal {
  speak() {
    return "Cat says Meow 🐱";
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(a => console.log(a.speak()));

// Output:
// Animal makes a sound
// Dog says Woof 🐶
// Cat says Meow 🐱`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Animal</strong> is the base class with a generic <code>speak()</code> method.
        </li>
        <li>
          <strong>Dog</strong> and <strong>Cat</strong> inherit from Animal and override <code>speak()</code>.
        </li>
        <li>
          Calling <code>speak()</code> on different objects executes different behaviors, demonstrating polymorphism.
        </li>
        <li>
          This allows using a common interface (<code>speak()</code>) for multiple object types.
        </li>
      </ul>
    </div>
  );
};

export default JSPolymorphism;