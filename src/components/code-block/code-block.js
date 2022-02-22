import "./code-block.css";
const steves = require("!!raw-loader!../../code-examples/ternary-example");

function CodeBlock(props) {
  // steve();
  return (
    <>
      <div>
        <h4>-Name of the function-</h4>
        <pre>
          <code>{steves.default.toString()}</code>
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
