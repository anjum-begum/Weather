import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {

const apiKey = "e9e7d180dadcc147eecff6dd55387e46"
const [inputCity, setInputCity] = useState("")
const [data, setData] = useState({})


const getWeatherDetails = (cityName) => {
  if (!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res) => {
  console.log("response", res.data)
  setData(res.data)
  }).catch((err) => {
   console.log("err", err)
  })
}

const handleChangeInput= (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
    getWeatherDetails(inputCity)
}


  return (
   <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">weather App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className="form-control"
       onChange={handleChangeInput} />
      <button className="btn btn-primary" type="button"
      onClick={handleSearch}
      >Search</button>
      </div>
      </div>

{Object.keys(data).length > 0 &&
      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded weatherResultBox">

          <img className="weatherIcon" 
          src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" />
           
           <h5 className="weatherCity">{data?.name}</h5>
           <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
}

      </div>
  );
}

export default App;
