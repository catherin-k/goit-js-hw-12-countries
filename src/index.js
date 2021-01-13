import css from "./css/styles.css";
import fetchCountries from "./js/fetchCountries.js";
import refs from "./js/refs.js";
import countriesList from "./templates/countries-list.hbs";
import oneCountryInfo from "./templates/one-country.hbs";
import debounce from "lodash/debounce";

console.log(fetchCountries);
const { input, articles } = refs;
input.addEventListener("input", debounce(onInputChange, 500));

function onInputChange(e) {
  //
  fetchCountries(e.target.value).then((data) => {
    console.log(data);
    if (data.length === 1) {
      buildCountryMarkup(articles, data);
    }
    if (data.length > 1) {
      buildList(articles, data);
    }
  });
}

function buildCountryMarkup(place, country) {
  place.insertAdjacentHTML("beforeend", oneCountryInfo(country));
}

function buildList(place, countries) {
  place.insertAdjacentHTML("beforeend", countriesList(countries));
}
