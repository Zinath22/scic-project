import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => { })
    .catch(error => console.log(error))
}
    const navOptions = 
    <>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/allContest">All Contest</Link></li>
    <li><Link to="/upcomingContest">Upcoming Contest</Link></li>

    {

user ? '' : <li><Link to="login">Login</Link></li>
}
    </>


      {/* <span>{user?.displayName}</span> */}
      // <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
 
  
    return (
        <>
             <div className="navbar  bg-purple-500 max-w-screen-xl mx-auto text-white ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm text-blue-500 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {navOptions}

            </ul>
          </div>
         <img className="w-[80px] rounded-full" src="" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {navOptions}



          </ul>

        </div>


        <div> <div className="dropdown dropdown-end">
              {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               
              </label> */}
              <ul tabIndex={0} className="space-y-4 text-blue-400 p-4 menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                {/* <li>{user?.email}</li> */}
                   {/* <Link to={'/dashboard'} ><li>Dashboard</li></Link> */}
                

                {/* <li onClick={handleSignOut}><a>Logout</a></li> */}
               
              </ul>
            </div>
            <div className="navbar-end">
                    <div className="mr-2">
                       
                    </div>
                    {/* <a className="btn">Button</a> */}
                    {
                        user ? <div className="dropdown dropdown-end mr-5">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">

                                    <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="text-gray-600 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-none w-52">
                                <li>
                                    <a className="justify-between">
                                        {user?.email}

                                    </a>
                                </li>
                                {/* <li><a>Settings</a></li> */}
                                <li onClick={handleLogOut} className="btn mt-4 rounded-none ">Logout</li>
                            </ul>
                        </div>
                            :
                            ''
                    }
                </div>

            </div> 
            
            
         

      </div>
        </>
    );
};

export default Navbar;