import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { GiHealthNormal } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { ImTable } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import navLogo from "./nav_logo.png";
import { auto } from "async";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1.9rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },
  acount: {
    marginLeft: "auto",
    "&:hover": {
      background: "purple",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  iconLogo: {
    color: "yellow",
    fontSize: "3rem",
  },
  icons: {
    fontSize: "1.4rem",
  },
  navImage: {
    height: "60px",
    float: "left",
    margin: "0.1em",
  },
  navText: {
    fontSize: "1.5em",
    margin: "0.6em 0 0.5em 0.5em",
    display: "inline-block",
  },
  navContainer: {
    float: "left",
  },
}));

const Navbar = () => {
  //const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  //breakpoint
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography className={classes.navContainer}>
            <img className={classes.navImage} src={navLogo} alt="Logo" />
            {/*<GiHealthNormal className={classes.iconLogo} />{" "}*/}
            <span className={classes.navText}>Dasbor Covid</span>
          </Typography>
          {isMatch ? (
            <DrawerComponent />
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor="secondary"
                value={value}
              >
                <Tab disableRipple label="Home" />

                <Tab icon={<VscGraph />} disableRipple label="Infografik" />

                <Tab icon={<ImTable />} disableRipple label="Tabel Data" />

                <Tab icon={<BiNews />} disableRipple label="Berita" />
              </Tabs>
              <Button variant="contained" color="secondary">
                Profile
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
