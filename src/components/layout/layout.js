import React from "react";
import ReactDOM from "react-dom";
import EventHandlerExample from "../event-handler-example/event-handler-example";
import PassingArgumentsEventHandlerExampleComponent from "../passing-arguements-example/passing-arguements-example";
import ReactEventObjectExample from "../react-event-object-example/react-event-object-example";
import CodeBlock from "../code-block/code-block";

function LocalComponent(props) {
  return (
    <>
      <h3>Component local to layout</h3>
      <p>I'm a stand alone component colocated with the Layout component.</p>
      <p>
        Props can be passed to me as Variables delcared in the Layout component:{" "}
        <mark>{props.variableasaprop}</mark>
      </p>
      <p>
        You can also pass an object as a prop, the prop should be say Cirlce:
        <mark>{props.objectasaprop.object1}</mark>
      </p>
      <CodeBlock />
    </>
  );
}

function Layout() {
  //Props for the local component below to use.
  const propVariable = "I'm a prop passed as a variable";
  const propObject = { object1: " Circle", object2: " Square" };

  return (
    <>
      <h1>React W3C learning</h1>
      <p>I'm a component with all the other components inside of me.</p>
      <p>
        Essentially I'm the top level 'Layout' component, ultimately we can only
        export one component from a file so this one contains all the other
        components
      </p>
      <h2>Component Examples</h2>
      <div id="demo"></div>
      <LocalComponent
        variableasaprop={propVariable}
        objectasaprop={propObject}
      />
      {/* <PropsExample variableasaprop={propVariable} objectasaprop={propObject} /> */}
      {/* <ExternalComponent color="red" /> */}
      <h2>Event Handlers</h2>
      <p>
        For more information click{" "}
        <a href="https://www.w3schools.com/REACT/react_events.asp">here</a>.
      </p>
      <EventHandlerExample />
      <PassingArgumentsEventHandlerExampleComponent />
      <ReactEventObjectExample />
      {/* <CodeBlock /> */}
    </>
  );
}

ReactDOM.render(<Layout />, document.getElementById("root"));

export default Layout;
