import UserInfo from "./components/UserInfo";
import UsersInfo from "./components/UsersInfo";

function App() {
  return (
    <div className="container mt-3">
      <UserInfo />

      <UsersInfo userId="234" />
      <UsersInfo userId="345" />
    </div>
  );
}

export default App;
