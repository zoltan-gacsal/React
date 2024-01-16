import "./Display.css";
import { useEffect, useState } from "react";
import { dataRequest } from "./CountrySlice";
import { useDispatch, useSelector } from "react-redux";
import { cityRequest } from "./CitySlice";

const Display = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state) => state.countries);
  const cityState = useSelector((state) => state.city);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showCity, setShowCity] = useState(true);
  const [citySelected, setCitySelected] = useState(null);

  useEffect(() => {
    dispatch(dataRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCountry) {
      dispatch(cityRequest(selectedCountry)); //ha van kiválasztva ország.. indul a redux action...
    }
  }, [dispatch, selectedCountry]);


  const inputChange = (e) => {
    const value = e.target.value;             //beirt városnév lekövetése...
    setCity(value);                           //városnév letárolás...

    if (value.trim() === "") {
      setFilteredCities([]);                  //kiüríti a tömböt amikor nincs semmi a beviteli mezőben...

    } else {

      const filtered = cityState.list.filter((city) => city.name.toLowerCase().includes(value.toLowerCase()) );  //leszüröm a városneveket karakterek alapján...

      setFilteredCities(filtered);            //szűrt városok listája beállítva...
      setShowCity(true);                      //városnevek láthatósága...
    }
  };

  //ország és város kiválasztó függvények_______________________________________________

  const handleCountryChange = (selectedCountryId) => {
    setSelectedCountry(selectedCountryId);
    setCity("");                           // ország váltásnál kiürül a city...
    setFilteredCities([]);                 // ország váltásnál a szűrés törlődik...
 
  };

  const handleClickCity = (city) => {
    setCity(city.name);                     // igy kerül be a mezőbe a kiválasztott város neve ...
    setCitySelected(city.id);               // a kiválasztott város tárolása id azonosító alapján...
    setFilteredCities([]);                  // ország váltásnál a szűrés törlődik...
    
  };

  return (
    <div className=" kontener ">
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Hogy hívnak?"
          />
        </div>
        <div className="col-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email címed?"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="country" className="form-label">
            Lakhely (Ország)
          </label>

          <select
            name="country"
            className="form-control"
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {countryState.status === "Ready" &&
              countryState.list.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="col">
          <label htmlFor="city" className="form-label">
            Város
          </label>
          <input
            type="text"
            className="form-control"
            onChange={inputChange}
            value={city}
          />
          <ul>
            {filteredCities.map((city) => (
              <li
                key={city.id}
                onClick={() => handleClickCity(city)}
                style={{
                  display:
                    showCity && city.id !== citySelected ? "block" : "none",
                }}
              >
                {city.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="phone" className="form-label">
            Telefonszám
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Csak számjegyeket adj meg."
          />
        </div>
        <div className="col">
          <label htmlFor="birthday" className="form-label">
            Születési dátum
          </label>
          <input type="date" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="password" className="form-label">
            Jelszó
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Jelszavad"
          />
        </div>
        <div className="col">
          <label htmlFor="passwordConfirm" className="form-label">
            Jelszó ismét
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Jelszavad ismét"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="form-check d-flex ">
          <input type="radio" className="form-check-input" name="gender" />
          <label htmlFor="man" className="form-check-label checkbox">
            Férfi
          </label>
        </div>
        <div className="form-check d-flex">
          <input type="radio" className="form-check-input" name="gender" />
          <label htmlFor="woman" className="form-check-label checkbox">
            Nő
          </label>
        </div>
        <div className="form-check d-flex">
          <input type="radio" className="form-check-input" name="gender" />
          <label htmlFor="other" className="form-check-label checkbox">
            Egyéb
          </label>
        </div>
      </div>

      <div className="row mb3">
        <div className="form-check d-flex ">
          <input type="checkbox" className="form-check-input" />
          <label htmlFor="accepted" className="form-check-label checkbox">
            A felhasználási feltéteket elfogadom!
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <button type="button" className="btn btn-primary d-block my-auto">
          Regisztráció
        </button>
        <p className="text-center mt-3">
          <a href="#">Elfelejtetted jelszavad?</a>
        </p>
      </div>
    </div>
  );
};

export default Display;
