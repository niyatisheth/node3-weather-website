const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibml5YXRpc2hldGgiLCJhIjoiY2t5NXAxZDVwMG0zaTJub3ltZ3dpcW5wOCJ9.o8E6Y0A_TflrqLOyXrS4pw&limit=1';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services", undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find the location. Try another search", undefined)
        } else {
            console.log(body)
        }
    })
}

module.exports = geoCode;