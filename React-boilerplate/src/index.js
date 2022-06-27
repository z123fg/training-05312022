/* import React from "react";
import { createRoot } from 'react-dom/client'; */

/* 
  React-boilerplate: Create react app(cra), Next.js, Gatsby,
  react: library
  angular/vuejs: framework

  react: create virtual dom
  react-DOM: render virtual dom into page and update actual dom

  virtual dom: is an object, is light weight representation of dom in react
  virtual node:

  React re-render the page based on the update of state or props, 
  everytime react try to re-render the page, it will create a new virtual-dom based on 
  current value of state and props, compare the current virtual dom with previous virtual dom
  using diffing algorithm, react is going to find out which part of the actual should be update
  which part should not.
  prevent unnecessary re-rendering

  dom: document object model
  dom node:

  jsx: is syntax sugar in React that help you call React.createElement function
  syntax sugar: spread operator ,rest operator, destructuring, class

  module system: commonjs(nodejs) esmodule systemjs udm

  node project
  node powered workflow

  babel: transpiler polyfill

  webpack: bundler, minification
*/
// console.log("hello world");
// console.log("react", React);
// console.log("react-dom", ReactDOM);

import HelloMessage from "./components/HelloMessage";
import { createRoot } from "react-dom/client";

// console.log(
//   "virtual node",
//   React.createElement("div", null, "123")
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<HelloMessage name="Taylor" />);
