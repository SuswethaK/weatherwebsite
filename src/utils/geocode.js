const request = require('postman-request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3Vzd2V0aGFrIiwiYSI6ImNsa2xnaDlobTBtOTYza284cG11czh5djAifQ.5mhoPRaaIiNjf20V-mrGBQ&limit=1'

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Search again.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode

// --------------- INITIAL VERSION ----------------------------

//challenge

//User gives an address like Perioa, Illinois. I need to yse an api to convert the address to Lat/Long -> Next use the weatherstack api to get current weather

//Step 1 : Print the latitude and longitute for LA
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Peoria%Illinois.json?access_token=pk.eyJ1Ijoic3Vzd2V0aGFrIiwiYSI6ImNsa2xnaDlobTBtOTYza284cG11czh5djAifQ.5mhoPRaaIiNjf20V-mrGBQ&limit=1'
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3Vzd2V0aGFrIiwiYSI6ImNsa2xnaDlobTBtOTYza284cG11czh5djAifQ.5mhoPRaaIiNjf20V-mrGBQ&limit=1'

/* request({ url: geocodeURL, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to MapBox API. Check your connectivity')
    }
    else if(response.body.features.length === 0){
        console.log('Cannot find matching results')
    }
    else{
    const latitude = response.body.features[0].center[1]
    const longitute = response.body.features[0].center[0]
    console.log('Latitude: '+latitude)
    console.log('Longitude: '+longitute)
    }})  */
