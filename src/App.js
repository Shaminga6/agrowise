import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import { createContext, useEffect, useState } from "react";

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
            const apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json";

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
          </Routes>
        </Router>
      </appContext.Provider>
    </div>
  );
}

export default App;