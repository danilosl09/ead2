const express = require("express")
const controller = require("../controllers/controllerClient")

const routes = express.Router()

routes.get("/get", controller.getAll)
routes.get("/get/:id", controller.getById)
routes.get("/cidade/:cidade", controller.getByIdCidade)
routes.post("/create", controller.create)
routes.put("/edit/:id", controller.update)
routes.delete("/delete/:id", controller.delete)


module.exports = routes 