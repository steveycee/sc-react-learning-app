let consoleTitleStyling = "background: #FFF; color: #123870; font-size: 1rem";

//---------
// CLASSES https://www.w3schools.com/REACT/react_es6_classes.asp
//---------

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

// Extending car (class Model extends Car) allows us to get at the brand, which is in the Car class rather than the Model class.
// We've made Model a kind of child of Car.
class Model extends Car {
  // Name is from the parent, mod though will be declared below.
  constructor(name, mod) {
    // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    // So by saying super(name) we are saying go to my parent (which is Car because we said Model extends Car) and get me the thing equal to name which is this.brand = name
    // on line 8
    super(name);
    this.model = mod;
  }
  // Here we declare a new method that should return this.present (a method delcared in the parent function) and then add to it a string and then the this.model
  // declared in this class.
  show() {
    // console.log(this.present() + ", its a " + this.model);
    return this.present() + ", its a " + this.model;
  }
}

const mycar = new Model("Ford", "Mustang");
mycar.show();

//---------
// ARROW FUNCTIONS https://www.w3schools.com/REACT/react_es6_arrow.asp
//---------
// OLD SKOOL FUNCTION AND A BUNCH OF ARROW FUNCTIONS FOR DIFFERENT SCENARIOS

const hello = function () {
  return "I'm a traditional function with the function keyword, parentheses for parametres and a return statement";
};

console.log(hello());

const hello0 = () => {
  return "I'm an arrow function, very similar to the above but we swap the word function for an arrow like this: => and move that infront of where we'd declare our parametres in the parentheses";
};

console.log(hello0());

const hello1 = () =>
  "Because I have only one statement I can chin off the curly brackets and the the return keyword";

console.log(hello1());

const hello2 = (val) =>
  "If the function has a parametre it can be passed in parentheses " + val;

console.log(hello2("like so."));

const hello3 = (val) =>
  "Infact if there is only one parametre we can fuck off the parentheses as well " +
  val;

console.log(hello3("like this."));

const hello4 = (val, ue) =>
  "And for the sake of it here's an example with " + val + " " + ue;

console.log(hello4("two", "parametres"));

//---------
// VARIABLES https://www.w3schools.com/REACT/react_es6_variables.asp
//---------

// Nothing too sensational here

//---------
// ARRAY METHOD: MAP https://www.w3schools.com/REACT/react_es6_variables.asp
//---------

// From the w3s site

const myArray = ["apple", "banana", "orange"];

const myList = myArray.map((item) => <p>{item}</p>);

console.log(myList);

// OR stevery pokery as a single function (I tried delcaring the array outside of the function but it didn't work, read more about variables in the link above)

const myList2 = (myArray2) => {
  myArray2 = ["apple", "banana", "orange"];
  myArray2.map((item) =>
    console.log(
      "This is an item of a locally scoped array. This is the item at index " +
        myArray2.indexOf(item) +
        " in the array: " +
        item +
        "."
    )
  );
};

myList2();

//---------
// DESTRUCTURING https://www.w3schools.com/REACT/react_es6_destructuring.asp
//---------

// declare a function with several methods that returns said methods

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

// declare a variable that has all of those returned methods, if you want to skip one then declare it like this:
// const [add,, multiply, divide] = calculate(4, 7);
// Note that I've removed subtract but not the comma letting us know that there is another method but we dont want it (order is important)

const [add, subtract, multiply, divide] = calculate(4, 7);

// Can now use the results of the above methods

console.log("The result of the addition is: " + add);
console.log("The result of the subtraction is: " + subtract);
console.log("The result of the multiplication is: " + multiply);
console.log("The result of the division is: " + divide);

// Using an object inside a function:

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

function myVehicle({ type, color, brand, model }) {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
  const justType = "My " + type + " is " + color + ".";
  console.log(message);
  console.log(justType);
}

myVehicle(vehicleOne);

// Nested objects

const vehicleTwo = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

// Here we access the state object nested inside registration for vehicleTwo

function myVehicleTwo({ model, registration: { state } }) {
  const message = "My " + model + " is registered in " + state + ".";
  console.log(message);
}

myVehicleTwo(vehicleTwo);

//---------
// SPREAD OPERATOR https://www.w3schools.com/REACT/react_es6_spread.asp
//---------

// Combining two arrays

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log("Numbers one is an array with these 3 values: " + numbersOne);
console.log("Numbers two is an array with these 3 values: " + numbersTwo);
console.log(
  "Using the spread operator we can combine these two arrays into one array with the following values: " +
    numbersCombined
);
console.log(
  "and access individual values like the 3rd array value: " +
    numbersCombined[2] +
    " at position 2."
);

// Used in comination with destructuring

const numbers = [1, 2, 3, 4, 5, 6];
// The first array item goes into the first declared variable below, then the second into the second and then the remaining part of the array into the parametre named ...rest with the ... saying that we want the rest of the array after to go in there. Order is important.
const [one, two, ...rest] = numbers;

console.log(
  "We've destructured the array giving us the ability to access the first element here: " +
    one +
    " and the second element here: " +
    two +
    " as their own variables(?) but then lump the rest of the items in the previous array into their own array here: " +
    rest
);

// Combining objects:

const myVehicleCombiningObjects = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicleCombiningObjects = {
  type: "car",
  year: 2021,
  color: "yellow",
};

//note that the update shoud add two more parametres and change the color one that already exists

const myUpdatedVehicleCombiningObjects = {
  ...myVehicleCombiningObjects,
  ...updateMyVehicleCombiningObjects,
};

console.log(myUpdatedVehicleCombiningObjects);

//---------
// REACT ES6 MODULES https://www.w3schools.com/REACT/react_es6_modules.asp
//---------

// Interesting but doesn't need that much exemplification plus I'd have to piss fart around making additional files and stuff that I don't want to do.

//---------
// REACT ES6 MODULES https://www.w3schools.com/REACT/react_es6_modules.asp
//---------

// Realatively chunky if statement
const ifElseExample = (value) => {
  if (value >= 5) {
    console.log("The value is five or greater.");
  } else {
    console.log("The value is less than five.");
  }
};

ifElseExample(5);
console.log("%c If/Else Example Code ", consoleTitleStyling);
console.log(ifElseExample);

// bit more streamlined setting the criteria and then the two results based on whether the criteria is true ? or false :

//---------

// ReactDOM.render(myfirstelement, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

const ternaryExample = (value) => {
  value >= 5
    ? console.log("The value is five or greater.")
    : console.log("The value is less than five.");
};

ternaryExample(3);
console.log("%c Ternary Example Code ", consoleTitleStyling);
console.log(ternaryExample);

const demoFunction = () => {
  const innerFunction = () => {
    console.log("Steve");
    console.log("Steve");
  };
  document.getElementById("demo").innerHTML = demoFunction;
  innerFunction();
};

demoFunction();
