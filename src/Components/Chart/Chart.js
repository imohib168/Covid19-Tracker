import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../Api'

import { Bar } from 'react-chartjs-2';

function Chart() {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }

        console.log(dailyData);
        fetchAPI();
    }, [])

    const BarChart = (
        dailyData[0] ? (
            <Bar
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        backgroundColor: 'rgba(0,99,132,0.2)',
                        borderColor: 'rgba(100,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                    }, {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    return (
        <div>
            {BarChart}
        </div>
    )
}

export default Chart;
