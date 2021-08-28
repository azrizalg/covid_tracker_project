import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Cards,
  Chart,
  CountryPicker,
  HChart,
  Navbar,
  Covid19Map,
} from "./components";
import styles from "./App.module.css";
import { fetchData, fetchTimeData } from "./api";

import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Utility/theme";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchTimeData(country);
    console.log(fetchedData);
    this.setState({ country: fetchedData });

    //set state
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Covid19Map />
          <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart country={country} />
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
