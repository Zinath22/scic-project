import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
      <Link to={"dashboard"}><button className="btn btn-primary">Let’s Explore <FaArrowRight /></button>
      
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;