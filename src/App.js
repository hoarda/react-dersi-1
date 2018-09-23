import React from "react";
import { width } from "window-size";

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
    </div>
  );
}

function Stars(props) {
  return (
    <span>
      <span style={{ color: "green" }}>{"★️".repeat(props.number)}</span>
      <span style={{ color: "grey" }}>{"★️".repeat(5 - props.number)}</span>
    </span>
  );
}

function App() {
  return (
    <div>
      <h1>React Dersi I</h1>
      <Person name="Ugur ARDA " jobs="Polis " age="25 " sportiness={5} />
      <Person name="Oktay ARDA " jobs="Ogrenci " age="25 " sportiness={3} />
    </div>
  );
}

export default App;
