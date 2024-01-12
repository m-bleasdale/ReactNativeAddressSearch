const Router = require('express-promise-router');
const axios = require('axios');

const router = new Router();

module.exports = router;

const googleApiKey_dev = 'AIzaSyA5JLcx73Bv6AUO4vrcaY9cd5J7ZMG4wWU'


router.get('/autocompleteAddress', (req, res) => {

    const input = req.query.input;
    const location = req.query.location;
    const radius = 10000;
    const region = 'gb'

    let apiQuery = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&region=${region}&key=${googleApiKey_dev}`;

    if(location){apiQuery += `&location=${location}&radius=${radius}`};

    axios.get(apiQuery).then((response) => {
        if(response.status === 200){
            res.send(response.data);
        }
    });

});

router.get('/geocode/:place_id', (req, res) => {

    const { place_id } = req.params;

    const apiQuery = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=${googleApiKey_dev}`;

    console.log(apiQuery);

    axios.get(apiQuery).then((response) => {
        if(response.status === 200){
            res.send(response.data);
        }
    });

});