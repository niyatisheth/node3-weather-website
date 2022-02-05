const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Las%20Vegas.json?access_token=pk.eyJ1Ijoibml5YXRpc2hldGgiLCJhIjoiY2t5NXAxZDVwMG0zaTJub3ltZ3dpcW5wOCJ9.o8E6Y0A_TflrqLOyXrS4pw&query=' + latitude + ',' + longitude + '&units=f'

    const url = 'http://api.weatherstack.com/current?access_key=792b41edde33a590a301b4d8f338a1f7&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
        }
    })
}

module.exports = forecast;