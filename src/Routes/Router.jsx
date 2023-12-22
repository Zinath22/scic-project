import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import AddTask from "../components/Dashboard/AddTask/AddTask";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllTask from "../components/AllTask/AllTask";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
       
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
            
        ]
          
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/addTask",
                element: <AddTask></AddTask>
            },
            {
                path: '/dashboard/Alltask',
                element: <AllTask></AllTask>
            }
        ]
    }
  ]);