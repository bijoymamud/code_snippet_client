import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../Layout/Main"
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
        
    },

    {
      path: "login",
      element:<Login/>
    },
    {
      path: "registration",
      element: <Registration/>
    }
  ]);