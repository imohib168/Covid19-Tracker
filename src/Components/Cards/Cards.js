import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css';


// 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {

    if (!confirmed && !recovered && !deaths && !lastUpdate) {
        return <div>Loading....</div>
    }
    // console.log(props);
    return (
        <div className={styles.container}>

            <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.card, styles.infected)}>
                    <CardContent className={styles.CardContent}>
                        <Typography color="textSecondary" className={styles.head}>
                            <h1>
                                Infected
                            </h1>
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            <h3>{new Date(lastUpdate).toDateString()}</h3>
                        </Typography>
                        <Typography variant="body2" component="p" className={styles.p}>Number of Active Cases of Covid 19</Typography>
                    </CardContent>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className={styles.head}>
                            <h1>
                                Recovered
                            </h1>
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={recovered.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2" component="p" className={styles.p}>Number of Recovered Cases of Covid 19</Typography>
                    </CardContent>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Paper className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className={styles.head}>
                            <h1>
                                Deaths
                            </h1>
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={deaths.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2" component="p" className={styles.p}>Number of Deaths Coused by Covid 19</Typography>
                    </CardContent>
                </Paper>
            </Grid>
        </div>
    )
}


export default Cards;