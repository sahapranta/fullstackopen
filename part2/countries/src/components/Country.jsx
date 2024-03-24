const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {country.languages &&
          Object.values(country.languages).map((language, i) => (
            <li key={i}>{language}</li>
          ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} width={200} />
      <h2>Weather in {country.capital}</h2>
      <p>temperature - {country.weather?.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${country.weather?.icon}@2x.png`}
        alt="weather"
      />
      <p>wind {country?.weather?.wind} m/s</p>
    </>
  );
};

export default Country;
