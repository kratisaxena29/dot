const express = require('express');

const router = express.Router();
const TestingApi = require("../controller/main")

// Define routes

 router.get('/',TestingApi.testingApi)
 router.post('/cards',TestingApi.cardData)
 router.get('/allcards',TestingApi.getAllCards)
 router.get('/filterbycateogary',TestingApi.getCardsByCategory)

// Export router
module.exports = router;
