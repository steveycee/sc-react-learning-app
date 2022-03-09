// Required to show this Codeblock
import StyledCodeBlock from "../../../components/code-block/styled-code-block";

function SpaceStation(props) {
  const shipsDocked = props.ships;
  return (
    <>
      {shipsDocked.length > 0 && (
        <p>You have {shipsDocked.length} ships docked at your station.</p>
      )}
    </>
  );
}

const shipsDocked = ["Enterprise", "Bebop", "Razorcrest"];

function AmpersandAmpersand() {
  // Required for Codeblock
  const thisFile = require("!!raw-loader!./ampersandampersand");

  return (
    <>
      <h2>Logical && Conditional</h2>
      <p>
        Here we call a function called SpaceStation which uses a Logical &&
        conditional to say that if there are in the shipsDocked array then it
        will print on screen how many are docked. If there are none docked then
        it wont print out anything.
      </p>
      <SpaceStation ships={shipsDocked} />
      <StyledCodeBlock nameOfFunction="Conditionals" code={thisFile} />
    </>
  );
}

export default AmpersandAmpersand;
