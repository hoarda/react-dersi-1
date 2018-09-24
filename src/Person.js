import React from "react";
import Person from "./App";

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
        favorite <Heart imo={props.favorite} />
      </p>
    </div>
  );
}
export default Person;
