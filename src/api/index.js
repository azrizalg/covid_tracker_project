import { DialogTitle } from "@material-ui/core";
import axios from "axios";
import countryCodes from "../api/country_codes.json";
const dataUrl =
  "https://raw.githubusercontent.com/azrizalg/tracker_data/master/card.json";
const url = "https://covid19.mathdro.id/api";
const timeSeriesUrl =
  "https://covid.ourworldindata.org/data/owid-covid-data.json";
const currentCountry = "OWID_WRL";

export const fetchData = async () => {
  try {
    const {
      data: { date, total_cases, total_deaths, total_vaccinations },
    } = await axios.get(dataUrl);

    return { date, total_cases, total_deaths, total_vaccinations };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    //console.log(data);
    return modifiedData;
  } catch (error) {}
};

export const fetchTimeData = async (country) => {
  let changeableCountryName = currentCountry;
  if (country) {
    changeableCountryName = `${country}`;
  }
  try {
    const mainData = await axios.get(timeSeriesUrl);
    let countryName = changeableCountryName;
    let countryData = mainData.data[countryName].data;
    const finalData = countryData.map((dataPoint) => ({
      //ambil yang pentingnya aja
      total_cases: dataPoint.total_cases,
      total_deaths: dataPoint.total_deaths,
      total_vaccinations: dataPoint.total_vaccinations,
      date: dataPoint.date,
    }));
    return finalData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    //const response = await axios.get(`${url}/countries`);
    const countries = countryCodes;

    const finalCountries = countries.map((country) => ({
      //ambil yang pentingnya aja
      code: country.iso_code,
      location: country.location,
      lokasi: country.lokasi,
    }));
    return finalCountries;
    //return countries.map((country) => country.location);
  } catch (error) {
    console.log(error);
  }
};
