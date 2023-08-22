const request = require('postman-request')
const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6895a7268d24ee36eb3df5a54f940f3e&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to WeatheStack location services!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress outside. Chances of you getting drenched in rain are "+body.current.precip+'%')
        }
        })
    }


    
module.exports = forecast

// --------------- INITIAL VERSION ----------------------------
/* const url = 'http://api.weatherstack.com/current?access_key=6895a7268d24ee36eb3df5a54f940f3e&query=40.6938,-89.5891'

 request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to Weather Stack')
    }
    else if(response.body.error){
        console.log('Incomplete Query')
    }
    else{
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. Chances of you getting drenched in rain is "+response.body.current.precip+'%')
}})   */
