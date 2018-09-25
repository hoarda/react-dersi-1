import React from "react";

function Stars(props) {
  return (
    <span>
      <span style={{ color: "green" }}>{"★️".repeat(props.number)}</span>
      <span style={{ color: "grey" }}>{"★️".repeat(5 - props.number)}</span>
    </span>
  );
}
export default Stars;
