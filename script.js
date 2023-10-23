import React from "react";
import  ReactDOM from "react-dom/client";
// this is how we can create and nest Element using React
{
    /* lets say we want to create this 
    <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div> */
}
// let li = React.createElement("li", {}, "This is list item");
let ul = React.createElement(
    "ul",
    {
        id:"list"
    },
    [
        React.createElement(
            "li",
            {

            },
            "This is list item1"
        ),
        React.createElement(
            "li",
            {

            },
            "This is list item2"
        ),
        React.createElement(
            "li",
            {

            },
            "This is list item3"
        ),
        React.createElement(
            "li",
            {

            },
            "This is list item4"
        )
    ]
);

let div = React.createElement("div", {}, [ul]);
let heading = React.createElement(
    "h1",
    {
        id: "heading1",
        className: "h1"
    },
    "This is heading1",
    React.createElement(
        "p",
        {
            id: "para"
        },
        "This is paragraph inside h1",
    )
);
let heading2 = React.createElement(
    "h2",
    {
        id: "heading2",
        className: "h2"
    },
    "This is heading2"
);

let div1 = React.createElement(
    "div",
    {
        id: "root-div"
    },
    [heading, heading2]
);


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);