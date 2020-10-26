import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import { fetchCountries } from '../Api'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 50,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function CountryPicker({ handleCountryChange }) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        async function fetchAPI() {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();

    }, [])  

    // console.log(fetchedCountries);

    const classes = useStyles();

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
