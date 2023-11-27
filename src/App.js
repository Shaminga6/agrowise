import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import { createContext, useEffect, useState } from "react";
import WeatherForcast from "./pages/WeatherForcast";
import ProduceListings from "./pages/ProduceListings";
import ProduceForm from "./pages/ProduceForm";
// import Forum from "./pages/Forum";
// import CropManage from "./pages/CropManage";
// import Articles from "./pages/Articles";
// import Settings from "./pages/Settings";

export const appContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try to get the user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiUrl =
              "https://weatherapi-com.p.rapidapi.com/forecast.json";


            const response = await fetch(
              `${apiUrl}?q=${latitude},${longitude}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Key":
                    "9585f8a376mshf08929124c822fep1573b4jsnf2b630ebc68b",
                  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
                },
              }
            );

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setWeatherData(data);
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const appState = [weatherData];

  return (
    <div className="App">
      <appContext.Provider value={appState}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/weatherforcast" element={<WeatherForcast />} />
            <Route path="/producelistings" element={<ProduceListings />} />
            <Route path="/produceform" element={<ProduceForm />} />


            {/* <Route path="/cropmanage" element={<CropManage />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/settings" element={<Settings />} /> */}

          </Routes>
        </Router>
      </appContext.Provider>
    </div>
  );
}

export default App;