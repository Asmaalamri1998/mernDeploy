const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "the name is required"],
        
    },
    image:{
        type: String,
        required: [true, "the image URL is required"],
        
    },
    treasure:{
        type: Number,
        required: [true, "the number of treasure is required"],
    },
    phrases:{
        type: String,
        required: [true, "the phrases is required"],
    },
    position:{
        type: String,
        required: [true, "the position is required"],
    },
    pegleg:{
        type: Boolean,
        default: true,
        required: [true, "the eye patch is required"]
       
    },
    eyepacth:{
        type: Boolean,
        default: true,
        required: [true, "the eye patch is required"]
       
    },
    hookhand:{
        type: Boolean,
        default: true,
        required: [true, "the  hand hook is required"]
       
    }

}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema)

module.exports = Pirate;