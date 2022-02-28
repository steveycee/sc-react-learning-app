import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import "./code-block.css";

function StyledCodeBlock(props) {
  return (
    <div>
      <h4>{props.nameOfFunction}</h4>
      <Highlight
        {...defaultProps}
        code={props.code.default.toString()}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <i>
        For info on codeblock styling click{" "}
        <a
          href="https://www.npmjs.com/package/prism-react-renderer"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </i>
    </div>
  );
}

export default StyledCodeBlock;
