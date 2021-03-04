import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: "100%",
    //   maxWidth: 500,
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classTypography = useStylesTypography();
  const [covidData, setCovidData] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch("https://covid19.mathdro.id/api/")
        .then((response) => response.json())
        .then((data) => 
        {
            console.log(data)
              setCovidData(data);
        });

    }
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classTypography.root}>
          Confirmed
          <Typography variant="h4" component="h2" gutterBottom>
            {covidData && 
            <CountUp separator={','} end={covidData.confirmed.value} />}
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        Recovered
        <Typography variant="h4" component="h2" gutterBottom>
          {covidData && 
            <CountUp separator={','} end={covidData.recovered.value} />}
        </Typography>
      </Paper>
      <Paper elevation={3}>
        Deaths
        <Typography variant="h4" component="h2" gutterBottom>
          {covidData && 
            <CountUp separator={','} end={covidData.deaths.value} />}
        </Typography>
      </Paper>
    </div>
  );
}
