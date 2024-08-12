const {CardSchema} = require("../model/card")

const testingApi = async (req,res) => {
    console.log("...hello from 8000 port")
    res.json("hello from 8000 port")


}

const cardData = async(req,res) => {
  const body = req.body
   const data = new CardSchema(body)
   await data.save()
   res.json(data)
}

module.exports = {
    testingApi,
    cardData
}