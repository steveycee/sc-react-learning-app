import { consoleTitleStyling } from "../../../code-examples/console-styling.js";
import { ternaryExample } from "../../../code-examples/ternary-example";
import CodeBlock from "../../../components/code-block/code-block";

function EventHandlers() {
  const thisFile = require("!!raw-loader!./event-handlers");

  const localFunction = () => {
    console.log("%cEvent handler example", consoleTitleStyling);
    console.log("You pressed the button!");
  };

  return (
    <>
      <h2>Event handler example</h2>
      <p>
        This is a component showcasing an event listenter, the buttons bellow
        will call a function when clicked. Open the web console to see what
        happens.
      </p>
      <div>
        <p>
          Push this button to invoke a function or method internal to this
          component.
        </p>
        <button onClick={localFunction}>Internal/Local function</button>
      </div>
      <div>
        <p>
          Push this button to invoke a function/method external (stored in a
          different file) to this component.
        </p>
        <button onClick={ternaryExample}>External function</button>
      </div>
      <CodeBlock nameOfFunction="Event Handlers" code={thisFile} />
      <p>
        Read more{" "}
        <a href="https://www.w3schools.com/REACT/react_events.asp">here</a> on
        w3schools.
      </p>
    </>
  );
}

export default EventHandlers;
