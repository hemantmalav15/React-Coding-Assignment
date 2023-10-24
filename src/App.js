import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// JSX (React Element) = HTML like syntax -> React.createElement -> Object -> DOM
// React Element using JSX
// const heading = <h1>Namaste React</h1>;

/**
 * Food Ordering App
 *   - Header
 *      - Logo
 *      - Nav-Items
 *   - Body
 *      - Search Bar
 *      - Restaurants
 *         - RestaurantCard
 *            - Image
 *            - Name
 *            - Cuisines
 *   - Footer 
 * 
 */

function App() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);