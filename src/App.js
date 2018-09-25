import React from "react";
import Person from "./Person";
import Heart from "./Heart";
import Stars from "./Stars";

function App() {
  return (
    <div>
      <h1>Component gallery</h1>
      <h2>Heart Component</h2>
      <Heart isActive={true} />
      <Heart isActive={false} />
      <hr />
      <h2>Stars Component</h2>
      <Stars number={3} />
      <br />
      <Stars number={5} />
      <br />
      <Stars number={0} />
      <hr />
      <h2>Person Component</h2>
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
      <hr />
    </div>
  );
}

export default App;
