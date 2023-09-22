const express = require('express');

const controller = require("../../controllers/client/home.controllers")
const router = express.Router();
router.get(`/`,controller.index)
module.exports =router