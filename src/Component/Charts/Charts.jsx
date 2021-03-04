import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'

 const Charts = () => {
     const [dailtData, setDailyData] = useState({});

    useEffect(()=>{
        const fetchAPI = async () => {

            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    })

    return (
        <div>
            Charts
        </div>
    )
}
export default Charts