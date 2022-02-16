import "./code-block.css";

// const ternaryExample = require("!!raw-loader!../../code-examples/ternary-example.js");

function CodeBlock(props) {
  return (
    <>
      <div>
        <pre>
          <code>{/* <p>{ternaryExample.tostring()}</p> */}</code>
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
