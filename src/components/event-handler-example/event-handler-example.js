import { consoleTitleStyling } from "../../code-examples/console-styling.js";

function EventHandlerExample() {
  const shoot = () => {
    console.log("%cEvent handler example", consoleTitleStyling);
    console.log("You pressed the button!");
  };

  return (
    <>
      <h3>Event handler example</h3>
      <p>
        This is a component to show you how to use an extent listenter, the
        button bellow will call a function above called shoot which will print
        to the console.
      </p>
      <button onClick={shoot}>Press me!</button>
    </>
  );
}
