const HavaDurumu = ({ weatherData }) => {

    if (!weatherData) {

        return (
            <div className="container d-flex justify-content-center">
                <div className="spinner-border" style={{width: "10rem", height: "10rem"}} role="status">
                    <span  className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="text-center">
            <h1>Hava Durumu</h1>
            <h3>{weatherData.name}</h3>
            <h4>{weatherData.weather.map(data => data.description).join(",")}</h4>
            <p>{weatherData.main.temp} °C</p>
            <p>{new Date(weatherData.dt * 1000).toLocaleDateString()}</p>
          
        </div>
    )
}

export default HavaDurumu;