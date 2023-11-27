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

export const appContext = createContext();

function App() {
  const [weather, setWeatherData] = useState(null);
  const [produceListings, setProduceListings] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));

  // ---------- Handle Fetch Produce --------------------
  useEffect(() => {
    const handleFetchProduce = async () => {
      try {
        const res = await (
          await fetch(`https://agrowise-api.vercel.app/api/produce-listings/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token.access}`,
              "Content-Type": "application/json; charset=UTF-8",
            },
          })
        ).json();

        setProduceListings(res?.results);
        localStorage.setItem(JSON.stringify(res.results))
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchProduce();
  }, []);

  // ---------- Handle Weather --------------------
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

  const appState = [weather, produceListings];

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
          </Routes>
        </Router>
      </appContext.Provider>
    </div>
  );
}

export default App;
