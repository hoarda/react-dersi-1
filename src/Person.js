import React from "react";

function Person(props) {
  return (
    <li>
      name {props.name}
      jobs {props.jobs}
      age {props.age}
      sportiness {props.sportiness}
    </li>
  );
}
export default Person;
