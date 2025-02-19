const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
    {
        title: String, 
        director: String, 
        stars: [String], 
        image: String, 
        description: String, 
        showtimes: [String]
    }, 
    {timestamps: true}
)

const model = mongoose.model("Movies", movieSchema)

module.exports = model;