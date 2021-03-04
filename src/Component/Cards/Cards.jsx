import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from "@material-ui/core";

import styles from "./Cards.module.css";
import { LocalDining } from "@material-ui/icons";
import CountUp from "react-countup";
import cx from 'classnames'


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
//   console.log(props);
  if (!confirmed){
      return 'Loading..'
  }
  return (
    <div className={styles.containter}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5"><CountUp end={confirmed.value} separator={','}/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Effected Cases of Covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>

          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography variant="h5"><CountUp end={recovered.value} separator={','}/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Recoveries Cases of Covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>

          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5"><CountUp end={deaths.value} separator={','}/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Deaths Cases of Covid 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
