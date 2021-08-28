import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames"; //untuk bisa kasih multiple css class
import styles from "./Cards.module.css";

const Cards = ({
  data: { date, total_cases, total_deaths, total_vaccinations },
}) => {
  if (!total_cases) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Kasus
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={total_cases} duration={2} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toLocaleDateString("id", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body2">
              Total kasus COVID-19 yang terkonfirmasi
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Vaksin
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={total_vaccinations}
                duration={2}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toLocaleDateString("id", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body2">
              Total dosis vaksinasi COVID-19 yang diberikan
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Kematian
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={total_deaths}
                duration={2}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toLocaleDateString("id", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body2">
              Total kematian yang dikaitkan dengan COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
