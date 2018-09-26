import React from "react";
import Person from "./Person";
import Heart from "./Heart";
import Stars from "./Stars";

function GalleryItem(props) {
  return (
    <div>
      <h2>{props.name} Component</h2>
      {props.children}
      <hr />
    </div>
  );
}

function App() {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <h1>Component gallery</h1>

      <GalleryItem name="Heart!">
        <Heart isActive={true} />
        <Heart isActive={false} />
      </GalleryItem>

      <GalleryItem name="Stars">
        <Stars number={3} />
        <br />
        <Stars number={5} />
        <br />
        <Stars number={0} />
      </GalleryItem>

      <GalleryItem name="Person">
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
      </GalleryItem>
    </div>
  );
}

export default App;
