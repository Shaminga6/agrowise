import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import avatar from "../assets/avatar.png";
import send from "../assets//chat-images/cil_send.png";
import singleLogo from "../assets/chat-images/logo-icon.png";
import LineChart from "../components/LineChart";
import { data1, data2 } from "../components/ChartData";
import { useNavigate } from "react-router";
import { appContext } from "../App";
import wind from "../assets/wind.png";
import wind1 from "../assets/wind1.png";
import presure from "../assets/presure.png";
import humidity from "../assets/humidity.png";

const DashboardSection = () => {
  const navigate = useNavigate();
  const [weather] = useContext(appContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const user = JSON.parse(localStorage.getItem("userData")) || {};

  // -------- Redirect user if logged in -----------------
  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div class="p-4 sm:ml-64 content-section">
        <div class="p-4  rounded-lg">
          {/* ----------- AI Card --------------- */}
          <div class="flex flex-col items-center justify-center h-48 mb-8 AI-card">
            <img src={singleLogo} alt="logo" id="single-logo" />

            <h2 id="AI-text">Hello, {user.first_name}! What's on your mind?</h2>

            <form className="dashB-input-wrapper">
              <input
                type="text"
                id="dashboard-input"
                className="text-white"
                placeholder="Message Agro AI"
              />
              <button>
                <img src={send} alt="send" id="dashboard-send-icon" />
              </button>
            </form>
          </div>

          {/* -------------- Weather card --------------------- */}
          <div class=" h-50 mb-10 rounded  weather-card">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="dashboardTemp-wrapper p-4">
                <span id="dashboardTemp">
                  {weather ? Math.round(weather?.current?.temp_c) : 0}&deg;C
                </span>
              </div>
              <div class=" p-4 sun-div">
                <img
                  src={weather?.current?.condition?.icon}
                  alt="sun"
                  id="day-icon"
                />
                <span id="weather-desc">
                  {weather?.current?.condition?.text}
                </span>
              </div>
              <div class="">
                <div class="flex">
                  <div
                    class="flex-1  p-4 text-center"
                    style={{ color: "#464444" }}
                  >
                    <img src={humidity} alt="" className="dashboard-w-icon" />{" "}
                    <br />
                    <strong>
                      <span>{weather?.current?.humidity}%</span>
                    </strong>
                    <br />
                    <span>Humidity</span>
                  </div>

                  <div
                    class="flex-1  p-4 text-center"
                    style={{ color: "#464444" }}
                  >
                    <img src={wind1} alt="" className="dashboard-w-icon" />{" "}
                    <br />
                    <strong>
                      <span>{weather?.current?.cloud}km/h</span>
                    </strong>
                    <br />
                    <span>Wind Speed</span>
                  </div>
                </div>

                <div class="flex">
                  <div
                    class="flex-1  p-4 text-center"
                    style={{ color: "#464444" }}
                  >
                    <img src={presure} alt="" className="dashboard-w-icon" />{" "}
                    <br />
                    <strong>
                      <span>
                        {Math.round(weather?.current?.pressure_in)}hPa
                      </span>
                    </strong>
                    <br />
                    <span>Pressure</span>
                  </div>

                  <div
                    class="flex-1  p-4 text-center"
                    style={{ color: "#464444" }}
                  >
                    <img src={wind} alt="" className="dashboard-w-icon" />{" "}
                    <br />
                    <strong>
                      <span>{weather?.current?.uv}</span>
                    </strong>
                    <br />
                    <span>UV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------- Market card --------------------- */}
          <h3 className=" mb-20">Market Insights</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="rounded h-70 chart-card-wrapper">
              <div className="chart-card-one flex items-center justify-center">
                <LineChart chartData={data1} />
              </div>
              <br />
              <h4>Production</h4>
              <span>(+15%) increase in today’s production</span>
              <br />
              <br />
              <span>updated 4 min ago</span>
            </div>

            <div class="rounded h-70 chart-card-wrapper">
              <div className="chart-card-two flex items-center justify-center">
                <LineChart chartData={data2} />
              </div>
              <br />
              <h4>Consumption</h4>
              <span>Last Analysis</span>
              <br />
              <br />
              <span>just updated</span>
            </div>
          </div>

          <div class=" h-48 mb-4 rounded">
            <h3 className=" mb-6">Produce Listings</h3>

            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right">
                <thead class="text-xs text-gray-700 uppercase">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Avalaibility
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white table-row">
                    <td class="px-6 py-4">Corn</td>
                    <td class="px-6 py-4">$500 per ton</td>
                    <td class="px-6 py-4">100 tons</td>
                    <td class="px-6 py-4">100 tons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSection;
