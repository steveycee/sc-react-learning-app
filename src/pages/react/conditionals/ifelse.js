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

function Result(props) {
  const trueorfalse = props.trueorfalse;
  if (trueorfalse) {
    return <IfCondition />;
  }
  return <ElseCondition />;
}

function IfElse() {
  // Required for Codeblock
  const thisFile = require("!!raw-loader!./ifelse");

  return (
    <>
      <h2>If/Else Conditional</h2>
      <p>Test</p>
      <Result isGoal={false} />
      <StyledCodeBlock nameOfFunction="Conditionals" code={thisFile} />
    </>
  );
}

export default IfElse;
