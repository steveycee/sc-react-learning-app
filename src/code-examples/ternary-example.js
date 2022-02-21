import { consoleTitleStyling } from "./console-styling.js";

export const ternaryExample = (value) => {
  console.log("%cTernary Example Code ", consoleTitleStyling);

  value >= 5
    ? console.log("The value is five or greater.")
    : console.log("The value is less than five.");
};

export const steve = () => {
  console.log("steve");
};

// ternaryExample(3);
// console.log(ternaryExample);
