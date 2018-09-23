import React from "react";
import Person from "./Person";

function App() {
  return (
    <div>
      <h1>React Dersi I</h1>
      <ul>
        <Person name="Ugur ARDA" />
        <Person jobs="Polis" />
        <Person age="25" />
        <Person spor="5" />
      </ul>
    </div>
  );
}

export default App;
