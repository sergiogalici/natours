const mongoose = require("mongoose")

const toursSchema = new mongoose.Schema({
    name: {
     type: String,
     required: [true, "A tour must have a name"],
     unique: [true, "Name is already in use"]
    },
    duration: {
        type: Number,
        required: [true, "A tour must have a duration"]
    },
    rating: {
     type: Number,
     default: 0
    },
    price: {
     type: Number,
     required: [true, "A tour must have a price"]
    }
 })
 
 const Tour = mongoose.model("Tour", toursSchema)

 module.exports = Tour