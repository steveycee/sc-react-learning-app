import { consoleTitleStyling } from "../../../code-examples/console-styling.js";
import CodeBlock from "../../../components/code-block/code-block";

function ReactEventObject() {
  const exampleFunction = (a, b) => {
    console.log("%c  React Event Object " + a, consoleTitleStyling);
    console.log(
      "This function has two params, one is " +
        a +
        " and the other is designed to capture the event and is printed below"
    );
    console.log(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };
  return (
    <>
      <h2>React Event Object Example</h2>
      <p>
        This component has a method/function which takes 2 parametres, a and b.
        When we call it it will console log out both of those parametres. To
        read more go{" "}
        <a href="https://www.w3schools.com/REACT/react_events.asp">here</a> and
        read React Event Object
      </p>
      <button
        onClick={(event) =>
          exampleFunction("a (which is the first parametre)", event)
        }
        onFocus={(event) =>
          exampleFunction(
            "this is what happens when its in focus instead: ",
            event
          )
        }
      >
        Press me!
      </button>
      <CodeBlock />
    </>
  );
}
export default ReactEventObject;
