import {  FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Dashboardnav = () => {
    return (
        <div>
             <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
                <ul className="menu m-7 ">
                    <Link to={"addTask"}><li className="text-xl">Add task </li></Link>
                   <Link to={'ALltask'}> <li className="text-2xl">All task </li></Link>
                </ul>
               <Link to={'/'}><h2 className=" text-blue-800 text-center p-7"> <FaHome className="text-2xl "></FaHome></h2></Link>
        </div>
        </div>
        </div>
    );
};

export default Dashboardnav;