// Required to style our console logs
import { consoleTitleStyling } from "../../../code-examples/console-styling.js";
// Required to show this Codeblock
import CodeBlock from "../../../components/code-block/code-block";

function PassingArgumentsEventHandler() {
  //Required for Codeblock
  const thisFile = require("!!raw-loader!./passing-arguments-event-handler");

  const functionExample = (a) => {
    console.log(
      "%cPassing an Arguement in an Event handler example",
      consoleTitleStyling
    );
    console.log(a);
  };

  return (
    <>
      <h2>Passing arguements into event handler example</h2>
      <p>
        This component shows how to pass an arguement instead of just calling a
        function and having it do all the lifting. You need to not only put the
        function in curly brackets but also use an arrow function. You should
        see some text printed to the console.
      </p>
      <button
        onClick={() =>
          functionExample(
            "The parametre 'a' declared in the functionExample function has been replaced with this text."
          )
        }
      >
        Press me!
      </button>
      <CodeBlock
        nameOfFunction="Passing Arguments and EventHandlers"
        code={thisFile}
      />
    </>
  );
}

export default PassingArgumentsEventHandler;
