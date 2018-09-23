import React from "react";

function Person(props) {
  return (
    <li>
      name {props.name}
      jobs {props.jobs}
      age {props.age}
      sportiness {props.sportiness}
    </li>
  );
}
function App() {
  return (
    <div>
      <h1>React Dersi I</h1>
      <ul>
        <Person name="Ugur ARDA " jobs="Polis " age="25 " sportiness="5 " />
        <Person name="Oktay ARDA " jobs="Ogrenci " age="25 " sportiness="5 " />
      </ul>
    </div>
  );
}

export default App;
