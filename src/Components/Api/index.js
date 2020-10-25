import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const response = await axios.get(url)

        const modifiedData = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate,
        }

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}


// A bit easier and advanced way to do the same task
// export const fetchData = async () => {
//     try {
//         const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)

//         const modifiedData = { confirmed, recovered, deaths, lastUpdate }
//         return modifiedData;

//         // We can also directly return the data
//         return { confirmed, recovered, deaths, lastUpdate };


//     } catch (error) {
//         console.log(error);
//     }
// }