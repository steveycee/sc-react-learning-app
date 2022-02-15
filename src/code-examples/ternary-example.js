import { consoleTitleStyling } from "console-styling.js";

const ternaryExample = (value) => {
  value >= 5
    ? console.log("The value is five or greater.")
    : console.log("The value is less than five.");
};

ternaryExample(3);
console.log("%c Ternary Example Code ", consoleTitleStyling);
console.log(ternaryExample);
