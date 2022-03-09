import { consoleTitleStyling } from "../../../code-examples/console-styling.js";
import StyledCodeBlock from "../../../components/code-block/styled-code-block";

function Ship(props) {
  return <li>{props.brand}</li>;
}

function Docked() {
  const ships = ["Enterprise", "Bebop", "Razorcrest"];
  return (
    <>
      <p>Who lives in my garage?</p>
      <ul>
        {ships.map((ship) => (
          <Ship brand={ship} />
        ))}
      </ul>
    </>
  );
}

function Lists() {
  const thisFile = require("!!raw-loader!./lists");
  return (
    <>
      <h2>Lists Conditional</h2>
      <p>
        The below component and code shows how to print out a list of strings in
        an array. You should notice a warning in the console around each child
        in a list having a unique key, we will deal with this next.
      </p>
      <Docked />
      <StyledCodeBlock nameOfFunction="Lists" code={thisFile} />
    </>
  );
}

export default Lists;
