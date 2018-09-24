import React from "react";
import { width } from "window-size";
import Person from "./Person";
import Heart from "./Heart";

function App() {
  return (
    <div>
      <h1>React Dersi I</h1>
      <Person
        name="Ugur ARDA"
        jobs="Polis"
        age="25"
        sportiness={5}
        favorite={true}
      />
      <Person
        name="Oktay ARDA"
        jobs="Ogrenci"
        age="22"
        sportiness={3}
        favorite={false}
      />
    </div>
  );
}

export default App;
