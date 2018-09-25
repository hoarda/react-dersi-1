import React from "react";
import Heart from "./Heart";
import Stars from "./Stars";

function Person(props) {
  return (
    <div
      style={{
        border: "solid",
        width: "300px",
        margin: "5px 20px 2px 20px ",
        padding: "5px 5px 5px 5px"
      }}
    >
      <h2
        style={{
          color: "black",
          borderBottom: "solid",
          width: "310px",
          margin: "-5px"
        }}
      >
        <h3 style={{ color: "grey", padding: "5px" }}>{props.name}</h3>
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
