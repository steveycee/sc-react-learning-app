import "./code-block.css";

// const ternaryExample = require("!!raw-loader!../../code-examples/ternary-example.js");

function CodeBlock(props) {
  return (
    <>
      <div>
        <h4>Name of the function</h4>
        <pre>
          <code>{/* <p>{ternaryExample.tostring()}</p> */}Example</code>
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
