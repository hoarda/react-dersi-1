import React from "react";

const redHeart = <span style={{ color: "red" }}> {"♥"}</span>;

const blackHeart = <span style={{ color: "black" }}> {"♡"}</span>;

export default ({ imo }) => (imo ? redHeart : blackHeart);
