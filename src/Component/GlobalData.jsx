import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CountUp from 'react-countup';

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
  const [covidData, setCovidData] = useState()

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await fetch(
        "https://covid-19-data.p.rapidapi.com/country?name=Pakistan",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "ebe4bc8015msh4148955c1dd0f12p163841jsnaa1e22e1a37b",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          },
        }
      );
      
      console.log(apiResponse);
      const resp = await apiResponse.json();
      setCovidData(resp);
    
    }
    fetchData();
  },[]);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classTypography.root}>
          Confirmed
          <Typography variant="h4" component="h2" gutterBottom>
              {covidData && 
            <CountUp separator={','} end={covidData[0].confirmed} />}

          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        Recovered
        <Typography variant="h4" component="h2" gutterBottom>
            {covidData && 
            <CountUp separator={','} end={covidData[0].recovered} />}

        </Typography>
      </Paper>
      <Paper elevation={3}>
        Critical
        <Typography variant="h4" component="h2" gutterBottom>
            {covidData && 
            <CountUp separator={','} end={covidData[0].critical} />}

        </Typography>
      </Paper>
      <Paper elevation={3}>
        Deaths
        <Typography variant="h4" component="h2" gutterBottom>
            {covidData && 
            <CountUp separator={','} end={covidData[0].deaths} />}

        </Typography>
      </Paper>
    </div>
  );
}
