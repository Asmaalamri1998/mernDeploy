const Pirate = require("../models/client.model")

module.exports.createPirate = (req,res)=>{
    Pirate.create(req.body)
        .then(newPirate => res.json({pirate: newPirate}))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(pirates => response.json(pirates))
        .catch(err => response.json(err))
}

module.exports.getPirate = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}