import boxIcon from "../assets/boxIcon.png";
import cartIcon from "../assets/cartIcon.png";
import supportIcon from "../assets/supportIcon.png";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

const MissionSection = () => {
  return (
    <>
      <div class="m-0 sm:m-20 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class=" mission-section-wrapper col-span-1  p-4">
          <h3 id="mission-title">Our Mission</h3>
          <p>
            Revolutionize the agricultural sector by empowering farmers with
            cutting-edge technology. We are dedicated to developing a
            sophisticated website that harnesses the power of artificial
            intelligence (AI) to provide farmers with unparalleled support in
            making informed decisions.
          </p>
          <br />

          <p>
            {" "}
            Our commitment is to create a platform that goes beyond conventional
            tools, offering farmers expert advice on crop management, market
            insights, and real-time problem-solving.
          </p>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="col-span-1  pt-4 pb-4 flex justify-between items-center centered">
              <img src={boxIcon} alt="box icon" />
              <span>AI Farm solutions</span>
            </div>

            <div class="col-span-1 pt-4 pb-4 flex justify-around items-center centered">
              <img src={cartIcon} alt="cart icon" />
              <span>Certified products</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1  pt-4 pb-4 flex justify-between items-center">
              <img src={supportIcon} alt="box icon" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>

        <div class="col-span-1  p-4  no-top">
          <div class="grid grid-cols-1 mb-4 gap-4">
            <div class="col-span-1  p-4">
              <img src={img3} alt="img" className="rounded-xl" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1  p-4">
              <img
                src={img2}
                alt="img"
                className="rounded-xl"
                id="top-sm-img"
              />
            </div>
            <div class="col-span-1  p-4">
              <img
                src={img1}
                alt="img"
                className="rounded-xl"
                id="bottom-sm-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionSection;
