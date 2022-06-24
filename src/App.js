//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import axios from "axios";
import { useState, useEffect } from "react";
import { usePosition } from 'use-position';
import HavaDurumu from "./components/HavaDurumu";



const App = () => {
    const [weatherData, setWeatherData] = useState();
    const { latitude, longitude } = usePosition();
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    const getWeatherData = async (lat, lon) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`);
            setWeatherData(data);
        } catch {
            alert("Veri alinirken bir hata olustu");
        }
    }
    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]);



    return (
        <div>
            <HavaDurumu weatherData={weatherData} />
            {/* {weatherData && <HavaDurumu  weatherData={weatherData} />} */}
            {/* {weatherData ? <HavaDurumu  weatherData={weatherData} /> : <div>Loading...</div>} */}

        </div>
    )
}
export default App;