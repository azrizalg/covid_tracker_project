import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadCountriesTask from "../../tasks/LoadCountriesTask";
import legendItems from "../Utility/MapLegend/LegendItems";

const Covid19Map = () => {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []); //page load we tell it that we track []

  return (
    <div>
      {countries.length === 0 ? ( //no countries? tampilkan loading, have countries? tampilkan map and lejen
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19Map;
