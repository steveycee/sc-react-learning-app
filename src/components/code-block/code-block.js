import "./code-block.css";

function CodeBlock(props) {
  return (
    <>
      <div>
        <h4>{props.nameOfFunction}</h4>
        <pre>
          <code>{props.code.default.toString()}</code>
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
