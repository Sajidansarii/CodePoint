import React, { useState } from "react";


const JSExtendingError = () => {
  

  return (
    <div className="max-w-4xl p-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-3">Extending Error in JavaScript</h1>
      <p>JavaScript custom errors are errors that you define manually, used to handle specific cases in your code. They can be created with the Error constructor, which takes a string for the error message.</p>
      
      <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Extending the Error Class: Creating Custom Errors</h1>
      <p>The easiest and most effective way to create custom errors is by creating a class that extends Error. Through inheritance, the custom error class gets all properties of the Error class, which can be initialized in the <span className="text-red-400">constructor()</span>.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Syntax</h2>
     <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {`class customError extends Error {
   constructor(message) {
      super(message)
      // Initialize properties
   }
}`}
      </code>
     </pre>

     <p className="mt-5">Here, user input is read, and the check age button calls <span className="text-red-400">checkAge()</span>. The ageError class is defined by extending Error, with a constructor that initializes properties. The constructor uses <span className="text-red-400">super()</span> for the message and sets name and age. The <span className="text-red-400">checkAge()</span> function throws an error for ages below 18, and the catch block prints the error details.</p>
     <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {` const output = document.getElementById("demo");
      class ageError extends Error {
         constructor(message, age) {
            super(message);
            this.name = "ageError";
            this.age = age // Custom property
         }
      }
      function checkAge() {
         const ageValue = document.getElementById('age').value;
         try {
            if (ageValue < 18) { // Throw error when age is less than 18
               throw new ageError("You are too young", ageValue);
            } else {
               output.innerHTML = "You are old enough";
            }
         } catch (e) {
            output.innerHTML = "Error: " + e.message + ". <br>";
            output.innerHTML += "Age: " + e.age + "<br>";
         }
      }`}
      </code>
    </pre>

    <p className="mt-5">If your goal is to create several custom error classes just to provide specific error types and messages, without modifying the Error class properties, you can use the syntax below.</p>
   
    <p className="mt-10">The following code defines three custom classes that extend <span className="text-red-400">Error</span> to create custom errors. Inside the <span className="text-red-400">try</span> block, <span className="text-red-400">StringError</span> is thrown, and the <span className="text-red-400">catch</span> block uses instanceof to check the error type and print its message.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {` const output = document.getElementById("demo");
      class StringError extends Error { };
      class NumberError extends Error { };
      class BooleanError extends Error { };
      try {
         throw new StringError("This is a string error");
      } catch (e) {
         if (e instanceof StringError) {
            output.innerHTML = "String Error";
         } else if (e instanceof NumberError) {
            output.innerHTML = "Number Error";
         } else if (e instanceof BooleanError) {
            output.innerHTML = "Boolean Error";
         } else {
            output.innerHTML = "Unknown Error";
         }
      }`}
      </code>
    </pre>

    <h1 className="text-2xl text-gray-800 font-semibold mt-10 mb-3">Multilevel Inheritance</h1>
    <p>The code defines a NotFound class that extends Error, followed by propertyNotFound and valueNotFound classes extending NotFound, creating a multilevel inheritance structure. In the try block, a valueNotFound error is thrown when 6 is missing from the array.</p>
    <h2 className="text-2xl text-gray-800 font-semibold mt-5">Example</h2>
    <pre className="text-green-400 bg-gray-900 p-4 rounded-lg mt-5">
      <code>
        {` const output = document.getElementById("output");
      class NotFound extends Error {
         constructor(message) {
            super(message);
            this.name = "NotFound";
         }
      }
      
      // Further Inheritance
      class propertyNotFound extends NotFound {
         constructor(message) {
            super(message);
            this.name = "propertyNotFound";
         }
      }
      
      // Further Inheritance
      class ElementNotFound extends NotFound {
         constructor(message) {
            super(message);
            this.name = "ElementNotFound";
         }
      }

      try {
         let arr = [1, 2, 3, 4, 5];
         
         // Throw an error if array doesn't contain 6
         if (!arr.includes(6)) {
            throw new propertyNotFound("Array doesn't contain 6");
         }
      } catch (e) {
         output.innerHTML = e.name + ": " + e.message;
      }`}
      </code>
    </pre>



    </div>
  );
};

export default JSExtendingError;