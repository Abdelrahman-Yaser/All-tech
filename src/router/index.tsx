import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Product from "../pages/Product";
import { Layout } from "../Components/layout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />, // Error boundary for Layout and its children
    children: [
      {
        path: "Home", // Relative path
        element: <Home />,
      },
      {
        path: "Product", // Relative path
        element: <Product />,
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
    
      }
    ],
  },
  

]);
