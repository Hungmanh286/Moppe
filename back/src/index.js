const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express();
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}))
app.use(bodyParser.json())
app.use(cookieParser())


routes(app);

mongoose.connect(`mongodb+srv://nmh:${'VCO4V4mS9jTyXg8c'}@cluster0.vngosc3.mongodb.net/`)
.then(() => {
    console.log('Connect DB success!')
})
.catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log("Server is running in port:", + port);
});

