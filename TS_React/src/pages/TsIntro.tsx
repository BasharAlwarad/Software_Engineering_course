import React from 'react';
import CodeHighlighter from '../components/CodeHighlighter';

const TsIntro = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">
      TypeScript Fundamentals
    </h1>
    <div className="max-w-2xl w-full space-y-6">
      <section className="bg-base-200 rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-2">What is TypeScript?</h2>
        <p>
          TypeScript is a superset of JavaScript that adds static typing. It
          helps catch errors early and makes code easier to understand and
          maintain.
        </p>
      </section>
      <section className="bg-base-200 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-bold">Static Types:</span> Add types to
            variables, function parameters, and return values.
          </li>
          <li>
            <span className="font-bold">Type Inference:</span> TypeScript can
            guess the type even if you don't specify it.
          </li>
          <li>
            <span className="font-bold">Interfaces & Types:</span> Define the
            shape of objects and functions.
          </li>
          <li>
            <span className="font-bold">Classes:</span> Use modern OOP features
            with type safety.
          </li>
          <li>
            <span className="font-bold">Tooling:</span> Better autocompletion,
            refactoring, and error checking in editors.
          </li>
        </ul>
      </section>
      <section className="bg-base-200 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">
          Example: Type Annotations
        </h2>
        <div className="bg-base-300 rounded p-2 overflow-x-auto text-sm">
          <CodeHighlighter
            code={`let age: number = 21;
let name: string = "Alice";
function greet(person: string): string {
  return "Hello, " + person;
}`}
            language="typescript"
          />
        </div>
      </section>
      <section className="bg-base-200 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Why Use TypeScript?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Find bugs before running your code</li>
          <li>Make code easier to read and maintain</li>
          <li>Works with existing JavaScript code</li>
        </ul>
      </section>
    </div>
  </div>
);

export default TsIntro;
