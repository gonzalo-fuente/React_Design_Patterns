import UserInfo from "./components/UserInfo";
import { UserInfoForm } from "./components/UserInfoForm";
import { ResourceInfoForm } from "./components/ResourceInfoForm";
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, "234");
const ResorceInfoWithLoader = withUser(UserInfo, "123");

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <UserInfoWithLoader />
          <UserInfoForm />
        </div>
        <div className="col">
          <ResorceInfoWithLoader />
          <ResourceInfoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
