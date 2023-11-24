import logo from "../assets/logo.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Footer = () => {
  return (
    <div className="footer">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div class=" p-4 col-span-1 text-center">
          <img src={logo} alt="lgo" id="big-logo" />
        </div>
        <div class=" p-4 col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <div class=" p-4">
              <strong>
                <h5 className="mb-5">Quick Links</h5>
              </strong>
              <ul className="quick-link">
                <li>Home</li>
                <li>Crop</li>
                <li>Management</li>
                <li>Market insights</li>
                <li>Community forum</li>
                <li>Weather forcast</li>
                <li>News</li>
              </ul>
            </div>

            <div class=" p-4">
              <strong>
                <h5 className="mb-5">Product Listing</h5>
              </strong>
              <ul className="quick-link">
                <li>Tomatoes</li>
                <li>Mangoes</li>
                <li>Red cherries</li>
                <li>Bananas </li>
                <li>Carrots</li>
              </ul>
            </div>

            <div class=" p-4">
              <strong>
                <h5 className="mb-5">Contact Us</h5>
              </strong>
              <ul className="quick-link">
                <li>Chatbot</li>
                <li>
                  Business inquiry: <br /> <strong>080-459-876-7890</strong>
                </li>
                <li>
                  Customer care: <br /> <strong>080-459-876-7890</strong>
                </li>
              </ul>
            </div>

            <div class=" p-4">
              <strong>
                <h5 className="mb-5">Social</h5>
              </strong>
              <ul className="quick-link" id="social-ul">
                <li>
                  <img src={icon4} alt="icon" />
                </li>
                <li>
                  {" "}
                  <img src={icon3} alt="icon" />
                </li>
                <li>
                  {" "}
                  <img src={icon2} alt="icon" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={icon1} alt="icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
