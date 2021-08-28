import papa from "papaparse";
import legendItems from "../components/Utility/MapLegend/LegendItems";
import { features } from "../api/countries.json";

class LoadCountriesTask {
  covid19DataUrl =
    "https://raw.githubusercontent.com/azrizalg/tracker_data/master/map.csv";
  setState = null;
  mapCountries = features;
  load = (setState) => {
    this.setState = setState;
    papa.parse(this.covid19DataUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };
  #processCovidData = (covidCountries) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountry = this.mapCountries[i];
      const covidCountry = covidCountries.find(
        (covidCountry) => covidCountry.iso_code === mapCountry.properties.ISO_A3
      );
      // mapCountry.properties.confirmed = 0;
      // mapCountry.properties.confirmedText = "0";

      // mapCountry.properties.death = 0;
      // mapCountry.properties.deathText = "0";
      if (covidCountry != null) {
        //----jumlah kasus
        const confirmed = covidCountry.total_cases;
        mapCountry.properties.confirmed = confirmed;
        mapCountry.properties.confirmedText =
          this.#formatNumberWithDots(confirmed);
        //---------jumlah kematian
        const death = covidCountry.total_deaths;
        mapCountry.properties.death = death;
        mapCountry.properties.deathText = this.#formatNumberWithDots(death);
        //----negara dengan bahasa Idn
        const idName = covidCountry.lokasi;
        mapCountry.properties.idName = idName;
      }
      this.#setCountryColor(mapCountry);
    }
    this.setState(this.mapCountries);
  };

  #setCountryColor = (mapCountry) => {
    const legendItem = legendItems.find((legendItem) =>
      legendItem.isFor(mapCountry.properties.confirmed)
    );
    if (legendItem != null) {
      mapCountry.properties.color = legendItem.color;
    }
  };
  #formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
}

export default LoadCountriesTask;
