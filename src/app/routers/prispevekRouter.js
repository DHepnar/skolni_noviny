const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'prispevekController.js'))

router.get('/detail', )

module.exports = router;