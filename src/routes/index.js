import AuthLayout from "../components/Layout/AuthLayout";
import Login from "../pages/Login";
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
