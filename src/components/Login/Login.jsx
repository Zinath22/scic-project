import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
                <div>
      {/* <p className="text-center text-amber-400">{error}</p> */}
      
          
            <div className="lg:w-1/2 w-full  my-10  font-bold mx-auto  py-10 px-12 bg-gradient-to-r from-teal-500 to-purple-300 ">
              <h2 className="text-3xl mb-4 text-center">Login</h2>
              <p className="mb-4 text-center">
                Please Login For Quick Access
              </p>
              <form  onSubmit={handleLogin} className="text-black">
                <div className="mt-5">
                  <input
                    type="email"
                    name="email"
                    required
                    // ref={emailRef}
                    placeholder="Email"
                    className="input border-teal-400 rounded  w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input border-teal-400 rounded  w-full"
                  />
                </div>
                <div className="mt-5"></div>
                <div className="mt-5">
                <button className="w-full  bg-gradient-to-r from-teal-500 to-purple-300 py-3 text-center rounded text-white">Login Now</button>
                  <div className="flex text-sm justify-between items-center mt-5">
                    <p className="mt-2">New To The Website? <Link to={'/register'}><span className="btn-link font-medium text-white">Register</span></Link></p>
                    {/* <p className="btn-link cursor-pointer text-white" >Forgot password?</p> */}
                  </div>
                </div>
              </form>
              <div className="divider">or</div>
              <div className="space-y-3">
              <button onClick={handleGoogleLogin}
                 className=" btn-outline btn w-full bg-gradient-to-r  from-teal-500 to-purple-300  py-3 text-center rounded text-white" >
                    <FaGoogle></FaGoogle>
                  Login In With Googleee</button>
              </div>
            </div>
         
        </div>
        </div>
    );
};

export default Login;