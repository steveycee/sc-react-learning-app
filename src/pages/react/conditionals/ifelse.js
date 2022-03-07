// Required to show this Codeblock
import StyledCodeBlock from "../../../components/code-block/styled-code-block";

function IfCondition() {
  return (
    <>
      <p>This text will show if the prop is set to true.</p>
    </>
  );
}

function ElseCondition() {
  return (
    <>
      <p>This text will show if the prop is set to false.</p>
    </>
  );
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <IfCondition />;
  }
  return <ElseCondition />;
}

function IfElse() {
  // Required for Codeblock
  const thisFile = require("!!raw-loader!./conditionals");

  return (
    <>
      <h2>Conditionals</h2>
      <p>Test</p>
      <Goal isGoal={false} />
      <StyledCodeBlock nameOfFunction="Conditionals" code={thisFile} />
    </>
  );
}

export default IfElse;
