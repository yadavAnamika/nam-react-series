
/**
 * <div id="root">
 *      <h1 id="heading1">HELLO</h1>
 * </div>
 */
// const heading = React.createElement("h1", { id: "heading1", xyz: "dfjhd" }, "HELLO");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * Creates a heading element with a specific ID and text content.
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading1">HELLO</h1>
 *          <h2 id="heading2">2 HELLO</h1>
 *      </div>
 * </div>
 */
// const contentchild = React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", { id: "heading1" }, "HELLO"),
//     React.createElement("h2", { id: "heading2" }, "2 HELLO")]);
// const contentparent = React.createElement("div", { id: "parent" }, contentchild);
// console.log(contentparent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(contentparent);

// const content = React.createElement("div", { title: "parent-div" },
//     [React.createElement("span", { id: "spanid" }, "my 1st span"),
//     React.createElement("h2", { title: "h2-title" }, "my H2")])

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading1">HELLO</h1>
 *         <h2 id="heading2">2 HELLO</h1>
 *      </div>
 *      <div id="sibling">
 *          <h1 id="heading3">3 HELLO</h1>
 *          <h2 id="heading4">4 HELLO</h1>
 *      </div>
 * </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";
const content = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading1" }, "HELLO"),
        React.createElement("h2", { id: "heading2" }, "2 HELLO")]),
    React.createElement("div", { id: "sibling" },
        [React.createElement("h1", { id: "heading3" }, "3 HELLO"),
        React.createElement("h2", { id: "heading4" }, "4 HELLO")])]);

console.log(content);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
