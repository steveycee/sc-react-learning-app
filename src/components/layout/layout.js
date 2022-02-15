import React from "react";
import ReactDOM from "react-dom";
// import ExternalComponent from "./external-component";
import CodeBlock from "../code-block/code-block";
import PropsExample from "../props-example/props-example";

let consoleTitleStyling = "background: #FFF; color: #123870; font-size: 1rem";

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
      <EventHandlerExampleComponent />
      <PassingArgumentsEventHandlerExampleComponent />
      <ReactEventObjectExample />
      <CodeBlock />
    </>
  );
}

//---------
// REACT COMPONENTS https://www.w3schools.com/REACT/react_components.asp
//---------

function EventHandlerExampleComponent() {
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

function PassingArgumentsEventHandlerExampleComponent() {
  const shoot = (a) => {
    console.log(
      "%cPassing an Arguement in an Event handler example",
      consoleTitleStyling
    );
    console.log(a);
  };

  return (
    <>
      <h3>Passing arguements into event handler example</h3>
      <p>
        This component shows how to pass an arguement instead of just calling a
        function and having it do all the lifting. You need to not only put the
        function in curly brackets but also use an arrow function. You should
        see some text printed to the console.
      </p>
      <button
        onClick={() =>
          shoot(
            "The parametre 'a' declared above has been replaced with this text."
          )
        }
      >
        Press me!
      </button>
    </>
  );
}

function ReactEventObjectExample() {
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
      <h3>React Event Object Example</h3>
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
    </>
  );
}

ReactDOM.render(<Layout />, document.getElementById("root"));

export default Layout;
