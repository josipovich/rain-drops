import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import moment from 'moment'
import _ from 'lodash'
import {weatherCodeToWeather} from './../lib/utils'
import ForecastItem from './ForecastItem'


const _groupDataByName = (forecast, selectedLegendType) => {
    // used lodash b/c of groupBy, lazy :)
    return _.chain(forecast.list)
        // extend data so we can easier group forecasts
        // and also use that info for styling
        .map(data => {
            const weatherClass = weatherCodeToWeather(data.weather[0].id)
            const selected = selectedLegendType === weatherClass
            const day = moment(data.dt*1000).format('dddd')
            return {weatherClass, day, selected, ...data}
        })
        .groupBy('day')
        // to improve grouping
        .map((data, day) => ({data, day}))
        .value()
} 

const _groupedDataToComponents = (groupedForecast) => {   
    return groupedForecast.map((dayGroup, i) => {
        // change first day str to today 
        const dayName = i === 0 
            ? 'TODAY' 
            : dayGroup.day.substr(0, 3).toUpperCase()
        const forecastsForThatDay = dayGroup.data
            .map((data, i) => {
                return (
                    <ForecastItem             
                        key={i} 
                        data={data} />
                )
            })
        return (
            <div className="forecast-day" key={i}>
                <div className="day-name">{dayName}</div>
                {forecastsForThatDay}
            </div>
        )
    })
}

const ForecastItems = ({data, selectedLegendType}) => {
    const groupedForecasts = _groupDataByName(data, selectedLegendType)
    const forecastItems = _groupedDataToComponents(groupedForecasts)

    return (
        <div className="forecast-items">
            {forecastItems}
        </div>
    )
}

ForecastItems.propTypes = {
      data: PropTypes.any.isRequired
    , selectedLegendType: PropTypes.string.isRequired
}

export default view(ForecastItems)