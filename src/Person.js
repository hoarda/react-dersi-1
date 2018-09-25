import React from "react";

import Heart from "./Heart";

function Stars(props) {
  return (
    <span>
      <span style={{ color: "green" }}>{"★️".repeat(props.number)}</span>
      <span style={{ color: "grey" }}>{"★️".repeat(5 - props.number)}</span>
    </span>
  );
}

function Person(props) {
  return (
    <div
      style={{
        border: "solid",
        width: "300px",
        margin: "5px 30px 2px 20px ",
        padding: "5px 5px 5px 5px"
      }}
    >
      <h2 style={{ color: "grey", borderBottom: "solid", width: "300px" }}>
        {props.name}
      </h2>
      <p>jobs {props.jobs}</p>
      <p>age {props.age}</p>
      <p>
        sportiness <Stars number={props.sportiness} />
      </p>
      <p>
        favorite <Heart isActive={props.favorite} />
      </p>
    </div>
  );
}
export default Person;
