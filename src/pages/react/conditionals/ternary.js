// Required to show this Codeblock
import StyledCodeBlock from "../../../components/code-block/styled-code-block";

function TorpedoDestroyed() {
  return <strong>Taken out by PDC's!</strong>;
}

function TorpedoHit() {
  return <strong>Target destroyed.</strong>;
}

function HitMiss(props) {
  const hit = props.hit;
  return <>{hit ? <TorpedoHit /> : <TorpedoDestroyed />}</>;
}

function Ternary() {
  // Required for Codeblock
  const thisFile = require("!!raw-loader!./ternary");

  return (
    <>
      <h2>Logical && Conditional</h2>
      <p>
        Here we call a function called HitMiss which uses a Ternary conditional
        to determine whether or not a torpedo hits its target. If its set to
        true then the function will print that its a hit, if not it will give an
        explaination as to why (there's only one..).
      </p>
      <HitMiss hit={false} />
      <StyledCodeBlock nameOfFunction="Conditionals" code={thisFile} />
    </>
  );
}

export default Ternary;
