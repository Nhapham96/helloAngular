const express = require("express");

const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));





app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})