// Required to show this Codeblock
import StyledCodeBlock from "../../../components/code-block/styled-code-block";

function PropsExample(props) {
  return (
    <>
      <p>
        I am a component that recieves a prop, this means when I'm called and
        displayed on the page a prop (or property) can be passed as well, this
        function takes a prop called colour like: {props.colour}.{" "}
      </p>
      <p>
        You'll also notice in the codeblock below we are calling in a variable
        as a prop wrapped in curly brackets.
      </p>
    </>
  );
}

function Props() {
  //Required for Codeblock
  const thisFile = require("!!raw-loader!./props");

  return (
    <>
      <h2>Props Example placeholder</h2>
      <PropsExample colour="Red" />
      <StyledCodeBlock nameOfFunction="Props" code={thisFile} />
    </>
  );
}

export default Props;
