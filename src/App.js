import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routesObjArr } from "./routes/index";

const router = createBrowserRouter(routesObjArr);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
