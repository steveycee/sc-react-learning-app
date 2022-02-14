function ExternalComponent(props) {
  return (
    <>
      <p>
        I'm a component that lives in an external file, I'm imported in the top
        of index.js but my code is in a seperate file
        <strong> external-component.js</strong>. I've also got a property or
        prop that I'm going to display here, lets make it a colour and lets make
        it the colour: {props.color}. While I've got the code for props.color in
        the JSX to the right in curly brakets the actual colour ({props.color},
        I just did it again..) is set when we call the component in the
        index.js.
      </p>
      <p>
        If you want to pass a prop thats a variable you do it in curly brackets.
      </p>
    </>
  );
}

export default ExternalComponent;
