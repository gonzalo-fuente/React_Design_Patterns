import { useState } from "react";
import UncontrolledForm from "./components/uncontrolled/UncontrolledForm";
import ControlledForm from "./components/controlled/ControlledForm";
import UncontrolledModal from "./components/uncontrolled/UncontrolledModal";
import ControlledModal from "./components/controlled/ControlledModal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <div className="container mt-3">
      <h1 className="mt-3 mb-2">Uncontrolled Form</h1>
      <UncontrolledForm />

      <h1 className="mt-3 mb-2">Controlled Form</h1>
      <ControlledForm />

      <h1 className="mt-3 mb-2">Uncontrolled Modal</h1>
      <UncontrolledModal />

      <h1 className="mt-3 mb-2">Controlled Modal</h1>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button
        className="btn btn-primary"
        onClick={() => setShouldShowModal(!shouldShowModal)}
      >
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </div>
  );
}

export default App;
