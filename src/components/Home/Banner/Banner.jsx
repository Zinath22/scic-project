import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/isometric-time-management-concept-illustrated_52683-55534.jpg?size=626&ext=jpg&ga=GA1.1.143316131.1694453966&semt=ais)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
      <Link to={"dashboard"}><button className="btn btn-primary">Let’s Explore <FaArrowRight /></button>
      
      </Link>
      {/* <Link to={"/login"}><button>login</button></Link> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;