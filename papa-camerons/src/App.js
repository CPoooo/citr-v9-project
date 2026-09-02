import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  debugger;
  return React.createElement(
    "div",
    { style: { backgroundColor: "grey", borderRadius: 25 } },
    [
      Pizza({
        name: "Pepperoni",
        description:
          "Pepperoni pizza with tomato sauce, cheese, and italian seasoning",
      }),
      Pizza({
        name: "Margherita",
        description:
          "Margherita pizza with tomato sauce, large mozzarella, and basil",
      }),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
