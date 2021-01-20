const axios = require('axios')


const getLugarLatLng = async(dir) => {


    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?`,
        params: { 'access_token': 'pk.eyJ1Ijoiamhvbm55LWxhbyIsImEiOiJja2s0dGRuMmMwY2t0Mm9saGFqY3FqcW9uIn0.41kL8Wkq52ci4ayzNJoihw' }
    })

    const resp = await instance.get()


    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.features[0];
    const direccion = data.text;
    const lat = data.geometry.coordinates[1];
    const lng = data.geometry.coordinates[0]

    return {
        direccion,
        lat,
        lng
    }


}
module.exports = {
    getLugarLatLng
}