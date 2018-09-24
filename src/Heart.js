import React from "react";

function Heart(props) {
  if (props.imo) return <span style={{ color: "red" }}> {"♥"}</span>;
  else return <span style={{ color: "black" }}> {"♡"}</span>;
  // return <span style={{ color: "red" }}> {"♥".if(props.imo === true)}</span>;
}
export default Heart;
