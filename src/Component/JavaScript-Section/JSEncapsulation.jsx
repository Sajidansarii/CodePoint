import React, { useState } from "react";

const JSEncapsulation = () => {
  const [output, setOutput] = useState("");

  // ✅ Encapsulation with private fields and methods
  class BankAccount {
    #balance; // private property

    constructor(owner, initialBalance) {
      this.owner = owner;
      this.#balance = initialBalance;
    }

    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        return `Deposited $${amount}. New Balance: $${this.#balance}`;
      }
      return "Deposit amount must be greater than 0.";
    }

    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        return `Withdrew $${amount}. Remaining Balance: $${this.#balance}`;
      }
      return "Insufficient funds or invalid amount!";
    }

    // Getter for balance (controlled access)
    getBalance() {
      return `Current Balance: $${this.#balance}`;
    }
  }

  const handleExample = () => {
    const account = new BankAccount("John", 1000);

    let result = "";
    result += account.deposit(500) + "\n";
    result += account.withdraw(300) + "\n";
    result += account.getBalance() + "\n";

    // ❌ Direct access not allowed
    try {
      result += Direct `Balance: ${account.balance}`;
    } catch {
      result += "❌ Cannot access private balance directly.";
    }

    setOutput(result);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Encapsulation in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        <strong>Encapsulation</strong> is the concept of wrapping data
        (properties) and behavior (methods) together while restricting direct
        access to some components. In JavaScript, this is done using{" "}
        <code className="bg-gray-200 px-1 rounded">private fields (#)</code>{" "}
        and <strong>getters/setters</strong>.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Run Encapsulation Example
      </button>

      <div className="p-4 bg-gray-100 rounded-md whitespace-pre-line">
        <p className="font-semibold text-gray-800">{output}</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class BankAccount {
  #balance; // private property

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    return \Deposited $ \${amount}. New Balance: $ \${this.#balance}\;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return \Withdrew $ \${amount}. Remaining Balance: $ \${this.#balance}\;
    }
    return "Insufficient funds!";
  }

  getBalance() {
    return \Current Balance: $ \${this.#balance}\;
  }
}

const account = new BankAccount("John", 1000);
console.log(account.deposit(500)); // Deposited $500. New Balance: $1500
console.log(account.withdraw(300)); // Withdrew $300. Remaining Balance: $1200
console.log(account.getBalance());  // Current Balance: $1200

console.log(account.#balance); // ❌ Error: Private field not accessible`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Private fields</strong> (declared with <code>#</code>) cannot
          be accessed outside the class.
        </li>
        <li>
          <strong>Methods</strong> like <code>deposit()</code> and{" "}
          <code>withdraw()</code> provide controlled access.
        </li>
        <li>
          <strong>Getter</strong> <code>getBalance()</code> allows read-only
          access.
        </li>
        <li>
          This ensures *data security* and prevents accidental modification.
        </li>
      </ul>
    </div>
  );
};

export default JSEncapsulation;