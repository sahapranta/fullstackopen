import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
const url = "https://studies.cs.helsinki.fi/restcountries/api";
const api_key = import.meta.env.VITE_API_KEY;

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/all`)
      .then((response) =>
        setCountries(response.data.map((c) => c.name.common))
      );
  }, []);

  const showCountry = (name) => {
    axios.get(`${url}/name/${name}`).then((response) => {
      setCountry(response.data);
      loadWeather(response.data.capital[0]);
    });
  };

  const loadWeather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        let data = response.data;
        setCountry((c) => ({
          ...c,
          weather: {
            temp: data.main.temp,
            wind: data.wind.speed,
            icon: data.weather[0]?.icon,
          },
        }));
      });
  };

  const filteredCountries = countries.filter(
    (country) => search && country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        find countries:{" "}
        <input
          type="search"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredCountries.length < 10 ? (
        filteredCountries.map((name, i) => (
          <p key={i}>
            {name} <button onClick={() => showCountry(name)}>show</button>
          </p>
        ))
      ) : (
        <div>Too many matched, specify another filter</div>
      )}

      {country.name && <Country country={country} />}
    </div>
  );
};

export default App;
