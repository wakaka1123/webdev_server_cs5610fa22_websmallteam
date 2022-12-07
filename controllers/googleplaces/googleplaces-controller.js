import axios from "axios";

const SEARCH_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
    + '?fields=all'
    + '&inputtype=textquery'
    + '&key=AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk'
    + '&input='

const PLACE_PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo'
    + '?maxwidth=400'
    + '&key=AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk'
    + '&photo_reference='

const DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json'
    + '?fields=all\n'
    + '&key=AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk'
    + '&place_id='

const GooglePlacesController = (app) => {

  const findPlaceBySearchTerm = async (req, res) => {
    const name = req.params.name
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    const place = await axios.get(`${SEARCH_URL}${name}`)
    res.json(place.data)
  }

  const findPlacePhotoByReference = async (req, res) => {
    const reference = req.params.reference
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    const placePhoto = await axios.get(`${PLACE_PHOTO_URL}${reference}`)
    res.json(placePhoto.data)
  }

  const findPlaceByPlaceId = async (req, res) => {
    const placeid = req.params.placeid
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    const details = await axios.get(`${DETAILS_URL}${placeid}`)
    res.json(details.data)
  }

  app.get('/place/:name', findPlaceBySearchTerm)
  app.get('/place/photo/:reference', findPlacePhotoByReference)
  app.get('/place/details/:placeid', findPlaceByPlaceId)
}

export default GooglePlacesController;