import { useState, useEffect } from "react";

const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form className="col-6">
      {nameInputError && <p>{nameInputError}</p>}
      <input
        className="form-control mb-2"
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="form-control mb-2"
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        className="form-control mb-2"
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ControlledForm;
