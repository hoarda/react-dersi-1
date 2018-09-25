import React from "react";

const redHeard = <span style={{ color: "red" }}> {"♥"}</span>;

const blackHeard = <span style={{ color: "black" }}> {"♡"}</span>;

export default props => (props.imo ? redHeard : blackHeard);
