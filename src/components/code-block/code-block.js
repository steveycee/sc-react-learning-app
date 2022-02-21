import "./code-block.css";
// import "../../code-examples/ternary-example";

const steves = require("!!raw-loader!../../code-examples/ternary-example");

// const ternaryExample = require("!!raw-loader!../../code-examples/ternary-example.js");

function CodeBlock(props) {
  // steve();
  return (
    <>
      <div>
        <h4>-Name of the function-</h4>
        <pre>
          <code>{steves.default.toString()}Test</code>
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
