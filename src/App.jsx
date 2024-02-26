import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import PrivateRoutes from "./PrivateRoute";
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoutes>
        <Home/>
      </PrivateRoutes>
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path: "/register",
      element:<Register/>
    },
    {
      path: "/reset",
      element:<Reset/>
    }
  ]);

  return <RouterProvider router={router} />
  
}

export default App