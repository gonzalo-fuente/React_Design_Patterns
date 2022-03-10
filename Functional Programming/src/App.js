import { BigSuccessButton, DangerButton } from "./components/composition";
import { BigSuccessButton1, DangerButton1 } from "./components/partiallyApply";
import RecursiveComponent from "./components/RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <div className="container mt-3">
      <RecursiveComponent data={nestedObject} />
      <div className="row">
        <div className="col">
          <DangerButton text="Don't do it!" className="me-5" />
          <BigSuccessButton text="Yes!!!" />
        </div>
        <div className="col">
          <DangerButton1 text="Don't do it!" className="me-5" />
          <BigSuccessButton1 text="Yes!!!" />
        </div>
      </div>
    </div>
  );
}

export default App;
