const express = require('express');
const { mountRoutes } = require('./src/routes');

const app = express();
const port_dev = 3001;

app.use(express.json());

mountRoutes(app);

app.listen(port_dev, () => console.log(`Carshare backend API listening at http://localhost:${port_dev}`));

// Endpoint: Read vehicle by ID
//app.get('/vehicle/:id', (req, res) => {

    


    /*
    client.query('SELECT $1::text as message', ['Hello world!'])
        .then((res) => {
            console.log(res.rows[0].message);
        })
        .then(() => {
            client.end();
        })


    const vehicleReference = db.collection('vehicles').doc(req.params.id);
    vehicleReference.get().then((vehicle) => {
        if (!vehicle.exists){
            res.status(404).send('Vehicle not found');
        }
        else{
            res.json(vehicle);
        }
    });
    */
//});

