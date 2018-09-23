import React from "react";

function Person(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>jobs {props.jobs}</p>
      <p>age {props.age}</p>
      <p>
        sportiness <Stars number={props.sportiness} />
      </p>
    </div>
  );
}

function Stars(props) {
  return props.number;
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
