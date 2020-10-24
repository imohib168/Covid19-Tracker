import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../Api/index'

function Chart() {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData)
        }

        fetchAPI();
    }, [])

    return (
        <div>
            Chart.js
        </div>
    )
}

export default Chart;
