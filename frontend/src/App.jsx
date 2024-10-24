import React, { useState } from "react";
import axios from "axios";

function App() {
  const [character, setCharacter] = useState({
    name: "",
    class: "",
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  const handleChange = (e) => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the character data to the backend
    axios
      .post("http://localhost:3000/characters", character)
      .then((response) => {
        console.log("Character created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating character:", error);
      });
  };

  return (
    <div className="App">
      <h1>Create Your RPG Character</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Character Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="class"
          placeholder="Class (e.g., Fighter, Mage)"
          onChange={handleChange}
        />
        <input
          type="number"
          name="strength"
          placeholder="Strength"
          onChange={handleChange}
        />
        <input
          type="number"
          name="dexterity"
          placeholder="Dexterity"
          onChange={handleChange}
        />
        <input
          type="number"
          name="constitution"
          placeholder="Constituion"
          onChange={handleChange}
        />
        <input
          type="number"
          name="intelligence"
          placeholder="Intelligence"
          onChange={handleChange}
        />
        <input
          type="number"
          name="wisdom"
          placeholder="Wisdom"
          onChange={handleChange}
        />
        <input
          type="number"
          name="charisma"
          placeholder="Charisma"
          onChange={handleChange}
        />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default App;
