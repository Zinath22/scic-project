import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
       
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            
        ]
          
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>
    }
  ]);