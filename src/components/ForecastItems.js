import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import moment from 'moment'
import _ from 'lodash'
import {weatherCodeToWeather} from './../lib/utils'
import ForecastItem from './ForecastItem'


const _groupForecastListByDay = (forecast, selectedLegendType) => {
    // used lodash b/c of groupBy
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
        .map((forecast, day) => ({forecast, day}))
        .value()
} 

const _groupedForecastsToComponents = (groupedForecast) => {   
    return groupedForecast.map((dayGroup, i) => {
        // change first day str to today 
        const dayName = i === 0 
            ? 'TODAY' 
            : dayGroup.day.substr(0, 3).toUpperCase()
        const forecastsForThatDay = dayGroup.forecast
            .map((data, i) => {
                return (
                    <ForecastItem             
                        key={i} 
                        forecast={data} />
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

const ForecastItems = ({forecast, selectedLegendType}) => {
    const groupedForecasts = 
        _groupForecastListByDay(forecast, selectedLegendType)
    const forecastItems = 
        _groupedForecastsToComponents(groupedForecasts)

    return (
        <div className="forecast-items">
            {forecastItems}
        </div>
    )
}

ForecastItems.propTypes = {
      forecast: PropTypes.any.isRequired
    , selectedLegendType: PropTypes.string.isRequired
}

export default view(ForecastItems)