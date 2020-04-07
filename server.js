const express = require('express');

const app = express();

app.use(express.static('./dist/fusionChartsDemo'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/fusionChartsDemo/' }),
);

app.listen(process.env.PORT || 8080);