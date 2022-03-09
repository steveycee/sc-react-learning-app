// TODO: Update to it shows only one at a time and will cycle based on the menu

import IfElse from "./ifelse";
import AmpersandAmpersand from "./ampersandampersand";
import Ternary from "./ternary";

function Conditionals() {
  return (
    <>
      <h2>Conditionals</h2>
      <mark>
        <ul>
          TODO:{" "}
          <li>
            Update so only one component shows at a time based on the menu
            below.
          </li>
          <li>
            Update all functions so that they are interactive or have
            interactive and simplified versions
          </li>
        </ul>
      </mark>
      <ul role="navigation">
        Placeholder Menu
        <li>If Else</li>
        <li>&&</li>
        <li>Ternary</li>
      </ul>
      <IfElse />
      <AmpersandAmpersand />
      <Ternary />
    </>
  );
}

export default Conditionals;
