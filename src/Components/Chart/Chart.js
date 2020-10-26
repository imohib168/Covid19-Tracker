import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../Api'
import { Line, Bar } from 'react-chartjs-2';

function Chart({ data: {confirmed, recovered, deaths} , country }) {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        // console.log(dailyData);

        fetchAPI();
    }, [])

    const LineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        // backgroundColor: 'blue',
                        borderColor: 'blue',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        // backgroundColor: 'red',
                        borderColor: 'red',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        // backgroundColor: 'green',
                        borderColor: 'green',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    const BarChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            label: "People",
                            backgroundColor: [
                                'blue',
                                'green',
                                'red',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: {display: true, text: `Current State in ${country}`}
                    }}
                />
            ) : null
    )

    return (
        <div>
            {country ? BarChart : LineChart }
        </div>
    )
}

export default Chart;
