import React from "react";

const redHeart = <span style={{ color: "red" }}> {"♥"}</span>;

const blackHeart = <span style={{ color: "black" }}> {"♡"}</span>;

export default props => (props.imo ? redHeart : blackHeart);
