import axios from "axios";
import UserLoader from "./components/containers/UserLoader";
import UserInfo from "./components/presentational/UserInfo";
import ProductInfo from "./components/presentational/ProductInfo";
import ResourceLoader from "./components/containers/ResourceLoader";
import DataSource from "./components/containers/DataSource";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <div className="container mt-3">
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>

      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </div>
  );
}

export default App;
