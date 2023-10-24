import React from "react";
import ReactDOM from "react-dom/client";

// JSX (React Element) = HTML like syntax -> React.createElement -> Object -> DOM
// React Element using JSX
// const heading = <h1>Namaste React</h1>;

/**
 * Components -> Everything in React is Component, and there are two types of components in React
 * 1. Functional Component - NEW 
 * 2. Class Based Component - OLD
 * 
 * functional components is a normal javascript function.
 */
const Heading = () =>
    <div>
        <h1>namaste react</h1>
    </div>;
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);