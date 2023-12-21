import { Outlet } from "react-router-dom";
import Dashboardnav from "./Dashboardnav";


const Dashboard = () => {
    return (
        <div className="flex">
            <Dashboardnav></Dashboardnav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;