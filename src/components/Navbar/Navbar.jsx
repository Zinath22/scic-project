import { Link } from "react-router-dom";


const Navbar = () => {

    const navOptions = <>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/allContest">All Contest</Link></li>
    <li><Link to="/upcomingContest">Upcoming Contest</Link></li>
    </>
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
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* <img src={user.photoURL ? user.photoURL : ''} /> */}
                </div>
              </label>
              <ul tabIndex={0} className="space-y-4 text-blue-400 p-4 menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                {/* <li>{user?.email}</li> */}
                   {/* <Link to={'/dashboard'} ><li>Dashboard</li></Link> */}
                

                {/* <li onClick={handleSignOut}><a>Logout</a></li> */}
              </ul>
            </div>

            </div> 
            
            
         

      </div>
        </>
    );
};

export default Navbar;