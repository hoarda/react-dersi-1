import React from "react";

function Heart(props) {
  return props.imo === true ? (
    <span style={{ color: "red" }}> {"♥"}</span>
  ) : (
    <span style={{ color: "black" }}> {"♡"}</span>
  );
  //   if (props.imo) return <span style={{ color: "red" }}> {"♥"}</span>;
  //   else return <span style={{ color: "black" }}> {"♡"}</span>;
}
export default Heart;
