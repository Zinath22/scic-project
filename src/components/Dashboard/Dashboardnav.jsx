import { Link } from "react-router-dom";


const Dashboardnav = () => {
    return (
        <div>
             <div className="flex">
            <div className="w-64 min-h-screen bg-teal-500">
                <ul className="menu m-7 ">
                    <Link to={"addTask"}><li className="text-2xl">Add task</li></Link>
                    <li className="text-2xl">All task</li>
                </ul>
        </div>
        </div>
        </div>
    );
};

export default Dashboardnav;