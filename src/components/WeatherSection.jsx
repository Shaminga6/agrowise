import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar1.png";
import { Link, useNavigate } from "react-router-dom";
import clock from "../assets/clock.png";
import dailyIcon1 from "../assets/dailyIcon1.png";
import landImg from "../assets/land.png";
import week1 from "../assets/week1.png";
import week2 from "../assets/week2.png";
import week3 from "../assets/week3.png";
import week4 from "../assets/week4.png";
import week5 from "../assets/week5.png";

import temp1 from "../assets/temp1.png";
import temp2 from "../assets/temp2.png";
import temp3 from "../assets/temp3.png";
import temp4 from "../assets/temp4.png";
import locateIcon from "../assets/locateSVG.svg";
import { appContext } from "../App";
import moment from "moment/moment";

const WeatherSection = () => {
  const navigate = useNavigate();
  const [weather, produceListings ] = useContext(appContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  console.log(produceListings);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const week = [
    ["FRI", week1],
    ["SAT", week2],
    ["MON", week4],
    ["TUES", week5],
    ["SUN", week3],
  ];

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="rounded h-70 chart-card-wrapper location">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={locateIcon}
                alt="location"
                style={{ display: "inline", width: "30px" }}
              />
              <span style={{ fontSize: "17px" }}>
                {weather?.location?.name}
              </span>
            </div>
            <h1 id="weather-type">{weather?.current?.condition?.text}</h1>{" "}
            <br />
            <h1 id="weather-type-sub">
              {Math.round(weather?.current?.temp_c)}&deg;C
            </h1>
            <span>
              {moment().format("dddd")} | {moment().format("ll")}
            </span>
          </div>

          <div
            class="rounded h-70 chart-card-wrapper"
            id="weather-forcast-column"
          >
            <img
              src={weather?.current?.condition?.icon}
              alt="thunder"
              id="weather-forcast-icon"
            />
          </div>
        </div>
      </div>

      <div className="p-4 sm:ml-64 mt-0 ">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div
            class="rounded h-70 chart-card-wrapper daily-cast-column"
            style={{ boxShadow: "unset" }}
          >
            <div className="daily-forcast">
              <div>
                <img
                  src={clock}
                  alt="clock"
                  style={{ display: " inline", marginRight: "10px" }}
                />
                <span>24-hour forecast</span>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-7 gap-4 max-w-6xl w-full">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div key={index} className="p-2  rounded text-center">
                      <span>20 &deg;</span>
                      <img src={dailyIcon1} alt="icon" />
                      <span className="daily-cast">11km</span>
                      <span className="daily-cast">now</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            class="rounded h-100 chart-card-wrapper"
            id="weather-forcast-column2"
          >
            <div className="daily-details">
              <div className="grid grid-cols-5 gap-4 max-w-6xl w-full">
                {week.map((item, index) => (
                  <div key={index} className="p-2  rounded text-center white">
                    <span>{item[0]}</span>
                    <img src={item[1]} alt="icon" />
                  </div>
                ))}
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  color: "#fff",
                }}
              >
                <img
                  src={clock}
                  alt="clock"
                  style={{ display: "inline", marginRight: "10px" }}
                />
                <span>{moment().format("LT")} GMT </span>
              </div>

              <h2 className="mt-4" style={{ color: "#fff" }}>
                Temperature
              </h2>
              <br />

              <div className="temp-wrapper">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={temp3} alt="temperature" id="temp-icon" />
                  <div>
                    <span>Real Feel</span>
                    <br />
                    <span>
                      {Math.round(weather?.current?.feelslike_c)}&deg;
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={temp2} alt="temperature" id="temp-icon" />
                  <div>
                    <span>Wind</span>
                    <br />
                    <span>{Math.round(weather?.current?.wind_kph)}kph</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={temp1} alt="temperature" id="temp-icon" />
                  <div>
                    <span>Chance of rain</span>
                    <br />
                    <span>{weather?.current?.cloud}%</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={temp4} alt="temperature" id="temp-icon" />
                  <div>
                    <span>UV index</span>
                    <br />
                    <span>{weather?.current?.uv}</span>
                  </div>
                </div>
              </div>

              <div className="landImg">
                <img src={landImg} alt="landscape" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSection;
