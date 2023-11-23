import MySVGComponent from "../components/MySVGComponent";
import cropImg from "../assets/cropImg.png";

const Banner = () => {
  return (
    <>
      <div className="relative banner-wrapper">
        <div className="banner-white-layer">
          <MySVGComponent />

          <div className="content-div">
            <h1 id="banner-title">Welcome To AgroWise</h1>
            <img src={cropImg} alt="" id="cropImg" />
          </div>

          <div className="description-div">
            <p>
              {" "}
              A dynamic platform dedicated to ensuring that every farmer is
              equipped with the knowledge needed to thrive in the ever-evolving
              agricultural sector.
            </p>
          </div>

          <div className="banner-btn-wrapper">
            <button className="banner-btn">Get Started</button>
            <button className="banner-btn" id="banner-login-btn">
              Login
            </button>
          </div>
        </div>

        {/* =========== Mobile================ */}
        <div className="mobile-display-data">
          <h1 id="banner-title-mobile">Welcome To AgroWise</h1>

          <p id="banner-desc-mobile">
            A dynamic platform dedicated to ensuring that every farmer is
            equipped with the knowledge needed to thrive in the ever-evolving
            agricultural sector.
          </p>

          <div className="banner-mobile-btn">
            <button className="banner-btn" id="mobile-signup-btn">
              Get Started
            </button>
            <button className="banner-btn" id="banner-login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
