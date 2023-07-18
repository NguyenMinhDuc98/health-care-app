import { ConfigProvider } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routesObj, routesObjArr } from "./routes/index";
import { utils } from "./utils";
import { configs } from "./configs";

const router = createBrowserRouter(routesObjArr);

function App() {
  const isLoginPage = window.location.pathname === routesObj.login.path;
  if (isLoginPage && utils.getStorage(configs.storage.access_token)) {
    window.location.href = routesObj.home.path;
    return <></>;
  }

  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
