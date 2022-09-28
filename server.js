const cors = require("cors")
const express = require("express");
const axios = require("axios");
const moment = require("moment")

const app = express();

let value = new Date()
let date = moment(value).format("YYYY-MM-DD");

app.use(cors())

app.get("/", async (req, res) => {
  const { data } = await axios(`https://epg-api.video.globo.com/programmes/${1337}?date=${date}`)
  return res.json(data)
});

app.listen('8080');
