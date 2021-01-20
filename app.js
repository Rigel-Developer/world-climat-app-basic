const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const place = require('./place/place');
const weather = require('./weather/weather')


const getInfo = async(direccion) => {
    try {
        const coords = await place.getLugarLatLng(direccion)
        const temp = await weather.getWeather(coords.lat, coords.lng)
        console.log(`El clima de ${direccion} es de ${ temp}`)
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }


}

getInfo(argv.direccion)