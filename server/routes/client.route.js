const ClientController = require("../controllers/client.controller")

module.exports= app=>{
    app.post("/api/pirates/new", ClientController.createPirate);
    app.get("/api/pirates", ClientController.getAllPirates);
    app.get('/api/pirates/:id', ClientController.getPirate);
    app.delete('/api/pirates/:id', ClientController.deletePirate);
}