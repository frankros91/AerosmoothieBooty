var express = require('express');
var cors = require('cors')
var axios = require('axios');
var app = express();
app.use(cors())

const API_KEY = 'NHzsKq6Ci7LFe8lIDxNqtzMgQjQzeLLriWLx89LWhYEFDIYkOPNKAqpPqL9ets6D';

app.listen(3030, () => {
    console.log('Server started and listening on port 3000')

    app.get('/', async (req, res) => {
        const result = await axios.get(req.query.url, {
            headers: { 'Authorization': 'Bearer ' + API_KEY }
        })
        const reponse = result.data.response ? result.data.response : result.data
        res.status(200).send(reponse)
    })
})