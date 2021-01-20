const axios = require('axios')

const getWeather = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${lng}&appid=815429c8151ce50a2735eb28f22a8f30&units=metric`)
    return resp.data.main.temp

}

module.exports = {
    getWeather
}