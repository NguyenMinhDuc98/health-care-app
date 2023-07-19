import AuthLayout from "../components/Layout/AuthLayout";
import ColumnPage from "../pages/ColumnPage";
import Login from "../pages/Login";
import MyRecord from "../pages/MyRecord";
import TopPage from "../pages/TopPage";
import { utils } from "../utils";
import ProtectedRoute from "./ProtectedRoute";

export const routesObj = {
  home: {
    path: "/",
    element: (
      <ProtectedRoute>
        <TopPage />
      </ProtectedRoute>
    ),
  },
  myRecord: {
    path: "/my-record",
    element: (
      <ProtectedRoute>
        <MyRecord />
      </ProtectedRoute>
    ),
  },
  columnPage: {
    path: "/column-page",
    element: <ColumnPage />,
  },
  login: {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
};

export const routesObjArr = utils.convertObjToArr(routesObj);
