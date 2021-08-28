import LegendItem from "./LegendItem";

var legendItems = [
  new LegendItem(
    "5.000.000+",
    "#007092",
    (cases) => cases > 5_000_000,
    "white"
  ),
  new LegendItem(
    "500,001–5,000,000",
    "#008ebc",
    (cases) => cases > 500_000 && cases < 5_000_001,
    "white"
  ),
  new LegendItem(
    "50.001–500.000",
    "#00ace3",
    (cases) => cases > 50_000 && cases < 500_001,
    "white"
  ),
  new LegendItem(
    "5.001–50.000",
    "#54cbf2",
    (cases) => cases > 5000 && cases < 50_001,
    "white"
  ),

  new LegendItem(
    "1–5,000",
    "#95dcf4",
    (cases) => cases > 0 && cases < 5001,
    "white"
  ),
  new LegendItem(
    "No Data",
    "#ffedc1",
    (cases) => cases < 1 || cases == null,
    "#008ebc"
  ),
];

export default legendItems;

/*
#007092
#008ebc
#00ace3
#54cbf2
#95dcf4
#ffedc1
#ffffff
#b6b6b6
*/
