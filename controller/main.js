const {CardSchema} = require("../model/card")

const testingApi = async (req,res) => {
    console.log("...hello from 8000 port")
    res.json("hello from 8000 port")


}

const cardData = async (req, res) => {
    try {
      const body = req.body;
      const data = new CardSchema(body);
      await data.save();
      res.status(201).json({ success: true, data });
    } catch (error) {
      console.error('Error saving card data:', error);
      res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
  };

  const getAllCards = async(req,res) => {
    
    try {
        const cards = await CardSchema.find()
        res.status(201).json({ success: true, cards }); 
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
  }

  const getCardsByCategory = async (req, res) => {
    try {
      const { category } = req.query;
      
      // Check if the category is provided
      if (!category) {
        return res.status(400).json({ success: false, message: 'Category query parameter is required' });
      }
  
      // Fetch cards based on the provided category
      const cards = await CardSchema.find({ category });
  
      // If no cards are found, return a 404 response
      if (cards.length === 0) {
        return res.status(404).json({ success: false, message: 'No cards found for this category' });
      }
  
      res.status(200).json({ success: true, cards });
    } catch (error) {
      console.error('Error fetching cards by category:', error);
      res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
  };
  

module.exports = {
    testingApi,
    cardData ,
    getAllCards,
    getCardsByCategory
}