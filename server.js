const express = require('express');
const app = express();
const port = 3000;

let weatherData = {
    weather: 'NORMAL',
    seeds: '-',
    timestamp: Date.now()
};

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res) => {
    const { weather, seeds } = req.body;
    if (weather) {
        weatherData.weather = weather;
        weatherData.seeds = seeds || '-';
        weatherData.timestamp = Date.now();
        console.log(`UPDATE: ${weather}, ${seeds}`);
        res.send('OK');
    } else {
        res.status(400).send('Invalid data');
    }
});

app.get('/weather', (req, res) => {
    res.json(weatherData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
