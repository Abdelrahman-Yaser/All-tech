import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Product from "../pages/Product";
import { Layout } from "../Components/layout";
import SignIn  from "../pages/SignIn";
import  SignUp  from "../pages/SignUp";

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
        path:"/SignIn",
        element:<SignIn/>
      },
      {
        path:"/SignUp",
        element:<SignUp/>
    
      }
    ],
  },
  

]);
