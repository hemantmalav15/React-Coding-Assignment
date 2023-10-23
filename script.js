import React from "react";
import ReactDOM from "react-dom/client";

// JSX (React Element) = HTML like syntax -> React.createElement -> Object -> DOM
// React Element using JSX
const heading = <h1>Namaste React</h1>;
// React Element
const container = (
    <div>
        <h1>Namaste React</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
    </div>
);

/**
 * Components -> Everything in React is Component, and there are two types of components in React
 * 1. Functional Component - NEW 
 * 2. Class Based Component - OLD
 * 
 * functional components is a normal javascript function.
 */

// function Header() {
//     return (
//         <h1>Namaste React</h1>
//     );
// }

// Both are same thing -> we can skip return and curly braces
// const Header = () => (
//     <h1>Namaste React</h1>
// );

const styleObj = {
    display: "flex",
    justifyContent: "space-between"
}
const styleObj2 = {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
}
// lets create a header 
const Header = () => (
    <div className="header" style={styleObj}>
        <h1 className="logo">Namaste React</h1>
        <ul className="list" style={styleObj2}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
    </div>
)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);