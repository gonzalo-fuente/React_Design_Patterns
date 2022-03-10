import React from "react";

const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    e.preventDefault();
  };

  return (
    <form className="col-6" onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        name="name"
        type="text"
        placeholder="Name"
        ref={nameInput}
      />
      <input
        className="form-control mb-2"
        name="age"
        type="number"
        placeholder="Age"
        ref={ageInput}
      />
      <input
        className="form-control mb-2"
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input className="btn btn-secondary" type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
